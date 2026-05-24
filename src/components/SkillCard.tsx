import React, { MouseEvent } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

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
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden cursor-default transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg dark:hover:shadow-blue-500/10"
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Border glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.4),
              transparent 80%
            )
          `,
          WebkitMaskImage: `radial-gradient(black, black) content-box content-box`,
          WebkitMaskComposite: `xor`,
          padding: `1px`,
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          className={`flex items-center justify-center w-14 h-14 mb-4 rounded-2xl bg-gradient-to-br ${gradientClass} text-white shadow-md`}
          whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-7 h-7" />
        </motion.div>
        <h4 className="font-bold text-gray-900 dark:text-white mb-2">{name}</h4>
        
        {/* Modern tiny progress bar */}
        <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-1.5 mt-2 overflow-hidden">
          <motion.div 
            className={`bg-gradient-to-r ${gradientClass} h-1.5 rounded-full`}
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
