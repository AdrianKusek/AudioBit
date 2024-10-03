
import React from "react";
import ClientProvider from "./ClientProvider"; // New Client Provider component
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar"; // Adjust the import path as needed
import Footer from "./components/Footer"; // Adjust the import path as needed


import {Toaster } from 'react-hot-toast';


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

export const metadata = {
  title: "Audio Store",
  description: "The best audio equipment available.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* You can include additional head elements here if needed */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ClientProvider>
        <header>
          <Navbar />
        </header>
        <main className="main-container">
       
            {children}
         
        </main>
        </ClientProvider>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
