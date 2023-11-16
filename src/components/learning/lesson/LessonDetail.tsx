'use client';
import { appAxios } from '@/api/axios';
import LoadingIndicator from '@/common/LoadingIndicator';
import { sendCatchFeedback, sendFeedback } from '@/functions/feedback';
import { EnrolledTopicType, LessonType, TopicType } from '@/types/data';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import LessonNavigation from './LessonNavigation';
import TabSwitch from '@/common/TabSwitch';
import LessonVideo from './LessonVideo';
import LessonAudio from './LessonAudio';
import autoAnimate from '@formkit/auto-animate';
import PDFViewer from '@/common/PDFViewer';
import EnrollForTopic from './EnrollForTopic';

const LessonDetail = () => {
  const [lesson, setLesson] = useState<LessonType | undefined>(undefined);
  const [loading, setLoading] = React.useState(true);
  const searchParams = useSearchParams();
  const lessonId = searchParams.get('id');
  const [selectedTab, setSelectedTab] = useState<string>('Video');
  const parentRef = useRef(null);

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);

  useEffect(() => {
    const getLesson = async () => {
      try {
        setLoading(true);
        const response = await appAxios.get('/learning/view-lesson/' + lessonId);
        setLesson(response.data.data);
      } catch (error) {
        sendCatchFeedback(error);
      } finally {
        setLoading(false);
      }
    };
    if (lessonId) {
      getLesson();
    }
  }, [lessonId]);

  if (!lesson) return null;

  return (
    <>
      <div className='w-full'>
        {loading ? (
          <LoadingIndicator size={20} />
        ) : lesson ? (
          <>
            {/* Navigation */}
            <LessonNavigation
              topicId={lesson.topic_id}
              subTopicId={lesson.sub_topic_id}
              lessonName={lesson.title}
            />

            {/* Title */}
            <h1 className='text-[#06102B] mb-4 text-center md:text-left text-lg md:text-[28px] lg:text-[35px] font-semibold'>
              {lesson.title}
            </h1>

            {/* Selected Format */}
            <div ref={parentRef} className='mb-[46px] w-full'>
              {selectedTab === 'Video' && <LessonVideo lesson={lesson} />}
              {selectedTab === 'Audio' && <LessonAudio lesson={lesson} />}
            </div>

            {/* Tab Switch to select format */}
            <TabSwitch
              tabs={['Video', 'Audio']}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />

            {/* Lesson Notes */}
            <div className='mt-8 text-[#4B5768] font-normal'>
              <p className='text-sm mb-2 font-semibold'>Notes:</p>
              <PDFViewer file={lesson.document_url} />
            </div>
          </>
        ) : (
          <p>Lesson not found</p>
        )}
      </div>
      <EnrollForTopic lesson={lesson} />
    </>
  );
};

export default LessonDetail;
