"use client";

import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button"; // Adjust the import based on your file structure

export default function GitHubAuthButton() {
    const handleSignIn = async () => {
        try {
            await signIn("github", {
                callbackUrl: "/dashboard",
            });
        } catch (error) {
            console.error("Sign in error:", error);
        }
    };

    return (
        <>
            <Button className="flex gap-2 items-center justify-center" onClick={handleSignIn}>
                <FaGithub size={25} />
                <div>Sign in with GitHub</div>
            </Button>
        </>
    );
}
