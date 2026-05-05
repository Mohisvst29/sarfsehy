import type { Metadata } from "next";
import { Public_Sans, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import { getSettings } from "@/lib/actions";

const publicSans = Public_Sans({ subsets: ["latin"], variable: "--font-public-sans" });
const notoKufi = Noto_Kufi_Arabic({ subsets: ["arabic"], variable: "--font-noto-kufi" });

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();
  const title = settings?.siteTitle || "بيارات الرياض لشفط البيارات";
  const description = settings?.siteDescription || "الحل الجذري والسريع لمشاكل البيارات والمجاري بالرياض";
  const keywords = settings?.seoKeywords ? settings.seoKeywords.split(",").map((k: string) => k.trim()) : ["شفط بيارات", "تسليك مجاري", "وايت شفط", "الرياض"];
  
  return {
    title: title,
    description: description,
    keywords: keywords,
    openGraph: {
      title: title,
      description: description,
      images: settings?.seoMetaImage ? [settings.seoMetaImage] : [],
      locale: "ar_SA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: settings?.seoMetaImage ? [settings.seoMetaImage] : [],
    },
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
              ${settings?.primaryColor ? `
                --color-primary: ${settings.primaryColor};
                --color-primary-container: ${settings.primaryColor};
                --color-on-primary: #ffffff;
                --color-on-primary-container: #ffffff;
              ` : ''}
              ${settings?.secondaryColor ? `
                --color-secondary: ${settings.secondaryColor};
                --color-secondary-container: ${settings.secondaryColor};
                --color-on-secondary: #ffffff;
                --color-on-secondary-container: #ffffff;
              ` : ''}
            }
          `
        }} />
        
        {/* Custom Head Scripts */}
        {settings?.customHeadScripts && (
          <div dangerouslySetInnerHTML={{ __html: settings.customHeadScripts }} />
        )}
        
        {/* Google Analytics */}
        {settings?.googleAnalyticsId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${settings.googleAnalyticsId}`}></script>
            <script dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${settings.googleAnalyticsId}');
              `
            }} />
          </>
        )}
        
        {/* Google Tag Manager */}
        {settings?.googleTagManagerId && (
          <script dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${settings.googleTagManagerId}');
            `
          }} />
        )}
      </head>
      <body className={`${publicSans.variable} ${notoKufi.variable} antialiased flex flex-col min-h-screen`}>
          {/* Custom Body Scripts (e.g. GTM noscript) */}
          {settings?.customBodyScripts && (
            <div dangerouslySetInnerHTML={{ __html: settings.customBodyScripts }} />
          )}
          {settings?.googleTagManagerId && (
            <noscript dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${settings.googleTagManagerId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
            }} />
          )}
          
          {children}
      </body>
    </html>
  );
}
