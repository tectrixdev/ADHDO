import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { Viewport } from "next";
import Footer from "@/components/footer";
import { MotionConfig } from "motion/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ADHDO",
  description: "A website aiming to motivate people with ADHDO to follow their deadlines",
  generator: "Next.js",
  applicationName: "ADHDO",
  keywords: [
    "ADHD",
    "ADHDO",
    "todo app",
    "Todo's",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://ADHDO.tectrix.dev",
  },
  authors: [{ name: "Joran Hennion" }],
  creator: "Joran Hennion",
  publisher: "Joran Hennion",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ADHDO.tectrix.dev"),
};

export const viewport: Viewport = {
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[url("/bg.webp")] bg-fixed bg-cover bg-center bg-no-repeat text-white selection:bg-blue-500 selection:text-black`}
      >
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
        <Footer />
      </body>
    </html>
  );
}
