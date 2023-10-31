import { SubTopicType } from '@/types/data';
import { useRouter } from 'next/navigation';
import React from 'react';

const SubtopicCard = ({ subtopic }: { subtopic: SubTopicType }) => {
  const router = useRouter();

  return (
    <div
      key={subtopic._id}
      className='rounded-lg bg-white px-6 py-8 w-full cursor-pointer'
      onClick={() =>
        router.push(
          `/dashboard/learning/subtopic/?id=${subtopic._id}&topic=${subtopic.topic_id}`
        )
      }
    >
      <p className='text-[#06102B] font-normal text-lg mb-[6px]'>{subtopic.title}</p>
      <p className='text-[#64748B] font-normal text-sm line-clamp-1'>
        {subtopic.description}
      </p>
    </div>
  );
};

export default SubtopicCard;
