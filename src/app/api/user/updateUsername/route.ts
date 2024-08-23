import { NextResponse } from "next/server";
import { db, usersTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

import { auth } from "@/auth";

export const POST = auth(async function POST(req) {
    if (req.auth) {
        const data = await req.json();
        const email = data.email;
        const username = data.username;

        try {
            await db
                .update(usersTable)
                .set({ username: username })
                .where(eq(usersTable.email, email!));

            return NextResponse.json({ status: 204 });
        } catch (error) {
            console.error("Error updating user's username:", error);
            return NextResponse.json(
                { message: "Internal server error" },
                { status: 500 }
            );
        }
    } else {
        return NextResponse.json(
            { message: "Not authenticated" },
            { status: 401 }
        );
    }
});
