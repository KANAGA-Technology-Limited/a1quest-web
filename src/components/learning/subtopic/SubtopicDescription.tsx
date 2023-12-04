'use client';

import { DropdownIcon } from '@/icons';
import { SubTopicType } from '@/types/data';
import React, { useEffect, useRef, useState } from 'react';
import LessonList from '../lesson/LessonList';
import Button from '@/common/Button/Button';
import { enterTestMode } from '@/store/features/testMode';
import { useAppDispatch } from '@/store/hooks';
import { useSearchParams } from 'next/navigation';
import { sendCatchFeedback } from '@/functions/feedback';
import { appAxios } from '@/api/axios';

const SubtopicDescription = ({ subTopic }: { subTopic: SubTopicType }) => {
  const dispatch = useAppDispatch();

  return (
    <div className='rounded-lg bg-white px-6 py-8 w-full flex gap-10 justify-between mt-10'>
      <div>
        <p className='text-[#06102B] font-normal text-lg mb-[6px]'>{subTopic.title}</p>
        <p className='text-[#64748B] font-normal text-sm line-clamp-6'>
          {subTopic.description}
        </p>
      </div>
      {subTopic.can_take_test && (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(
              enterTestMode({
                open: true,
                subtopicId: subTopic._id,
                topicId: subTopic.topic_id,
              })
            );
          }}
        >
          Take Test
        </Button>
      )}
    </div>
  );
};

export default SubtopicDescription;
