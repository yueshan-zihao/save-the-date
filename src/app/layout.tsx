import type { Metadata } from "next";
//import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Save The Date - Yueshan & Zihao",
  description: "Save The Date - Yueshan & Zihao",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
