import type { Metadata } from "next";
import { Navbar } from "@/ui";
import "./globals.css";

export const metadata: Metadata = {
  title: "Voting application.",
  description:
    "An app for monitoring the representatives alignment with voter sentiment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
