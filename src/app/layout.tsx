import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";

import "./globals.css";

const comfortaa = Comfortaa({
    weight: "500",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "scribe",
    icons: {
        icon: "/scribe.svg",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={comfortaa.className}>{children}</body>
        </html>
    );
}
