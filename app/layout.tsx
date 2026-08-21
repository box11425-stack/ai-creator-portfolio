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
  title: "Алексей Васютин — AI-креатор",
  description: "Портфолио AI-креатора: нейросетевые креативы, видео и работающие digital-продукты.",
  openGraph: {
    title: "Алексей Васютин — AI-креатор",
    description: "Идеи, которые можно запустить: AI-креативы, видео и работающие digital-прототипы.",
    images: [{ url: "/og.jpg", width: 1664, height: 936, alt: "Алексей Васютин — AI-креатор" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Алексей Васютин — AI-креатор",
    description: "Идеи, которые можно запустить.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
