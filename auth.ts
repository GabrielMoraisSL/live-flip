import { jwtDecode } from 'jwt-decode';
import ms from 'ms';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authService } from './services/autenticacao';
import { ValuesEnums } from './enums/values';

interface DecodedToken {
  sub: string;
  nome: string;
  email: string;
  iat: number;
  exp: number;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        identificador: { label: 'Email ou Nome', type: 'text' },
        senha: { label: 'Senha', type: 'password' },
      },
      authorize: async (credentials) => {
        const identificador = String(credentials?.identificador ?? '');
        const senha = String(credentials?.senha ?? '');

        if (!identificador || !senha) return null;

        const data = await authService.login({ identificador, senha });

        if (!data) return null;

        try {
          const decoded = jwtDecode<DecodedToken>(data.token);

          return {
            id: decoded.sub,
            name: decoded.nome,
            email: decoded.email,
            accessToken: data.token,
            expiresIn: data.expiresIn,
          };
        } catch {
          return null;
        }
      },
    }),
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.id = user.id;

        const durationMs = ms(user.expiresIn as ms.StringValue);

        if (!durationMs) {
          token.error = 'InvalidExpiresInFormat';
          return token;
        }

        token.accessTokenExpires = Date.now() + durationMs;
        return token;
      }

      if (Date.now() < (token.accessTokenExpires as number)) {
        return token;
      }

      token.error = 'TokenExpiredError';
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.user.id = token.id as string;
      session.error = token.error as string | undefined;
      return session;
    },
  },
  pages: {
    signIn: ValuesEnums.Routes.Login,
  },
});
