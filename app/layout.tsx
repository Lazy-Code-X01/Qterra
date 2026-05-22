import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActionButton from "@/components/ui/FloatingActionButton";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.qterragroup.com'),
  title: "QTerra | Integrated Professional Services",
  description: "QTerra is an integrated professional services firm providing strategic advisory, operational support, and capability development to organizations across Africa.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    url: 'https://www.qterragroup.com',
    title: "QTerra | Integrated Professional Services",
    description: "QTerra is an integrated professional services firm providing strategic advisory, operational support, and capability development to organizations across Africa.",
    images: [
      {
        url: 'https://res.cloudinary.com/dioiyb833/image/upload/v1779467423/qterra-og_lc12nj.png',
        width: 1200,
        height: 630,
        alt: 'QTerra | Integrated Professional Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "QTerra | Integrated Professional Services",
    description: "QTerra is an integrated professional services firm providing strategic advisory, operational support, and capability development to organizations across Africa.",
    images: ['https://res.cloudinary.com/dioiyb833/image/upload/v1779467423/qterra-og_lc12nj.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${sora.variable} ${inter.variable} min-h-screen flex flex-col antialiased`}
      >
        <TopBar />
        <Navbar />
        <main className="flex-grow bg-qterra-black">
          {children}
        </main>
        <Footer />
        <FloatingActionButton />
      </body>
    </html>
  );
}
