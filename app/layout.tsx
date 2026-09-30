import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const font = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marko Ilic",
  description: "Personal website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      // Smooth scrolling for the navbar's section anchors. The data attribute
      // lets Next.js switch it off for route changes, so those jump instantly.
      data-scroll-behavior="smooth"
      className={cn(
        "h-full",
        "antialiased",
        "scroll-smooth motion-reduce:scroll-auto",
        font.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
