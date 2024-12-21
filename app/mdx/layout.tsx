import { MDXNav } from '../component/MDX/MDXNav'

export default function MDXLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <MDXNav />
      <article className="pt-6">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="prose dark:prose-invert lg:prose-lg mx-auto 
            prose-headings:font-bold
            prose-h1:text-4xl prose-h1:text-blue-600 dark:prose-h1:text-blue-400
            prose-h2:text-3xl prose-h2:text-gray-800 dark:prose-h2:text-gray-200
            prose-p:text-gray-600 dark:prose-p:text-gray-300
            prose-li:text-gray-600 dark:prose-li:text-gray-300
            prose-strong:text-blue-600 dark:prose-strong:text-blue-400
            prose-code:text-pink-500 dark:prose-code:text-pink-400
            prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800
            prose-pre:shadow-md
            prose-a:text-blue-600 dark:prose-a:text-blue-400
            prose-img:rounded-xl prose-img:shadow-lg
            prose-blockquote:border-blue-500
            prose-ul:list-none prose-ul:pl-0
            prose-ol:list-decimal prose-ol:pl-4">
            {children}
          </div>
        </div>
      </article>
    </div>
  )
}