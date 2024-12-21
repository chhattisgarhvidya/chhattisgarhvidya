import React from 'react';

interface SubheadingProps {
  text: string;
}

export default function Heading({ text }: SubheadingProps) {
  return (
    <div>
      <h3 className="pt-2 text-xl font-semibold text-gray-900 dark:text-white">{text}</h3>
    </div>
  );
}

