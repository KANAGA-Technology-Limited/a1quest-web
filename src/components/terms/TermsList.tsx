import React from 'react';
import { Terms } from './terms';

const TermsList = () => {
  return (
    <div className='flex w-full flex-col gap-10'>
      {Terms.map((term, index) => (
        <div key={index}>
          <h2
            className='font-secondary text-[#0C1F56] text-2xl font-bold mb-4'
            id={term.title}
          >
            {index + 1}. {term.title}
          </h2>
          <div className='text-[#3C3C3C]'>{term.content}</div>
        </div>
      ))}
    </div>
  );
};

export default TermsList;
