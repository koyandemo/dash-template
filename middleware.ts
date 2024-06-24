export { default } from 'next-auth/middleware';
export const config = {
  matcher: [
    '/',
    '/my-cards/:path*',
    '/lead-collections/:path*',
    '/settings/:path*',
  ],
};
