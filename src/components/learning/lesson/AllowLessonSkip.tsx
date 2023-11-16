'use client';

import { appAxios } from '@/api/axios';
import { EnrolledTopicType, LessonType } from '@/types/data';
import React, { useEffect } from 'react';

const AllowLessonSkip = ({
  setAllowSkip,
  lesson,
}: {
  setAllowSkip: React.Dispatch<React.SetStateAction<boolean>>;
  lesson: LessonType | undefined;
}) => {
  useEffect(() => {
    const getEnrolledTopics = async () => {
      try {
        const response = await appAxios.get('learning/enrolled-topics');
        const topics: EnrolledTopicType[] = response.data.data;
        if (
          topics.some(
            (item) => item.topic_id === lesson?.topic_id && item.progress_rate > 0
            // if the user has completed the lesson
          )
        ) {
          setAllowSkip(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (lesson) {
      getEnrolledTopics();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson]);

  return null;
};

export default AllowLessonSkip;
