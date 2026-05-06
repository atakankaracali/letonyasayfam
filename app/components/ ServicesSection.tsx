'use client';
import { motion } from 'framer-motion';
import { Typography } from 'antd';
import { type useTranslations } from '../../locales/i18n';

const { Title } = Typography;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function ServicesSection({
  services,
}: {
  services: ReturnType<typeof useTranslations>['services'];
}) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      id="hizmetler"
    >
      <div className="text-center mb-16">
        <Title level={2}>{services.sectionTitle}</Title>
      </div>

      <div className="flex flex-col gap-4">
        {services.items.map((item) => {
          return (
            <div
              key={item.key}
              className="bg-white rounded-2xl px-6 py-5 border border-black/5 shadow-sm flex flex-col md:flex-row md:items-center gap-3 md:gap-0"
            >
              <div className="md:w-1/3">
                <span className="font-black text-black text-base">{item.category}</span>
              </div>
              <div className="md:w-1/2">
                <span className="text-zinc-500 text-sm">{item.detail}</span>
              </div>
              <div className="md:w-1/6 md:text-right">
                <span className="inline-block px-3 py-1 bg-[#800000] text-white text-[10px] font-black uppercase rounded-md">
                  {item.impact}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}