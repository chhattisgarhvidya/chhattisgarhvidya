'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronRight, BookOpen, Code } from 'lucide-react'

const courseStructure = [
    {
      title: 'Web Development',
      href: '/courses/web-development',
      icon: <Code className="h-5 w-5" />,
      sections: [
        {
          title: 'Getting Started',
          lessons: [
            { 
              title: 'Intro to Programming', 
              href: '/courses/web-development/content/1-getting-started-lessons/1-intro-to-programming-languages'
            },
            { 
              title: 'GitHub Basics', 
              href: '/courses/web-development/content/1-getting-started-lessons/2-github-basics'
            },
            { 
              title: 'Accessibility', 
              href: '/courses/web-development/content/1-getting-started-lessons/3-accessibility'
            }
          ]
        },
        {
          title: 'JavaScript Basics',
          lessons: [
            { 
              title: 'Data Types', 
              href: '/courses/web-development/content/2-js-basics/1-data-types'
            },
            { 
              title: 'Functions & Methods', 
              href: '/courses/web-development/content/2-js-basics/2-functions-methods'
            },
            { 
              title: 'Making Decisions', 
              href: '/courses/web-development/content/2-js-basics/3-making-decisions'
            },
            { 
              title: 'Arrays & Loops', 
              href: '/courses/web-development/content/2-js-basics/4-arrays-loops'
            }
          ]
        },
        {
          title: 'Projects',
          lessons: [
            {
              title: 'Terrarium Project',
              sections: [
                { 
                  title: 'HTML Introduction', 
                  href: '/courses/web-development/content/3-terrarium/1-intro-to-html'
                },
                { 
                  title: 'CSS Styling', 
                  href: '/courses/web-development/content/3-terrarium/2-intro-to-css'
                },
                { 
                  title: 'DOM & Closures', 
                  href: '/courses/web-development/content/3-terrarium/3-intro-to-DOM-and-closures'
                }
              ]
            },
            {
              title: 'Typing Game',
              href: '/courses/web-development/content/4-typing-game/typing-game'
            },
            {
              title: 'Browser Extension',
              sections: [
                { 
                  title: 'About Browsers', 
                  href: '/courses/web-development/content/5-browser-extension/1-about-browsers'
                },
                { 
                  title: 'Forms & Storage', 
                  href: '/courses/web-development/content/5-browser-extension/2-forms-browsers-local-storage'
                },
                { 
                  title: 'Background Tasks', 
                  href: '/courses/web-development/content/5-browser-extension/3-background-tasks-and-performance'
                }
              ]
            },
            {
              title: 'Space Game',
              sections: [
                { 
                  title: 'Introduction', 
                  href: '/courses/web-development/content/6-space-game/1-introduction'
                },
                { 
                  title: 'Drawing Canvas', 
                  href: '/courses/web-development/content/6-space-game/2-drawing-to-canvas'
                },
                { 
                  title: 'Moving Elements', 
                  href: '/courses/web-development/content/6-space-game/3-moving-elements-around'
                },
                { 
                  title: 'Collision Detection', 
                  href: '/courses/web-development/content/6-space-game/4-collision-detection'
                },
                { 
                  title: 'Keeping Score', 
                  href: '/courses/web-development/content/6-space-game/5-keeping-score'
                },
                { 
                  title: 'End Condition', 
                  href: '/courses/web-development/content/6-space-game/6-end-condition'
                }
              ]
            },
            {
              title: 'Banking App',
              sections: [
                { 
                  title: 'Template & Routing', 
                  href: '/courses/web-development/content/7-bank-project/1-template-route'
                },
                { 
                  title: 'Forms', 
                  href: '/courses/web-development/content/7-bank-project/2-forms'
                },
                { 
                  title: 'Data Management', 
                  href: '/courses/web-development/content/7-bank-project/3-data'
                },
                { 
                  title: 'State Management', 
                  href: '/courses/web-development/content/7-bank-project/4-state-management'
                }
              ]
            }
          ]
        },
        {
          title: 'Tools & Setup',
          lessons: [
            { 
              title: 'Code Editor Guide', 
              href: '/courses/web-development/content/8-code-editor/1-using-a-code-editor'
            }
          ]
        }
      ]
    }
  ]


export function CourseSidebar() {
  const pathname = usePathname()
  const [expandedSections, setExpandedSections] = useState<string[]>([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionTitle)
        ? prev.filter(title => title !== sectionTitle)
        : [...prev, sectionTitle]
    )
  }

  return (
    <aside className={`fixed top-0 left-0 z-40 h-screen w-64 transform bg-white transition-transform dark:bg-gray-900 ${
      isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
    }`}>
      {/* Sidebar Header */}
      <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4 dark:border-gray-700">
        <Link href="/courses" className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          <span className="text-lg font-semibold">Courses</span>
        </Link>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <ChevronRight className={`h-5 w-5 transform transition-transform ${isSidebarOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Course Navigation */}
      <nav className="h-[calc(100vh-4rem)] overflow-y-auto p-4">
        {courseStructure.map((course) => (
          <div key={course.href} className="space-y-2">
            <Link
              href={course.href}
              className={`flex items-center space-x-2 rounded-lg px-3 py-2 ${
                pathname === course.href
                  ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400'
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
            >
              {course.icon}
              <span>{course.title}</span>
            </Link>

            {course.sections.map((section) => (
              <div key={section.title} className="ml-4">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  <span>{section.title}</span>
                  {expandedSections.includes(section.title) ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </button>

                {expandedSections.includes(section.title) && (
                  <div className="ml-4 space-y-1">
                    {section.lessons.map((lesson) => (
                      <Link
                        key={lesson.href}
                        href={lesson.href}
                        className={`block rounded-lg px-3 py-2 text-sm ${
                          pathname === lesson.href
                            ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400'
                            : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                        }`}
                      >
                        {lesson.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  )
}