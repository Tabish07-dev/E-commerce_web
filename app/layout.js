import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ShopContextProvider from "./context/ShopContext";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Next.js Shop",
  description: "E-commerce store powered by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
        suppressHydrationWarning
      >
        <ShopContextProvider>
          <main className="pt-20 min-h-screen">
            <Navbar/>
            
            {children}

            <Footer />
          </main>
        </ShopContextProvider>
      </body>
    </html>
  );
}
