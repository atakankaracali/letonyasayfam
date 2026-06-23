'use client';
import Image from 'next/image';
import {
  InstagramOutlined,
  TikTokOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  GlobalOutlined,
  CoffeeOutlined,
} from '@ant-design/icons';

const LINKS = [
  {
    label: 'Instagram',
    icon: <InstagramOutlined />,
    url: 'https://www.instagram.com/letonyasayfam/',
    color: '#E1306C',
  },
  {
    label: 'TikTok',
    icon: <TikTokOutlined />,
    url: 'https://www.tiktok.com/@letonyasayfam',
    color: '#000000',
  },
  {
    label: 'YouTube',
    icon: <YoutubeOutlined />,
    url: 'https://www.youtube.com/channel/UCGXxJZ5iSKrlrcVfzPIISJg',
    color: '#FF0000',
  },
  {
    label: 'Facebook',
    icon: <FacebookOutlined />,
    url: 'https://www.facebook.com/profile.php?id=61579440726565',
    color: '#4267B2',
  },
  {
    label: 'Continue to Website',
    icon: <GlobalOutlined />,
    url: '/en',
    color: '#800000',
  },
  {
    label: 'Buy Me a Coffee',
    icon: <CoffeeOutlined />,
    url: 'https://revolut.me/atakaneae4',
    color: '#FFA800',
  },
];

function LinkButton(props: {
  label: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}) {
  const isExternal = props.url.startsWith('http');

  return (
    <a
      href={props.url}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className="group flex items-center gap-4 bg-white border border-black/5 rounded-2xl px-6 py-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <span
        className="text-2xl w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0"
        style={{ color: props.color, backgroundColor: `${props.color}15` }}
      >
        {props.icon}
      </span>
      <span className="font-black text-black text-base flex-1 text-left">
        {props.label}
      </span>
      <span className="text-zinc-300 group-hover:text-[#800000] group-hover:translate-x-1 transition-all">
        →
      </span>
    </a>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f0f2f5] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md mx-auto text-center">
        <div className="mb-8 flex flex-col items-center">
          <Image
            src="/logo.jpg"
            alt="Letonya Sayfam"
            width={100}
            height={100}
            className="rounded-full shadow-xl mb-4"
          />
          <h1 className="text-3xl font-black tracking-tighter">
            <span className="text-black">Letonya</span>
            <span className="text-[#800000]">Sayfam</span>
          </h1>
          <p className="text-zinc-500 text-sm font-light italic mt-2">
            Latvias largest Turkish digital platform.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {LINKS.map((link) => (
            <LinkButton
              key={link.label}
              label={link.label}
              icon={link.icon}
              url={link.url}
              color={link.color}
            />
          ))}
        </div>

        <p className="text-zinc-400 text-xs mt-10">
          © 2025 Letonya Sayfam
        </p>
      </div>
    </main>
  );
}