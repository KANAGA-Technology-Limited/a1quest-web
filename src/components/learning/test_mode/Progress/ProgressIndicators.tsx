import { TestCreationType } from '@/types/test_mode';
import React from 'react';

const ProgressIndicators = ({
  createdTest,
  selectedQuestion,
  setSelectedQuestion,
}: {
  createdTest: TestCreationType | undefined;
  selectedQuestion: number;
  setSelectedQuestion: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const totalQuestions = React.useMemo(
    () => createdTest?.questions?.length || 10,
    [createdTest]
  );

  return (
    <div className='md:max-w-[80%] flex items-center gap-[5px] md:gap-[10px] w-full justify-between'>
      {Array.from(Array(totalQuestions).keys()).map((item, index) => (
        <button
          className='w-full bg-[#DADADA] h-[15px] rounded-lg duration-300'
          key={index}
          style={{
            backgroundColor: selectedQuestion === index ? '#F0AC27' : '#DADADA',
          }}
          onClick={() => setSelectedQuestion(index)}
        />
      ))}
    </div>
  );
};

export default ProgressIndicators;
