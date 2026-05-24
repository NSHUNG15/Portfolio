import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Experience {
  id: number;
  title: { en: string; vi: string };
  company: { en: string; vi: string };
  location: { en: string; vi: string };
  date: string;
  description: { en: string; vi: string }[];
}

const Experience: React.FC = () => {
  const { t, i18n } = useTranslation();
  const containerRef = React.useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const experiences: Experience[] = [
    {
      id: 1,
      title: {
        en: 'Academic Project Development',
        vi: 'Phát triển Dự án Học thuật',
      },
      company: {
        en: 'Duy Tân University',
        vi: 'Đại học Duy Tân',
      },
      location: {
        en: 'Vietnam',
        vi: 'Việt Nam',
      },
      date: '2021 - 2025',
      description: [
        {
          en: 'Completed a series of academic projects including CDIO 1, CDIO 2, CDIO 3, CDIO 4, specialized projects, and a graduation thesis',
          vi: 'Hoàn thành một loạt dự án học thuật bao gồm CDIO 1, CDIO 2, CDIO 3, CDIO 4, các dự án chuyên ngành và luận văn tốt nghiệp',
        },
        {
          en: 'Designed and developed user interfaces for team-based projects',
          vi: 'Thiết kế và phát triển giao diện người dùng cho các dự án theo nhóm',
        },
        {
          en: 'Utilized HTML/CSS and applied Tailwind CSS and React frameworks to create responsive and modern web applications',
          vi: 'Sử dụng HTML/CSS và áp dụng các framework Tailwind CSS và React để tạo ra các ứng dụng web hiện đại và responsive',
        },
        {
          en: 'Collaborated with team members to ensure project milestones were met on time',
          vi: 'Hợp tác với các thành viên trong nhóm để đảm bảo các mốc dự án được hoàn thành đúng hạn',
        },
      ],
    },
    {
      id: 2,
      title: {
        en: 'Personal Website Development',
        vi: 'Phát triển Website Cá nhân',
      },
      company: {
        en: 'Freelance Projects',
        vi: 'Dự án Tự do',
      },
      location: {
        en: 'Vietnam',
        vi: 'Việt Nam',
      },
      date: '2021 - 2025',
      description: [
        {
          en: 'Designed and built small-scale personal websites using HTML, CSS, and JavaScript',
          vi: 'Thiết kế và xây dựng các website cá nhân quy mô nhỏ bằng HTML, CSS và JavaScript',
        },
        {
          en: 'Self-taught modern web development techniques and best practices',
          vi: 'Tự học các kỹ thuật phát triển web hiện đại và các phương pháp hay nhất',
        },
        {
          en: 'Optimized websites for performance and cross-browser compatibility',
          vi: 'Tối ưu hóa website để cải thiện hiệu suất và khả năng tương thích đa trình duyệt',
        },
      ],
    },
    {
      id: 3,
      title: {
        en: 'Frontend Developer',
        vi: 'Lập trình viên Frontend',
      },
      company: {
        en: 'GoliveDev',
        vi: 'GoliveDev',
      },
      location: {
        en: 'Vietnam',
        vi: 'Việt Nam',
      },
      date: 'March 2025 - November 2025',
      description: [
        {
          en: 'Developed and maintained UI/UX for real-world projects, ensuring seamless user interactions',
          vi: 'Phát triển và duy trì UI/UX cho các dự án thực tế, đảm bảo tương tác người dùng liền mạch',
        },
        {
          en: 'Utilized Vue.js, Tailwind CSS, and Nuxt UI to build scalable and responsive web applications',
          vi: 'Sử dụng Vue.js, Tailwind CSS và Nuxt UI để xây dựng các ứng dụng web có khả năng mở rộng và responsive',
        },
        {
          en: 'Collaborated with backend developers to integrate APIs and ensure smooth data flow',
          vi: 'Hợp tác với các lập trình viên backend để tích hợp API và đảm bảo luồng dữ liệu mượt mà',
        },
        {
          en: 'Participated in code reviews and implemented feedback to improve code quality',
          vi: 'Tham gia đánh giá mã và thực hiện phản hồi để cải thiện chất lượng mã',
        },
      ],
    },
  ];

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="experience"
      className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-950 relative overflow-hidden"
    >
      <div className="container px-4 mx-auto max-w-7xl">
        <motion.div
          className="mb-16 md:mb-24 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl dark:text-white mb-6">
            {t('experience.title')}
            <span className="text-blue-600 dark:text-blue-400">.</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My professional journey and the experiences that shaped my skills.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12" ref={containerRef}>
          {/* Left Column: Sticky Title */}
          <div className="lg:w-1/3 relative hidden lg:block">
            <div className="sticky top-40 space-y-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                A Timeline of <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  Growth & Learning
                </span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                I've been fortunate to work with amazing teams and learn from various projects along the way.
              </p>
              
              <motion.div 
                className="w-24 h-24 mt-12 opacity-50"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 0L54.3301 25L75 6.69873L65 30L93.3013 25L75 45.6699L100 50L75 54.3301L93.3013 75L65 70L75 93.3013L54.3301 75L50 100L45.6699 75L25 93.3013L35 70L6.69873 75L25 54.3301L0 50L25 45.6699L6.69873 25L35 30L25 6.69873L45.6699 25L50 0Z" fill="currentColor" className="text-blue-200 dark:text-blue-900"/>
                </svg>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Timeline Content */}
          <div className="lg:w-2/3 relative">
            {/* Animated Line */}
            <div className="absolute left-[27px] top-4 bottom-4 w-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden hidden md:block">
              <motion.div 
                className="w-full bg-gradient-to-b from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 transform origin-top"
                style={{ scaleY }}
              />
            </div>

            <div className="space-y-16">
              {experiences.map((exp) => (
                <motion.div
                  key={exp.id}
                  className="relative pl-0 md:pl-20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-6 w-14 h-14 rounded-2xl bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 shadow-xl flex items-center justify-center z-10 hidden md:flex group-hover:border-blue-500 transition-colors">
                    <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>

                  {/* Content Card */}
                  <div className="group relative p-8 rounded-3xl bg-white dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-600 to-purple-600 blur-[2px] transition-opacity duration-300 -z-10" />
                    
                    <div className="flex flex-col gap-4 mb-6 md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.title[i18n.language as 'en' | 'vi']}
                        </h3>
                        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                          {exp.company[i18n.language as 'en' | 'vi']}
                        </p>
                      </div>
                      <div className="flex flex-col items-start gap-2 md:items-end">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
                          <Calendar size={14} />
                          {exp.date}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-sm">
                          <MapPin size={14} />
                          {exp.location[i18n.language as 'en' | 'vi']}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-4 text-gray-600 dark:text-gray-400"
                        >
                          <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400" />
                          <span className="leading-relaxed">
                            {item[i18n.language as 'en' | 'vi']}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
