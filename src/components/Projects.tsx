import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useTranslation } from 'react-i18next';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}
const Projects: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [filter, setFilter] = useState<string>('all');
  const { t } = useTranslation();

  // Sample projects data
  const projects: Project[] = [
    {
      id: 1,
      title: 'FORM - Sport KHMT',
      description: t('projects.projectDescriptions.1'),
      image: 'https://images.pexels.com/photos/6956802/pexels-photo-6956802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
      demoUrl: 'https://hoi-thao-doan-truong-khmt.vercel.app',
      githubUrl: '#',
      featured: true, 
    },
    {
      id: 2,
      title: 'Travel Golobe (Team)',
      description: t('projects.projectDescriptions.2'),
      image: 'https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'TypeScript', 'PostgreSQL', 'API', 'Tailwind CSS'],
      demoUrl: 'https://travel-golobe.vercel.app/',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: t('projects.projectDescriptions.3'),
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      demoUrl: 'https://portfolio-nsh.vercel.app',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 4,
      title: "Sports Tracker Platform",
      description: t('projects.projectDescriptions.4'),
      image: "https://images.pexels.com/photos/4164777/pexels-photo-4164777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB", "Express"],
      demoUrl: "https://sporttracker-ftdv.onrender.com",
      githubUrl: "#",
      featured: false,
    },
  ];

  // Get all unique tags
  const allTags = [...new Set(projects.flatMap(project => project.tags))];

  // Filter projects based on selected tag
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));
  
  return (
    <section
      id="projects"
      className="py-20 transition-colors duration-300 bg-white dark:bg-gray-900"
    >
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
            {t('projects.title')}
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-blue-600 dark:bg-blue-400"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            {t('projects.description')}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === tag
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
              <img
                src={`https://api.microlink.io/?url=${project.demoUrl}&screenshot=true&embed=screenshot.url`}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
              />
                {project.featured && (
                  <div className="absolute px-3 py-1 text-xs font-bold text-white bg-blue-600 rounded-full top-4 left-4">
                    {t('projects.btn_featured')}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  {t(project.description)}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    <a
                      href={project.demoUrl}
                      className="flex items-center gap-1 text-blue-600 transition-colors duration-300 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-1 text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} /> Code
                    </a>
                  </div>
                  {/* <a
                    href={`#project-${project.id}`}
                    className="flex items-center gap-1 text-blue-600 transition-colors duration-300 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    Details <ArrowRight size={16} />
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-gray-600 dark:text-gray-400">No projects found with the selected filter.</p>
          </div>
        )}

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 font-medium text-white transition-all duration-300 transform bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-105"
          >
            {t('projects.btn_all')} <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;