'use client';

import { useState, useEffect, useRef } from 'react';
import Courses from './component/Courses';
import Students from './component/Students';

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  // Adjusted speeds for smoother animation
  const typingSpeed = 150;  // Reduced from 350 for faster typing
  const deletingSpeed = 80;  // Reduced from 300 for faster deleting
  const pauseDuration = 2000;  // Added explicit pause duration constant
  const isMounted = useRef(false);

  // Move quotes array to useRef to avoid dependency issues
  const quotesRef = useRef([
    'Empower Your Future Through Learning.',
    'Unlock Knowledge, Unlock Opportunities.',
    'Education is the Passport to the Future.',
    'Learn Anytime, Anywhere with CG Vidya.',
  ]);

  useEffect(() => {
    isMounted.current = true;

    const handleTyping = () => {
      const currentFullQuote = quotesRef.current[quoteIndex];

      if (!isDeleting && charIndex < currentFullQuote.length) {
        // Typing
        setCurrentQuote(currentFullQuote.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        setCurrentQuote(currentFullQuote.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentFullQuote.length) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && charIndex === 0) {
        // Move to next quote
        setIsDeleting(false);
        setQuoteIndex((prev) => (prev + 1) % quotesRef.current.length);
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timeoutId = setTimeout(handleTyping, speed);

    return () => {
      clearTimeout(timeoutId);
      isMounted.current = false;
    };
  }, [charIndex, isDeleting, quoteIndex, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* Rest of the JSX remains unchanged */}
      <div className="snap-y">
        <main>
          <section className="bg-white h-screen flex items-center dark:bg-gray-800 py-20 snap-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                  <span className=" md:leading-[100px]">Transform Your Learning</span><br/>
                  <span className=" py-4 max-sm:leading-tight text-blue-600 dark:text-blue-400">With CG Vidya</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-gray-500 dark:text-gray-300 sm:text-xl md:mt-5 md:text-2xl md:max-w-3xl">
                  {currentQuote}
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

          <Courses />
          <Students />

          {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Features that Set Us Apart
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto">
                Discover why EduSite is the preferred choice for learners worldwide.
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
        <section id="testimonials" className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white sm:text-4xl">
              What Our Students Say
            </h2>
            <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Testimonial 1 */}
              <div className="bg-gray-100 dark:bg-gray-700 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <p className="text-base text-gray-500 dark:text-gray-300">
                    &ldquo;EduSite has transformed the way I learn. The interactive lessons and expert instructors have helped me achieve my goals faster than I ever thought possible.&rdquo;
                  </p>
                  <div className="mt-4">
                    <p className="text-base font-medium text-gray-900 dark:text-white">Sharansh Mishra</p>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Web Developer</p>
                  </div>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="bg-gray-100 dark:bg-gray-700 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <p className="text-base text-gray-500 dark:text-gray-300">
                    &ldquo;The flexibility of EduSite&apos;s platform allowed me to balance my studies with my full-time job. I couldn&apos;t be happier with the results!&rdquo;
                  </p>
                  <div className="mt-4">
                    <p className="text-base font-medium text-gray-900 dark:text-white">Mandira Datta</p>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Data Analyst</p>
                  </div>
                </div>
              </div>
              {/* Testimonial 3 */}
              <div className="bg-gray-100 dark:bg-gray-700 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <p className="text-base text-gray-500 dark:text-gray-300">
                    &ldquo;As a lifelong learner, I&apos;ve tried many online platforms, but EduSite stands out with its quality content and user-friendly interface.&rdquo;
                  </p>
                  <div className="mt-4">
                    <p className="text-base font-medium text-gray-900 dark:text-white">Akash Sharma</p>
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
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 dark:bg-gray-700 dark:text-blue-400 dark:hover:bg-gray-600"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}