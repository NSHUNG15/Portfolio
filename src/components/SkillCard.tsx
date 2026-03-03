import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  level: number;
  Icon: React.ElementType;
  gradientClass?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ 
  name, 
  level, 
  Icon, 
  gradientClass = 'from-indigo-500 to-purple-500' 
}) => {
  return (
    <motion.div
      className="relative p-6 overflow-hidden border group rounded-2xl backdrop-blur-md bg-white/40 dark:bg-gray-800/40 border-white/20 dark:border-gray-700/20"
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {/* Gradient background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />

      {/* Content */}
      <div className="relative space-y-4">
        <motion.div
          className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-white/20 to-white/10 dark:from-white/10 dark:to-white/5"
          whileHover={{ scale: 1.2, rotate: 10 }}
        >
          <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </motion.div>

        <div>
          <h4 className="mb-2 font-bold text-gray-900 dark:text-white">{name}</h4>
          
          {/* Progress indicator */}
          <div className="space-y-2">
            <div className="h-2 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-700">
              <motion.div
                className={`h-full bg-gradient-to-r ${gradientClass} rounded-full`}
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
              />
            </div>
            <p className="text-xs text-gray-800 dark:text-gray-800">{level}% Proficiency</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
