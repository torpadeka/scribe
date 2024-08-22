import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { db, usersTable } from "./drizzle/schema";
import { eq } from "drizzle-orm";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        GitHub({
            id: "github",
            authorization: {
                params: {
                    prompt: "select_account",
                },
            },
        }),
        Google({
            id: "google",
            authorization: {
                params: {
                    prompt: "select_account",
                },
            },
        }),
    ],
    callbacks: {
        async signIn({ user }) {
            try {
                // Check if the user already exists
                const existingUser = await db
                    .select()
                    .from(usersTable)
                    .where(eq(usersTable.email, user.email as string));

                if (existingUser.length === 0) {
                    // Insert new user if not found
                    await db.insert(usersTable).values({
                        email: user.email as string,
                        username: user.name as string,
                        image: user.image as string,
                    });
                }

                return true; // Return true to accept sign-in
            } catch (error) {
                console.error("Error storing user data:", error);
                return false; // Return false to reject sign-in
            }
        },
    },
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/auth",
        signOut: "/logout",
        error: "/error",
    },
});
