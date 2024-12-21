import { CourseSidebar } from '../component/CourseSidebar'

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-900">
      <CourseSidebar />
      
      {/* Main content with proper margin for sidebar */}
      <main className="ml-64 flex-1 px-4 py-8 md:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}