import { logInUser, signInUser } from '@/@pi/authApi';
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
        console.log(user, 'login');
        return user;
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile, user }) {
      if (account && account.provider === 'google' && profile) {
        const res = await signInUser(profile);
        console.log(res, 'signIn');
        user.id = res.user.id.toString();
        user.token = res.token;
        return true;
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        console.log(user, 'jwt');
        token.user = user;
      }
      return Promise.resolve(token);
    },

    async session({ session, token }) {
      session.user = token.user;
      //   console.log(session, 'session');
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
