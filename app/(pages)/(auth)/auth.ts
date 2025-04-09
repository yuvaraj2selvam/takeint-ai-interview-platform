import NextAuth from "next-auth"
import {PrismaAdapter} from "@next-auth/prisma-adapter"
import {prisma} from "@/prisma/prisma"
import Credentials from "next-auth/providers/credentials";

export const {handlers, auth, signIn, signOut} = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [Credentials({
        credentials: {},
        async authorize(credentials) {
            return null;
        }
    })],
    callbacks: {
        async session({session, token}) {
            return session;
        }
    }
})