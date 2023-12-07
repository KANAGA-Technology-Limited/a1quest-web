'use client';

import { appAxios } from '@/api/axios';
import LoadingIndicator from '@/common/LoadingIndicator';
import AppLayout from '@/components/layout/AppLayout';
import PricingCard from '@/components/pricing/PricingCard';
import { sendCatchFeedback } from '@/functions/feedback';
import { SubscriptionType } from '@/types/data';
import React, { useEffect, useState } from 'react';

const PricingPage = () => {
  const [loading, setLoading] = useState(true);
  const [plans, setPlans] = useState<SubscriptionType[] | undefined>(undefined);

  useEffect(() => {
    const getPlans = async () => {
      try {
        setLoading(true);
        const response = await appAxios.get('/payment/fetch-subscription-plans');
        setPlans(response.data.data);
      } catch (error) {
        sendCatchFeedback(error);
      } finally {
        setLoading(false);
      }
    };

    getPlans();
  }, []);
  return (
    <AppLayout staticHeader backgroundColor='#F5F5F5'>
      <header className='px-primary py-[100px] text-center lg:text-left'>
        <h1 className='max-w-3xl font-extrabold font-secondary text-[40px] md:text-[50px] lg:text-[60px] text-primaryDark mb-[10px]'>
          We&apos;ve got a plan that&apos;s perfect for you
        </h1>
        <p className='max-w-3xl text-[#5B5B5B]'>
          Choose the plan that works best for you and feel free to contact us if you need
          more details
        </p>
      </header>
      <div className='flex flex-col lg:flex-row gap-10 w-full pb-[100px] px-primary'>
        {loading ? (
          <LoadingIndicator />
        ) : plans && plans.length > 0 ? (
          plans.map((item) => <PricingCard key={item._id} pricing={item} />)
        ) : (
          <p className='text-sm'>No plan found</p>
        )}
      </div>
    </AppLayout>
  );
};

export default PricingPage;
