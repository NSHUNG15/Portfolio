import React from 'react';
import { useInView } from '../hooks/useInView';

interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'design' | 'other';
}

const Skills: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  
  const skills: Skill[] = [
    { name: 'React', level: 90, category: 'frontend' },
    { name: 'JavaScript', level: 85, category: 'frontend' },
    { name: 'TypeScript', level: 80, category: 'frontend' },
    { name: 'HTML/CSS', level: 95, category: 'frontend' },
    { name: 'Tailwind CSS', level: 90, category: 'frontend' },
    // { name: 'Node.js', level: 85, category: 'backend' },
    // { name: 'Express', level: 80, category: 'backend' },
    // { name: 'MongoDB', level: 75, category: 'backend' },
    // { name: 'GraphQL', level: 70, category: 'backend' },
    { name: 'UI/UX Design', level: 75, category: 'design' },
    { name: 'Figma', level: 70, category: 'design' },
    { name: 'Git', level: 85, category: 'other' },
  ];

  // Group skills by category
  const categories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  // Category display names
  const categoryNames = {
    frontend: 'Frontend Development',
    // backend: 'Backend Development',
    design: 'Design',
    other: 'Other Skills',
  };

  return (
    <section
      id="skills"
      className="py-20 transition-colors duration-300 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
            My Skills
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-blue-600 dark:bg-blue-400"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            I've worked with a variety of technologies in the web development world.
            Here's an overview of my technical skills and proficiency levels.
          </p>
        </div>

        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {Object.entries(categories).map(([category, categorySkills]) => (
              <div key={category} className="p-6 transition-all duration-300 bg-white rounded-lg shadow-md dark:bg-gray-900 hover:shadow-lg">
                <h3 className="mb-4 text-xl font-bold text-gray-800 dark:text-white">
                  {categoryNames[category as keyof typeof categoryNames]}
                </h3>

                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="mb-4">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-700">
                        <div
                          className="h-full transition-all duration-1000 ease-out bg-blue-600 rounded-full dark:bg-blue-400"
                          style={{ 
                            width: inView ? `${skill.level}%` : '0%',
                            transitionDelay: `${skills.indexOf(skill) * 100}ms` 
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* <div className="mt-16 text-center">
            <h3 className="mb-6 text-xl font-bold text-gray-800 dark:text-white">
              Other Technologies I've Worked With
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Redux', 'Next.js', 'Firebase', 'AWS', 'Docker', 'Kubernetes', 'Jest', 'Cypress', 'PostgreSQL', 'Redis'].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;