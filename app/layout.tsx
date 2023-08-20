import MainNavbar from "@/components/Navbars/MainNavbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job Task",
  description: "Task for Jr. Frontend Developer position",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <MainNavbar />
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
