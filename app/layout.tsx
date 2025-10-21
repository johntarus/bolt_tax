import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Bolt Tax - Professional Tax Solutions",
    description: "Streamline your tax filing process with our modern, user-friendly platform",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={ `${ geistSans.variable } ${ geistMono.variable } antialiased` }
        >
        <Navbar/>
        { children }
        <Analytics/>
        </body>
        </html>
    );
}
