import PageTitle from '@/common/PageTitle';
import ClassTopics from '@/components/learning/class/ClassTopics';
import React from 'react';

const LearningClassPage = () => {
  return (
    <>
      <PageTitle title='Class Topics' showBackButton />
      <ClassTopics />
    </>
  );
};

export default LearningClassPage;
