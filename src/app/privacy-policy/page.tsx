import AppLayout from '@/components/layout/AppLayout';
import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <AppLayout>
      <p className='py-[100px] px-primary text-center'>
        Our privacy policy is currently being drafted by our legal team. However, we want
        to be able to do beta testing internally before releasing to the general public in
        November
      </p>
    </AppLayout>
  );
};

export default PrivacyPolicyPage;
