import React from 'react';
import {
  SiPython,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiGit,
  SiGithub,
  SiLinux,
  SiVite,
  SiHtml5,
  SiCplusplus,
  SiSocketdotio,
  SiPostman,
  SiVercel,
  SiExpo,
  SiAndroid,
  SiNetlify,
} from 'react-icons/si';
import { FaAws, FaWindows, FaCss3Alt, FaDatabase } from 'react-icons/fa';
import { Radio, Activity, Code2 } from 'lucide-react';

interface TechConfig {
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  name: string;
}

const TECH_MAP: Record<string, TechConfig> = {
  // Languages
  python: { icon: SiPython, color: '#3776AB', name: 'Python' },
  'c++': { icon: SiCplusplus, color: '#00599C', name: 'C++' },
  cpp: { icon: SiCplusplus, color: '#00599C', name: 'C++' },
  javascript: { icon: SiJavascript, color: '#F7DF1E', name: 'JavaScript' },
  js: { icon: SiJavascript, color: '#F7DF1E', name: 'JavaScript' },
  typescript: { icon: SiTypescript, color: '#3178C6', name: 'TypeScript' },
  ts: { icon: SiTypescript, color: '#3178C6', name: 'TypeScript' },
  html: { icon: SiHtml5, color: '#E34F26', name: 'HTML5' },
  html5: { icon: SiHtml5, color: '#E34F26', name: 'HTML5' },
  css: { icon: FaCss3Alt, color: '#1572B6', name: 'CSS3' },
  css3: { icon: FaCss3Alt, color: '#1572B6', name: 'CSS3' },
  sql: { icon: FaDatabase, color: '#336791', name: 'SQL' },

  // Frontend & Mobile
  react: { icon: SiReact, color: '#61DAFB', name: 'React' },
  'react.js': { icon: SiReact, color: '#61DAFB', name: 'React.js' },
  'react 19': { icon: SiReact, color: '#61DAFB', name: 'React 19' },
  'react native': { icon: SiReact, color: '#61DAFB', name: 'React Native' },
  'tailwind css': { icon: SiTailwindcss, color: '#06B6D4', name: 'Tailwind CSS' },
  tailwind: { icon: SiTailwindcss, color: '#06B6D4', name: 'Tailwind' },
  vite: { icon: SiVite, color: '#646CFF', name: 'Vite' },
  expo: { icon: SiExpo, color: '#000020', name: 'Expo' },
  android: { icon: SiAndroid, color: '#3DDC84', name: 'Android' },

  // Backend & Systems
  node: { icon: SiNodedotjs, color: '#5FA04E', name: 'Node.js' },
  'node.js': { icon: SiNodedotjs, color: '#5FA04E', name: 'Node.js' },
  express: { icon: SiExpress, color: '#828282', name: 'Express.js' },
  'express.js': { icon: SiExpress, color: '#828282', name: 'Express.js' },
  'socket.io': { icon: SiSocketdotio, color: '#010101', name: 'Socket.IO' },
  windows: { icon: FaWindows, color: '#0078D6', name: 'Windows' },
  win32: { icon: FaWindows, color: '#0078D6', name: 'Win32' },
  'win32 api': { icon: FaWindows, color: '#0078D6', name: 'Win32 API' },
  linux: { icon: SiLinux, color: '#FCC624', name: 'Linux' },
  udp: { icon: Radio, color: '#06B6D4', name: 'UDP Sockets' },
  'udp sockets': { icon: Radio, color: '#06B6D4', name: 'UDP Sockets' },
  'raw udp': { icon: Radio, color: '#06B6D4', name: 'Raw UDP' },
  'rest apis': { icon: Activity, color: '#10B981', name: 'REST APIs' },

  // Databases & Cloud
  mongodb: { icon: SiMongodb, color: '#47A248', name: 'MongoDB' },
  postgresql: { icon: SiPostgresql, color: '#4169E1', name: 'PostgreSQL' },
  mysql: { icon: SiMysql, color: '#4479A1', name: 'MySQL' },
  aws: { icon: FaAws, color: '#FF9900', name: 'AWS' },
  vercel: { icon: SiVercel, color: '#000000', name: 'Vercel' },
  netlify: { icon: SiNetlify, color: '#00C7B7', name: 'Netlify' },

  // Tools
  git: { icon: SiGit, color: '#F05032', name: 'Git' },
  github: { icon: SiGithub, color: '#181717', name: 'GitHub' },
  docker: { icon: SiDocker, color: '#2496ED', name: 'Docker' },
  postman: { icon: SiPostman, color: '#FF6C37', name: 'Postman' },
};

export const getTechConfig = (name: string): TechConfig => {
  const normalized = name.toLowerCase().trim();
  if (TECH_MAP[normalized]) {
    return TECH_MAP[normalized];
  }
  // Partial matches
  for (const [key, cfg] of Object.entries(TECH_MAP)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return cfg;
    }
  }
  return { icon: Code2, color: '#64748B', name };
};

interface TechIconProps {
  name: string;
  className?: string;
  colored?: boolean;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = 'w-4 h-4', colored = true }) => {
  const config = getTechConfig(name);
  const IconComponent = config.icon;
  return (
    <span
      className="inline-flex items-center justify-center flex-shrink-0"
      style={colored ? { color: config.color } : undefined}
    >
      <IconComponent className={className} />
    </span>
  );
};

interface TechBadgeProps {
  name: string;
  className?: string;
  size?: 'sm' | 'md';
}

export const TechBadge: React.FC<TechBadgeProps> = ({ name, className = '', size = 'md' }) => {
  const config = getTechConfig(name);
  const IconComponent = config.icon;

  const isSmall = size === 'sm';

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md font-mono border transition-all ${
        isSmall
          ? 'px-2 py-0.5 text-[11px] bg-slate-100/90 dark:bg-slate-900/90 border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300'
          : 'px-2.5 py-1 text-xs bg-slate-50 dark:bg-[#111116] border-slate-200 dark:border-white/[0.08] text-slate-800 dark:text-slate-200 hover:border-slate-300 dark:hover:border-white/[0.18]'
      } ${className}`}
    >
      <span style={{ color: config.color }} className="flex-shrink-0">
        <IconComponent className={isSmall ? 'w-3 h-3' : 'w-3.5 h-3.5'} />
      </span>
      <span>{name}</span>
    </span>
  );
};
