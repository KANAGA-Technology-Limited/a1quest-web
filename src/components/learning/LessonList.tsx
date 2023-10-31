'use client';
import { appAxios } from '@/api/axios';
import LoadingIndicator from '@/common/LoadingIndicator';
import { sendCatchFeedback } from '@/functions/feedback';
import { LessonType } from '@/types/data';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import LessonCard from './LessonCard';

const LessonList = () => {
  const [data, setData] = useState<LessonType[] | undefined>(undefined);
  const [loading, setLoading] = React.useState(true);
  const searchParams = useSearchParams();
  const subtopicId = searchParams.get('id');
  const topicId = searchParams.get('topic');

  useEffect(() => {
    const getLessons = async () => {
      try {
        setLoading(true);
        const response = await appAxios.post('/learning/view-lessons', {
          topic_id: topicId,
          sub_topic_id: subtopicId,
        });
        setData(response.data.data);
      } catch (error) {
        sendCatchFeedback(error);
      } finally {
        setLoading(false);
      }
    };
    if (topicId && subtopicId) {
      getLessons();
    }
  }, [topicId, subtopicId]);

  return (
    <div>
      <h2 className='text-[#4B5768] text-xl md:text-2xl font-semibold mb-7 mt-12'>
        Lessons
      </h2>
      <div className='flex flex-col gap-6 w-full'>
        {loading ? (
          <LoadingIndicator />
        ) : data && data.length > 0 ? (
          data.map((item) => <LessonCard key={item._id} lesson={item} />)
        ) : (
          <p className='text-sm'>No lesson found</p>
        )}
      </div>
    </div>
  );
};

export default LessonList;
