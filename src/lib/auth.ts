import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

/**
 * 后台登录：纯环境变量方式，不依赖数据库。
 *
 * 在 Hostinger 面板的「环境变量」里配置：
 *   ADMIN_USERNAME       管理员用户名
 *   ADMIN_PASSWORD       管理员密码（明文，想改密码直接在面板里改这一项）
 *   ADMIN_PASSWORD_HASH  可选：bcrypt 哈希密码。设置了就优先用它，否则用 ADMIN_PASSWORD
 *
 * 改密码：登录 Hostinger 面板 → 环境变量 → 修改 ADMIN_PASSWORD → 重新部署即可。
 */

/** 定长比较，避免计时攻击 */
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

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
        try {
          if (!credentials?.username || !credentials?.password) return null;

          const username = (credentials.username as string).trim();
          const password = credentials.password as string;

          const adminUsername = process.env.ADMIN_USERNAME?.trim();
          const adminPassword = process.env.ADMIN_PASSWORD?.trim();
          const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH?.trim();

          if (!adminUsername) {
            console.error("[auth] 未配置 ADMIN_USERNAME");
            return null;
          }

          if (!safeEqual(username, adminUsername)) return null;

          let passwordValid = false;

          if (adminPasswordHash && adminPasswordHash.startsWith("$2")) {
            try {
              passwordValid = await bcrypt.compare(password, adminPasswordHash);
            } catch {
              console.error("[auth] bcrypt.compare 失败，回退到明文比较");
              passwordValid = false;
            }
          }

          if (!passwordValid && adminPassword) {
            passwordValid = safeEqual(password, adminPassword);
          }

          if (!passwordValid) return null;

          return { id: "env-admin", name: "Admin", email: adminUsername };
        } catch (err) {
          console.error("[auth] authorize 异常:", err);
          return null;
        }
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
