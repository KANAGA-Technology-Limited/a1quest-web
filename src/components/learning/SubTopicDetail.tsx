'use client';
import { appAxios } from '@/api/axios';
import LoadingIndicator from '@/common/LoadingIndicator';
import { sendCatchFeedback } from '@/functions/feedback';
import { SubTopicType } from '@/types/data';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const SubTopicDetail = () => {
  const [subTopic, setSubTopic] = useState<SubTopicType | undefined>(undefined);
  const [loading, setLoading] = React.useState(true);
  const searchParams = useSearchParams();
  const subtopicId = searchParams.get('id');

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await appAxios.get('/learning/view-sub-topic/' + subtopicId);
        setSubTopic(response.data.data);
      } catch (error) {
        sendCatchFeedback(error);
      } finally {
        setLoading(false);
      }
    };
    if (subtopicId) {
      getData();
    }
  }, [subtopicId]);

  return (
    <div className='w-full mt-10'>
      {loading ? (
        <LoadingIndicator />
      ) : subTopic ? (
        <div className='bg-white rounded-[10px] px-6 py-8 w-full'>
          <p className='text-[#06102B] font-semibold mb-[6px]'>{subTopic.title}</p>
          <p className='text[#64748B] text-sm font-light  mb-[6px]'>
            {subTopic.description}
          </p>
        </div>
      ) : (
        <p>Sub topic not found</p>
      )}
    </div>
  );
};

export default SubTopicDetail;
