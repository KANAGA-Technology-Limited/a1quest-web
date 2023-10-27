'use client';

import React, { useEffect, useRef } from 'react';
import { faqs } from './faqs';
import autoAnimate from '@formkit/auto-animate';

function FAQList() {
  const [selectedQuestion, setSelectedQuestion] = React.useState<number | undefined>(
    undefined
  );
  const parentRef = useRef(null);

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);

  return (
    <div className='mt-[32px] w-full px-[8vw] py-10'>
      {/* Questions */}
      <div className='flex flex-col gap-10 w-full'>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className='w-full px-6 py-4 rounded-lg border border-[#E7EBEE]'
            ref={parentRef}
          >
            <div
              className='w-full font-semibold bg-white  text-2xl flex items-center justify-between cursor-pointer duration-500'
              onClick={() =>
                selectedQuestion === index
                  ? setSelectedQuestion(undefined)
                  : setSelectedQuestion(index)
              }
            >
              <span className='text-primary'>{faq.question}</span>
              <span className='text-[#5B5B5B]'>
                {selectedQuestion === index ? '-' : '+'}
              </span>
            </div>

            {/* Answers */}
            {selectedQuestion === index && (
              <div className='text-xl mt-[18px] w-full text-[#3C3C3C]'>
                {selectedQuestion !== undefined ? faqs[index].answer : ''}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQList;
