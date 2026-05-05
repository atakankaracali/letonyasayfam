'use client';
import { motion } from 'framer-motion';
import { Typography, Table } from 'antd';
import { type useTranslations } from '@/locales/i18n';

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
  const columns = [
    {
      title: services.columns.category,
      dataIndex: 'category',
      render: (t: string) => <span className="font-bold text-black">{t}</span>,
    },
    {
      title: services.columns.detail,
      dataIndex: 'detail',
    },
    {
      title: services.columns.impact,
      dataIndex: 'impact',
      render: (t: string) => (
        <span className="px-3 py-1 bg-[#800000] text-white text-[10px] font-bold rounded-md">
          {t}
        </span>
      ),
    },
  ];

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
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-black/5 overflow-x-auto">
        <Table
          dataSource={[...services.items]}
          pagination={false}
          columns={columns}
          rowKey="key"
        />
      </div>
    </motion.section>
  );
}