// Placeholder for MongoDB API service

import { Project, Skill, Experience, Message, Profile } from '../models/types';

// This file would typically connect to a backend API
// For now, we'll use placeholder data and functions that would be replaced
// with actual MongoDB integration through a backend service

// Mock function to simulate fetching profile data from MongoDB
export const getProfile = async (): Promise<Profile> => {
  // In a real implementation, this would fetch from MongoDB
  return {
    _id: '1',
    user: '1',
    name: 'Nguyễn Sinh Hùng',
    title: 'Frontend Developer',
    bio: 'A passionate developer with 5 years of experience',
    about: 'I specialize in building modern web applications using React, Node.js, and MongoDB.',
    location: 'Tp Đà Nẵng, Việt Nam',
    email: 'nshung0105@gmail.com',
    phone: '+84-857000163',
    website: 'https://nshung0105.com',
    resumeUrl: '/resume.pdf',
    avatar: '/avatar.jpg',
    socials: [
      {
        _id: '1',
        platform: 'GitHub',
        url: 'https://github.com',
        icon: 'github',
      },
      {
        _id: '2',
        platform: 'LinkedIn',
        url: 'https://linkedin.com',
        icon: 'linkedin',
      },
      {
        _id: '3',
        platform: 'Twitter',
        url: 'https://twitter.com',
        icon: 'twitter',
      },
    ],
  };
};

// Mock function to simulate fetching projects from MongoDB
export const getProjects = async (): Promise<Project[]> => {
  // In a real implementation, this would fetch from MongoDB
  return [
    {
      _id: '1',
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product management.',
      image: 'https://example.com/image1.jpg',
      tags: ['React', 'Node.js', 'MongoDB'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    // Additional projects would be here
  ];
};

// Mock function to simulate fetching skills from MongoDB
export const getSkills = async (): Promise<Skill[]> => {
  // In a real implementation, this would fetch from MongoDB
  return [
    {
      _id: '1',
      name: 'React',
      level: 90,
      category: 'frontend',
    },
    // Additional skills would be here
  ];
};

// Mock function to simulate fetching experience from MongoDB
export const getExperience = async (): Promise<Experience[]> => {
  // In a real implementation, this would fetch from MongoDB
  return [
    {
      _id: '1',
      title: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      location: 'San Francisco, CA',
      startDate: new Date('2022-01-01'),
      endDate: null,
      current: true,
      description: [
        'Lead a team of frontend developers',
        'Implemented React best practices',
      ],
    },
    // Additional experience entries would be here
  ];
};

// Mock function to simulate sending a message to MongoDB
export const sendMessage = async (message: Omit<Message, '_id' | 'read' | 'createdAt'>): Promise<{ success: boolean; message: string }> => {
  // In a real implementation, this would send the message to MongoDB
  console.log('Message sent:', message);
  
  // Simulate a successful API call
  return {
    success: true,
    message: 'Message sent successfully!',
  };
};

// MongoDB connection would be established in a real implementation
export const initMongoDB = () => {
  console.log('MongoDB connection initialized');
  // In a real implementation, this would establish a connection to MongoDB
};