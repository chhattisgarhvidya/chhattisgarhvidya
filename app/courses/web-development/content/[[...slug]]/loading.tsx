export default function Loading() {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="animate-pulse space-y-8">
          {/* Title */}
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg w-3/4"></div>
          
          {/* Description */}
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
          </div>
          
          {/* Content blocks */}
          <div className="space-y-4">
            <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
          </div>
        </div>
      </div>
    )
  }