'use client';
import React, { useEffect, useState } from 'react';
import BookmarkIcon from '@/assets/icons/learning/bookmark_white.svg';
import BookmarkAddedIcon from '@/assets/icons/learning/bookmark_added_white.svg';
import Image from 'next/image';
import { sendCatchFeedback, sendFeedback } from '@/functions/feedback';
import VideoPlayer from '@/common/VideoPlayer';
import { BookMarkType, LessonType } from '@/types/data';
import { appAxios } from '@/api/axios';
import LoadingIndicator from '@/common/LoadingIndicator';

const LessonVideo = ({
  lesson,
  allowSkip,
}: {
  lesson: LessonType;
  allowSkip: boolean;
}) => {
  const [loading, setLoading] = React.useState(true);
  const [selectedBookmark, setSelectedBookmark] = useState<BookMarkType | undefined>(
    undefined
  );

  const getBookmarks = async () => {
    try {
      setLoading(true);
      const response = await appAxios.get('/learning/bookmarks');
      const bookmarks: BookMarkType[] = response.data.data;

      if (bookmarks && bookmarks.length > 0) {
        const foundBookmark = bookmarks.find((item) => item.lesson_id._id === lesson._id);
        if (foundBookmark) {
          setSelectedBookmark(foundBookmark);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBookmarks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleBookmark = async () => {
    try {
      setLoading(true);
      let response: any;
      if (selectedBookmark) {
        response = await appAxios.delete('/learning/bookmarks/' + selectedBookmark._id);
        setSelectedBookmark(undefined);
        sendFeedback('Bookmark removed', 'success');
      } else {
        response = await appAxios.post('/learning/bookmarks', {
          lesson_id: lesson._id,
        });
        sendFeedback('Lesson bookmarked', 'success');
        await getBookmarks();
      }
    } catch (error) {
      sendCatchFeedback(error);
    } finally {
      setLoading(false);
    }
  };

  const trackProgress = async () => {
    try {
      await appAxios.post('/learning/track-progress-rate', {
        topic_id: lesson.topic_id,
        type: 'lesson',
        lesson_id: lesson._id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (!lesson.video_url) return <p className='text-error'>No video file attached</p>;

  return (
    <div className='relative w-full h-[482px] '>
      <VideoPlayer
        videoId={lesson.video_url || ''}
        onEnded={trackProgress}
        allowSkip={allowSkip}
      >
        <source src={lesson.video_url} type='video/mp4' />
      </VideoPlayer>

      <div className='absolute right-6 top-6 cursor-pointer'>
        {loading ? (
          <LoadingIndicator />
        ) : (
          <Image
            src={selectedBookmark ? BookmarkAddedIcon : BookmarkIcon}
            alt='bookmark'
            onClick={(e) => {
              e.stopPropagation();
              toggleBookmark();
            }}
          />
        )}
      </div>
    </div>
  );
};

export default LessonVideo;
