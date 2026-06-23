'use client';
import { motion } from 'framer-motion';
import { Typography } from 'antd';
import { MailOutlined, PhoneOutlined, CoffeeOutlined } from '@ant-design/icons';
import { type useTranslations } from '../../locales/i18n';

const { Title, Text } = Typography;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function ContactFooter({
  t,
}: {
  t: ReturnType<typeof useTranslations>['contact'];
}) {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      id="iletisim"
      className="text-center pt-20 border-t border-black/5"
    >
      <Title level={2} className="!text-black mb-12">
        {t.title}
      </Title>
      <div className="flex flex-col md:flex-row justify-center gap-8 font-bold mb-16">
        <a href="mailto:akaineurope@gmail.com" className="text-xl text-[#800000] underline">
          <MailOutlined className="mr-2" />
          akaineurope@gmail.com
        </a>
        <a href="tel:+37129356847" className="text-xl text-black">
          <PhoneOutlined className="mr-2" />
          +371 29 356 847
        </a>
      </div>

      <div className="bg-white border border-black/5 rounded-3xl p-8 max-w-md mx-auto shadow-sm">
        <Text className="text-zinc-600 text-sm block mb-4">{t.coffeeText}</Text>
        <a
          href="https://revolut.me/atakaneae4"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-[#FFA800] text-black font-black text-sm uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-[#e69600] active:scale-[0.98] transition-all"
        >
          <CoffeeOutlined />
          {t.coffeeButton}
        </a>
      </div>
    </motion.footer>
  );
}