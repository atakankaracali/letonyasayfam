'use client';
import { motion } from 'framer-motion';
import { Typography, Row, Col } from 'antd';
import {
  InstagramOutlined,
  EyeOutlined,
  TeamOutlined,
  GlobalOutlined,
} from '@ant-design/icons';
import { type useTranslations } from '@/locales/i18n';

const { Title, Text } = Typography;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const statIcons = [
  <InstagramOutlined key="instagram" />,
  <EyeOutlined key="views" />,
  <TeamOutlined key="community" />,
  <GlobalOutlined key="platforms" />,
];

export default function StatsSection({
  stats,
  languages,
}: {
  stats: ReturnType<typeof useTranslations>['stats'];
  languages: ReturnType<typeof useTranslations>['languages'];
}) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="space-y-20"
    >
      <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-black/5">
        <div className="max-w-3xl mb-12">
          <Title
            level={2}
            className="!text-black !text-4xl font-black !mb-6"
          >
            {stats.title}
          </Title>

          <p className="text-lg text-zinc-600 leading-relaxed">
            {stats.description}
          </p>
        </div>

        <Row gutter={[24, 24]}>
          {stats.items.map((item, i) => (
            <Col xs={24} sm={12} lg={6} key={item.title}>
              <div className="h-full bg-[#800000]/5 p-7 rounded-2xl border border-[#800000]/10">
                <div className="text-3xl text-[#800000] mb-5">
                  {statIcons[i]}
                </div>

                <p className="text-4xl font-black text-[#800000] mb-2">
                  {item.value}
                </p>

                <p className="text-base font-bold text-black">
                  {item.title}
                </p>
              </div>
            </Col>
          ))}
        </Row>

        <div className="mt-10 bg-zinc-50 p-7 rounded-2xl border-l-4 border-[#800000]">
          <p className="text-lg text-zinc-700 leading-relaxed">
            {stats.communityText}
          </p>
        </div>
      </div>

      <div className="text-center">
        <Title level={2} className="!text-black !mb-12">
          {languages.sectionTitle}
        </Title>
        <Row gutter={[24, 24]}>
          {languages.items.map((item) => (
            <Col xs={24} md={8} key={item.title}>
              <div className="h-full bg-white p-10 rounded-3xl border border-black/5 shadow-sm hover:shadow-xl transition-all">
                <Title level={4}>{item.title}</Title>
                <Text className="text-zinc-600">{item.desc}</Text>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </motion.section>
  );
}