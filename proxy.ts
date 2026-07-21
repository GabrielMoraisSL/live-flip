import { auth } from '@/auth';
import { ValuesEnums } from './enums/values';

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const tokenExpired = req.auth?.error === 'TokenExpiredError';
  const { pathname } = req.nextUrl;

  const isProtectedRoute =
    pathname.startsWith('/conquistas') ||
    pathname.startsWith('/perfil') ||
    pathname === '/' ||
    pathname === '';

  if (isProtectedRoute && (!isLoggedIn || tokenExpired)) {
    const loginUrl = new URL(ValuesEnums.Routes.Login, req.nextUrl);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return Response.redirect(loginUrl);
  }
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|login).*)'],
};
