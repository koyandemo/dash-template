// import { withAuth } from 'next-auth/middleware';
// import { NextResponse } from 'next/server';

// export default withAuth(function middleware(req) {
//   if (!req.nextauth.token) {
//     const url = req.nextUrl.clone();
//     url.pathname = '/sign-in';
//     return NextResponse.rewrite(url);
//   }
//   return NextResponse.next();
// });

// export const config = {
//   matcher: ['/', '/my-cards', '/lead-collections', '/settings'],
// };

export { default } from 'next-auth/middleware';
export const config = {
  matcher: [
    '/',
    '/my-cards/:path*',
    '/lead-collections/:path*',
    '/settings/:path*',
  ],
};
