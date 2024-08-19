import { auth } from "@/auth";
import Navbar from "@/components/Navbar";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
    // Session Check
    const session = await auth();

    if (!session) {
        redirect("/auth");
    }

    return (
        <>
            <Navbar></Navbar>
            <div className="w-screen h-screen flex flex-col items-center justify-center gap-10 pt-20 bg-slate-100 dark:bg-gray-900">
                <div>PROFILE</div>
            </div>
        </>
    );
}
