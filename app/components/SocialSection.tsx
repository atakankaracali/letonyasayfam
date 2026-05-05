'use client';
import { motion } from 'framer-motion';
import { Typography, Row, Col } from 'antd';
import {
  InstagramOutlined,
  TikTokOutlined,
  YoutubeOutlined,
  FacebookOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const socialLinks = [
  { name: 'Instagram', icon: <InstagramOutlined />, url: 'https://www.instagram.com/letonyasayfam/', color: '#E1306C' },
  { name: 'TikTok', icon: <TikTokOutlined />, url: 'https://www.tiktok.com/@letonyasayfam', color: '#000' },
  { name: 'YouTube', icon: <YoutubeOutlined />, url: 'https://www.youtube.com/channel/UCGXxJZ5iSKrlrcVfzPIISJg', color: '#FF0000' },
  { name: 'Facebook', icon: <FacebookOutlined />, url: 'https://www.facebook.com/profile.php?id=61579440726565', color: '#4267B2' },
];

export default function SocialSection({ label }: { label: string }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      id="sosyal"
    >
      <Title level={2} className="text-center mb-16 font-black uppercase tracking-widest text-zinc-400 !text-sm">
        {label}
      </Title>
      <Row gutter={[24, 24]} justify="center">
        {socialLinks.map((s) => (
          <Col xs={12} md={6} key={s.name}>
            <a href={s.url} target="_blank" rel="noreferrer" className="block group">
              <div className="p-10 bg-white rounded-[2rem] flex flex-col items-center shadow-sm hover:shadow-2xl transition-all border border-black/5 group-hover:-translate-y-2">
                <span className="text-5xl mb-4" style={{ color: s.color }}>
                  {s.icon}
                </span>
                <Text className="font-bold text-lg text-black">{s.name}</Text>
              </div>
            </a>
          </Col>
        ))}
      </Row>
    </motion.section>
  );
}