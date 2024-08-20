import { signIn } from "next-auth/react";

import { RiQuillPenFill } from "react-icons/ri";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import GitHubAuthButton from "@/components/layout/GitHubAuthButton";

export default async function LoginPage() {
    // Session Check
    const session = await auth();

    if (session) {
        redirect("/");
    }

    return (
        <>
            <div className="w-screen h-screen flex flex-col items-center justify-center gap-10 bg-slate-100 dark:bg-gray-900">
                <div className="flex items-center gap-2">
                    <RiQuillPenFill size={62.5} />
                    <div className="text-5xl">scribe</div>
                </div>
                <div className="flex flex-col gap-4">
                    <GitHubAuthButton></GitHubAuthButton>
                    <div className="text-sm">No GitHub account? Too bad.</div>
                </div>
            </div>
        </>
    );
}
