import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
const SITE_URL = "https://letonyasayfam.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Letonya Sayfam | Latvia Turkish Community, Media & Local Guide",
    template: "%s | Letonya Sayfam",
  },
  description:
    "Letonya Sayfam is a Latvia-based digital media and community platform connecting Latvia with the Turkish-speaking community through content, local discoveries, business promotion and digital services.",
  keywords: [
    "Letonya Sayfam",
    "Letonya Muhtarı",
    "AKA in Europe",
    "Turkish community Latvia",
    "Turkish-speaking community Latvia",
    "Turkish community Riga",
    "Turkish students Latvia",
    "Turkish students Riga",
    "Latvia life guide",
    "Riga local guide",
    "Latvia social media",
    "business promotion Latvia",
    "Letonya Türkleri",
    "Letonya Türk topluluğu",
    "Letonya'daki Türkler",
    "Riga Türkleri",
    "Letonya yaşam rehberi",
    "Latvija turki",
    "turku kopiena Latvijā",
    "turki Latvijā",
    "turku kopiena Rīgā",
  ],

  authors: [
    {
      name: "Letonya Sayfam",
      url: SITE_URL,
    },
  ],
  creator: "Letonya Sayfam",
  publisher: "Letonya Sayfam",
  applicationName: "Letonya Sayfam",
  category: "Community",
  openGraph: {
    type: "website",
    siteName: "Letonya Sayfam",
    title:
      "Letonya Sayfam | Latvia's Turkish-Speaking Community Platform",
    description:
      "Connecting Latvia with the Turkish-speaking community through media, local discoveries, business promotion and digital services.",
    locale: "en_US",
    alternateLocale: ["tr_TR", "lv_LV"],
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Letonya Sayfam | Turkish-Speaking Community in Latvia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Letonya Sayfam | Turkish-Speaking Community in Latvia",
    description:
      "Media, local discoveries, business promotion and digital services for the Turkish-speaking community in Latvia.",
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
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/logo.jpg",
        type: "image/jpeg",
      },
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
                  "@id": `${SITE_URL}/#organization`,
                  name: "Letonya Sayfam",
                  alternateName: [
                    "Letonya Muhtarı",
                    "AKA in Europe",
                  ],
                  url: SITE_URL,
                  logo: {
                    "@type": "ImageObject",
                    url: `${SITE_URL}/logo.jpg`,
                  },
                  image: `${SITE_URL}/og-image.jpg`,
                  description:
                    "Letonya Sayfam is a Latvia-based digital media and community platform connecting local businesses, students, families and the Turkish-speaking community through content, local discoveries, business promotion and digital services.",
                  email: "akaineurope@gmail.com",
                  telephone: "+37129356847",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Riga",
                    addressCountry: "LV",
                  },
                  areaServed: {
                    "@type": "Country",
                    name: "Latvia",
                  },
                  knowsAbout: [
                    "Turkish community in Latvia",
                    "Turkish-speaking community in Latvia",
                    "Life in Latvia",
                    "Study in Latvia",
                    "Riga",
                    "Latvia restaurants",
                    "Latvia local businesses",
                    "Latvia social media",
                    "Latvia digital marketing",
                    "Latvia student life",
                    "Local discoveries in Latvia",
                    "Business promotion in Latvia",
                  ],
                  sameAs: [
                    "https://www.instagram.com/letonyasayfam/",
                    "https://www.tiktok.com/@letonyasayfam",
                    "https://www.youtube.com/channel/UCGXxJZ5iSKrlrcVfzPIISJg",
                    "https://www.facebook.com/profile.php?id=61579440726565",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": `${SITE_URL}/#website`,
                  url: SITE_URL,
                  name: "Letonya Sayfam",
                  description:
                    "Digital media and community platform connecting Latvia with the Turkish-speaking community.",
                  publisher: {
                    "@id": `${SITE_URL}/#organization`,
                  },
                  inLanguage: [
                    "en",
                    "tr",
                    "lv",
                  ],
                },
                {
                  "@type": "WebApplication",
                  "@id": `${SITE_URL}/ai/#webapp`,

                  name: "Letonya Sayfam AI",

                  url: `${SITE_URL}/ai`,

                  applicationCategory: "EducationalApplication",
                  operatingSystem: "All",
                  description:
                    "An AI-powered digital guide for living, studying, travelling and navigating everyday life in Latvia.",

                  isPartOf: {
                    "@id": `${SITE_URL}/#website`,
                  },

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
        <AntdRegistry>
          {children}
        </AntdRegistry>

        <Analytics />

        <SpeedInsights />
      </body>
    </html>
  );
}
