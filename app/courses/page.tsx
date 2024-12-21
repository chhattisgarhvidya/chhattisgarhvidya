'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, BookOpen, Code, Database, Brain, Star, Users, Clock } from 'lucide-react'

const courses = [
  {
    title: 'Web Development',
    description: 'Learn modern web development from basics to advanced concepts',
    icon: <Code className="h-6 w-6" />,
    href: '/courses/web-development',
    level: 'Beginner to Advanced',
    students: '2.5k+',
    rating: 4.8,
    duration: '12 weeks',
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
    category: 'programming'
  },
  {
    title: 'Data Structures',
    description: 'Master fundamental data structures and algorithms',
    icon: <Database className="h-6 w-6" />,
    href: '/courses/data-structures',
    level: 'Intermediate',
    students: '1.8k+',
    rating: 4.9,
    duration: '8 weeks',
    tags: ['Arrays', 'Linked Lists', 'Trees', 'Graphs'],
    category: 'programming'
  },
  {
    title: 'Machine Learning Basics',
    description: 'Introduction to machine learning concepts and applications',
    icon: <Brain className="h-6 w-6" />,
    href: '/courses/ml-basics',
    level: 'Intermediate',
    students: '1.2k+',
    rating: 4.7,
    duration: '10 weeks',
    tags: ['Python', 'NumPy', 'Pandas', 'Scikit-learn'],
    category: 'data-science'
  }
]

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div id='courses' className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-white dark:bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              Explore Our Courses
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Start your learning journey with our comprehensive courses
            </p>
          </div> */}

          {/* Search Bar */}
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-12 pr-4 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300'
              }`}
            >
              All Courses
            </button>
            <button
              onClick={() => setSelectedCategory('programming')}
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                selectedCategory === 'programming'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300'
              }`}
            >
              Programming
            </button>
            <button
              onClick={() => setSelectedCategory('data-science')}
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                selectedCategory === 'data-science'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300'
              }`}
            >
              Data Science
            </button>
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <Link
              key={course.title}
              href={course.href}
              className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-lg transition-transform hover:-translate-y-1 dark:bg-gray-800"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
                  {course.icon}
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span className="ml-1">{course.rating}</span>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {course.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {course.description}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {course.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between text-sm">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Users className="h-4 w-4" />
                  <span className="ml-1">{course.students}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Clock className="h-4 w-4" />
                  <span className="ml-1">{course.duration}</span>
                </div>
                <span className="text-blue-600 dark:text-blue-400">{course.level}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}