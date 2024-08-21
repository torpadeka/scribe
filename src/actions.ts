"use server";

import { db, usersTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export async function getUserByEmail(email: string) {
    const queryResult = await db
        .select()
        .from(usersTable)
        .where(eq(usersTable.email, email));

    const user = queryResult[0];

    return user;
}

export async function updateUserImage(image: string, email: string) {
    await db
        .update(usersTable)
        .set({ image: image })
        .where(eq(usersTable.email, email));
}
