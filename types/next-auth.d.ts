import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    accessToken: string;
    error?: string;
    user: {
      id: string;
    } & DefaultSession['user'];
  }

  interface User {
    accessToken: string;
    expiresIn: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string;
    id: string;
    accessTokenExpires: number;
    error?: string;
  }
}
