"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { MdDarkMode } from "react-icons/md";

export default function DarkModeButton() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    // On mount
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="flex items-center justify-center gap-2">
            <MdDarkMode size={25} />
            {mounted &&
                (resolvedTheme === "dark" ? (
                    <Switch
                        checked={true}
                        onCheckedChange={() => setTheme("light")}
                    />
                ) : (
                    <Switch
                        checked={false}
                        onCheckedChange={() => setTheme("dark")}
                    />
                ))}
            {!mounted && <Skeleton className="w-11 h-7 rounded-xl" />}
        </div>
    );
}
