import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { projects as projectsData, ProjectData } from '../services/projects';

const Projects: React.FC = () => {
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
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
  };
  
  return (
    <section
      id="projects"
      className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-950 relative overflow-hidden"
    >
      <div className="container px-4 mx-auto max-w-7xl">
        <motion.div
          className="mb-16 md:mb-24 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl dark:text-white mb-6">
            {t('projects.title')}
            <span className="text-blue-600 dark:text-blue-400">.</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('projects.description')}
          </p>
        </motion.div>

        {/* Filter Tags */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
              filter === 'all'
                ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900 shadow-lg scale-105'
                : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600'
            }`}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                filter === tag
                  ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900 shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="group relative h-[450px] md:h-[500px] w-full rounded-3xl overflow-hidden bg-gray-200 dark:bg-gray-800 isolate"
                variants={itemVariants}
                layout
                whileHover={{ scale: 1.07, boxShadow: "0px 14px 30px rgba(0,0,0,0.25)" }}
                transition={{ type: "spring", stiffness: 180 }}
              >
                {/* Background Image with Parallax-like Zoom */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img
                    src={`https://api.microlink.io/?url=${project.demoUrl}&screenshot=true&embed=screenshot.url`}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-115"
                  />
                </div>
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent transition-opacity duration-500 opacity-80 group-hover:opacity-90" />

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-6 left-6 z-20">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-black/30 text-black text-xs font-semibold uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-800 animate-pulse" />
                      Featured
                    </div>
                  </div>
                )}

                {/* Content Overlay (Glassmorphism) */}
                <div className="absolute inset-x-0 bottom-0 z-20 p-6 md:p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 line-clamp-2 text-sm transition-all duration-500 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                      {t(project.description)}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 4).map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium text-white/90 border border-white/20 rounded-full bg-white/10 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-3 py-1 text-xs font-medium text-white/90 border border-white/20 rounded-full bg-white/10 backdrop-blur-sm">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* CTA Links */}
                  <div className="flex items-center gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 ease-out">
                    <a
                      href={project.demoUrl}
                      className="flex items-center justify-center flex-1 gap-2 py-3 font-semibold text-gray-900 bg-white rounded-xl hover:bg-gray-100 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} /> Live Site
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center justify-center flex-1 gap-2 py-3 font-semibold text-white bg-white/20 backdrop-blur-md rounded-xl hover:bg-white/30 transition-colors border border-white/10"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} /> Source
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            className="py-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">No projects found with the selected filter.</p>
          </motion.div>
        )}

        {/* View All Button */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="/all-projects"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-gray-900 transition-all duration-300 bg-white border border-gray-200 rounded-full dark:bg-gray-900 dark:text-white dark:border-gray-800 hover:border-gray-900 dark:hover:border-white hover:shadow-lg"
          >
            View All Projects
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
