'use client';
import { motion } from 'framer-motion';
import { Typography } from 'antd';
import { type useTranslations } from '../../locales/i18n';

const { Title, Text } = Typography;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ICONS = ['🎬', '📱', '🎯', '🚀'];

export default function ServicesPackages({
  t,
}: {
  t: ReturnType<typeof useTranslations>['packages'];
}) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      id="paketler"
    >
      <div className="text-center mb-16">
        <p className="text-[11px] font-black uppercase tracking-widest text-zinc-400 mb-3">
          {t.sectionLabel}
        </p>
        <Title level={2} className="!text-black !mb-0">
          {t.sectionTitle}
        </Title>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {t.items.map((item, i) => {
          return (
            <div
              key={item.title}
              className="group bg-white border border-black/5 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">{ICONS[i]}</span>
                <div>
                  <h3 className="font-black text-black text-lg leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
              <Text className="text-zinc-600 leading-relaxed block mb-6">
                {item.desc}
              </Text>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => {
                  return (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#800000]/8 text-[#800000] text-[11px] font-black uppercase tracking-wider rounded-full border border-[#800000]/10"
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
              <div className="mt-6 w-full h-0.5 bg-black/5 group-hover:bg-[#800000]/20 transition-colors" />
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}