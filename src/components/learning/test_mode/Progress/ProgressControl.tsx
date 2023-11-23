import Button from '@/common/Button/Button';
import { TestCreationType, TestStage } from '@/types/test_mode';
import React from 'react';

const ProgressControl = ({
  createdTest,
  selectedQuestion,
  setSelectedQuestion,
  setTestStage,
}: {
  createdTest: TestCreationType | undefined;
  selectedQuestion: number;
  setSelectedQuestion: React.Dispatch<React.SetStateAction<number>>;
  setTestStage: React.Dispatch<React.SetStateAction<TestStage>>;
}) => {
  return (
    <div className='bg-white absolute left-0 bottom-0 right-0 px-primary py-[33px]'>
      <div
        className='w-full flex md:justify-between items-center flex-wrap gap-5 justify-center'
        style={{
          justifyContent: selectedQuestion > 0 ? 'space-between' : 'flex-end',
        }}
      >
        {selectedQuestion > 0 && (
          <Button
            variant='outlined'
            onClick={() => setSelectedQuestion((old) => old - 1)}
          >
            Previous Question
          </Button>
        )}
        {selectedQuestion + 1 >= (createdTest?.questions?.length || 0) ? (
          <Button
            onClick={() => {
              if (confirm('Are you sure you want to submit this test')) {
              }
            }}
          >
            Submit Test
          </Button>
        ) : (
          <Button onClick={() => setSelectedQuestion((old) => old + 1)}>
            Next Question
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProgressControl;
