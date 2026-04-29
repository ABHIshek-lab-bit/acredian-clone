import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Accredian Enterprise - Next-Gen Expertise For Your Enterprise",
  description: "Cultivate high-performance teams through expert learning. Specialized corporate training programs in Product Innovation, Gen-AI, Leadership, Tech & Data, and more.",
  keywords: "corporate training, enterprise learning, professional development, leadership training, tech training",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
