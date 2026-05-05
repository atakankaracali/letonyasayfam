'use client';
import { motion } from 'framer-motion';
import { Typography } from 'antd';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';

const { Title } = Typography;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function ContactFooter({ title }: { title: string }) {
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
        {title}
      </Title>
      <div className="flex flex-col md:flex-row justify-center gap-8 font-bold">
        <a href="mailto:akaineurope@gmail.com" className="text-xl text-[#800000] underline">
          <MailOutlined className="mr-2" />
          akaineurope@gmail.com
        </a>
        <a href="tel:+37129356847" className="text-xl text-black">
          <PhoneOutlined className="mr-2" />
          +371 29 356 847
        </a>
      </div>
    </motion.footer>
  );
}