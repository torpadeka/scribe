"use client";

import { FaChevronRight } from "react-icons/fa";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const router = useRouter();

    const logout = async () => {
        await signOut();
        router.push("/auth");
    };

    return (
        <Button
            onClick={logout}
            className="flex items-center justify-center gap-2"
        >
            <div>Logout</div>
            <FaChevronRight></FaChevronRight>
        </Button>
    );
}
