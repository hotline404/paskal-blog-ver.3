import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "paskal - 파스칼",
  description: "파스칼의 블로그, paskal's blog",
};

// layout.js
export const dynamic = "force-dynamic";


export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>{children}</div>
        <div>{modal ? <div>{modal}</div> : <></>}</div>
      </body>
    </html>
  );
}


