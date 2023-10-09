import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
const { SITE_NAME } = process.env;

export const metadata: Metadata = {
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  themeColor: "#FFFBEB"
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
    <html lang="en" className={`h-full ${inter.variable}`}>
      <body className="h-full text-black">
        {children}
      </body>
    </html>
  );
}
