'use client';
import { appAxios } from '@/api/axios';
import LoadingIndicator from '@/common/LoadingIndicator';
import { sendCatchFeedback } from '@/functions/feedback';
import { SubTopicType } from '@/types/data';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import SubtopicCard from './SubtopicCard';

const SubTopicsList = () => {
  const [subtopics, setSubTopics] = useState<SubTopicType[] | undefined>(undefined);
  const [loading, setLoading] = React.useState(true);
  const searchParams = useSearchParams();
  const topicId = searchParams.get('id');

  useEffect(() => {
    const getSubTopics = async () => {
      try {
        setLoading(true);
        const response = await appAxios.post('/learning/view-sub-topics', {
          topic_id: topicId,
        });
        setSubTopics(response.data.data);
      } catch (error) {
        sendCatchFeedback(error);
      } finally {
        setLoading(false);
      }
    };
    if (topicId) {
      getSubTopics();
    }
  }, [topicId]);

  return (
    <div>
      <h2 className='text-[#4B5768] text-xl md:text-2xl font-semibold mb-7 mt-12'>
        Subtopics
      </h2>
      <div className='flex flex-col gap-6 w-full'>
        {loading ? (
          <LoadingIndicator size={20} />
        ) : subtopics && subtopics.length > 0 ? (
          subtopics.map((item) => <SubtopicCard key={item._id} subtopic={item} />)
        ) : (
          <p className='text-sm'>No sub topic found</p>
        )}
      </div>
    </div>
  );
};

export default SubTopicsList;
