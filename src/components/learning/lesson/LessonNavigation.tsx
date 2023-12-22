import { appAxios } from '@/api/axios';
import { sendCatchFeedback } from '@/functions/feedback';
import { NavArrowRight } from '@/icons';
import { SubTopicType, TopicType } from '@/types/data';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const LessonNavigation = ({
  topicId,
  subTopicId,
  lessonName,
}: {
  topicId: string;
  subTopicId: string;
  lessonName: string;
}) => {
  const [loading, setLoading] = useState(true);
  const [topic, setTopic] = useState<TopicType | undefined>(undefined);
  const [subTopic, setSubTopic] = useState<SubTopicType | undefined>(undefined);

  useEffect(() => {
    const getDetails = async () => {
      try {
        setLoading(true);
        const topicResponse = await appAxios.get('/learning/view-topic/' + topicId);
        setTopic(topicResponse.data.data);
        const subTopicResponse = await appAxios.get(
          '/learning/view-sub-topic/' + subTopicId
        );
        setSubTopic(subTopicResponse.data.data);
      } catch (error) {
        sendCatchFeedback(error);
      } finally {
        setLoading(false);
      }
    };
    if (topicId && subTopicId) {
      getDetails();
    }
  }, [topicId, subTopicId]);

  if (loading) return null;

  return (
    <header className='mb-8 flex items-center gap-[6px] flex-wrap'>
      <Link
        href='/dashboard/learning'
        className='text-sm md:text-base lg:text-lg text-primary font-semibold'
      >
        My Learning
      </Link>
      <NavArrowRight />
      {/* Topic Link */}
      {topic && (
        <Link
          href={'/dashboard/learning/topic/?id=' + topic?._id}
          className='text-sm md:text-base lg:text-lg text-primary font-semibold'
        >
          {topic.title}
        </Link>
      )}
      <NavArrowRight />
      {/* Sub Topic Link */}
      {subTopic && topic && (
        <Link
          href={`/dashboard/learning/sub-topic/?id=${subTopic._id}`}
          className='text-sm md:text-base lg:text-lg text-primary font-semibold'
        >
          {subTopic.title}
        </Link>
      )}
      <NavArrowRight />
      {/* Lesson Title */}
      {lessonName && (
        <span className='text-sm md:text-base lg:text-lg text-[#4B5768] font-normal'>
          {lessonName}
        </span>
      )}
    </header>
  );
};

export default LessonNavigation;
