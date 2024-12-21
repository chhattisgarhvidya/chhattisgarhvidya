import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'

// Server component by default
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">
        {children}
      </h2>
    ),
    a: ({ href, children }) => (
      <Link 
        href={href ?? '#'} 
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        {children}
      </Link>
    ),
    pre: ({ children }) => (
      <div className="relative">
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto shadow-lg">
          {children}
        </pre>
      </div>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-blue-50 dark:bg-blue-900/20 rounded-r">
        {children}
      </blockquote>
    ),
    ul: ({ children }) => (
      <ul className="space-y-2 my-4 list-disc pl-5">
        {children}
      </ul>
    ),
    img: (props) => (
      <div className="relative aspect-video w-full my-4 rounded-xl overflow-hidden shadow-lg">
        <Image
          {...props}
          alt={props.alt || ''}
          width={800}
          height={450}
          className="object-cover"
        />
      </div>
    ),
    ...components,
  }
}