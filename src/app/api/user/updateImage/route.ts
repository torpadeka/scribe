import { NextResponse } from "next/server";
import { db, usersTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

import { auth } from "@/auth";
import { list, put, del } from "@vercel/blob";

export const POST = auth(async function POST(req) {
    if (req.auth) {
        const formData = await req.formData();
        const email = formData.get("email") as string;
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json(
                { message: "No image file" },
                { status: 404 }
            );
        }

        try {
            const imageCheckResult = await list({
                prefix: `profileImages/${email}/`,
                token: process.env.BLOB_READ_WRITE_TOKEN,
            });

            if (imageCheckResult.blobs.length > 0) {
                await del(imageCheckResult.blobs.map((blob) => blob.url));
            }

            const fileExtension = file.name.split(".").pop();
            const fileName = `profileImage.${fileExtension}`;

            const { url: imagePath } = await put(`profileImages/${email}/${fileName}`, file, {
                access: "public",
                token: process.env.BLOB_READ_WRITE_TOKEN,
            });

            await db
                .update(usersTable)
                .set({ image: imagePath })
                .where(eq(usersTable.email, email!));

            return NextResponse.json({ status: 204 });
        } catch (error) {
            console.error("Error updating user image:", error);
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
