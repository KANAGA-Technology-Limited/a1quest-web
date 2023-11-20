'use client';
import { BookMarkType } from '@/types/data';
import React from 'react';
import { DeleteIconAlt } from '@/icons';
import { sendCatchFeedback, sendFeedback } from '@/functions/feedback';
import { appAxios } from '@/api/axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const BookmarkCard = ({
  bookmark,
  setBookmarks,
}: {
  bookmark: BookMarkType;
  setBookmarks: React.Dispatch<React.SetStateAction<BookMarkType[] | undefined>>;
}) => {
  const router = useRouter();

  const deleteBookmark = async () => {
    if (confirm('Are you sure you want to delete this bookmark?')) {
      try {
        let response: any;
        response = await appAxios.delete('/learning/bookmarks/' + bookmark._id);
        setBookmarks((old) => old?.filter((item) => item._id !== bookmark._id));
        sendFeedback(response.data.message, 'success');
      } catch (error) {
        sendCatchFeedback(error);
      }
    }
  };
  return (
    <Link href={`/dashboard/learning/lesson/?id=${bookmark.lesson_id._id}`}>
      <div
        className='cursor-pointer bg-white px-6 py-8 border-[0.5px] border-[#D0D5DD] rounded-[10px]'
        // onClick={() => router.push()}
      >
        <div className='flex justify-between w-full items-center'>
          <div className='max-w-[80%]'>
            <p className='text-[#06102B] font-semibold mb-[6px]'>
              {bookmark.lesson_id.title}
            </p>
            <p className='text-primary font-normal text-sm line-clamp-2'>
              {bookmark.lesson_id.description}
            </p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault(); // for the link element wrapping this
              deleteBookmark();
            }}
          >
            <DeleteIconAlt />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default BookmarkCard;
