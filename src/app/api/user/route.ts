// After all this effort, the API route isn't even usable from
// the server components thanks to server cookie session limitations :(

// I guess it's just a cool way to get user profile info

import { NextRequest, NextResponse } from "next/server";
import { db, usersTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

import { auth } from "@/auth";

export const GET = auth(async function GET(req) {
    if (req.auth) {
        const email = req.nextUrl.searchParams.get("email");

        try {
            const queryResult = await db
                .select()
                .from(usersTable)
                .where(eq(usersTable.email, email!));

            const user = queryResult[0];

            if (!user) {
                return NextResponse.json(
                    { message: "User not found" },
                    { status: 404 }
                );
            }

            return NextResponse.json({ data: user }, { status: 200 });
        } catch (error) {
            console.error("Error fetching user:", error);
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
