'use client';

import React from 'react';
import Heading from './atoms/heading';
import Subheading from './atoms/subheading';
import { Book, Clock, Star, Users } from 'lucide-react';
import Link from 'next/link';

const studentResources = [
  {
    title: 'Betch 5th Sem Important Questions',
    description: 'AI Key questions to prepare for your semester exams.',
    icon: <Book className="h-6 w-6 text-blue-500 dark:text-blue-400" />,
    level: 'Intermediate',
    students: '200+ students',
    duration: '2 weeks prep',
    rating: 4.5,
    Categories:'Betch AIML 5th sem ',
    tags: ['CSVTU', 'BETCH 5th', 'BETCH AI', 'BETCH AIML'],
    href: '/betch-5th-sem-imp',
  },
  {
    title: 'Betch 8th sem AI Lab',
    description: 'Comprehensive notes to ace Python programming.',
    icon: <Book className="h-6 w-6 text-green-500 dark:text-green-400" />,
    level: 'Beginner',
    students: '300+ students',
    duration: '1 month',
    rating: 4.8,
    Categories:'Betch AIML 8th sem ',
    tags: ['CSVTU', 'BETCH 6th', 'AI Lab', 'BETCH AIML'],
    href: '/ailab-8sem',
  },
  {
    title: 'Betch 6 Sem Data Security Lab',
    description: 'Quick revision guide for data Secutiry Lab in C/C++.',
    icon: <Book className="h-6 w-6 text-red-500 dark:text-red-400" />,
    level: 'Advanced',
    students: '150+ students',
    duration: '3 weeks',
    rating: 4.9,
    Categories:'Betch AIML 6th sem ',
    tags: ['CSVTU', 'BETCH 6th', 'Data Security Lab', 'BETCH AIML'],
    href: '/dslab-6sem',
  },
];

export default function Students() {
  return (
    <div>
      <section id="student" className="py-20 max-sm:px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
          <Heading text="Student Corner" />
          
          <p className="mt-4 text-center md:w-5/6 mx-auto md:text-lg text-gray-600 dark:text-gray-300">
            Welcome to the Student Corner! Explore a curated collection of resources, including key questions, notes, and crash courses, tailored to enhance your learning experience. Stay ahead and make your preparation more effective.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {studentResources.map((resource, index) => (
              <Link
                key={index}
                href={resource.href}
                className="group shadow-md rounded-lg bg-white dark:bg-gray-800 p-6 transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-700">{resource.icon}</div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="ml-1">{resource.rating}</span>
                  </div>
                </div>
                <Subheading text={resource.title} />
                <p className="mt-2 text-gray-600 dark:text-gray-300">{resource.description}</p>
                
                {/* Tags Section */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {resource.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600 dark:bg-blue-900 dark:text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Users className="h-4 w-4" />
                    <span className="ml-1">{resource.students}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span className="ml-1">{resource.duration}</span>
                  </div>
                  <span className="text-blue-600 dark:text-blue-400">{resource.level}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}