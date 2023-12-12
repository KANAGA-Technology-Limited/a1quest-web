import PageTitle from '@/common/PageTitle';
import SubTopicsList from '@/components/learning/subtopic/SubTopicsList';
import TopicDetail from '@/components/learning/topic/TopicDetail';
import React from 'react';

const LearningTopicsPage = () => {
  return (
    <>
      <PageTitle title='Topic Details' showBackButton />
      <TopicDetail />
      <SubTopicsList />
    </>
  );
};

export default LearningTopicsPage;
