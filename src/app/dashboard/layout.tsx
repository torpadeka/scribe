import Navbar from "@/components/layout/Navbar";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
        </div>
    );
}
