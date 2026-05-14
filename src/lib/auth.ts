import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "./prisma";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null;

        const username = credentials.username as string;
        const password = credentials.password as string;
        const fallbackUsername = process.env.ADMIN_USERNAME?.trim();
        const fallbackPasswordHash = process.env.ADMIN_PASSWORD_HASH?.trim();

        if (fallbackUsername && fallbackPasswordHash && username === fallbackUsername) {
          const isFallbackValid = await bcrypt.compare(password, fallbackPasswordHash);

          if (isFallbackValid) {
            return {
              id: "env-admin",
              name: "Admin",
              email: fallbackUsername,
            };
          }
        }

        let admin;
        try {
          admin = await prisma.admin.findUnique({
            where: { username },
          });
        } catch (error) {
          console.error("[auth] Admin lookup failed:", error);
          return null;
        }

        if (!admin) return null;

        const isValid = await bcrypt.compare(password, admin.password);

        if (!isValid) return null;

        return {
          id: admin.id,
          name: admin.name,
          email: admin.username,
        };
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  secret: process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET,
});
