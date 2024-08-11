import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog Page",
  description: "Developed by Naimal Salahuddin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
        {children}
        </Suspense></body>
    </html>
  );
}
