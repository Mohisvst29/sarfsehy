import type { Metadata } from "next";
import { Public_Sans, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import { getSettings } from "@/lib/actions";

const publicSans = Public_Sans({ subsets: ["latin"], variable: "--font-public-sans" });
const notoKufi = Noto_Kufi_Arabic({ subsets: ["arabic"], variable: "--font-noto-kufi" });

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();
  return {
    title: settings.siteTitle || "دروب القمة لشفط البيارات",
    description: settings.siteDescription || "الحل الجذري والسريع لمشاكل البيارات والمجاري بالرياض",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSettings();

  return (
    <html lang="ar" dir="rtl">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{
          __html: `
            :root {
              ${settings.primaryColor ? `--color-primary: ${settings.primaryColor};` : ''}
              ${settings.secondaryColor ? `--color-secondary: ${settings.secondaryColor};` : ''}
            }
          `
        }} />
      </head>
      <body className={`${publicSans.variable} ${notoKufi.variable} antialiased flex flex-col min-h-screen`}>
          {children}
      </body>
    </html>
  );
}
