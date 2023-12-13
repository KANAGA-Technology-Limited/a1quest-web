import PageTitle from '@/common/PageTitle';
import SubtopicDetail from '@/components/learning/subtopic/SubtopicDetail';
import React from 'react';

const SubTopicPage = () => {
  return (
    <>
      <PageTitle title='Sub-Topic Details' showBackButton />
      <SubtopicDetail />
    </>
  );
};

export default SubTopicPage;
