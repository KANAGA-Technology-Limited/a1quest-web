'use client';
import React, { useEffect, useState } from 'react';
import PricingCard from './PricingCard';
import { SubscriptionType } from '@/types/data';
import { appAxios } from '@/api/axios';
import { sendCatchFeedback } from '@/functions/feedback';
import LoadingIndicator from '@/common/LoadingIndicator';

const Pricing = () => {
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
    <section
      id='pricing'
      className='bg-[#0C1F56] px-primary py-20 flex flex-col items-center w-full'
    >
      <h1 className='font-secondary text-[32px] md:text-[48px] lg:text-[56px] text-white text-center font-extrabold'>
        Simple and Transparent Pricing
      </h1>
      <p className='text-white text-center text-lg lg:text-xl mt-[10px] mb-[60px]'>
        Straight to the point pricing plans. No surprises or hidden charges. All is clear.
      </p>
      <div className='flex items-center justify-center gap-6 flex-wrap'>
        {loading ? (
          <LoadingIndicator />
        ) : plans && plans.length > 0 ? (
          plans.map((item) => <PricingCard key={item._id} pricing={item} />)
        ) : (
          <p className='text-sm text-white'>No plan found</p>
        )}
      </div>
    </section>
  );
};

export default Pricing;
