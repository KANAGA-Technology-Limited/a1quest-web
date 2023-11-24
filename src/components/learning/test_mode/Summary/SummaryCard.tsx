'use client';
import { SubTopicType, TopicType } from '@/types/data';
import { TestCreationType, TestStage } from '@/types/test_mode';
import React from 'react';
import { MistakeIcon, QuestionIcon, ScoreIcon, TimeIcon } from './icons';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/store/hooks';
import { exitTestMode } from '@/store/features/testMode';

const SummaryCard = ({
  createdTest,
  testSubtopic,
  testTopic,
  setTestStage,
}: {
  createdTest: TestCreationType | undefined;
  setTestStage: React.Dispatch<React.SetStateAction<TestStage>>;
  testTopic: TopicType | undefined;
  testSubtopic: SubTopicType | undefined;
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const closeTest = () => {
    dispatch(exitTestMode());
    setTestStage('initialization');
  };
  return (
    <div className='px-primary py-20 w-full flex justify-center'>
      <div className='bg-white pt-10 px-[4.8vw] rounded-xl border-[0.5px] border-[#D0D5DD] pb-[113px] flex flex-col'>
        <h2 className='font-semibold text-xl md:text-2xl text-center mb-[21px]'>
          {testSubtopic ? testSubtopic.title : testTopic?.title || 'Test Performance'}
        </h2>
        <p className='text-[#4B5768] font-normal mb-[63px] text-center'>
          Here is your test performance metrics
        </p>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-10 '>
          {/* Questions */}
          <div className='flex flex-col gap-[6px]'>
            <div className='flex items-center gap-1'>
              <QuestionIcon />
              <span className='text-[#06102B] font-semibold'>
                {createdTest?.questions.length || 0}
              </span>
            </div>
            <span className='text-[#4B5768] text-sm font-normal'>Questions</span>
          </div>

          {/* Mistakes */}
          <div className='flex flex-col gap-[6px]'>
            <div className='flex items-center gap-1'>
              <MistakeIcon />
              <span className='text-[#06102B] font-semibold'>
                {createdTest?.questions.length || 0}
              </span>
            </div>

            <span
              className='text-primary underline underline-offset-2 cursor-pointer text-sm font-normal'
              onClick={() => {
                router.push(`/dashboard/report/test-review?id=${createdTest?._id || ''}`);
                closeTest();
              }}
            >
              Mistakes
            </span>
          </div>

          {/* Score */}
          <div className='flex flex-col gap-[6px]'>
            <div className='flex items-center gap-1'>
              <ScoreIcon />
              <span className='text-[#06102B] font-semibold'>
                {createdTest?.questions.length || 0}
              </span>
            </div>
            <span
              className='text-primary underline underline-offset-2 cursor-pointer text-sm font-normal'
              onClick={() => {
                router.push(`/dashboard/report/test-review?id=${createdTest?._id || ''}`);
                closeTest();
              }}
            >
              Score
            </span>
          </div>

          {/* Time Spent */}
          <div className='flex flex-col gap-[6px]'>
            <div className='flex items-center gap-1'>
              <TimeIcon />
              <span className='text-[#06102B] font-semibold'>
                {createdTest?.questions.length || 0}
              </span>
            </div>
            <span className='text-[#4B5768] text-sm font-normal'>Time Spent</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
