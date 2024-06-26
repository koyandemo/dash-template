import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      status: string;
      token: string;
    };
  }
  interface User {
    id: string;
    name: string;
    email: string;
    status: string;
    token: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: {
      id: string;
      name: string;
      email: string;
      status: string;
      token: string;
    };
  }
}
