import { LessonType } from '@/types/data';
import { useRouter } from 'next/navigation';
import React from 'react';

const LessonCard = ({ lesson }: { lesson: LessonType }) => {
  const router = useRouter();

  return (
    <div
      key={lesson._id}
      className='rounded-lg bg-white px-6 py-8 w-full cursor-pointer'
      onClick={() => router.push(`/dashboard/learning/lesson/?id=${lesson._id}`)}
    >
      <p className='text-[#06102B] font-normal text-lg mb-[6px]'>{lesson.title}</p>
      <p className='text-[#64748B] font-normal text-sm line-clamp-1'>
        {lesson.description}
      </p>
    </div>
  );
};

export default LessonCard;
