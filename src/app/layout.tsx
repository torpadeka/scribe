import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";

import "./globals.css";
export const comfortaa = Comfortaa({
    weight: "500",
    subsets: ["latin"],
});

interface Icon {
  rel: string;
  url: string;
}

interface MyMetadata extends Metadata {
  icons: Icon[];
}

export const metadata: Metadata = {
    title: "scribe",
    icons: [{ rel: 'icon', url: '/scribe.svg' }],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={comfortaa.className}>{children}</body>
        </html>
    );
}
