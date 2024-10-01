import type { Metadata } from "next";
import localFont from "next/font/local";
import { Rowdies,Rubik_Mono_One } from 'next/font/google'
import "./globals.css";
import { Provider } from "@/providers/provider";
import Navbar from "@/shared/Navbar";

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

export const rowdies=Rowdies({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
export const rubik=localFont({
  src:"./fonts/RubikOne-Regular.ttf",
  variable: "--font-rubik",
  weight: "100 900",
})

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
    <html lang="en" className="bg-light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <Navbar/>
          {children}
        </Provider>
      </body>
    </html>
  );
}
