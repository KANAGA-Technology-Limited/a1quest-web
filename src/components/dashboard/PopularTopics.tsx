'use client';

import { appAxios } from '@/api/axios';
import LoadingIndicator from '@/common/LoadingIndicator';
import { sendCatchFeedback } from '@/functions/feedback';
import { useAppSelector } from '@/store/hooks';
import { ClassType, TopicType } from '@/types/data';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import TopicCard from '../learning/TopicCard';

const PopularTopics = () => {
  const { user } = useAppSelector((state) => state.user);
  const [loading, setLoading] = React.useState(true);
  const [loadingText, setLoadingText] = React.useState('');
  const [topics, setTopics] = useState<TopicType[] | undefined>(undefined);
  const [selectedClass, setSelectedClass] = useState('');

  useEffect(() => {
    const getClassesAndTopics = async () => {
      try {
        setLoading(true);
        setLoadingText('Fetching Classes');
        const classResponse = await appAxios.post('/learning/view-classes', {
          fields: 'name',
        });
        const classes: ClassType[] = classResponse.data.data;
        setLoadingText('Fetching Topics');
        const classFound = classes.find((item) => item.name === user?.classLevel)?._id;
        setSelectedClass(classFound || '');
        const topicResponse = await appAxios.post('/learning/popular-topics', {
          class_id: classFound,
        });

        setTopics(topicResponse.data.data);
      } catch (error) {
        sendCatchFeedback(error);
      } finally {
        setLoading(false);
        setLoadingText('');
      }
    };
    if (user) {
      getClassesAndTopics();
    }
  }, [user]);

  return (
    <div className='mt-[60px]'>
      <div className='flex items-center flex-wrap justify-between w-full mb-6'>
        <h2 className='text-[#323A46] font-semibold text-lg md:text-xl lg:text-2xl'>
          Popular Topics
        </h2>

        {selectedClass && (
          <Link
            href={`/dashboard/learning/class/?id=${selectedClass}&name=${user?.classLevel}`}
            className='text-[#C88F21] md:text-lg'
          >
            See all
          </Link>
        )}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10'>
        {loading ? (
          <LoadingIndicator text={loadingText} />
        ) : topics && topics.length > 0 ? (
          topics.map((topic) => <TopicCard key={topic._id} topic={topic} />)
        ) : (
          <p className='text-sm'>No topic found</p>
        )}
      </div>
    </div>
  );
};

export default PopularTopics;
