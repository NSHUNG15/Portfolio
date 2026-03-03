import React from 'react';
import { Mail, MapPin, FileText, Github, Facebook, Download } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import avatar from '../img/avatar.jpg';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const skills = ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Figma', 'UI/UX'];

  return (
    <section 
      id="about" 
      className="py-20 transition-colors duration-300 bg-white lg:py-32 dark:bg-gray-950"
    >
      <div className="container px-4 mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
            About Me
          </h2>
          <motion.div
            className="w-20 h-1.5 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <motion.div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Image Section */}
          <motion.div 
            className="relative group"
            variants={itemVariants}
          >
            <motion.div
              className="relative z-10 aspect-[3/4] w-full rounded-2xl overflow-hidden max-h-[50rem]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
              <img 
                src={avatar} 
                alt="Profile" 
                className="object-cover w-full h-full" 
              />
            </motion.div>
            
            {/* Decorative element */}
            <motion.div
              className="absolute w-40 h-40 border-2 -bottom-6 -right-6 border-blue-600/30 dark:border-blue-400/30 rounded-2xl -z-10"
              animate={{ rotate: 5 }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Content Section */}
          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                Frontend Developer & UI/UX Designer
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {t('about.description1')}
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {t('about.description2')}
              </p>
            </motion.div>

            {/* Info Grid */}
            <motion.div 
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
              variants={containerVariants}
            >
              <motion.div 
                className="p-4 border border-blue-100 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 dark:border-gray-700"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Mail className="mb-2 text-blue-600 dark:text-blue-400" size={20} />
                <p className="text-sm text-gray-800 dark:text-gray-800">Email</p>
                <p className="font-semibold text-gray-900 dark:text-white">nshung0105@gmail.com</p>
              </motion.div>

              <motion.div 
                className="p-4 border border-blue-100 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 dark:border-gray-700"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <MapPin className="mb-2 text-blue-600 dark:text-blue-400" size={20} />
                <p className="text-sm text-gray-800 dark:text-gray-800">Location</p>
                <p className="font-semibold text-gray-900 dark:text-white">Tp Đà Nẵng, VN</p>
              </motion.div>
            </motion.div>

            {/* Skills Tags */}
            <motion.div variants={itemVariants} className="space-y-3">
              <p className="font-semibold text-gray-900 dark:text-white">Key Skills</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 text-sm font-medium text-blue-700 border border-blue-200 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 dark:text-blue-300 dark:border-blue-800"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              variants={itemVariants}
            >
              <motion.a 
                href="#contact" 
                className="relative px-8 py-3 overflow-hidden font-semibold text-white group rounded-xl bg-gradient-to-r from-blue-600 to-purple-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:opacity-100" />
                <span className="relative">Hire Me</span>
              </motion.a>

              <motion.a 
                href="https://drive.google.com/file/d/1qPcwuptlOAjVa0uZxFet87WO_XupJT2q/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3 font-semibold text-blue-600 transition-all duration-300 border-2 border-blue-200 dark:text-blue-400 bg-white/50 dark:bg-gray-900/50 dark:border-blue-900/50 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-800/50 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
              >
                <Download size={18} />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4 pt-4"
              variants={itemVariants}
            >
              <motion.a 
                href="https://github.com/NSHUNG15" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 text-gray-700 transition-all duration-300 bg-gray-100 dark:text-gray-300 dark:bg-gray-800 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400"
                whileHover={{ scale: 1.1, y: -3 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                href="https://web.facebook.com/WONHUN15" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 text-gray-700 transition-all duration-300 bg-gray-100 dark:text-gray-300 dark:bg-gray-800 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400"
                whileHover={{ scale: 1.1, y: -3 }}
              >
                <Facebook size={20} />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;