"use client";

import { useRouter } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";
import { Button } from "../ui/button";

export default function ErrorExitButton() {
    const router = useRouter();

    const redirectDashboard = () => {
        router.push("/dashboard");
    };

    return (
        <Button
            variant="outline"
            onClick={redirectDashboard}
            className="flex items-center justify-center gap-2"
        >
            <div>Get me out of here</div>
            <FaChevronRight></FaChevronRight>
        </Button>
    );
}
