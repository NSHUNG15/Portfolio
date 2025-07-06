import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  // Sử dụng id cố định cho anchor, label dùng i18n
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
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Xử lý click cho nav item
  const handleNavClick = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    // Nếu có state scrollTo khi vừa chuyển route về trang chủ thì cuộn đến section
    if (location.pathname === '/' && (location.state as any)?.scrollTo) {
      const id = (location.state as any).scrollTo;
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // delay để đảm bảo DOM đã render
    }
  }, [location]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between px-4 mx-auto">
        <a 
          href="#home" 
          className="text-2xl font-bold text-blue-600 transition-colors duration-300 dark:text-blue-400"
        >
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="items-center hidden gap-8 md:flex">
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className="transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400 bg-transparent border-none outline-none cursor-pointer"
                  style={{ background: 'none', border: 'none', padding: 0 }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleTheme}
            className="p-2 text-gray-700 transition-colors duration-300 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          {/* Language Switcher */}
          <div className="flex items-center gap-4">
            <button onClick={() => { i18n.changeLanguage('en'); localStorage.setItem('language', 'en'); }} className={i18n.language === 'en' ? 'font-bold underline' : ''}>EN</button>
            <button onClick={() => { i18n.changeLanguage('vi'); localStorage.setItem('language', 'vi'); }} className={i18n.language === 'vi' ? 'font-bold underline' : ''}>VI</button>
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 text-gray-700 transition-colors duration-300 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
           {/* Language Switcher */}
           <div className="flex items-center gap-4">
            <button onClick={() => { i18n.changeLanguage('en'); localStorage.setItem('language', 'en'); }} className={i18n.language === 'en' ? 'font-bold underline' : ''}>EN</button>
            <button onClick={() => { i18n.changeLanguage('vi'); localStorage.setItem('language', 'vi'); }} className={i18n.language === 'vi' ? 'font-bold underline' : ''}>VI</button>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed h-screen inset-0 bg-white dark:bg-gray-900 z-40 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden pt-20`}
      >
        <nav className="container px-4 mx-auto">
          <ul className="flex flex-col gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => { handleNavClick(item.id); setIsMenuOpen(false); }}
                  className="block py-2 text-xl text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 bg-transparent border-none outline-none cursor-pointer"
                  style={{ background: 'none', border: 'none', padding: 0 }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;