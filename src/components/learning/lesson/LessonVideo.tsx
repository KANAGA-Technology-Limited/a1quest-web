'use client';
import React, { useState } from 'react';
import BookmarkIcon from '@/assets/icons/learning/bookmark_white.svg';
import BookmarkAddedIcon from '@/assets/icons/learning/bookmark_added_white.svg';
import Image from 'next/image';
import { sendFeedback } from '@/functions/feedback';
import VideoPlayer from '@/common/VideoPlayer';

const LessonVideo = ({ url }: { url: string }) => {
  const [bookmarked, setBookmarked] = useState(false);

  if (!url) return <p className='text-error'>No video file attached</p>;

  return (
    <div className='relative w-full h-[482px] '>
      <VideoPlayer videoId={url || ''}>
        <source src={url} type='video/mp4' />
      </VideoPlayer>

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
