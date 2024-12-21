import { promises as fs } from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

// Type for page params
type Props = {
  params: Promise<{ slug: string[] }>
  searchParams: { [key: string]: string | string[] | undefined }
}

// Function to get content path
async function getContentPath(slug: string[]) {
  return path.join(process.cwd(), 'app/courses/web-development/content', ...slug, 'README.mdx')
}

// Function to get page content
async function getPageContent(filePath: string) {
  try {
    const content = await fs.readFile(filePath, 'utf8')
    const frontmatter = await extractFrontmatter(content)
    return { content, frontmatter }
  } catch (error) {
    console.error('Error reading MDX file:', error)
    return null
  }
}

// Function to extract frontmatter
async function extractFrontmatter(content: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  const match = frontmatterRegex.exec(content)
  if (!match) return {}

  return match[1].split('\n').reduce((acc, line) => {
    const [key, ...value] = line.split(':')
    if (key && value.length) {
      acc[key.trim()] = value.join(':').trim()
    }
    return acc
  }, {} as Record<string, string>)
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params
  if (!resolvedParams.slug?.length) {
    notFound()
  }

  const filePath = await getContentPath(resolvedParams.slug)
  const content = await getPageContent(filePath)

  if (!content) {
    notFound()
  }

  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Content will be rendered automatically by Next.js */}
      </div>
    </article>
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  if (!resolvedParams.slug?.length) {
    return {
      title: 'Not Found',
      description: 'Page not found'
    }
  }

  const filePath = await getContentPath(resolvedParams.slug)
  const content = await getPageContent(filePath)
  
  if (!content) {
    return {
      title: 'Not Found',
      description: 'The page you are looking for does not exist.'
    }
  }

  return {
    title: content.frontmatter.title || 'Web Development Course',
    description: content.frontmatter.description || 'Learn web development fundamentals'
  }
}

export function generateStaticParams() {
  return [
    { slug: ['1-getting-started-lessons', '1-intro-to-programming-languages'] },
    { slug: ['1-getting-started-lessons', '2-github-basics'] },
    { slug: ['1-getting-started-lessons', '3-accessibility'] },
    // Add more paths as needed
  ]
}