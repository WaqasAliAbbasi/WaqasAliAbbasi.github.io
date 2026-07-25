import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Providers } from "./providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ClientScripts } from "./clientscripts";
import portrait from "@/assets/portrait.jpg";
import { SITE_URL } from "@/lib/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Waqas Ali",
    default: "Waqas Ali",
  },
  openGraph: {
    images: [{ url: portrait.src, width: portrait.width, height: portrait.height }],
  },
  alternates: {
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ClientScripts />
      <body className={inter.className}>
        <Providers>
          <main className="flex min-h-screen flex-col gap-4 py-11 px-5 max-w-2xl mx-auto">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
