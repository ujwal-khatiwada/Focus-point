import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@radix-ui/themes/styles.css';
import Nav from "./navbar";
import {Theme} from '@radix-ui/themes';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "FocusPoint DS",
  description: "Being developed by Ujwal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} px-10 antialiased`}
      >
        <Theme>
          <Nav/>
          {children}
        </Theme>
          
      </body>
    </html>
  );
}
