'use client';
import { motion } from 'framer-motion';
import { Typography } from 'antd';
import { RocketOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { type useTranslations } from '@/locales/i18n';

const { Title, Text } = Typography;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function VisionSection({
  t,
}: {
  t: ReturnType<typeof useTranslations>['vision'];
}) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      id="vizyon"
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <div className="inline-block px-4 py-1 bg-[#800000]/10 text-[#800000] rounded-full text-xs font-bold uppercase">
            {t.badge}
          </div>
          <Title level={2} className="!text-black !text-4xl font-black">
            {t.title}
          </Title>
          <Text className="text-xl text-zinc-600">{t.subtitle}</Text>
          <div className="font-bold text-black">
            <CheckCircleOutlined className="text-[#800000] mr-2" />
            {t.badge2}
          </div>
        </div>
        <div className="bg-[#800000] text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <RocketOutlined className="absolute -bottom-10 -right-10 text-[15rem] opacity-10 rotate-12" />
          <Title level={3} className="!text-white mb-6">
            {t.cardTitle}
          </Title>
          <p className="text-2xl font-bold italic">{t.cardQuote}</p>
        </div>
      </div>
    </motion.section>
  );
}