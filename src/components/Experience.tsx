import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface Experience {
  id: number;
  title: { en: string; vi: string };
  company: { en: string; vi: string };
  location: { en: string; vi: string };
  date: string;
  description: { en: string; vi: string }[];
}

const Experience: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const { t, i18n } = useTranslation();

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
        {
          en: 'Conducted testing and debugging to enhance application functionality and user experience',
          vi: 'Thực hiện kiểm thử và sửa lỗi để nâng cao chức năng ứng dụng và trải nghiệm người dùng',
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
          en: 'Applied knowledge to create functional and visually appealing websites',
          vi: 'Áp dụng kiến thức để tạo ra các website có chức năng và hấp dẫn về mặt thị giác',
        },
        {
          en: 'Optimized websites for performance and cross-browser compatibility',
          vi: 'Tối ưu hóa website để cải thiện hiệu suất và khả năng tương thích đa trình duyệt',
        },
        {
          en: 'Experimented with various design patterns to improve user engagement',
          vi: 'Thử nghiệm với nhiều mô hình thiết kế để cải thiện sự tương tác của người dùng',
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
          en: 'Worked with RESTful APIs and adhered to company standards for state management',
          vi: 'Làm việc với các API RESTful và tuân thủ các tiêu chuẩn của công ty về quản lý trạng thái',
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
        {
          en: 'Contributed to the design and implementation of user-friendly interfaces for client projects',
          vi: 'Đóng góp vào việc thiết kế và triển khai các giao diện thân thiện với người dùng cho các dự án của khách hàng',
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="experience"
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
            {t('experience.title')}
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
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative flex gap-8 mb-12 last:mb-0"
              variants={itemVariants}
            >
              {/* Timeline Line */}
              {index < experiences.length  && (
                <motion.div
                  className="absolute z-10 w-1 left-6 top-20 bg-gradient-to-b from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
                  initial={{ height: 0 }}
                  whileInView={{ height: '6rem' }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              )}

              {/* Timeline Dot */}
              <motion.div
                className="relative flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full shadow-lg bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
                whileHover={{ scale: 1.15 }}
              >
                <div className="w-4 h-4 bg-white rounded-full" />
              </motion.div>

              {/* Content Card */}
              <motion.div
                className="flex-grow p-6 transition-all duration-300 border border-blue-100 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500"
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              >
                <div className="flex flex-col gap-2 mb-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title[i18n.language as 'en' | 'vi']}
                    </h3>
                    <p className="font-semibold text-blue-600 dark:text-blue-400">
                      {exp.company[i18n.language as 'en' | 'vi']}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-800 dark:text-white">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    {exp.location[i18n.language as 'en' | 'vi']}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {exp.date}
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex gap-3 text-gray-700 dark:text-gray-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                      {item[i18n.language as 'en' | 'vi']}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;