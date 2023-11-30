import { FailedIcon, PassedIcon } from '@/icons';
import { TestReviewQuestionType } from '@/types/test_mode';
import React, { useCallback } from 'react';

const QuestionCard = ({
  question,
  index,
}: {
  question: TestReviewQuestionType;
  index: number;
}) => {
  const isSelected = useCallback(
    (option: string) => {
      let selected = false;

      if (question.answer_provided.find((answer) => answer === option)) {
        selected = true;
      }

      console.log(selected);
      return selected;
    },
    [question]
  );

  return (
    <div className='w-full bg-white rounded-xl py-10 px-[3.9vw]'>
      <p className='text-[#A0731A] uppercase font-medium mb-6'>Question {index + 1}</p>
      <p className='text-lg md:text-xl text-[#0D0F11] font-medium mb-6'>
        {question.title}
      </p>
      <ul className='flex flex-col gap-2 w-full'>
        {/* Non Input Type */}
        {question.question_type !== 'input' &&
          question.options.map((option) => (
            <li
              key={option._id}
              className='border border-[#4B5768] rounded-md bg-white transition-colors duration-300 p-4 flex items-center justify-between'
              style={{
                borderColor: option.isCorrectAnswer ? '#059669' : '#4B5768',
                borderWidth: option.isCorrectAnswer ? 3 : 1,
              }}
            >
              {option.option_value}
              {option.isCorrectAnswer && isSelected(option._id) && <PassedIcon />}
              {!option.isCorrectAnswer && isSelected(option._id) && <FailedIcon />}
            </li>
          ))}

        {/* Input Type */}
        {question.question_type === 'input' && (
          <>
            <li
              className='border-[3px] border-[#4B5768] rounded-md bg-white transition-colors duration-300 p-4 flex items-center justify-between'
              style={{
                borderColor: question.passed ? '#059669' : '#DC2626',
              }}
            >
              <span>Your answer: {question.answer_provided[0]}</span>
              {question.passed && <PassedIcon />}
              {!question.passed && <FailedIcon />}
            </li>
            {!question.passed && (
              <li className='border-[3px] border-[#059669] rounded-md bg-white transition-colors duration-300 p-4 flex items-center justify-between'>
                <span>
                  Correct answer:{' '}
                  {
                    question.options.find((option) => option.isCorrectAnswer)
                      ?.option_value
                  }
                </span>
              </li>
            )}
          </>
        )}
      </ul>
    </div>
  );
};

export default QuestionCard;
