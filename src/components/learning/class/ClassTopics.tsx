'use client';
import { appAxios } from '@/api/axios';
import LoadingIndicator from '@/common/LoadingIndicator';
import { sendCatchFeedback } from '@/functions/feedback';
import { TopicType } from '@/types/data';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import TopicCard from '../topic/TopicCard';
import RecentLearning from './RecentLearning';

const ClassTopics = () => {
  const searchParams = useSearchParams();

  const className = searchParams.get('name');
  const classId = searchParams.get('id');

  const [topics, setTopics] = useState<TopicType[] | undefined>(undefined);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const getTopics = async () => {
      try {
        setLoading(true);
        const response = await appAxios.post('/learning/view-topics', {
          class_id: classId,
        });
        setTopics(response.data.data);
      } catch (error) {
        sendCatchFeedback(error);
      } finally {
        setLoading(false);
      }
    };
    if (classId) {
      getTopics();
    }
  }, [classId]);

  return (
    <div>
      <h1 className='text-[#323A46] text-xl md:text-2xl font-semibold my-10'>
        {className}
      </h1>
      <RecentLearning />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10'>
        {loading ? (
          <LoadingIndicator />
        ) : topics && topics.length > 0 ? (
          topics.map((topic) => <TopicCard key={topic._id} topic={topic} />)
        ) : (
          <p className='text-sm'>No topic found</p>
        )}
      </div>
    </div>
  );
};

export default ClassTopics;
