import type { Metadata } from "next";
import { Public_Sans, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({ subsets: ["latin"], variable: "--font-public-sans" });
const notoKufi = Noto_Kufi_Arabic({ subsets: ["arabic"], variable: "--font-noto-kufi" });

export const metadata: Metadata = {
  title: "دروب القمة لشفط البيارات",
  description: "الحل الجذري والسريع لمشاكل البيارات والمجاري بالرياض",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${publicSans.variable} ${notoKufi.variable} antialiased flex flex-col min-h-screen`}>
          {children}
      </body>
    </html>
  );
}
