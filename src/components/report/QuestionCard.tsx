import { TestReviewQuestionType } from '@/types/test_mode';
import React from 'react';

const QuestionCard = ({
  question,
  index,
}: {
  question: TestReviewQuestionType;
  index: number;
}) => {
  return (
    <div className='w-full'>
      <p className='text-[#A0731A] uppercase font-medium mb-6'>Question {index + 1}</p>
      <p className='text-lg md:text-xl text-[#0D0F11] font-medium mb-6'>
        {question.title}
      </p>
      <ul className='flex flex-col gap-2 w-full'>
        {question.options.map((option) => (
          <li
            key={option._id}
            className='border border-[#4B5768] rounded-md bg-white duration-300 cursor-pointer p-4'
            style={{
              borderColor: question.passed ? 'var(--success)' : 'var(--error)',
            }}
          >
            {option.option_value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionCard;
