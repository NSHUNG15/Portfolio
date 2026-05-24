import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, Variants } from 'framer-motion';

// Code icons
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiTailwindcss,
  SiGithub,
  SiNpm,
  SiMongodb,
  SiVercel,
  SiStyledcomponents,
  SiFramer,
  SiPostman,
  SiVscodium,
} from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';

// Design icons
import {
  SiFigma,
  SiCanva,
  SiSketch,
  SiNotion,
} from 'react-icons/si';

import SkillCard from './SkillCard';

interface Skill {
  name: string;
  level: number;
  Icon: React.ElementType;
  gradient: string;
}

interface SkillGroup {
  groupKey: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const skillGroups: SkillGroup[] = [
    {
      groupKey: 'code',
      skills: [
        { name: 'ReactJS',         level: 90, Icon: SiReact,           gradient: 'from-cyan-400 to-blue-500' },
        { name: 'JavaScript',      level: 85, Icon: SiJavascript,       gradient: 'from-yellow-300 to-yellow-500' },
        { name: 'TypeScript',      level: 80, Icon: SiTypescript,       gradient: 'from-blue-500 to-blue-700' },
        { name: 'HTML5',           level: 95, Icon: SiHtml5,            gradient: 'from-orange-400 to-red-500' },
        { name: 'CSS3',            level: 95, Icon: FaCss3Alt,          gradient: 'from-blue-400 to-teal-400' },
        { name: 'TailwindCSS',     level: 90, Icon: SiTailwindcss,      gradient: 'from-teal-400 to-cyan-500' },
        { name: 'Styled Components', level: 70, Icon: SiStyledcomponents, gradient: 'from-pink-500 to-yellow-400' },
        { name: 'Framer Motion',   level: 72, Icon: SiFramer,           gradient: 'from-indigo-400 to-violet-600' },
        { name: 'MongoDB',         level: 60, Icon: SiMongodb,          gradient: 'from-green-400 to-green-700' },
        { name: 'npm',             level: 85, Icon: SiNpm,              gradient: 'from-red-500 to-red-700' },
        { name: 'GitHub',          level: 85, Icon: SiGithub,           gradient: 'from-gray-600 to-gray-900' },
        { name: 'Postman',         level: 70, Icon: SiPostman,          gradient: 'from-orange-400 to-orange-600' },
        { name: 'Vercel',          level: 75, Icon: SiVercel,           gradient: 'from-gray-400 to-gray-700' },
        { name: 'VS Code',         level: 90, Icon: SiVscodium,         gradient: 'from-blue-500 to-cyan-400' },
      ],
    },
    {
      groupKey: 'design',
      skills: [
        { name: 'Figma',           level: 90, Icon: SiFigma,            gradient: 'from-pink-400 to-purple-500' },
        { name: 'Canva',           level: 70, Icon: SiCanva,            gradient: 'from-cyan-400 to-blue-500' },
        { name: 'Sketch',          level: 55, Icon: SiSketch,           gradient: 'from-yellow-400 to-orange-400' },
        { name: 'Notion',          level: 60, Icon: SiNotion,           gradient: 'from-gray-500 to-gray-800' },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-950 relative overflow-hidden"
    >
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl dark:text-white mb-4">
            {t('skills.title')}
            <span className="text-blue-600 dark:text-blue-400">.</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('skills.description')}
          </p>
        </motion.div>

        {/* Skill Groups */}
        <div className="space-y-20">
          {skillGroups.map((group) => (
            <motion.div 
              key={group.groupKey}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="relative"
            >
              {/* Decorative background text */}
              <div className="absolute -top-10 -left-4 md:-left-10 text-[6rem] md:text-[8rem] font-black text-gray-200/50 dark:text-gray-800/30 -z-10 pointer-events-none select-none tracking-tighter uppercase">
                {group.groupKey}
              </div>

              {/* Group Label */}
              <motion.h3
                variants={itemVariants}
                className="inline-flex items-center gap-3 mb-10 px-6 py-3 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  {t(`skills.group.${group.groupKey}`, {
                    defaultValue: group.groupKey === 'code' ? 'Development Tools' : 'Design & Productivity',
                  })}
                </span>
              </motion.h3>

              {/* Grid */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 relative z-10">
                {group.skills.map((skill) => (
                  <motion.div key={skill.name} variants={itemVariants}>
                    <SkillCard
                      name={skill.name}
                      level={skill.level}
                      Icon={skill.Icon}
                      gradientClass={skill.gradient}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
