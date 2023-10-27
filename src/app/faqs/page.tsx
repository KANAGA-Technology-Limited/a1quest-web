import Header from '@/components/faqs/Header';
import AppLayout from '@/components/layout/AppLayout';
import React from 'react';
import FAQList from '../../components/faqs/FAQList';

const FAQPage = () => {
  return (
    <AppLayout>
      <Header />
      <FAQList />
    </AppLayout>
  );
};

export default FAQPage;
