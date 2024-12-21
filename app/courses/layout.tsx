import { Sidebar } from '../component/Sidebar'

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content */}
      <main className="flex-1">
        <div className="h-full w-full">
          {children}
        </div>
      </main>
    </div>
  )
}