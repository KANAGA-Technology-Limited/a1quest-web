'use client';
import { appAxios } from '@/api/axios';
import LoadingIndicator from '@/common/LoadingIndicator';
import { sendCatchFeedback } from '@/functions/feedback';
import { RecentTopicType } from '@/types/data';
import React, { useEffect, useState } from 'react';
import RecentTopicCard from './RecentTopicCard';
import { useSearchParams } from 'next/navigation';

const RecentLearning = ({
  limit = 2,
  showTitle = false,
}: {
  limit?: number;
  showTitle?: boolean;
}) => {
  const [topics, setTopics] = useState<RecentTopicType[] | undefined>(undefined);
  const [loading, setLoading] = React.useState(true);
  const searchParams = useSearchParams();
  const classId = searchParams.get('id');

  useEffect(() => {
    const getTopics = async () => {
      try {
        setLoading(true);
        const response = await appAxios.post('/learning/recent-learning', {
          populate: {
            path: 'topic_id',
          },
        });

        setTopics(response.data.data);
      } catch (error) {
        sendCatchFeedback(error);
      } finally {
        setLoading(false);
      }
    };
    getTopics();
  }, []);

  if (loading)
    return (
      <div className='mb-10'>
        <LoadingIndicator size={20} />
      </div>
    );

  if (!topics || topics.length === 0) return null;

  return (
    <>
      {showTitle && (
        <h2 className='text-[#323A46] font-semibold text-lg md:text-xl lg:text-2xl mb-6'>
          In Progress
        </h2>
      )}
      <div className='mb-10 flex flex-col w-full gap-6'>
        {topics.slice(0, limit).map(
          // Show only topics in that class
          (topic) =>
            classId ? (
              topic.topic_id?.class_id === classId && (
                <RecentTopicCard key={topic._id} topic={topic} />
              )
            ) : (
              <RecentTopicCard key={topic._id} topic={topic} />
            )
        )}
      </div>
    </>
  );
};

export default RecentLearning;
