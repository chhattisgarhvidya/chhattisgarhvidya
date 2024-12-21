import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb navigation */}
      <nav className="flex mb-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link href="/courses" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              Courses
            </Link>
          </li>
          <ChevronRight className="w-4 h-4 text-gray-500" />
          <li className="inline-flex items-center">
            <Link href="/courses/web-development" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              Web Development
            </Link>
          </li>
        </ol>
      </nav>

      {/* Main content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {children}
      </div>

      {/* Navigation buttons */}
      <div className="mt-12 flex justify-between">
        <Link
          href="/courses/web-development"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
        >
          ← Back to Course
        </Link>
      </div>
    </div>
  )
}