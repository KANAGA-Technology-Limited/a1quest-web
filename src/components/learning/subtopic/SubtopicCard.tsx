'use client';

import { DropdownIcon } from '@/icons';
import { SubTopicType } from '@/types/data';
import React, { useEffect, useRef, useState } from 'react';
import LessonList from '../lesson/LessonList';
import autoAnimate from '@formkit/auto-animate';
import Button from '@/common/Button/Button';
import { enterTestMode } from '@/store/features/testMode';
import { useAppDispatch } from '@/store/hooks';

const SubtopicCard = ({ subtopic }: { subtopic: SubTopicType }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const parentRef = useRef(null);

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);

  return (
    <div
      id={subtopic._id}
      className='rounded-lg bg-white px-6 py-8 w-full flex flex-col gap-10'
      ref={parentRef}
    >
      {/* Header */}
      <div
        className='cursor-pointer flex justify-between items-center'
        onClick={() => setOpen((old) => !old)}
      >
        <div>
          <p className='text-[#06102B] font-normal text-lg mb-[6px]'>{subtopic.title}</p>
          <p
            className={
              open
                ? 'text-[#64748B] font-normal text-sm'
                : 'text-[#64748B] font-normal text-sm line-clamp-1'
            }
          >
            {subtopic.description}
          </p>
          <Button
            className='mt-5'
            onClick={(e) => {
              e.stopPropagation();
              dispatch(
                enterTestMode({
                  open: true,
                  subtopicId: subtopic._id,
                  topicId: subtopic.topic_id,
                })
              );
            }}
          >
            Take Test
          </Button>
        </div>
        <DropdownIcon
          className={open ? 'duration-500 rotate-180' : 'duration-500 rotate-0'}
        />
      </div>

      {/* Lessons */}
      {open && <LessonList subtopicId={subtopic._id} topicId={subtopic.topic_id} />}
    </div>
  );
};

export default SubtopicCard;
