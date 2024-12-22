'use client'


import Heading from '../component/atoms/heading';
import Labcards from '../component/molecules/Labcards';
import {content} from '../../public/Data/ailab6sem'
export default function Page() {



  return (<div className={`bg-white  dark:bg-gray-900 text-gray-900 dark:text-gray-300`}>
    <main className="mt-20 md:px-4   lg:px-8">
        <div className='md:max-w-4xl pb-10 pt-5  mx-auto'>
        <Heading text={'Explore comprehensive solutions to AI Lab practicals for Betch 8th semester students.'}/>
        </div>
      <div className="space-y-8">
        {content.map((item, index) => (
          <Labcards
            key={index}
            question={item.question}
            description={item.description}
            code={item.code}
          />
        ))}
      </div>
    </main>
  </div>
  );
}
