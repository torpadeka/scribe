"use client";

import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { MdDarkMode } from "react-icons/md";

export default function DarkModeButton() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isMounted, setIsMounted] = useState(false); // New state to track component mount status

    // On mount, check dark mode and apply accordingly
    useEffect(() => {
        const darkModePreference = localStorage.getItem("dark-mode");
        if (darkModePreference === "enabled") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
        setIsMounted(true); // Indicate that the component has finished mounting and the state is set
    }, []);

    // Logic for toggling dark mode
    const toggleDarkMode = (checked: boolean) => {
        setIsDarkMode(checked);

        if (checked) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("dark-mode", "enabled");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("dark-mode", "disabled");
        }
    };

    // Render nothing until the component is mounted
    if (!isMounted) {
        return (
            <div className="flex items-center justify-center gap-2">
                <MdDarkMode size={25} />
                <Switch disabled={true} checked={false} />
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center gap-2">
            <MdDarkMode size={25} />
            <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
        </div>
    );
}
