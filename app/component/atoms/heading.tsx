import React from 'react';

interface HeadingProps {
  text: string;
}

export default function Heading({ text }: HeadingProps) {
  return (
    <div>
      <h2 className=" text-3xl font-extrabold   text-center  sm:text-4xl">{text}</h2>
    </div>
  );
}
