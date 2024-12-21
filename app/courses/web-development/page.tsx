'use client'

import { ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'

const modules = [
  {
    id: 1,
    title: 'HTML Fundamentals',
    topics: [
      'Document structure',
      'HTML elements and attributes',
      'Forms and input elements',
      'Semantic HTML',
      'Best practices'
    ],
    link: '/courses/web-development/html-basics'
  },
  {
    id: 2,
    title: 'CSS Essentials',
    topics: [
      'Selectors and properties',
      'Box model',
      'Layout techniques',
      'Responsive design',
      'CSS frameworks'
    ],
    link: '/courses/web-development/css-basics'
  }
]

export default function WebDevelopmentTrack() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-blue-50 dark:bg-blue-900/20">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              Web Development Course Track
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Master the fundamentals of web development
            </p>
            <div className="mt-4 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Star className="mr-1 h-5 w-5 fill-current" />
              <span className="font-semibold">4.8</span>
            </div>
          </div>
        </div>
        {/* Decorative pattern */}
        <div className="absolute inset-y-0 right-0 hidden w-1/2 sm:block lg:w-2/3">
          <div className="absolute inset-0 opacity-10 dark:opacity-20" 
               style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, blue 1px, transparent 0)', backgroundSize: '40px 40px' }}>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Course Overview</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            This comprehensive track covers everything you need to know about web development, 
            from basic HTML to advanced JavaScript concepts.
          </p>
        </section>

        {/* Course Modules */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Course Modules</h2>
          <div className="space-y-6">
            {modules.map((module) => (
              <div 
                key={module.id}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {module.id}. {module.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {module.topics.map((topic) => (
                    <li 
                      key={topic}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                      {topic}
                    </li>
                  ))}
                </ul>
                <Link
                  href={module.link}
                  className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Start {module.title} <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Prerequisites */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Prerequisites</h2>
          <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                Basic computer skills
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                Text editor installed
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                Web browser
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                Enthusiasm to learn!
              </li>
            </ul>
          </div>
        </section>

        {/* Start Learning Button */}
        <div className="text-center">
          <Link
            href="/courses/web-development/html-basics"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-lg font-medium text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Begin Your Journey <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}