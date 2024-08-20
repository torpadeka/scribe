import { auth } from "@/auth";
import Navbar from "@/components/layout/Navbar";
import ProfileUserAvatar from "@/components/layout/ProfileUserAvatar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { db, usersTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
    // Session Check
    const session = await auth();

    if (!session) {
        redirect("/auth");
    }

    const sessionEmail = session?.user?.email;

    let imageUrl = "";
    let username = "";

    if (sessionEmail) {
        const user = await db
            .select()
            .from(usersTable)
            .where(eq(usersTable.email, sessionEmail));

        imageUrl = user[0].image;
        username = user[0].username;
    }

    return (
        <>
            <Navbar></Navbar>
            <div className="w-screen h-screen flex flex-col items-center justify-start gap-4 pt-20 px-10 bg-slate-100 dark:bg-gray-900">
                {/* LEFT SIDE */}
                <div className="w-full h-72 flex items-center justify-center gap-6">
                    <ProfileUserAvatar imageUrl={imageUrl}></ProfileUserAvatar>
                    <div className="text-3xl font-bold">
                        <span>{username}</span>
                    </div>
                </div>
            </div>
        </>
    );
}
