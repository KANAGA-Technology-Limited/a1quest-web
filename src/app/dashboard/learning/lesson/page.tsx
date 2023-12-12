import PageTitle from '@/common/PageTitle';
import LessonDetail from '@/components/learning/lesson/LessonDetail';
import React from 'react';

const LessonPage = () => {
  return (
    <>
      <PageTitle title='Lesson Details' showBackButton />
      <LessonDetail />
    </>
  );
};

export default LessonPage;
