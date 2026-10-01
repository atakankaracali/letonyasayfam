"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Drawer, Button } from "antd";
import {
  MenuOutlined,
  CloseOutlined,
  HomeOutlined,
  RobotOutlined,
} from "@ant-design/icons";
import { type Locale } from "@/locales/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar({
  locale,
  setLocale,
  navLinks,
  onLogoClick,
}: {
  locale: Locale;
  setLocale: (l: Locale) => void;
  navLinks: { name: string; id: string }[];
  onLogoClick: () => void;
}) {
  const [drawerVisible, setDrawerVisible] = useState(false);

  function handleLocaleChange(newLocale: Locale) {
    setLocale(newLocale);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `/${newLocale}`);
    }
  }

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-black/5 px-3 sm:px-4 py-3 sm:py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center gap-2">
          <div
            className="flex items-center gap-2 sm:gap-3 cursor-pointer min-w-0 shrink"
            onClick={onLogoClick}
          >
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={36}
              height={36}
              className="rounded-full shadow-sm shrink-0"
            />
            <span className="hidden sm:block font-black text-lg tracking-tighter text-[#800000] truncate">
              LETONYASAYFAM
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-bold text-[11px] uppercase tracking-widest text-zinc-500 shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.id}
                className="hover:text-[#800000] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            <Link
              href="/ai"
              className="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#800000] text-white hover:bg-[#800000] text-xs font-semibold tracking-wide transition-all shadow-sm shrink-0 active:scale-95"
              title="Letonya AI Asistanı"
            >
              <RobotOutlined className="text-xs text-amber-400" />
              <span>AI</span>

              <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-black text-white shadow-xs leading-none">
                NEW
              </span>
            </Link>

            <a
              href="/home"
              className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/5 hover:bg-[#800000] hover:text-white text-zinc-500 transition-all shrink-0"
              title="All Links"
            >
              <HomeOutlined className="text-sm" />
            </a>

            <div className="shrink-0">
              <LanguageSwitcher
                locale={locale}
                setLocale={handleLocaleChange}
              />
            </div>

            <div className="md:hidden shrink-0 flex items-center">
              <Button
                className="border-none shadow-none text-black p-0 flex items-center justify-center w-7 h-7"
                icon={<MenuOutlined />}
                onClick={() => setDrawerVisible(true)}
              />
            </div>
          </div>
        </div>
      </nav>

      <Drawer
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        size="large"
        closable={false}
      >
        <div className="flex justify-end p-4">
          <Button
            icon={<CloseOutlined />}
            onClick={() => setDrawerVisible(false)}
          />
        </div>
        <div className="flex flex-col items-center justify-center h-[70vh] gap-6">
          <Link
            href="/ai"
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-blue-600 text-white font-bold text-lg shadow-md"
            onClick={() => setDrawerVisible(false)}
          >
            <RobotOutlined /> Letonya Sayfam AI
          </Link>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.id}
              className="text-2xl font-black text-black hover:text-[#800000]"
              onClick={() => setDrawerVisible(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </Drawer>
    </>
  );
}
