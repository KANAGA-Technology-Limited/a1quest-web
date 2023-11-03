'use client';
import React, { useState } from 'react';
import BookmarkIcon from '@/assets/icons/learning/bookmark_white.svg';
import BookmarkAddedIcon from '@/assets/icons/learning/bookmark_added_white.svg';
import Image from 'next/image';
import { sendFeedback } from '@/functions/feedback';

const LessonVideo = ({ url }: { url: string }) => {
  const [bookmarked, setBookmarked] = useState(false);

  if (!url) return <p className='text-error'>No video file attached</p>;

  return (
    <div className='relative w-full h-[482px] '>
      <video
        width='100%'
        height='100%'
        controls
        className='!h-full !max-h-full object-cover rounded-2xl'
        controlsList='nodownload'
      >
        <source src={url} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='absolute right-6 top-6 cursor-pointer'>
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

export default LessonVideo;
