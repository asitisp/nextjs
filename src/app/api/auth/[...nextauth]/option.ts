import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectToDB } from "@/lib/dbconnect";
import User from "@/models/User";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                await connectToDB();
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };
                const user = await User.findOne({ email });
                if (!user) {
                    throw new Error("User not found");
                }
                const isPasswordCorrect = await bcrypt.compare(
                    password,
                    user.password
                );
                if (!isPasswordCorrect) {
                    throw new Error("Invalid password");
                }
                return user;
            },
        }),
    ],
    callbacks: {
       async jwt({ token, user }) {
            if (user) {
                token._id = user._id?.toString();
                token.role = user.role;
                token.username = user.username;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user._id = token._id;
                session.user.role = token.role;
                session.user.username = token.username;
            }
            return session;
        },
    },
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
   
}

 // const user= await userModel.findone({
    //     $or:[
    //         {email:credentials.identifier}
    //         {username:credentials.identifier}
    //     ]
    // })