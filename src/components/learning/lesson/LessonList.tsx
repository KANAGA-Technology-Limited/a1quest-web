'use client';
import { appAxios } from '@/api/axios';
import LoadingIndicator from '@/common/LoadingIndicator';
import { sendCatchFeedback } from '@/functions/feedback';
import { LessonType } from '@/types/data';
import React, { useEffect, useState } from 'react';
import LessonCard from './LessonCard';

const LessonList = ({ subtopicId, topicId }: { subtopicId: string; topicId: string }) => {
  const [data, setData] = useState<LessonType[] | undefined>(undefined);
  const [loading, setLoading] = React.useState(true);

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
      <div className='mb-5 pb-1 border-b w-full flex items-center justify-between'>
        <h4 className='text-[#4B5768] font-bold'>Lessons</h4>
        <p className='text-sm text-[#4B5768]'>
          {!loading &&
            data &&
            data.length > 0 &&
            `${data.length} ${data.length > 1 ? 'lessons' : 'lesson'}`}
        </p>
      </div>
      <div className='flex flex-col gap-5 w-full'>
        {loading ? (
          <LoadingIndicator size={20} />
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
