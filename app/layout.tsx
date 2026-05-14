import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import type React from "react";

import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gourav-patidar.vercel.app"),
  title: {
    default: "Gourav Patidar - Flutter Developer",
    template: "%s | Gourav Patidar",
  },
  description:
    "Portfolio of Gourav Patidar, a Flutter developer focused on mobile apps, Flutter Web, native SDK bridges, testing, and CI/CD.",
  keywords: [
    "Gourav Patidar",
    "Flutter Developer",
    "Mobile App Developer",
    "Flutter Web",
    "iOS SDK",
    "Android SDK",
    "Dart",
    "Swift",
    "Kotlin",
  ],
  authors: [{ name: "Gourav Patidar" }],
  creator: "Gourav Patidar",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://gourav-patidar.vercel.app",
    title: "Gourav Patidar - Flutter Developer",
    description:
      "Flutter developer building mobile apps, Flutter Web platforms, and native SDK bridges.",
    siteName: "Gourav Patidar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gourav Patidar - Flutter Developer",
    description:
      "Mobile-first portfolio focused on Flutter, native SDK bridges, and clean product engineering.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f3eb" },
    { media: "(prefers-color-scheme: dark)", color: "#111113" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} font-sans`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
