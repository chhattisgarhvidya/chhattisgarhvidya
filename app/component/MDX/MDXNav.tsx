'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X, Book, Home, Lightbulb } from 'lucide-react'
import Link from 'next/link'

export function MDXNav() {
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  // Wait for component to mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Render placeholder during SSR to prevent hydration mismatch
  if (!mounted) {
    return (
      <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md transition-colors dark:border-gray-800 dark:bg-gray-900/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                EduSite
              </span>
            </div>
            <div className="flex items-center space-x-4">
              {/* Placeholder for theme toggle to prevent layout shift */}
              <div className="h-9 w-9"></div>
            </div>
          </div>
        </div>
      </nav>
    )
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md transition-colors dark:border-gray-800 dark:bg-gray-900/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Book className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                EduSite
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            <Link 
              href="/"
              className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link 
              href="/courses"
              className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              <Lightbulb className="h-4 w-4" />
              <span>Courses</span>
            </Link>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-gray-200 py-4 dark:border-gray-800 md:hidden">
            <div className="space-y-3">
              <Link
                href="/"
                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className="h-5 w-5" />
                <span>Home</span>
              </Link>
              <Link
                href="/courses"
                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                <Lightbulb className="h-5 w-5" />
                <span>Courses</span>
              </Link>
              <button
                onClick={() => {
                  toggleTheme()
                  setIsMenuOpen(false)
                }}
                className="flex w-full items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="h-5 w-5" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-5 w-5" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}