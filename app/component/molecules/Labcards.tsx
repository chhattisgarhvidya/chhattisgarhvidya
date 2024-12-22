import { useTheme } from 'next-themes';
import { useRef } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight, solarizedDarkAtom } from 'react-syntax-highlighter/dist/esm/styles/prism';

type QuestionCardProps = {
  question: string;
  description: string;
  code: string;
  index: number;
};

const Labcards = ({ question, description, code, index }: QuestionCardProps) => {
  const codeRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();

  const copyToClipboard = () => {
    if (codeRef.current) {
      navigator.clipboard.writeText(code || '')
        .then(() => console.log('Code copied to clipboard!'))
        .catch((err) => console.log('Failed to copy code: ' + err));
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-2 md:p-6 rounded-lg shadow-lg max-w-full sm:max-w-lg lg:max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">{question}</h2>
      <p className="pb-4 text-justify italic">{description}</p> {/* Paragraph Description */}
      <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded">
        {/* Copy Button */}
        <button
          onClick={copyToClipboard}
          className="absolute -top-2 right-2 px-2 py-1 border-2 dark:text-white border-blue-600 text-blue-600 hover:text-white rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Copy
        </button>
        {/* Syntax Highlighted Code */}
        <div ref={codeRef}>
          <SyntaxHighlighter
            language="javascript" // Change language dynamically if needed
            style={theme === 'light' ? solarizedlight : solarizedDarkAtom} // Use `solarizedDarkAtom` for dark mode
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default Labcards;
