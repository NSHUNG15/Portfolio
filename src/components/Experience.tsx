import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
}

const Experience: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  
  const experiences: Experience[] = [
    {
      id: 1,
      title: 'Academic Project Development',
      company: 'Duy Tân University',
      location: 'Vietnam',
      date: '2021 - 2025',
      description: [
        'Completed a series of academic projects including CDIO 1, CDIO 2, CDIO 3, CDIO 4, specialized projects, and a graduation thesis',
        'Designed and developed user interfaces for team-based projects',
        'Utilized HTML/CSS and applied Tailwind CSS and React frameworks to create responsive and modern web applications',
        'Collaborated with team members to ensure project milestones were met on time',
        'Conducted testing and debugging to enhance application functionality and user experience',
      ],
    },
    {
      id: 2,
      title: 'Personal Website Development',
      company: 'Freelance Projects',
      location: 'Vietnam',
      date: '2021 - 2025',
      description: [
        'Designed and built small-scale personal websites using HTML, CSS, and JavaScript',
        'Self-taught modern web development techniques and best practices',
        'Applied knowledge to create functional and visually appealing websites',
        'Optimized websites for performance and cross-browser compatibility',
        'Experimented with various design patterns to improve user engagement',
      ],
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'GoliveDev',
      location: 'Vietnam',
      date: 'March 2025 - Present',
      description: [
        'Developed and maintained UI/UX for real-world projects, ensuring seamless user interactions',
        'Worked with RESTful APIs and adhered to company standards for state management',
        'Utilized Vue.js, Tailwind CSS, and Nuxt UI to build scalable and responsive web applications',
        'Collaborated with backend developers to integrate APIs and ensure smooth data flow',
        'Participated in code reviews and implemented feedback to improve code quality',
        'Contributed to the design and implementation of user-friendly interfaces for client projects',
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
            Work Experience
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-blue-600 dark:bg-blue-400"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            My professional journey and the companies I've had the pleasure to work with.
          </p>
        </div>

        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className="relative max-w-4xl mx-auto"
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 transform md:-translate-x-1/2 "></div>

          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className={`relative flex flex-col md:flex-row md:items-center mb-16 last:mb-0 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute top-0 z-10 flex items-center justify-center w-8 h-8 transform bg-blue-600 border-4 border-white rounded-full left-4 md:left-1/2 dark:bg-blue-400 dark:border-gray-800 md:-translate-x-1/2">
                <Briefcase size={15} className="text-white" />
              </div>

              {/* Content */}
              <div className="pl-16 md:pl-0 md:w-full md:pr-8">    
                <div className="p-6 transition-all duration-300 bg-white rounded-lg shadow-md dark:bg-gray-900 hover:shadow-lg">
                  <h3 className="mb-1 text-xl font-bold text-gray-800 dark:text-white">
                    {exp.title}
                  </h3>
                  <h4 className="mb-2 font-medium text-blue-600 dark:text-blue-400">
                    {exp.company}
                  </h4>
                  <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {exp.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {exp.date}
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600 list-disc list-inside dark:text-gray-300">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 font-medium text-blue-600 transition-all duration-300 bg-transparent border-2 border-blue-600 rounded-full dark:border-blue-400 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;