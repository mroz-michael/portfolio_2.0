import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Michael's Website",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white flex flex-col min-h-screen">
        <header>
          <Navbar/>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
