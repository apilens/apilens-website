import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "ApiLens - API monitoring & analytics",
  description:
    "Open-source REST API monitoring and observability tool for developers. Track, debug, and optimize your APIs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
