import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useTranslation } from 'react-i18next';

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
      date: 'March 2025 - Present',
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

  return (
    <section
      id="experience"
      className="py-20 transition-colors duration-300 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
            {t('experience.title')}
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-blue-600 dark:bg-blue-400"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            {t('experience.subtitle')}
          </p>
        </div>

        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className="relative max-w-4xl mx-auto"
        >
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex flex-col md:flex-row md:items-center mb-16 last:mb-0 transition-all duration-700 justify-between ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Timeline dot on the left for all screens */}
              <div className="flex items-start w-full md:items-center md:w-auto">
                <div className="relative left-0 z-10 flex items-center justify-center w-8 h-8 bg-blue-600 border-4 border-white rounded-full dark:bg-blue-400 dark:border-gray-800 md:left-0">
                  <Briefcase size={15} className="text-white" />
                </div>
              </div>

              {/* Content always on the right */}
              <div className="ml-8 md:w-full md:mt-0 md:ml-4">
                <div className="p-6 transition-all duration-300 bg-white rounded-lg shadow-md dark:bg-gray-900 hover:shadow-lg">
                  <h3 className="mb-1 text-xl font-bold text-gray-800 dark:text-white">
                    {exp.title[i18n.language as 'en' | 'vi']}
                  </h3>
                  <h4 className="mb-2 font-medium text-blue-600 dark:text-blue-400">
                    {exp.company[i18n.language as 'en' | 'vi']}
                  </h4>
                  <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {exp.location[i18n.language as 'en' | 'vi']}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {exp.date}
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600 list-disc list-inside dark:text-gray-300">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item[i18n.language as 'en' | 'vi']}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;