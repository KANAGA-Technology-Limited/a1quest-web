import Checkbox from '@/common/Checkbox';
import LabelInput from '@/common/LabelInput';
import { TestQuestionType } from '@/types/test_mode';
import React from 'react';

const SelectedQuestion = ({
  question,
  selectedQuestion,
}: {
  question: TestQuestionType;
  selectedQuestion: number;
}) => {
  return (
    <div className='w-full'>
      <p className='text-[#A0731A] uppercase font-medium mb-6'>
        Question {selectedQuestion + 1}
      </p>
      <p className='text-lg md:text-xl text-[#0D0F11] font-medium mb-6'>
        {question.title}
      </p>
      {question.question_type === 'input' && (
        <LabelInput
          useFormik={false}
          value=''
          onChange={() => null}
          name={question._id}
          className='!w-full !h-[49px]'
          placeholder='Enter your answer'
          type={question.question_input_type}
        />
      )}
      {question.question_type !== 'input' && (
        <ul className='flex flex-col gap-2 w-full'>
          {question.options.map((option) => {
            if (
              question.question_type === 'dropdown' ||
              question.question_type === 'radio'
            ) {
              return (
                <li
                  key={option._id}
                  className='border border-[#4B5768] rounded-md bg-white duration-300 cursor-pointer p-4'
                >
                  {option.option_value}
                </li>
              );
            }
            if (question.question_type === 'checkbox') {
              return (
                <li
                  key={option._id}
                  className='border border-[#4B5768] rounded-md bg-white duration-300 cursor-pointer p-4'
                >
                  <Checkbox
                    checked={false}
                    value={option.option_value}
                    id={option._id}
                    label={option.option_value}
                    key={option._id}
                    onChange={() => null}
                  />
                </li>
              );
            }
          })}
        </ul>
      )}
    </div>
  );
};

export default SelectedQuestion;
