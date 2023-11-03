'use client';
import React, { useState } from 'react';
import BookmarkIcon from '@/assets/icons/learning/bookmark_white.svg';
import BookmarkAddedIcon from '@/assets/icons/learning/bookmark_added_white.svg';
import Image from 'next/image';
import { sendFeedback } from '@/functions/feedback';

const LessonAudio = ({ url }: { url: string }) => {
  const [bookmarked, setBookmarked] = useState(false);

  if (!url) return <p className='text-error'>No audio file attached</p>;

  return (
    <div className='relative w-full h-[482px] flex items-center justify-center rounded-2xl bg-primaryDark'>
      <audio controls className='w-[80%] object-cover' controlsList='nodownload'>
        <source src={url} type='audio/mpeg' />
        Your browser does not support the audio tag.
      </audio>
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

export default LessonAudio;
