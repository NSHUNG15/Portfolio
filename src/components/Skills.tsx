import React from 'react';
import { useInView } from '../hooks/useInView';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

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
  const { ref, inView } = useInView({ threshold: 0.1 });
  const { t } = useTranslation();

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
      className="py-20 transition-colors duration-300 bg-white lg:py-32 dark:bg-gray-950"
    >
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
            {t('skills.title')}
          </h2>
          <motion.div
            className="w-20 h-1.5 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="max-w-2xl mx-auto text-gray-800 dark:text-white">
            {t('skills.description')}
          </p>
        </motion.div>

        {/* Skill Groups */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-700 space-y-16 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {skillGroups.map((group, groupIndex) => (
            <div key={group.groupKey}>
              {/* Group Label */}
              <motion.h3
                className="flex items-center gap-3 mb-8 text-xl font-semibold text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              >
                <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full inline-block" />
                {t(`skills.group.${group.groupKey}`, {
                  defaultValue: group.groupKey === 'code' ? '💻 Development' : '🎨 Design',
                })}
              </motion.h3>

              {/* Grid */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
                {group.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.04 }}
                  >
                    <SkillCard
                      name={skill.name}
                      level={skill.level}
                      Icon={skill.Icon}
                      gradientClass={skill.gradient}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;