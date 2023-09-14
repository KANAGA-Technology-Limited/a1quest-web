'use client';
import React, { useEffect, useState } from 'react';
import planIcon from '@/assets/icons/subscription/plan.svg';
import { SubscriptionType } from '@/types/data';
import { appAxios } from '@/api/axios';
import { sendCatchFeedback } from '@/functions/feedback';
import LoadingIndicator from '@/common/LoadingIndicator';
import Image from 'next/image';
import { formatNumberToNaira } from '@/functions/stringManipulations';
import Button from '@/common/Button/Button';

const SubscriptionPlans = () => {
  const [loading, setLoading] = useState(false);
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
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full 3xl:grid-cols-4'>
      {loading ? (
        <LoadingIndicator />
      ) : plans && plans.length ? (
        plans.map((plan) => (
          <div
            key={plan._id}
            className='w-full p-[25px] flex flex-col pb-[31px] rounded-[10px] bg-white border border-[#24242426] text-center items-center'
          >
            <Image src={planIcon} alt='Plan Icon' className='mb-4' />
            <p className='capitalize text-[#06102B] font-semibold text-xl mb-5'>
              {plan.subscriptionPlan} plan
            </p>
            <p className='text-[#0C1F56] text-[32px] font-semibold mb-[2px]'>
              {formatNumberToNaira(plan.subscriptionAmount || 0)}
            </p>
            <p className='text-[#64748B] mb-8'>Billed every {plan.duration} days</p>
            <Button>Subscribe</Button>
          </div>
        ))
      ) : (
        <p className='text-xl text-[#4B5768]'>No plans found</p>
      )}
    </div>
  );
};

export default SubscriptionPlans;
