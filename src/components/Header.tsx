import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/theme';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollFrame = React.useRef<number | null>(null);
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { id: 'home', label: t('Home', 'Home') },
    { id: 'about', label: t('About', 'About') },
    { id: 'skills', label: t('Skills', 'Skills') },
    { id: 'projects', label: t('Projects', 'Projects') },
    { id: 'experience', label: t('Experience', 'Experience') },
    { id: 'contact', label: t('Contact', 'Contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (scrollFrame.current !== null) return;
      scrollFrame.current = window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 10);
        scrollFrame.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      if (scrollFrame.current !== null) {
        window.cancelAnimationFrame(scrollFrame.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/#' + id);
    } else {
      window.location.hash = id;
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (location.pathname === '/' && state?.scrollTo) {
      const id = state.scrollTo;
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      {/* Desktop Floating Capsule */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block"
      >
        <div className={`
          flex items-center gap-2 px-4 py-2 transition-all duration-500 rounded-full
          ${isScrolled 
            ? 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]' 
            : 'bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border border-white/20 dark:border-gray-700/30'
          }
        `}>
          <a 
            href="/" 
            className="px-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
          >
            NSH.
          </a>
          
          <div className="w-px h-6 mx-2 bg-gray-300 dark:bg-gray-700"></div>
          
          <nav>
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className="relative px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-300 rounded-full dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 group"
                  >
                    {item.label}
                    <span className="absolute inset-0 transition-opacity duration-300 rounded-full opacity-0 bg-blue-50 dark:bg-white/5 group-hover:opacity-100 -z-10"></span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="w-px h-6 mx-2 bg-gray-300 dark:bg-gray-700"></div>

          <div className="flex items-center gap-1">
             <button onClick={() => { i18n.changeLanguage('en'); localStorage.setItem('language', 'en'); }} className={`px-2 py-1 text-xs font-bold rounded-full transition-colors ${i18n.language === 'en' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400' : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-200'}`}>EN</button>
             <button onClick={() => { i18n.changeLanguage('vi'); localStorage.setItem('language', 'vi'); }} className={`px-2 py-1 text-xs font-bold rounded-full transition-colors ${i18n.language === 'vi' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400' : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-200'}`}>VI</button>
          </div>

          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="flex items-center justify-center w-8 h-8 ml-1 text-gray-700 transition-colors duration-300 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-300 ${
          isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <a href="/" className="font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            NSH.
          </a>
          <div className="flex items-center gap-3">
             <button onClick={() => { i18n.changeLanguage('en'); localStorage.setItem('language', 'en'); }} className={`text-xs font-bold ${i18n.language === 'en' ? 'text-blue-600' : 'text-gray-500'}`}>EN</button>
             <button onClick={() => { i18n.changeLanguage('vi'); localStorage.setItem('language', 'vi'); }} className={`text-xs font-bold ${i18n.language === 'vi' ? 'text-blue-600' : 'text-gray-500'}`}>VI</button>
             
             <button onClick={toggleTheme} className="p-2 text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-300">
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
             </button>

             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-700 dark:text-gray-300">
               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl md:hidden"
          >
            <nav className="w-full px-8">
              <ul className="flex flex-col gap-6 text-center">
                {navItems.map((item, index) => (
                  <motion.li 
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <button
                      type="button"
                      onClick={() => handleNavClick(item.id)}
                      className="text-3xl font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {item.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
