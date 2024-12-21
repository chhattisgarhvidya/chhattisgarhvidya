import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Lesson Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          The lesson your looking for does not exist or has been moved.
        </p>
        <Link
          href="/courses/web-development"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Course
        </Link>
      </div>
    </div>
  )
}