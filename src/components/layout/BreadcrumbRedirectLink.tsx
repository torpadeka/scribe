"use client";

import { useRouter } from "next/navigation";
import { BreadcrumbLink } from "../ui/breadcrumb";

export default function BreadcrumbRedirectLink({
    route,
    children,
}: {
    route: string;
    children?: React.ReactNode;
}) {
    const router = useRouter();

    const redirect = () => {
        router.push(route);
    };

    return (
        <BreadcrumbLink className="cursor-pointer" onClick={redirect}>
            {children}
        </BreadcrumbLink>
    );
}
