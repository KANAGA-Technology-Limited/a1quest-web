'use client';
import { BookMarkType, LessonType } from '@/types/data';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import BookmarkIcon from '@/assets/icons/learning/bookmark.svg';
import BookmarkAddedIcon from '@/assets/icons/learning/bookmark_added.svg';
import Image from 'next/image';
import { sendCatchFeedback, sendFeedback } from '@/functions/feedback';
import { appAxios } from '@/api/axios';
import LoadingIndicator from '@/common/LoadingIndicator';

const LessonCard = ({ lesson }: { lesson: LessonType }) => {
  const router = useRouter();
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

  return (
    <div
      key={lesson._id}
      className='rounded-lg bg-[#D0D5DD] p-3 w-full cursor-pointer flex items-center justify-between'
      onClick={() => router.push(`/dashboard/learning/lesson/?id=${lesson._id}`)}
    >
      <div className='max-w-[80%]'>
        <p className='text-[#06102B] font-normal mb-[6px]'>{lesson.title}</p>
        <p className='text-[#64748B] font-normal text-sm line-clamp-1'>
          {lesson.description}
        </p>
      </div>
      <div>
        {loading ? (
          <LoadingIndicator size={20} />
        ) : (
          <Image
            src={selectedBookmark ? BookmarkAddedIcon : BookmarkIcon}
            alt='bookmark'
            className='cursor-pointer'
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

export default LessonCard;
