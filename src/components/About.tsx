import React from 'react';
import { User, Mail, MapPin, Calendar, FileText, Github, Facebook } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import avatar from '../img/avatar.jpg';
import { useTranslation } from 'react-i18next';


const About: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const { t } = useTranslation();

  return (
    <section 
      id="about" 
      className="py-20 lg:mb-[8rem] transition-colors duration-300 bg-white dark:bg-gray-900"
    >
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
            {t('about.title')}
          </h2>
          <div className="w-20 h-1 mx-auto bg-blue-600 dark:bg-blue-400"></div>
        </div>

        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative">
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800 max-h-[40rem] ">
              {/* This would be replaced with an actual image */}
              <div className="absolute inset-0 items-center justify-center my-2 text-gray-400 dark:text-gray-600 ">
              <img src={avatar} alt="Profile" className="object-cover lg:w-[85%] lg:h-[40rem] w-full h-full" />
              </div>
            </div>
            
            <div className="absolute w-2/3 border-4 border-blue-600 rounded-lg lg:-bottom-12 -bottom-2 -right-2 lg:right-14 h-2/3 dark:border-blue-400 -z-10"></div>
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
              Frontend Developer & UX Designer
            </h3>
            
            <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
              {t('about.description1')}
            </p>
            
            <p className="mb-8 leading-relaxed text-gray-600 dark:text-gray-300">
              {t('about.description2')}
            </p>

            <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2">
              <div className="flex items-center">
                <User className="mr-3 text-blue-600 dark:text-blue-400" size={20} />
                <span className="text-gray-700 dark:text-gray-300">Nguyễn Sinh Hùng</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 text-blue-600 dark:text-blue-400" size={20} />
                <span className="text-gray-700 dark:text-gray-300">nshung0105@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-3 text-blue-600 dark:text-blue-400" size={20} />
                <span className="text-gray-700 dark:text-gray-300">Tp Đà Nẵng, Việt Nam</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-3 text-blue-600 dark:text-blue-400" size={20} />
                <span className="w-full text-gray-700 dark:text-gray-300">{t('about.time_work')}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 font-medium text-white transition-all duration-300 transform bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-105"
              >
                {t('about.btn_hire')}
              </a>
              <a 
                href="https://drive.google.com/file/d/1qPcwuptlOAjVa0uZxFet87WO_XupJT2q/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 font-medium text-gray-800 transition-all duration-300 bg-gray-200 rounded-full dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 dark:text-gray-200"
              >
                <FileText size={18} />
                {t('about.download_cv')}
              </a>
            </div>

            <div className="flex gap-4 mt-8">
              <a 
                href="https://github.com/NSHUNG15" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-700 transition-colors duration-300 bg-gray-200 rounded-full dark:bg-gray-800 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label="GitHub profile"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://web.facebook.com/WONHUN15" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-700 transition-colors duration-300 bg-gray-200 rounded-full dark:bg-gray-800 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label="Facebook profile"
              >
                <Facebook size={20} />
              </a>  
              {/* <a 
                href="#" 
                className="p-2 text-gray-700 transition-colors duration-300 bg-gray-200 rounded-full dark:bg-gray-800 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label="Twitter profile"
              >
                <Twitter size={20} />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;