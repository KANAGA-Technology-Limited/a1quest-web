import DashboardLayout from '@/components/layout/Dashboard/DashboardLayout';
import LessonDetail from '@/components/learning/lesson/LessonDetail';
import React from 'react';

const LessonPage = () => {
  return (
    <DashboardLayout>
      <LessonDetail />
    </DashboardLayout>
  );
};

export default LessonPage;
