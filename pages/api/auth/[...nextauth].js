import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const authOptions = {
  adapter: PrismaAdapter(prisma), 
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
  
  ],
  callbacks: {
    async jwt ({token,user})
   {user&&(token.user=user);
  return token
},
    session: async ({ session, user }) => {
      session = {
        ...session,
        user: user,
      };
      return session;
    },
  },
};

export default NextAuth(authOptions);