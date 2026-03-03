import React from 'react';
import { useInView } from '../hooks/useInView';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// icons for skills
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiTailwindcss,
  SiFigma,
  SiGit,
} from 'react-icons/si';
import { FaCss3Alt } from "react-icons/fa";


import SkillCard from './SkillCard';

interface Skill {
  name: string;
  level: number; // 0-100
  Icon: React.ElementType;
  gradient: string;
}

const Skills: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  
  const skills: Skill[] = [
    { name: 'React', level: 90, Icon: SiReact, gradient: 'from-blue-400 to-blue-600' },
    { name: 'JavaScript', level: 85, Icon: SiJavascript, gradient: 'from-yellow-400 to-yellow-500' },
    { name: 'TypeScript', level: 80, Icon: SiTypescript, gradient: 'from-blue-600 to-blue-800' },
    { name: 'HTML5', level: 95, Icon: SiHtml5, gradient: 'from-orange-400 to-red-400' },
    { name: 'CSS3', level: 95, Icon: FaCss3Alt, gradient: 'from-blue-400 to-teal-400' },
    { name: 'Tailwind', level: 90, Icon: SiTailwindcss, gradient: 'from-teal-400 to-blue-500' },
    { name: 'Figma', level: 70, Icon: SiFigma, gradient: 'from-pink-400 to-purple-400' },
    { name: 'Git', level: 85, Icon: SiGit, gradient: 'from-red-400 to-red-600' },
  ];

  const { t } = useTranslation();


  return (
    <section
      id="skills"
      className="py-20 transition-colors duration-300 bg-white lg:py-32 dark:bg-gray-950"
    >
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
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
        </div>

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                level={skill.level}
                Icon={skill.Icon}
                gradientClass={skill.gradient}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;