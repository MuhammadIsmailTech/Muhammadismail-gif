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
  alternates: {
    canonical: "https://muhammadismail.vercel.app",
  },
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

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Muhammad Ismail",
      url: "https://muhammadismail.vercel.app",
      jobTitle: "Frontend Developer",
      sameAs: [
        "https://github.com/MuhammadIsmailTech",
        "YOUR_LINKEDIN_URL"
      ]
    }),
  }}
/>