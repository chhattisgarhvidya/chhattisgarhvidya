'use client';

import { useTheme } from 'next-themes';
import { useRef, useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight, solarizedDarkAtom } from 'react-syntax-highlighter/dist/esm/styles/prism';

type QuestionCardProps = {
  question: string;
  description: string;
  code: string;
};

const Labcards = ({ question, description, code }: QuestionCardProps) => {
  const [mounted, setMounted] = useState(false); // Track if the component has mounted
  const codeRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true); // Set to true after client-side mount
  }, []);

  const copyToClipboard = () => {
    if (codeRef.current) {
      navigator.clipboard.writeText(code || '')
        .then(() => console.log('Code copied to clipboard!'))
        .catch((err) => console.log('Failed to copy code: ' + err));
    }
  };

  if (!mounted) return null; // Ensure no rendering mismatch before mount

  return (
    <div className="bg-white dark:bg-gray-800 p-2 md:p-6 rounded-lg shadow-lg max-w-full sm:max-w-lg lg:max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">{question}</h2>
      <p className="pb-4 text-justify italic">{description}</p> {/* Paragraph Description */}
      <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded">
        {/* Copy Button */}
        {code && (
          <button
            onClick={copyToClipboard}
            className="absolute -top-2 right-2 px-2 py-1 border-2 dark:text-white border-blue-600 text-blue-600 hover:text-white rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Copy
          </button>
        )}
        {/* Conditionally render code block */}
        {code && (
          <div ref={codeRef}>
            <SyntaxHighlighter
              language="javascript" // Change language dynamically if needed
              style={theme === 'light' ? solarizedlight : solarizedDarkAtom} // Use `solarizedDarkAtom` for dark mode
            >
              {code}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    </div>
  );
};

export default Labcards;
