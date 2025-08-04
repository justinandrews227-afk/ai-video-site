import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Video Studio",
  description: "We create AI-driven videos that move people.",
  openGraph: {
    title: "AI Video Studio",
    description: "We create AI-driven videos that move people.",
    type: "website"
  },
  themeColor: "#0A0A0A",
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-night text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
