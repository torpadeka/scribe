"use client";

import { useRouter } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoMdPerson } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";

export default function NavbarUserAvatar({ image }: { image: string }) {
    const [mounted, setMounted] = useState(false);

    // On mount
    useEffect(() => {
        setMounted(true);
    }, []);

    const router = useRouter();

    const redirectProfile = () => {
        router.push("/dashboard/profile");
    };

    const logout = async () => {
        await signOut();
    };

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    {mounted && (
                        <Avatar className="w-12 h-12">
                            <AvatarImage src={image} />
                            <AvatarFallback>
                                <IoMdPerson size={25} />
                            </AvatarFallback>
                        </Avatar>
                    )}
                    {!mounted && (
                        <Skeleton className="w-12 h-12 rounded-full" />
                    )}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        className="flex items-center justify-start gap-4 cursor-pointer"
                        onClick={redirectProfile}
                    >
                        <IoMdPerson size={20} />
                        <div>Profile</div>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="flex items-center justify-start gap-4 cursor-pointer text-red-600"
                        onClick={logout}
                    >
                        <IoMdLogOut size={20} />
                        <div>Logout</div>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}
