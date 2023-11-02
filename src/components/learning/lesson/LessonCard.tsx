import { LessonType } from '@/types/data';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import BookmarkIcon from '@/assets/icons/learning/bookmark.svg';
import BookmarkAddedIcon from '@/assets/icons/learning/bookmark_added.svg';
import Image from 'next/image';
import { sendFeedback } from '@/functions/feedback';

const LessonCard = ({ lesson }: { lesson: LessonType }) => {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div
      key={lesson._id}
      className='rounded-lg bg-[#D0D5DD] p-3 w-full cursor-pointer flex items-center justify-between'
      onClick={() => router.push(`/dashboard/learning/lesson/?id=${lesson._id}`)}
    >
      <div>
        <p className='text-[#06102B] font-normal mb-[6px]'>{lesson.title}</p>
        <p className='text-[#64748B] font-normal text-sm line-clamp-1'>
          {lesson.description}
        </p>
      </div>
      <div>
        <Image
          src={bookmarked ? BookmarkAddedIcon : BookmarkIcon}
          alt='bookmark'
          onClick={(e) => {
            e.stopPropagation();
            setBookmarked((old) => !old);
            sendFeedback('Coming soon');
          }}
        />
      </div>
    </div>
  );
};

export default LessonCard;
