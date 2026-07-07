import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Aurelian | Fine Dining Experience",
  description:
    "Discover exceptional cuisine crafted with passion, precision, and unforgettable flavors. A Michelin-star dining experience beyond taste.",
  keywords: [
    "luxury restaurant",
    "fine dining",
    "Michelin star",
    "gourmet food",
    "premium dining experience",
  ],
  openGraph: {
    title: "Aurelian | Fine Dining Experience",
    description: "A dining experience beyond taste. Discover exceptional cuisine crafted with passion and precision.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${cormorant.variable} ${inter.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}