'use client';
import { type Locale } from '@/locales/i18n';

export default function LanguageSwitcher({
  locale,
  setLocale,
}: {
  locale: Locale;
  setLocale: (l: Locale) => void;
}) {
  const options: { code: Locale; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'tr', label: 'TR' },
    { code: 'lv', label: 'LV' },
  ];

  return (
    <div className="flex items-center gap-1 bg-black/5 rounded-full p-1">
      {options.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLocale(code)}
          className={`px-3 py-1 text-[11px] font-black uppercase rounded-full transition-all ${
            locale === code
              ? 'bg-[#800000] text-white shadow-sm'
              : 'text-zinc-500 hover:text-[#800000]'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}