"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoMdPerson } from "react-icons/io";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";

const ProfileUserAvatar = ({ imageUrl }: { imageUrl: string }) => {
    const [mounted, setMounted] = useState(false);

    // On mount
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            {mounted && (
                <Avatar className="w-48 h-48">
                    <AvatarImage src={imageUrl} />
                    <AvatarFallback>
                        <IoMdPerson size={25} />
                    </AvatarFallback>
                </Avatar>
            )}
            {!mounted && <Skeleton className="w-48 h-48 rounded-full" />}
        </>
    );
};

export default ProfileUserAvatar;
