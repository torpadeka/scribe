"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
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
            <Button className="flex gap-2 items-center justify-center" onClick={handleSignIn}>
                <FcGoogle size={25} />
                <div>Sign in with Google</div>
            </Button>
        </>
    );
}
