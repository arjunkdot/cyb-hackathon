import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/navigation/Header";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PixaJobs - Find your next freelance gig.",
  description: "PixaJobs helps you find your next freelance job easily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="corporate">
      <body className={`${manrope.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
