"use client"; // Add this directive at the top of the file

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

import { FaGithub } from "react-icons/fa";
import { RiQuillPenFill } from "react-icons/ri";

export default function LoginPage() {
    const handleSignIn = async () => {
        try {
            await signIn("github", {
                callbackUrl: `${window.location.origin}/`,
            });
        } catch (error) {
            console.error("Sign in error:", error);
            // You can redirect or show an error message here
        }
    };

    return (
        <>
            <div className="w-screen h-screen flex flex-col items-center justify-center gap-10 bg-slate-100">
                <div className="flex items-center gap-2">
                    <RiQuillPenFill size={62.5} />
                    <div className="text-5xl">scribe</div>
                </div>
                <div className="flex flex-col gap-4">
                    <Button className="flex gap-4" onClick={handleSignIn}>
                        <FaGithub size={20}></FaGithub>
                        <div>Sign in with GitHub</div>
                    </Button>
                    <div className="text-sm">No GitHub account? Too bad.</div>
                </div>
            </div>
        </>
    );
}
