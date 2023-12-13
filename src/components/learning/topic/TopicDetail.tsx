'use client';
import { appAxios } from '@/api/axios';
import LoadingIndicator from '@/common/LoadingIndicator';
import { sendCatchFeedback } from '@/functions/feedback';
import { TopicType } from '@/types/data';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const TopicDetail = () => {
  const [topic, setTopic] = useState<TopicType | undefined>(undefined);
  const [loading, setLoading] = React.useState(true);
  const searchParams = useSearchParams();
  const topicId = searchParams.get('id');

  useEffect(() => {
    const getTopic = async () => {
      try {
        setLoading(true);
        const response = await appAxios.get('/learning/view-topic/' + topicId);
        setTopic(response.data.data);
      } catch (error) {
        sendCatchFeedback(error);
      } finally {
        setLoading(false);
      }
    };
    if (topicId) {
      getTopic();
    }
  }, [topicId]);

  return (
    <div className='w-full'>
      {loading ? (
        <LoadingIndicator size={20} />
      ) : topic ? (
        <div className='bg-white rounded-[10px] px-6 py-8 w-full'>
          <p className='text-[#06102B] font-semibold mb-[6px]'>{topic.title}</p>
          <p className='text[#64748B] text-sm font-light  mb-[6px]'>
            {topic.description}
          </p>
          <p className='text[#64748B] text-sm font-normal'>
            {topic.sub_topics.length}{' '}
            {`${topic.sub_topics.length > 1 ? 'subtopics' : 'subtopic'}`}
          </p>
        </div>
      ) : (
        <p>Topic not found</p>
      )}
    </div>
  );
};

export default TopicDetail;
