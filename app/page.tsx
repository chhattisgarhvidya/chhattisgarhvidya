'use client'

import { useState, useEffect } from 'react'
import Courses from './component/Courses';
import Students from './component/Students';




export default function Home() {
  const [mounted, setMounted] = useState(false);

  // Typing animation state
  const [currentQuote, setCurrentQuote] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [quoteIndex, setQuoteIndex] = useState<number>(0);
  const [typingSpeed, setTypingSpeed] = useState<number>(150);

  const quotes = [
    'Empower Your Future Through Learning.',
    'Unlock Knowledge, Unlock Opportunities.',
    'Education is the Passport to the Future.',
    'Learn Anytime, Anywhere with CG Vidya.',
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentFullQuote = quotes[quoteIndex];

      if (!isDeleting) {
        setCurrentQuote(currentFullQuote.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentFullQuote.length) {
          setIsDeleting(true);
          setTypingSpeed(500); // Pause before deleting
        }
      } else {
        setCurrentQuote(currentFullQuote.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setQuoteIndex((prev) => (prev + 1) % quotes.length);
          setTypingSpeed(150); // Reset speed for next quote
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? 50 : typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, quoteIndex, typingSpeed]); // Dependency array now fixed and consistent

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }


  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
  
      {/* Main Content */}
      <div className='snap-y'>
      <main >
        {/* Hero Section */}


        <section className="bg-white h-screen flex items-center dark:bg-gray-800 py-20 snap-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block">Transform Your Learning</span>
            <span className="block py-3 text-blue-600 dark:text-blue-400">With CG Vidya</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto md:text-lg text-gray-500 dark:text-gray-300 sm:text-xl md:mt-5 md:text-2xl md:max-w-3xl">
            <span>{currentQuote}</span>
            <span className="blinking-cursor">|</span>
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="#courses"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
              >
                Get started
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 dark:bg-gray-700 dark:text-blue-400 dark:hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
{/*     
        <section className="bg-white h-screen flex items-center dark:bg-gray-800 py-20 snap-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block">Transform Your Learning</span>
                <span className="block text-blue-600 dark:text-blue-400">With CG Vidya</span>
              </h1>
              
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <a href="#courses" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                    Get started
                  </a>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 dark:bg-gray-700 dark:text-blue-400 dark:hover:bg-gray-600 md:py-4 md:text-lg md:px-10">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}

{/* coursepage */}
    <Courses/>

    {/* Student sections */}

    <Students/>
        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900 snap-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Features that Set Us Apart
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto">
                Discover why CG Vidya is the preferred choice for learners worldwide.
              </p>
            </div>
            <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Interactive Lessons</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                    Engage with dynamic content that adapts to your learning style.
                  </p>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Expert Instructors</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                    Learn from industry professionals and renowned academics.
                  </p>
                </div>
              </div>
              {/* Feature 3 */}
              <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Flexible Schedule</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                    Study at your own pace with 24/7 access to course materials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-white dark:bg-gray-800 snap-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white sm:text-4xl">
              What Our Students Say
            </h2>
            <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Testimonial 1 */}
              <div className="bg-gray-100 dark:bg-gray-700 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <p className="text-base text-gray-500 dark:text-gray-300">
                    &ldquo;CG Vidya has transformed the way I learn. The interactive lessons and expert instructors have helped me achieve my goals faster than I ever thought possible.&rdquo;
                  </p>
                  <div className="mt-4">
                    <p className="text-base font-medium text-gray-900 dark:text-white">Sarah Johnson</p>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Web Developer</p>
                  </div>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="bg-gray-100 dark:bg-gray-700 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <p className="text-base text-gray-500 dark:text-gray-300">
                    &ldquo;The flexibility of CG Vidya&apos;s platform allowed me to balance my studies with my full-time job. I couldn&apos;t be happier with the results!&rdquo;
                  </p>
                  <div className="mt-4">
                    <p className="text-base font-medium text-gray-900 dark:text-white">Michael Chen</p>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Data Analyst</p>
                  </div>
                </div>
              </div>
              {/* Testimonial 3 */}
              <div className="bg-gray-100 dark:bg-gray-700 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <p className="text-base text-gray-500 dark:text-gray-300">
                    &ldquo;As a lifelong learner, I&apos;ve tried many online platforms, but CG Vidya stands out with its quality content and user-friendly interface.&rdquo;
                  </p>
                  <div className="mt-4">
                    <p className="text-base font-medium text-gray-900 dark:text-white">Emily Rodriguez</p>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Marketing Specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section id="cta" className="bg-blue-600 dark:bg-blue-800 snap-center">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to dive in?</span>
              <span className="block text-blue-200">Start your learning journey today.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 dark:bg-gray-700 dark:text-blue-400 dark:hover:bg-gray-600">
                  Get started
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      </div>
     
    </div>
  )
}

