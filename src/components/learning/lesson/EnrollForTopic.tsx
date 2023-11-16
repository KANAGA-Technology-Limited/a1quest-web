import { appAxios } from '@/api/axios';
import { EnrolledTopicType, LessonType } from '@/types/data';
import React, { useEffect } from 'react';

const EnrollForTopic = ({ lesson }: { lesson: LessonType | undefined }) => {
  useEffect(() => {
    const getEnrolledTopics = async () => {
      try {
        const response = await appAxios.get('/learning/enrolled-topics');
        const topics: EnrolledTopicType[] = response.data.data;

        if (topics && topics.length > 0) {
          const foundTopic = topics.find((item) => item.topic_id === lesson?.topic_id);
          if (!foundTopic) {
            // Enroll for this topic
            await appAxios.post(`/learning/${lesson?.topic_id}/enroll`);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (lesson) {
      getEnrolledTopics();
    }
  }, [lesson]);

  return null;
};

export default EnrollForTopic;
