import { NextRequest, NextResponse } from "next/server";

import { db, usersTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export const GET = async function GET(
    req: NextRequest,
    { params }: { params: { email: string } }
) {
    const email = params.email;

    // if (req.auth) {
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

        return NextResponse.json({
            status: 200,
            user,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
};
