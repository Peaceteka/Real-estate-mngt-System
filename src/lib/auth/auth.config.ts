import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';
import { compare } from 'bcrypt';

const prisma = new PrismaClient();

type ExtendedUser = {
  id: string;
  email: string;
  name: string;
  role: string;
};

declare module 'next-auth' {
  interface User extends ExtendedUser {}
  interface Session {
    user: ExtendedUser;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends ExtendedUser {}
}

export const authOptions: NextAuthOptions = {
  secret: 'your-super-secret-key-at-least-32-chars-long-here',
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/auth/login',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          console.log('Attempting authorization with:', credentials?.email);

          if (!credentials?.email || !credentials?.password) {
            console.log('Missing credentials');
            throw new Error('Missing email or password');
          }

          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email
            }
          });

          console.log('Found user:', user ? 'yes' : 'no');

          if (!user) {
            throw new Error('User not found');
          }

          const isPasswordValid = await compare(credentials.password, user.password);
          console.log('Password valid:', isPasswordValid);

          if (!isPasswordValid) {
            throw new Error('Invalid password');
          }

          const userResponse = {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
          };

          console.log('Authorization successful');
          return userResponse;
        } catch (error) {
          console.error('Auth error:', error);
          throw error;
        }
      }
    })
  ],
  debug: true,
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    }
  }
};
