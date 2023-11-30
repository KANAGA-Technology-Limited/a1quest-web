import Button from '@/common/Button/Button';
import { TestCreationType } from '@/types/test_mode';
import React from 'react';
import Timer from '../Timer';
import { SubTopicType, TopicType } from '@/types/data';

const ProgressControl = ({
  createdTest,
  selectedQuestion,
  setSelectedQuestion,
  submitLoading,
  submitTest,
  setTimerCount,
  timerCount,
  testSubtopic,
  testTopic,
}: {
  createdTest: TestCreationType | undefined;
  selectedQuestion: number;
  setSelectedQuestion: React.Dispatch<React.SetStateAction<number>>;
  submitLoading: boolean;
  submitTest: () => void;
  timerCount: number;
  setTimerCount: React.Dispatch<React.SetStateAction<number>>;
  testTopic: TopicType | undefined;
  testSubtopic: SubTopicType | undefined;
}) => {
  return (
    <div className='bg-white absolute left-0 bottom-0 right-0 px-primary py-[33px]'>
      <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-10 items-center place-items-center'>
        <div>
          {selectedQuestion > 0 && (
            <Button
              variant='outlined'
              onClick={() => setSelectedQuestion((old) => old - 1)}
            >
              Previous Question
            </Button>
          )}
        </div>

        <Timer
          timerCount={timerCount}
          setTimerCount={setTimerCount}
          testDuration={testSubtopic?.test_duration || testTopic?.test_duration || 0}
        />
        <div>
          {selectedQuestion + 1 >= (createdTest?.questions?.length || 0) ? (
            <Button onClick={submitTest} loading={submitLoading}>
              Submit Test
            </Button>
          ) : (
            <Button onClick={() => setSelectedQuestion((old) => old + 1)}>
              Next Question
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressControl;
