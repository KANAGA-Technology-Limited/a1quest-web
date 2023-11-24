'use client';
import { useAppSelector } from '@/store/hooks';
import React from 'react';
import PopularTopics from './PopularTopics';
import SubscriptionCard from './SubscriptionCard';

const TopicSection = () => {
  const { user } = useAppSelector((state) => state.user);

  if (!user) return null;

  return user.subscription?.running ? <PopularTopics /> : <SubscriptionCard />;
};

export default TopicSection;
