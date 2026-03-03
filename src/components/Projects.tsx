import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { projects as projectsData, ProjectData } from '../services/projects';

const Projects: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [filter, setFilter] = useState<string>('all');
  const { t } = useTranslation();

  const projects: ProjectData[] = projectsData;
  const allTags = [...new Set(projects.flatMap(project => project.tags))];

  const featuredProjects = projects
    .filter((p) => p.featured)
    .concat(projects.filter((p) => !p.featured))
    .slice(0, 4);

  const filteredProjects = filter === 'all'
    ? featuredProjects
    : featuredProjects.filter(project => project.tags.includes(filter));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
  };
  
  return (
    <section
      id="projects"
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
            {t('projects.title')}
          </h2>
          <motion.div
            className="w-20 h-1.5 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="max-w-2xl mx-auto text-gray-800 dark:text-white">
            {t('projects.description')}
          </p>
        </motion.div>

        {/* Filter Tags */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.button
            onClick={() => setFilter('all')}
            className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
              filter === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </motion.button>
          {allTags.map(tag => (
            <motion.button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                filter === tag
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="relative overflow-hidden transition-all duration-300 bg-white border border-gray-100 group rounded-2xl dark:bg-gray-800 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-900/50"
                variants={itemVariants}
                layout
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gray-200 md:h-72 dark:bg-gray-700">
                  <motion.img
                    src={`https://api.microlink.io/?url=${project.demoUrl}&screenshot=true&embed=screenshot.url`}
                    alt={project.title}
                    className="object-cover w-full h-full"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/40 dark:to-gray-900/60 group-hover:opacity-100"
                  />

                  {/* Featured Badge */}
                  {project.featured && (
                    <motion.div
                      className="absolute px-4 py-2 text-sm font-semibold text-white shadow-lg top-4 left-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600"
                      whileHover={{ scale: 1.05 }}
                    >
                      ⭐ Featured
                    </motion.div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-800 dark:text-white">
                      {t(project.description)}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium text-blue-700 border border-blue-100 rounded-full bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800"
                        whileHover={{ y: -2 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* CTA Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <motion.a
                      href={project.demoUrl}
                      className="flex items-center gap-2 font-medium text-blue-600 transition-all duration-300 dark:text-blue-400 hover:gap-3"
                      whileHover={{ x: 5 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="flex items-center gap-2 font-medium text-gray-700 transition-all duration-300 dark:text-gray-300 hover:gap-3"
                      whileHover={{ x: 5 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} /> Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            className="py-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-800 dark:text-gray-800">No projects found with the selected filter.</p>
          </motion.div>
        )}

        {/* View All Button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href="/all-projects"
            className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-lg"
            whileHover={{ scale: 1.05, gap: '12px' }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ArrowRight size={20} />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;