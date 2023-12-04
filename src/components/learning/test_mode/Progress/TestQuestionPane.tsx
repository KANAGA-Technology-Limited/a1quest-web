import React, { useEffect, useRef } from 'react';
import autoAnimate from '@formkit/auto-animate';
import SelectedQuestion from './SelectedQuestion';
import { QuestionListType, TestCreationType } from '@/types/test_mode';

const TestQuestionPane = ({
  createdTest,
  selectedQuestion,
  setQuestionList,
  questionList,
}: {
  createdTest: TestCreationType | undefined;
  selectedQuestion: number;
  setQuestionList: React.Dispatch<React.SetStateAction<QuestionListType | undefined>>;
  questionList: QuestionListType | undefined;
}) => {
  const parentRef = useRef(null);

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);

  if (!createdTest) return null;

  return (
    <div className='w-full flex items-center justify-center pt-[92px] pb-[50px] px-primary max-h-[calc(100vh-200px)] overflow-y-auto customized-scrollbar'>
      <div
        ref={parentRef}
        className='bg-white border-[0.5px] border-[#D0D5DD] rounded-xl w-[575px] max-w-full pt-10 pb-[49px] px-[3.9vw]'
      >
        <SelectedQuestion
          question={createdTest.questions[selectedQuestion]}
          selectedQuestion={selectedQuestion}
          setQuestionList={setQuestionList}
          questionList={questionList}
        />
      </div>
    </div>
  );
};

export default TestQuestionPane;
