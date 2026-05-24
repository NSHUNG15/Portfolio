import React from 'react';
import { Code2, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, Variants } from 'framer-motion';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const textRevealVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <section 
      id="home" 
      className="relative flex items-center justify-center min-h-screen pt-12 overflow-hidden transition-colors duration-300 bg-gray-50 dark:bg-gray-950"
    >
      {/* Animated Mesh Gradient Background (Modern Glassmorphism vibe) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: ['-20%', '20%', '-20%'],
            y: ['-20%', '20%', '-20%'],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-400/30 dark:bg-blue-600/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen"
        />
        <motion.div 
          animate={{ 
            x: ['20%', '-20%', '20%'],
            y: ['20%', '-20%', '20%'],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-400/30 dark:bg-purple-600/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute top-[30%] left-[30%] w-[40%] h-[40%] bg-cyan-300/20 dark:bg-cyan-500/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen"
        />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay dark:opacity-10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <motion.div 
        className="container relative z-10 flex flex-col items-center px-4 mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Modern Badge */}
        <motion.div variants={textRevealVariants} className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 border rounded-full shadow-sm bg-white/50 dark:bg-gray-900/50 backdrop-blur-md dark:text-blue-400 border-blue-200/50 dark:border-blue-900/50">
            <Sparkles size={16} className="animate-pulse" />
            <span>Available for new projects</span>
          </div>
        </motion.div>

        {/* Hero Typography */}
        <div className="max-w-4xl mx-auto mb-8">
          <motion.h1 
            variants={textRevealVariants}
            className="text-5xl font-extrabold tracking-tight text-gray-900 md:text-7xl lg:text-8xl dark:text-white"
          >
            <span className="block mb-2">{t('hero.greeting')}</span>
            <span className="relative inline-block text-transparent h-[7rem] bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient-x">
              Nguyễn Sinh Hùng
            </span>
          </motion.h1>
        </div>

        <motion.p 
          variants={textRevealVariants}
          className="max-w-2xl mx-auto mb-12 text-lg leading-relaxed text-gray-600 md:text-xl lg:text-2xl dark:text-gray-400"
        >
          {t('hero.description1')}
          <span className="font-semibold text-gray-900 dark:text-gray-200"> Frontend Developer & UI/UX Designer </span> 
          {t('hero.description2')}
        </motion.p>

        {/* Buttons */}
        <motion.div 
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.a
            variants={buttonVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-gray-900 dark:bg-white dark:text-gray-900 rounded-full hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black dark:to-white"></span>
            <span className="relative flex items-center gap-2">
              <Code2 size={20} className="transition-transform group-hover:rotate-12" />
              {t('hero.btn_work')}
            </span>
          </motion.a>
          
          <motion.a
            variants={buttonVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 transition-all duration-300 bg-white border border-gray-200 rounded-full dark:bg-gray-900 dark:text-white dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg"
          >
            {t('hero.btn_contact')}
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute transform -translate-x-1/2 left-1/2 -bottom-24"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-3 text-gray-400 transition-colors duration-300 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 group"
            aria-label="Scroll to About section"
          >
            <span className="text-xs font-medium tracking-widest uppercase">{t('hero.btn_down')}</span>
            <motion.div
              className="flex items-center justify-center w-8 h-12 border-2 border-current rounded-full"
            >
              <motion.div 
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-1.5 h-3 bg-current rounded-full mb-4"
              />
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;