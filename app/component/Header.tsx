'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import type { ReactElement } from 'react'

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
    {href:'#courses',label:'Courses'},
    {href:'#student',label:'Students  '}
]

export function Header(): ReactElement {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [mounted, setMounted] = useState<boolean>(false)

  // Wait until mounted to show theme toggle
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Render placeholder during SSR to prevent hydration mismatch
  if (!mounted) {
    return (
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                  <Image
                    src="/cg-logo.svg" // Replace with your logo's file path
                    alt="Logo"
                    width={90}
                    height={10}
                  />
                </Link>
                
              </div>
            </div>
            
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <nav className="space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {link.label}
                  </Link>
                ))}
                
              </nav>
              <div className="ml-4 w-10 h-10" />
            </div>
            <div className="sm:hidden flex items-center">
              <div className="w-10 h-10" />
            </div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm z-10 fixed w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <Image
                  src="/cg-logo.svg" // Replace with your logo's file path
                  alt="Logo"
                  width={90}
                  height={10}
                />
              </Link>
              
            </div>
           
          </div>
          <div className='flex'>
          <button
              onClick={toggleTheme}
              className="ml-4 md:hidden p-2 rounded-md  text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
          
            <nav className="space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div></div>
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="mt-4 max-sm:hidden w-full flex items-center justify-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {theme === 'dark' ? <Sun size={20} className="mr-2" /> : <Moon size={20} className="mr-2" />}
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
