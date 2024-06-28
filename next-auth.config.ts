import { logInUser } from '@/@pi/authApi';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        name: {},
        email: {},
        request_id: {},
      },
      async authorize(credentials) {
        const user = await logInUser(credentials);
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        console.log(user, 'jwt');
        token.user = user;
      }
      return Promise.resolve(token);
    },

    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/sign-in',
  },
};
