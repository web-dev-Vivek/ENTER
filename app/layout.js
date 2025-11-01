import { Geist, Geist_Mono, Badeen_Display } from "next/font/google";
import LenisProvider from "./LenisProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const badeenDisplay = Badeen_Display({
  variable: "--font-badeen-display",
  weight: "400", // must specify since only 400 is available
  subsets: ["latin"],
});

export const metadata = {
  title: "ENTER - Student Event Platform",
  description: "Find events, connect, and team up with students.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${badeenDisplay.variable} antialiased`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
