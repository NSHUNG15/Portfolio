import React from 'react';
import { ArrowDown } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Hero: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  return (
    <section 
      id="home" 
      className="relative flex items-center justify-center min-h-screen transition-colors duration-300 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div 
        ref={ref}
        className="container flex flex-col items-center px-4 py-20 mx-auto text-center"
      >
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="mb-6 text-4xl font-bold text-gray-800 md:text-6xl lg:text-7xl dark:text-white">
            <span className="block">Hello, I'm</span>
            <span className="text-blue-600 dark:text-blue-400">Nguyễn Sinh Hùng</span>
          </h1>

          <h2 className="max-w-2xl mx-auto mb-8 text-xl text-gray-600 md:text-2xl lg:text-3xl dark:text-gray-300">
            A passionate <span className="font-semibold text-purple-600 dark:text-purple-400">Frontend Developer</span> crafting beautiful digital experiences
          </h2>

          <div className="flex flex-col justify-center gap-4 mt-8 sm:flex-row">
            <a
              href="#projects"
              className="px-8 py-3 font-medium text-white transition-all duration-300 transform bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 font-medium text-blue-600 transition-all duration-300 transform bg-transparent border-2 border-blue-600 rounded-full dark:border-blue-400 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="#about"
            className="flex flex-col items-center text-gray-500 transition-colors duration-300 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="Scroll to About section"
          >
            <span className="mb-2 text-sm">Scroll Down</span>
            <ArrowDown className="animate-bounce" size={24} />
          </a>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute w-64 h-64 bg-blue-300 rounded-full top-20 right-10 dark:bg-blue-700 filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute w-64 h-64 delay-1000 bg-purple-300 rounded-full bottom-20 left-10 dark:bg-purple-700 filter blur-3xl opacity-20 animate-pulse"></div>
    </section>
  );
};

export default Hero;