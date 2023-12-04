'use client';
import { appAxios } from '@/api/axios';
import { sendCatchFeedback } from '@/functions/feedback';
import { SubTopicType } from '@/types/data';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import SubtopicDescription from './SubtopicDescription';
import LoadingIndicator from '@/common/LoadingIndicator';
import LessonList from '../lesson/LessonList';

const SubtopicDetail = () => {
  const searchParams = useSearchParams();
  const subTopicId = searchParams.get('id');
  const [details, setDetails] = useState<SubTopicType | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSubTopic = async () => {
      try {
        setLoading(true);
        const response = await appAxios.get('/learning/view-sub-topic/' + subTopicId);
        setDetails(response.data.data);
      } catch (error) {
        sendCatchFeedback(error);
      } finally {
        setLoading(false);
      }
    };

    if (subTopicId) {
      getSubTopic();
    }
  }, [subTopicId]);

  return (
    <>
      {loading ? (
        <LoadingIndicator size={40} text='Fetching Subtopic Details' align='center' />
      ) : details ? (
        <>
          <SubtopicDescription subTopic={details} />
          {/* Lessons */}
          <LessonList subtopicId={details._id} topicId={details.topic_id} />
        </>
      ) : (
        <p>Subtopic not found</p>
      )}
    </>
  );
};

export default SubtopicDetail;
