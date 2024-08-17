import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";

import "./globals.css";
export const comfortaa = Comfortaa({
    weight: "500",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "scribe",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body className={comfortaa.className}>{children}</body>
        </html>
    );
}
