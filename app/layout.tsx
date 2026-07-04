import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FrameFusion | Korean AI Photobooth",
  description:
    "Capture beautiful Korean-style photo strips with live filters, customizable themes, stickers, and interactive editing using FrameFusion.",
  keywords: [
    "FrameFusion",
    "Photobooth",
    "Korean Photobooth",
    "AI Photobooth",
    "Photo Strip",
    "Next.js",
    "React",
    "Tailwind CSS",
  ],
  authors: [
    {
      name: "Lekhya",
    },
  ],
  creator: "Lekhya",
  applicationName: "FrameFusion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}