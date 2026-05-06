"use client";
import { useState } from "react";
import Image from "next/image";
import { Drawer, Button } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
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
    window.history.replaceState(null, "", `/${newLocale}`);
  }

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-black/5 px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center gap-4 pr-2 md:pr-0">
          <div
            className="flex items-center gap-3 cursor-pointer flex-shrink-0"
            onClick={onLogoClick}
          >
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full shadow-sm"
            />
            <span className="font-black text-lg tracking-tighter text-[#800000]">
              LETONYASAYFAM
            </span>
          </div>

          <div className="hidden md:flex gap-8 font-bold text-[11px] uppercase tracking-widest text-zinc-500">
            {navLinks.map((link) => {
              return (
                <a
                  key={link.name}
                  href={link.id}
                  className="hover:text-[#800000] transition-colors"
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <LanguageSwitcher locale={locale} setLocale={handleLocaleChange} />
            <div className="md:hidden">
              <Button
                className="border-none shadow-none text-black p-0"
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
        <div className="flex flex-col items-center justify-center h-[70vh] gap-8">
          {navLinks.map((link) => {
            return (
              <a
                key={link.name}
                href={link.id}
                className="text-3xl font-black text-black hover:text-[#800000]"
                onClick={() => setDrawerVisible(false)}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </Drawer>
    </>
  );
}
