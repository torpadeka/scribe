import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";

import "./globals.css";
import { Providers } from "./providers";

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
        <html lang="en" suppressHydrationWarning={true}>
            <body className={comfortaa.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
