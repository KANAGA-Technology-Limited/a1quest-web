'use client';
import { appAxios } from '@/api/axios';
import LoadingIndicator from '@/common/LoadingIndicator';
import { sendCatchFeedback } from '@/functions/feedback';
import { BookMarkType } from '@/types/data';
import React, { useEffect, useState } from 'react';
import BookmarkCard from './BookmarkCard';
import Link from 'next/link';

const BookmarkList = () => {
  const [loading, setLoading] = React.useState(true);
  const [bookmarks, setBookmarks] = useState<BookMarkType[] | undefined>(undefined);

  const getBookmarks = async () => {
    try {
      setLoading(true);
      const response = await appAxios.get('/learning/bookmarks');

      setBookmarks(response.data.data);
    } catch (error) {
      sendCatchFeedback(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBookmarks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingIndicator />
      ) : bookmarks && bookmarks.length > 0 ? (
        <div className='grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {bookmarks.map((bookmark) => (
            <BookmarkCard
              bookmark={bookmark}
              key={bookmark._id}
              setBookmarks={setBookmarks}
            />
          ))}
        </div>
      ) : (
        <div className='w-full h-[calc(100vh-200px)] flex items-center justify-center flex-col gap-3 text-center'>
          <h1 className='text-2xl md:text-3xl lg:text-[32px] font-semibold'>
            No Bookmarks!
          </h1>
          <p>
            Start{' '}
            <Link href='/dashboard/learning' className='text-primary'>
              learning
            </Link>{' '}
            now to bookmark your lessons
          </p>
        </div>
      )}
    </div>
  );
};

export default BookmarkList;
