// MongoDB Models & Types

export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  createdAt: Date;
  updatedAt: Date;
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Skill {
  _id: string;
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'other';
}

export interface Experience {
  _id: string;
  title: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | null;
  current: boolean;
  description: string[];
}

export interface Message {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt: Date;
}

export interface Education {
  _id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: Date;
  endDate: Date | null;
  current: boolean;
  description: string;
}

export interface Social {
  _id: string;
  platform: string;
  url: string;
  icon: string;
}

export interface Profile {
  _id: string;
  user: string;
  name: string;
  title: string;
  bio: string;
  about: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  resumeUrl: string;
  avatar: string;
  socials: Social[];
}