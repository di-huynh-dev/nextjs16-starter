import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js + Bun Starter",
  description:
    "Innovating & Development. Building next-generation solutions and empowering developers to create transformative experiences. Developer, Open Source Contributor.",
  keywords: ["Di Huynh", "Developer", "Open Source", "dihuynh"],
  authors: [{ name: "Di Huynh", url: "https://github.com/di-huynh-dev" }],
  icons: {
    icon: [{ url: "/round-avatar.svg", type: "image/svg+xml" }],
    apple: "/round-avatar.svg",
  },
  openGraph: {
    title: "Di Huynh - Developer",
    description:
      "Innovating & Development. Building next-generation solutions and empowering developers to create transformative experiences.",
    type: "website",
    url: "https://github.com/di-huynh-dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Di Huynh - Developer",
    description:
      "Innovating & Development. Building next-generation solutions and empowering developers.",
    creator: "@di-huynh-dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
