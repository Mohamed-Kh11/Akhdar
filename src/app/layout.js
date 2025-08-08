import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Suspense } from "react";
import Spinner from "./components/spinner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export const metadata = {
  title: "أخضر",
  description: "protecting our present and future",
};

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="ar">
      <body className={`${geistSans.variable} antialiased`}>
        <Suspense fallback={<Spinner/>} >
        <Navbar/>
        </Suspense>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
