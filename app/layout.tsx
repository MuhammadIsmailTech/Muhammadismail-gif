import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Muhammad Ismail Web Developer Portfolio",
  description: "Associate Software Engineer specializing in backend development with NestJS & .NET. Passionate about building scalable systems and solving complex problems.",
  keywords: ["Muhammad Ismail", "Software Engineer", "Backend Developer", "NestJS", ".NET", "Full Stack Developer", "Portfolio"],
  authors: [{ name: "Muhammad Ismail" }],
  openGraph: {
    title: "Muhammad Ismail | Web Developer Portfolio",
    description: "Specializing in backend development",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
