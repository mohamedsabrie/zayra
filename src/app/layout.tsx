import "./globals.css";
import { volkhov, poppins, jost } from "./fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/utils/createMetadata";

export const metadata: Metadata = createMetadata({
  title: "Zayra Shop",
  description: "Your one-stop shop for everything",
  images: ["/logo.png"], // This will be used for social media sharing
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${volkhov.variable} ${poppins.variable} ${jost.variable} flex flex-col min-h-screen antialiased`}
      >
        <Header />
        <div className="flex-1 container">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
