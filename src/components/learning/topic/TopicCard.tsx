'use client';
import { TopicType } from '@/types/data';
import { useRouter } from 'next/navigation';
import React from 'react';

const TopicCard = ({ topic }: { topic: TopicType }) => {
  const router = useRouter();

  return (
    <div
      className='bg-white rounded-[10px] px-6 py-8 cursor-pointer w-full'
      onClick={() => router.push(`/dashboard/learning/topic/?id=${topic._id}`)}
    >
      <p className='text-[#06102B] font-semibold mb-[6px]'>{topic.title}</p>
      <p className='text[#64748B] text-sm font-light line-clamp-2 mb-[6px]'>
        {topic.description}
      </p>
      <p className='text[#64748B] text-sm font-normal'>
        {topic.sub_topics.length}{' '}
        {`${topic.sub_topics.length > 1 ? 'subtopics' : 'subtopic'}`}
      </p>
    </div>
  );
};

export default TopicCard;
