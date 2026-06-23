"use client";
import { useState, useEffect, startTransition } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typography } from "antd";
import { defaultLocale, useTranslations, type Locale } from "../locales/i18n";
import Navbar from "./components/Navbar";
import SocialSection from "./components/SocialSection";
import VisionSection from "./components/ VisionSection";
import StatsSection from "./components/ StatsSection";
import ServicesSection from "./components/ ServicesSection";
import PartnersSection from "./components/ PartnersSection";
import ContactFooter from "./components/ContactFooter";
import ServicesPackages from "./components/ServicesPackages";
import CollaborationForm from "./components/CollaborationForm";

const { Text } = Typography;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const LOCALES: Locale[] = ["en", "tr", "lv"];

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;
  const segment = window.location.pathname.split("/").filter(Boolean)[0];
  if (LOCALES.includes(segment as Locale)) {
    return segment as Locale;
  }
  window.history.replaceState(null, "", "/en");
  return defaultLocale;
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>(getInitialLocale());

  useEffect(() => {
    const segment = window.location.pathname.split("/").filter(Boolean)[0];
    const detectedLocale = LOCALES.includes(segment as Locale)
      ? (segment as Locale)
      : defaultLocale;

    startTransition(() => {
      setLocale(detectedLocale);
    });
  }, []);

  const t = useTranslations(locale);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navLinks = [
    { name: t.nav.social, id: "#sosyal" },
    { name: t.nav.vision, id: "#vizyon" },
    { name: t.nav.services, id: "#hizmetler" },
    { name: t.nav.partners, id: "#partners" },
    { name: t.nav.contact, id: "#iletisim" },
  ];

  return (
    <main className="min-h-screen bg-[#f0f2f5] overflow-x-hidden">
      <Navbar
        locale={locale}
        setLocale={setLocale}
        navLinks={navLinks}
        onLogoClick={scrollToTop}
      />

      <div className="max-w-5xl mx-auto px-6 pt-40 pb-20 space-y-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <div
            className="mb-8 cursor-pointer inline-block"
            onClick={scrollToTop}
          >
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={140}
              height={140}
              className="rounded-full shadow-xl"
            />
          </div>
          <h1
            className="flex flex-wrap justify-center text-6xl md:text-8xl font-black mb-6 tracking-tighter cursor-pointer"
            onClick={scrollToTop}
          >
            <span className="w-full md:w-auto">Letonya</span>
            <span className="text-[#800000] w-full md:w-auto">Sayfam</span>
          </h1>
          <Text className="text-2xl text-zinc-500 font-light italic">
            {t.hero.tagline}
          </Text>
        </motion.div>

        <SocialSection label={t.social.sectionLabel} />
        <VisionSection t={t.vision} />
        <StatsSection stats={t.stats} languages={t.languages} />
        <ServicesSection services={t.services} />
        <PartnersSection t={t.partners} />
        <ServicesPackages t={t.packages} />
        <CollaborationForm t={t.form} />
        <ContactFooter t={t.contact} />
      </div>
    </main>
  );
}
