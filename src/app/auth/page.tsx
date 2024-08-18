"use client";  // Add this directive at the top of the file

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

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
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <div>
                <Button onClick={handleSignIn}>Sign in with GitHub</Button>
            </div>
        </div>
    );
}
