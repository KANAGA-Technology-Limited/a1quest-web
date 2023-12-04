'use client';
import { sendFeedback } from '@/functions/feedback';
import { getMonthString } from '@/functions/stringManipulations';
import { DotIcon } from '@/icons';
import { TestListType } from '@/types/test_mode';
import { useRouter } from 'next/navigation';
import React from 'react';

const TestCard = ({ test }: { test: TestListType }) => {
  const router = useRouter();
  return (
    <div
      className='w-full bg-white rounded-lg p-4 border-[0.5px] border-[#D0D5DD] cursor-pointer'
      onClick={() => {
        if (test.completed) {
          router.push(`/dashboard/report/test-review?id=${test._id}`);
        } else {
          return sendFeedback('This test was not completed');
        }
      }}
      style={{
        cursor: test.completed ? 'pointer' : 'not-allowed',
      }}
    >
      <div className='flex gap-3 items-start w-full'>
        {/* Date */}
        <div className='border border-[#F2BA4B] rounded w-fit text-[#323A46] text-[10px] font-semibold flex flex-col'>
          <div className='bg-[#F2BA4B] px-[5px] pt-[7px] pb-[9px] text-center'>
            {new Date(test.creation_date).getDay()} {getMonthString(test.creation_date)}
          </div>
          <div className='px-[5px] pt-[7px] pb-[9px] text-center'>
            {new Date(test.creation_date).toLocaleTimeString('en-US', {
              timeZone: 'UTC',
              hour12: true,
              minute: 'numeric',
              hour: 'numeric',
            })}
          </div>
        </div>

        {/* Content */}
        <div>
          <p className='text-[#0D0F11] text-[15px] font-semibold mb-1'>
            {test.sub_topic_id?.title || test.topic_id?.title}
          </p>
          <p className='flex items-center gap-2 text-[#64748B] text-sm font-normal mb-1'>
            <span>{test.questions.length} questions</span>
            {test.completed && (
              <>
                <DotIcon />
                <span className='text-success font-semibold'>Completed</span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
