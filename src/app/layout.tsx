import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/CookieConsent";
import GTMProvider from "../components/GTMProvider";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Women's Mentoring Foundation",
  description:
    "Empowering women through mentorship and support. We champion women from diverse backgrounds, recognising that prevention is essential for enhanced well-being.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-primary">
        <div className="flex flex-col min-h-screen">
          <Suspense fallback={null}>
            <GTMProvider />
          </Suspense>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <CookieConsent />
      </body>
    </html>
  );
}
