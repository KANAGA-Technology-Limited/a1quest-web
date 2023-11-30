import { TestReviewType } from '@/types/test_mode';
import React from 'react';
import {
  MistakeIcon,
  QuestionIcon,
  ScoreIcon,
  TimeIcon,
} from '../learning/test_mode/Summary/icons';
import { formatTime } from '@/functions/stringManipulations';

const PerformanceSummary = ({ testReview }: { testReview: TestReviewType }) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-10 items-center w-full p-5 bg-white rounded-lg place-items-center'>
      {/* Questions */}
      <div className='flex flex-col gap-[6px]'>
        <div className='flex items-center gap-1'>
          <QuestionIcon />
          <span className='text-[#06102B] font-semibold'>
            {testReview.questions?.length || 0}
          </span>
        </div>
        <span className='text-[#4B5768] text-sm font-normal'>Questions</span>
      </div>

      {/* Mistakes */}
      <div className='flex flex-col gap-[6px]'>
        <div className='flex items-center gap-1'>
          <MistakeIcon />
          <span className='text-[#06102B] font-semibold'>{testReview.mistakes || 0}</span>
        </div>

        <span className='text-primary underline underline-offset-2 cursor-pointer text-sm font-normal'>
          Mistakes
        </span>
      </div>

      {/* Score */}

      <div className='flex flex-col gap-[6px]'>
        <div className='flex items-center gap-1'>
          <ScoreIcon />
          <span className='text-[#06102B] font-semibold'>
            {testReview.correct || 0}/{testReview.questions?.length || 0}
          </span>
        </div>
        <span className='text-primary underline underline-offset-2 cursor-pointer text-sm font-normal'>
          Score
        </span>
      </div>

      {/* Time Spent */}
      <div className='flex flex-col gap-[6px]'>
        <div className='flex items-center gap-1'>
          <TimeIcon />
          <span className='text-[#06102B] font-semibold'>
            {formatTime(testReview.time * 60 || 0)}
          </span>
        </div>
        <span className='text-[#4B5768] text-sm font-normal'>Time Spent</span>
      </div>
    </div>
  );
};

export default PerformanceSummary;
