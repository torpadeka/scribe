"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoMdPerson } from "react-icons/io";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation"; // Import useRouter

const UserAvatar = ({ imageUrl }: { imageUrl: string }) => {
    const router = useRouter(); // Initialize useRouter

    const handleProfileClick = () => {
        console.log("Profile Clicked!");
        router.push("/profile"); // Client-side navigation
    };

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar className="w-12 h-12">
                        <AvatarImage src={imageUrl} />
                        <AvatarFallback>
                            <IoMdPerson size={25} />
                        </AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleProfileClick}>
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};

export default UserAvatar;
