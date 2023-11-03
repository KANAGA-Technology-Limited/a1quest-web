'use client';
import Button from '@/common/Button/Button';
import { RecentTopicType } from '@/types/data';
import { useRouter } from 'next/navigation';
import React, { useMemo } from 'react';

const RecentTopicCard = ({ topic }: { topic: RecentTopicType }) => {
  const router = useRouter();

  const percentage = useMemo(() => (topic.progress_rate / 100) * 100, [topic]);

  return (
    <div className='bg-white rounded-[10px] px-6 py-8 w-full flex items-center justify-between flex-wrap gap-5'>
      <div className='w-full md:w-[60%]'>
        <p className='text-primary text-lg font-semibold mb-[6px]'>
          {topic.topic_id.title}
        </p>

        <p className='text-[#828282] text-sm font-normal mb-2'>
          {topic.topic_id.sub_topics.length}{' '}
          {`${topic.topic_id.sub_topics.length > 1 ? 'subtopics' : 'subtopic'}`}
        </p>

        {/* Progress */}
        <div className='mb-2 rounded bg-[#B8C0CC] w-full h-2'>
          <div
            className='max-w-full rounded bg-[#C88F21] h-2'
            style={{
              width: `${percentage}%`,
            }}
          />
        </div>
        <p className='text-sm text-[#A0ABBB]'>Overall Progress {percentage}%</p>
      </div>
      <Button
        onClick={() => router.push(`/dashboard/learning/topic/?id=${topic.topic_id._id}`)}
      >
        Continue
      </Button>
    </div>
  );
};

export default RecentTopicCard;
