import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials"

//auth設定
export const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    //ゲストユーザーログイン認証
    CredentialsProvider({
      name: "Credentials POC",
      credentials: {
        username: { label: "ユーザー名", type: "text", placeholder: "ユーザー名" },
        password: {  label: "パスワード", type: "password" }
      },
      async authorize(credentials, req) {
        const { username, password } = credentials
        const user = { name: "guest", email: "guest@example.com" }

        if (user) {
          return user
        } else {
          return null
        }
      }
    }),
  ],
  pages: {
    signIn: '/auth',
  },
})

export { handler as GET, handler as POST }