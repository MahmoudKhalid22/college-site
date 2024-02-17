import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Computer and System Engineering Academic",
  description:
    "This is curriclum of computer and system engineering faculty of Zagazig university in Egypt along the four years",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
