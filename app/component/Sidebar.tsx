'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, BookOpen, Code, Database, Brain, PanelLeftClose, PanelLeft } from 'lucide-react'

interface Course {
  title: string;
  href: string;
  icon: JSX.Element;
  rating: number;
  description: string;
}

const courses: Course[] = [
  {
    title: 'Web Development',
    href: '/courses/web-development',
    icon: <Code className="h-5 w-5" />,
    rating: 4.8,
    description: 'Learn modern web development from basics to advanced concepts'
  },
  {
    title: 'Data Structures',
    href: '/courses/data-structures',
    icon: <Database className="h-5 w-5" />,
    rating: 4.9,
    description: 'Master fundamental data structures and algorithms'
  },
  {
    title: 'Machine Learning',
    href: '/courses/machine-learning',
    icon: <Brain className="h-5 w-5" />,
    rating: 4.7,
    description: 'Introduction to machine learning concepts and applications'
  }
]

export function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth < 768) {
        setIsCollapsed(true)
      }
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={`fixed top-4 ${isCollapsed ? 'left-4' : 'left-[240px]'} z-50 rounded-lg bg-white p-2 text-gray-600 shadow-lg transition-all duration-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 md:${isCollapsed ? 'left-4' : 'left-[240px]'}`}
        aria-label="Toggle sidebar"
      >
        {isCollapsed ? 
          <PanelLeft className="h-5 w-5" /> : 
          <PanelLeftClose className="h-5 w-5" />
        }
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-40 w-60 transform bg-white transition-transform duration-300 ease-in-out dark:bg-gray-900 ${
          isCollapsed ? '-translate-x-full' : 'translate-x-0'
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex h-16 items-center border-b border-gray-200 px-4 dark:border-gray-700">
          <Link href="/courses" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <span className="text-lg font-semibold">Courses</span>
          </Link>
        </div>

        {/* Course List */}
        <nav className="p-4">
          <div className="space-y-2">
            {courses.map((course) => (
              <Link
                key={course.href}
                href={course.href}
                className={`flex items-center space-x-3 rounded-lg px-4 py-2 transition-colors ${
                  pathname === course.href
                    ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                }`}
              >
                {course.icon}
                <div className="flex-1">
                  <span className="block font-medium">{course.title}</span>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <span>⭐ {course.rating}</span>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </nav>
      </aside>

      {/* Content Wrapper - pushes content when sidebar is open */}
      <div
        className={`transition-all duration-300 ${
          isCollapsed ? 'ml-0' : 'ml-60'
        }`}
      >
        {/* Your main content goes here */}
      </div>
    </>
  )
}