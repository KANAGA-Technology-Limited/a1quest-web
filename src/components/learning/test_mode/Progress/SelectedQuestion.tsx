import Checkbox from '@/common/Checkbox';
import LabelInput from '@/common/LabelInput';
import { QuestionListType, TestQuestionType } from '@/types/test_mode';
import React, { useCallback } from 'react';

const SelectedQuestion = ({
  question,
  selectedQuestion,
  questionList,
  setQuestionList,
}: {
  question: TestQuestionType;
  selectedQuestion: number;
  setQuestionList: React.Dispatch<React.SetStateAction<QuestionListType | undefined>>;
  questionList: QuestionListType | undefined;
}) => {
  const selectedAnswer = useCallback(
    (value: string) => {
      let answer: string | undefined = undefined;
      if (questionList && questionList[question._id]) {
        answer = questionList[question._id].answer.find((item) => item === value);
      }
      return answer;
    },
    [questionList, question]
  );

  return (
    <div className='w-full'>
      <p className='text-[#A0731A] uppercase font-medium mb-6'>
        Question {selectedQuestion + 1}
      </p>
      <p className='text-lg md:text-xl text-[#0D0F11] font-medium mb-6'>
        {question.title}
      </p>

      {/* Input question */}
      {question.question_type === 'input' && (
        <LabelInput
          useFormik={false}
          variant='standard'
          value={
            questionList
              ? questionList[question._id]?.answer
                ? questionList[question._id]?.answer[0]
                : ''
              : ''
          }
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuestionList((old) => ({
              ...old,
              [question._id]: {
                answer:
                  question.question_input_type === 'number'
                    ? [Number(e.target.value) as any]
                    : [e.target.value],
              },
            }))
          }
          name={question._id}
          className='!w-full !h-[49px]'
          placeholder='Enter your answer'
          type={question.question_input_type}
        />
      )}

      {/* Dropdown or radio question */}
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
                  className='border border-[#4B5768] rounded-md bg-white duration-300 transition-colors cursor-pointer p-4'
                  style={{
                    borderColor: selectedAnswer(option._id)
                      ? 'var(--primary)'
                      : '#4B5768',
                    borderWidth: selectedAnswer(option._id) ? 3 : 1,
                  }}
                  onClick={() =>
                    setQuestionList((old) => ({
                      ...old,
                      [question._id]: {
                        answer: [option._id],
                      },
                    }))
                  }
                >
                  {option.option_value}
                </li>
              );
            }

            {
              /* Checkbox question */
            }
            if (question.question_type === 'checkbox') {
              return (
                <li
                  key={option._id}
                  className='border border-[#4B5768] rounded-md bg-white transition-colors duration-300 cursor-pointer p-4 flex items-center gap-2'
                  style={{
                    borderColor: selectedAnswer(option._id)
                      ? 'var(--primary)'
                      : '#4B5768',
                    borderWidth: selectedAnswer(option._id) ? 3 : 1,
                  }}
                  onClick={() => {
                    if (selectedAnswer(option._id) && questionList) {
                      setQuestionList((old) => ({
                        ...old,
                        [question._id]: {
                          answer: questionList[question._id].answer.filter(
                            (item) => item !== option._id
                          ),
                        },
                      }));
                    } else {
                      questionList
                        ? setQuestionList((old) => ({
                            ...old,
                            [question._id]: {
                              answer: [
                                ...(questionList[question._id]
                                  ? questionList[question._id].answer
                                  : []),
                                option._id,
                              ],
                            },
                          }))
                        : setQuestionList((old) => ({
                            ...old,
                            [question._id]: {
                              answer: [option._id],
                            },
                          }));
                    }
                  }}
                >
                  <Checkbox
                    checked={selectedAnswer(option._id) ? true : false}
                    value={option.option_value}
                    id={option._id}
                    // removed label because I wasn't using the onchange
                    // label={option.option_value}
                    key={option._id}
                    onChange={() => null}
                  />
                  <span className='font-medium text-gray-900'>{option.option_value}</span>
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
