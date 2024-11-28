import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "@/providers/provider";
import Navbar from "@/shared/Navbar";
import ScrollToTop from "@/shared/ScrollToTop";
import Head from "next/head";
import Footer from "@/shared/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Going Nepal Adventure",
  description: "Going Nepal Adventure offers thrilling trekking and tour experiences across the majestic landscapes of Nepal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#fafafa]">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Going Nepal Adventure" />
        <title>Going Nepal Adventure</title>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Provider>
            <Navbar/>
            <ScrollToTop/>
            {children}
            <Footer/>
          </Provider>
      </body>
    </html>
  );
}
