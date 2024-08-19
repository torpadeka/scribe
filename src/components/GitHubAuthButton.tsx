"use client";

import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button"; // Adjust the import based on your file structure

export default function GitHubAuthButton() {
    const handleSignIn = async () => {
        try {
            await signIn("github", {
                callbackUrl: "/",
            });
        } catch (error) {
            console.error("Sign in error:", error);
        }
    };

    return (
        <>
            <div className="flex flex-col gap-4">
                <Button className="flex gap-4" onClick={handleSignIn}>
                    <FaGithub size={20} />
                    <div>Sign in with GitHub</div>
                </Button>
            </div>
        </>
    );
}
