'use client';
import { motion } from 'framer-motion';
import { Typography } from 'antd';
import { type useTranslations } from '@/locales/i18n';

const { Title } = Typography;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const PARTNERS = [
  { name: 'Boxxy LV', emoji: '📦', category: 'E-commerce' },
  { name: 'Cappadocia Restaurant', emoji: '🍽️', category: 'Restaurant' },
  { name: 'The Sofra Restaurant', emoji: '🥘', category: 'Restaurant' },
  { name: 'Kom Invest', emoji: '💼', category: 'Investment' },
];

const PARTNERS_DOUBLED = [...PARTNERS, ...PARTNERS];

export default function PartnersSection({
  t,
}: {
  t: ReturnType<typeof useTranslations>['partners'];
}) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      id="partners"
    >
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 18s linear infinite;
          will-change: transform;
        }
        .partners-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      <div className="text-center mb-16">
        <p className="text-[11px] font-black uppercase tracking-widest text-zinc-400 mb-3">
          {t.sectionLabel}
        </p>
        <Title level={2} className="!text-black !mb-0">
          {t.sectionTitle}
        </Title>
      </div>

      <div
        className="partners-wrapper relative overflow-hidden py-4"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div className="marquee-track flex gap-6 w-max">
          {PARTNERS_DOUBLED.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="group flex-shrink-0 flex items-center gap-4 bg-white border border-black/5 rounded-2xl px-8 py-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#800000]/20 transition-all duration-300 cursor-default min-w-[220px]"
            >
              <span className="text-3xl">{partner.emoji}</span>
              <div>
                <p className="font-black text-black text-base leading-tight">{partner.name}</p>
                <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mt-0.5">
                  {partner.category}
                </p>
              </div>
              <div className="ml-auto w-2 h-2 rounded-full bg-[#800000] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}