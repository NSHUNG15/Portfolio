import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, Variants } from 'framer-motion';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants:Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <footer className="relative pt-12 pb-8 bg-white dark:bg-gray-950 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />

      <motion.div 
        className="container px-4 mx-auto max-w-7xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Main Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <motion.div 
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-900 text-white dark:bg-white dark:text-gray-900 mb-6 font-bold text-xl"
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                NSH
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Nguyễn Sinh Hùng
              </h3>
              <p className="max-w-md text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('footer.intro')}
              </p>
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-8">
              {[
                { name: 'GitHub', url: 'https://github.com/NSHUNG15', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
                { name: 'Facebook', url: 'https://web.facebook.com/WONHUN15', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.954 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.898 10.124-5.864 10.124-11.853z"/></svg> }
              ].map((social) => (
                <motion.a 
                  key={social.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Links Column */}
          <motion.div variants={itemVariants} className="lg:col-span-3 lg:col-start-7">
            <h4 className="mb-6 text-lg font-bold text-gray-900 dark:text-white">{t('footer.quickLinks')}</h4>
            <ul className="space-y-4">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'experience', label: 'Experience' },
              ].map((item) => (
                <li key={item.id}>
                  <a 
                    href={`/#${item.id}`} 
                    className="inline-block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 relative group"
                  >
                    {t(item.label)}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact Column */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h4 className="mb-6 text-lg font-bold text-gray-900 dark:text-white">{t('footer.contactInfo')}</h4>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400">
              <li className="group cursor-pointer">
                <span className="block text-sm text-gray-400 dark:text-gray-500 mb-1">Email</span>
                <a href="mailto:nshung0105@gmail.com" className="text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  nshung0105@gmail.com
                </a>
              </li>
              <li className="group cursor-pointer">
                <span className="block text-sm text-gray-400 dark:text-gray-500 mb-1">Phone</span>
                <a href="tel:+84857000163" className="text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  +84-857000163
                </a>
              </li>
              <li className="group">
                <span className="block text-sm text-gray-400 dark:text-gray-500 mb-1">Location</span>
                <span className="text-gray-900 dark:text-white">
                  Tp Đà Nẵng, Việt Nam
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        {/* BIG TYPOGRAPHY SECTION */}
        <motion.div 
          variants={itemVariants}
          className=" border-t border-gray-200 dark:border-gray-800 text-center relative"
        >          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 pt-4">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Nguyễn Sinh Hùng. All rights reserved.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="p-4 text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </motion.div>

      </motion.div>
    </footer>
  );
};

export default Footer;