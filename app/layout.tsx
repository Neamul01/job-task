"use client";
import MainNavbar from "@/components/Navbars/MainNavbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { RegistrationContextProvider } from "@/contexts/RegistrationContext";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Job Task",
//   description: "Task for Jr. Frontend Developer position",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <RegistrationContextProvider>
        <body className={inter.className} suppressHydrationWarning>
          <nav>
            <MainNavbar />
          </nav>
          <main>{children}</main>
        </body>
      </RegistrationContextProvider>
    </html>
  );
}
