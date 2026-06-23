import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";

export const metadata: Metadata = {
  title: "Letonya Sayfam | Latvijas Lielākā Turku Digitālā Platforma",
  description:
    "Letonya'nın en büyük Türk dijital platformu. Latvia's largest Turkish digital community platform. Reklam, içerik üretimi, etkinlik ve kurumsal PR hizmetleri.",
  keywords: [
    "Letonya Sayfam",
    "Latvija turki",
    "turku kopiena Latvijā",
    "Letonya Türk",
    "Latvia Turkish influencer",
    "Riga Turkish community",
    "Baltık Türk dijital platform",
    "Latvia social media",
    "Instagram Reels Latvia",
    "TikTok Latvia",
    "dijital reklam Letonya",
    "influencer marketing Latvia",
  ],
  authors: [{ name: "Letonya Sayfam", url: "https://www.letonyasayfam.com" }],
  creator: "Letonya Sayfam",
  publisher: "Letonya Sayfam",
  metadataBase: new URL("https://www.letonyasayfam.com"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      tr: "/tr",
      lv: "/lv",
    },
  },
  openGraph: {
    type: "website",
    url: "https://www.letonyasayfam.com",
    title: "Letonya Sayfam | Latvijas Lielākā Turku Digitālā Platforma",
    description:
      "Letonya'nın en büyük Türk dijital platformu. Reklam, içerik üretimi, etkinlik ve kurumsal PR hizmetleri.",
    siteName: "Letonya Sayfam",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Letonya Sayfam",
      },
    ],
    locale: "tr_TR",
    alternateLocale: ["en_US", "lv_LV"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Letonya Sayfam | Latvijas Lielākā Turku Digitālā Platforma",
    description:
      "Letonya'nın en büyük Türk dijital platformu. Reklam, içerik üretimi, etkinlik ve kurumsal PR hizmetleri.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.jpg", type: "image/jpeg" },
    ],
    apple: "/logo.jpg",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#800000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Letonya Sayfam",
              url: "https://www.letonyasayfam.com",
              logo: "https://www.letonyasayfam.com/logo.jpg",
              description:
                "Letonya'nın en büyük Türk dijital platformu. Latvia's largest Turkish digital community.",
              email: "akaineurope@gmail.com",
              telephone: "+37129356847",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Riga",
                addressCountry: "LV",
              },
              sameAs: [
                "https://www.instagram.com/letonyasayfam/",
                "https://www.tiktok.com/@letonyasayfam",
                "https://www.youtube.com/channel/UCGXxJZ5iSKrlrcVfzPIISJg",
                "https://www.facebook.com/profile.php?id=61579440726565",
              ],
            }),
          }}
        />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.addEventListener('unload', function () {});`,
          }}
        />
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
