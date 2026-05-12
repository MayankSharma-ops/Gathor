import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Gathor — Where All People Gather | Experimental Product Studio",
  description:
    "Gathor is an experimental product studio and innovation lab building free, cutting-edge tools that solve real human problems. Explore GathorChat, Mailor, Resume Analyzer, and more.",
  keywords: [
    "Gathor",
    "product studio",
    "experimental lab",
    "GathorChat",
    "Mailor",
    "free tools",
    "innovation",
  ],
  openGraph: {
    title: "Gathor — Where All People Gather",
    description:
      "An experimental product studio building free, cutting-edge tools for everyone.",
    url: "https://gathor.online",
    siteName: "Gathor",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gathor — Where All People Gather",
    description:
      "An experimental product studio building free, cutting-edge tools for everyone.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} antialiased`}>
      <body className="min-h-screen bg-[#F8F9FA] text-[#1F2937]" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
