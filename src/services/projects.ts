
export interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}

export const projects: ProjectData[] = [
  {
    id: 1,
    title: 'FORM - Sport KHMT',
    description: 'projects.projectDescriptions.1',
    image: 'https://images.pexels.com/photos/6956802/pexels-photo-6956802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    demoUrl: 'https://hoi-thao-doan-truong-khmt.vercel.app',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Travel Golobe (Team)',
    description: 'projects.projectDescriptions.2',
    image: 'https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'TypeScript', 'PostgreSQL', 'API', 'Tailwind CSS'],
    demoUrl: 'https://travel-golobe.vercel.app/',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'projects.projectDescriptions.3',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    demoUrl: 'https://portfolio-nsh.vercel.app',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Sports Tracker Platform',
    description: 'projects.projectDescriptions.4',
    image: 'https://images.pexels.com/photos/4164777/pexels-photo-4164777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB', 'Express'],
    demoUrl: 'https://sporttracker-ftdv.onrender.com',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Number Click Game',
    description: 'projects.projectDescriptions.5',
    image: 'https://images.pexels.com/photos/15964399/pexels-photo-15964399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    demoUrl: 'https://number-click-game.vercel.app',
    githubUrl: '#',
    featured: false,
  },
];
