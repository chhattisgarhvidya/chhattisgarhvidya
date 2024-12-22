'use client'

import { useState, useEffect } from 'react';
import Courses from './component/Courses';
import Students from './component/Students';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  // Typing animation state
  const [currentQuote, setCurrentQuote] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const typingSpeed = 150;

  const quotes = [
    'Empower Your Future Through Learning.',
    'Unlock Knowledge, Unlock Opportunities.',
    'Education is the Passport to the Future.',
    'Learn Anytime, Anywhere with CG Vidya.',
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentFullQuote = quotes[quoteIndex];

      if (charIndex < currentFullQuote.length) {
        setCurrentQuote(currentFullQuote.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setQuoteIndex((prev) => (prev + 1) % quotes.length);
        }, 2000); // Pause before switching quotes
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [charIndex, quoteIndex, typingSpeed]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="snap-y">
        <main>
          {/* Hero Section */}
          <section className="bg-white h-screen flex items-center dark:bg-gray-800 py-20 snap-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                  <span className="block">Transform Your Learning</span>
                  <span className="block py-3 text-blue-600 dark:text-blue-400">With CG Vidya</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-gray-500 dark:text-gray-300 sm:text-xl md:mt-5 md:text-2xl md:max-w-3xl">
                  {currentQuote}<span className="blinking-cursor">|</span>
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
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="py-20 bg-white dark:bg-gray-800 snap-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white sm:text-4xl">
                What Our Students Say
              </h2>
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
