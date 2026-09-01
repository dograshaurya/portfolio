import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Shaurya Dogra — Senior Full-Stack Laravel Developer",
  description: "Senior Full-Stack Laravel Developer with 10+ years of experience.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="wrap">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
