'use client';
import { appAxios } from '@/api/axios';
import LoadingIndicator from '@/common/LoadingIndicator';
import { sendCatchFeedback, sendFeedback } from '@/functions/feedback';
import { LessonType } from '@/types/data';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import LessonNavigation from './LessonNavigation';
import TabSwitch from '@/common/TabSwitch';
import { getPdfText } from '@/functions/pdfOperations';

const LessonDetail = () => {
  const [lesson, setLesson] = useState<LessonType | undefined>(undefined);
  const [loading, setLoading] = React.useState(true);
  const searchParams = useSearchParams();
  const lessonId = searchParams.get('id');
  const [selectedTab, setSelectedTab] = useState<string>('Video');
  const [convertedText, setConvertedText] = useState('');
  const [conversionLoading, setConversionLoading] = useState(true);

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

  useEffect(() => {
    const convertFile = async () => {
      try {
        setConversionLoading(true);
        const response = await getPdfText(lesson!.document_url);
        setConvertedText(response || '');
      } catch (error) {
        sendFeedback("Couldn't convert file", 'error');
      } finally {
        setConversionLoading(false);
      }
    };

    if (lesson && lesson.document_url) {
      convertFile();
    }
  }, [lesson]);

  if (!lesson) return null;

  return (
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

          {/* Tab Switch to select format */}
          <TabSwitch
            tabs={['Video', 'Audio']}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />

          {/* Lesson Notes */}
          <p className='mt-8 text-[#4B5768] font-normal'>
            <p className='text-sm mb-2 font-semibold'>Transcript:</p>
            {conversionLoading ? <LoadingIndicator size={20} /> : convertedText}
          </p>
        </>
      ) : (
        <p>Lesson not found</p>
      )}
    </div>
  );
};

export default LessonDetail;
