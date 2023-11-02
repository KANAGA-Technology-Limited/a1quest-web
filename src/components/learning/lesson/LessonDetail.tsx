'use client';
import { appAxios } from '@/api/axios';
import LoadingIndicator from '@/common/LoadingIndicator';
import { sendCatchFeedback } from '@/functions/feedback';
import { LessonType } from '@/types/data';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import LessonNavigation from './LessonNavigation';

const LessonDetail = () => {
  const [lesson, setLesson] = useState<LessonType | undefined>(undefined);
  const [loading, setLoading] = React.useState(true);
  const searchParams = useSearchParams();
  const lessonId = searchParams.get('id');

  useEffect(() => {
    const getLesson = async () => {
      try {
        setLoading(true);
        const response = await appAxios.get('/learning/view-lesson/' + lessonId);
        setLesson(response.data.data);
      } catch (error) {
        sendCatchFeedback(error);
      } finally {
        setLoading(false);
      }
    };
    if (lessonId) {
      getLesson();
    }
  }, [lessonId]);

  if (!lesson) return null;

  return (
    <div className='w-full'>
      {loading ? (
        <LoadingIndicator size={20} />
      ) : lesson ? (
        <>
          {/* Navigation */}
          <LessonNavigation
            topicId={lesson.topic_id}
            subTopicId={lesson.sub_topic_id}
            lessonName={lesson.title}
          />

          {/* Title */}
          <h1 className='text-[#06102B] mb-4 text-center md:text-left text-lg md:text-[28px] lg:text-[35px] font-semibold'>
            {lesson.title}
          </h1>

          {/* Selected Format */}

          {/* Tab Switch to select format */}

          {/* Lesson Notes */}
        </>
      ) : (
        <p>Lesson not found</p>
      )}
    </div>
  );
};

export default LessonDetail;
