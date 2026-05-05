'use client';
import { motion } from 'framer-motion';
import { Typography, Row, Col } from 'antd';
import { GlobalOutlined, CheckCircleOutlined, TeamOutlined } from '@ant-design/icons';
import { type useTranslations } from '@/locales/i18n';

const { Title, Text } = Typography;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const langIcons = [
  <GlobalOutlined key="global" />,
  <CheckCircleOutlined key="check" />,
  <TeamOutlined key="team" />,
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
      <div className="grid md:grid-cols-2 gap-16 items-center bg-white p-12 rounded-[3rem] shadow-sm border border-black/5">
        <div>
          <Title level={2} className="!text-black !text-4xl font-black mb-8">
            {stats.title}
          </Title>
          <div className="bg-[#800000]/5 p-8 rounded-2xl border-l-4 border-[#800000]">
            <p className="text-6xl font-black text-[#800000] mb-2">200K</p>
            <p className="text-xl font-bold text-black">{stats.monthlyReach}</p>
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-black">{stats.growthTitle}</h3>
          <p className="text-lg text-zinc-600 leading-relaxed">{stats.growthDesc}</p>
          <blockquote className="italic text-lg font-medium text-black border-l-4 border-[#800000] pl-4">
            {stats.growthQuote}
          </blockquote>
        </div>
      </div>

      <div className="text-center">
        <Title level={2} className="!text-black mb-12">
          {languages.sectionTitle}
        </Title>
        <Row gutter={[24, 24]}>
          {languages.items.map((item, i) => (
            <Col xs={24} md={8} key={item.title}>
              <div className="h-full bg-white p-10 rounded-3xl border border-black/5 shadow-sm hover:shadow-xl transition-all">
                <div className="text-4xl text-[#800000] mb-6">{langIcons[i]}</div>
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