'use client'

import Link from 'next/link'
import { Star } from 'lucide-react'

interface CourseCardProps {
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
  rating: number;
}

export function CourseCard({ title, href, description, icon, rating }: CourseCardProps) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-lg transition-transform hover:-translate-y-1 dark:bg-gray-800"
    >
      <div className="flex items-center justify-between">
        <div className="rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
          {icon}
        </div>
        <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
          <Star className="h-4 w-4 fill-current text-yellow-400" />
          <span>{rating}</span>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 transform scale-x-0 transition-transform group-hover:scale-x-100" />
    </Link>
  )
}