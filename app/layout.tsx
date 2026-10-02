import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Letonya Sayfam | Latvijas Lielākā Turku Digitālā Platforma & AI Asistents",
  description:
    "Letonya'nın en büyük Türk influencer dijital platformu ve yapay zeka asistanı. Reklam, içerik üretimi, etkinlik, PR hizmetleri ve Letonya yaşam/oturum rehberi.",
  keywords: [
    "Letonya Sayfam",
    "Letonya Muhtarı",
    "Letonya Türk topluluğu",
    "Latvija turki",
    "Letonya Türk",
    "Latvia Turkish influencer",
    "turku kopiena Latvijā",
    "Riga Turkish community",
    "Baltık Türk dijital platform",
    "Latvia Turk influencer",
    "Latvia social media",
    "Instagram Reels Latvia",
    "TikTok Latvia",
    "dijital reklam Letonya",
    "influencer marketing Latvia",
    "Letonya Sayfam AI",
    "Letonya AI",
    "Latvia AI assistant",
    "PMLP oturum izni",
    "Riga expat guide",
    "Letonya yaşam rehberi",
    "Letonya üniversite eğitimi",
    "Letonya iş ilanları",
    "Letonya ev kiralama",
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
    title: "Letonya Sayfam | Latvijas Lielākā Turku Digitālā Platforma & AI",
    description:
      "Letonya'nın en büyük Türk influencer dijital platformu ve interaktif yapay zeka asistanı. Reklam, kurumsal PR ve Letonya yaşam rehberi.",
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
    title: "Letonya Sayfam | Latvijas Lielākā Turku Digitālā Platforma & AI",
    description:
      "Letonya'nın en büyük Türk influencer dijital platformu ve yapay zeka asistanı. Yeni başlayanlar, üniversiteler ve Letonya yaşam rehberi.",
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
  other: {
    "theme-color": "#800000",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.letonyasayfam.com/#organization",
                  name: "Letonya Sayfam",
                  url: "https://www.letonyasayfam.com",
                  logo: "https://www.letonyasayfam.com/logo.jpg",
                  description:
                    "Letonya'nın en büyük Türk influencer dijital platformu. Latvia's largest Turkish digital community.",
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
                },
                {
                  "@type": "WebApplication",
                  "@id": "https://www.letonyasayfam.com/ai/#webapp",
                  name: "Letonya Sayfam AI",
                  url: "https://www.letonyasayfam.com/ai",
                  applicationCategory: "EducationalApplication",
                  operatingSystem: "All",
                  description:
                    "Interactive AI assistant providing guidance on Latvian residence permits (PMLP), higher education, and daily life.",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "EUR",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <AntdRegistry>{children}</AntdRegistry>
        <Analytics />
      </body>
    </html>
  );
}
