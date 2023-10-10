import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
const { SITE_NAME } = process.env;

export const metadata: Metadata = {
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  }
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export default function RootLayout({ children }: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full bg-[#F7F9FB] dark:bg-transparent`}>
      <body className="h-full text-black dark:text-slate-300">
        {children}
      </body>
    </html>
  );
}
