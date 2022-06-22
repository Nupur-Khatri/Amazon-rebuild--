import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID1,
      clientSecret: process.env.GOOGLE_SECRET1,
    }),
    // ...add more providers here
  ],
}) 