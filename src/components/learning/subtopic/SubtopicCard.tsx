'use client';

import { SubTopicType } from '@/types/data';
import React from 'react';
import { useRouter } from 'next/navigation';

const SubtopicCard = ({ subtopic }: { subtopic: SubTopicType }) => {
  const router = useRouter();

  return (
    <div
      id={subtopic._id}
      className='rounded-lg bg-white px-6 py-8 w-full flex flex-col gap-10 cursor-pointer'
      onClick={() => router.push(`/dashboard/learning/sub-topic/?id=${subtopic._id}`)}
    >
      {/* Header */}
      <div>
        <p className='text-[#06102B] font-normal text-lg mb-[6px]'>{subtopic.title}</p>
        <p className='text-[#64748B] font-normal text-sm line-clamp-1'>
          {subtopic.description}
        </p>
      </div>
    </div>
  );
};

export default SubtopicCard;
