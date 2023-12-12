import React from 'react';
import AllClasses from '@/components/learning/class/AllClasses';
import PageTitle from '@/common/PageTitle';

const LearningPage = () => {
  return (
    <>
      <PageTitle title='My Learning' />
      <AllClasses />
    </>
  );
};

export default LearningPage;
