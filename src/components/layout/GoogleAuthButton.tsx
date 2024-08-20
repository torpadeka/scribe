"use client";

import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";
import { Button } from "@/components/ui/button"; // Adjust the import based on your file structure

export default function GoogleAuthButton() {
    const handleSignIn = async () => {
        try {
            await signIn("google", {
                callbackUrl: "/dashboard",
            });
        } catch (error) {
            console.error("Sign in error:", error);
        }
    };

    return (
        <>
            <div className="flex flex-col gap-4">
                <Button className="flex gap-4" onClick={handleSignIn}>
                    <FaGoogle size={20} />
                    <div>Sign in with Google</div>
                </Button>
            </div>
        </>
    );
}
