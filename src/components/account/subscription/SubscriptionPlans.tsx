'use client';
import React, { useEffect, useState } from 'react';
import { SubscriptionType } from '@/types/data';
import { appAxios } from '@/api/axios';
import { sendCatchFeedback } from '@/functions/feedback';
import LoadingIndicator from '@/common/LoadingIndicator';
import SubscribeModal from './SubscribeModal';
import SubscriptionCard from './SubscriptionCard';

const SubscriptionPlans = () => {
  const [loading, setLoading] = useState(true);
  const [plans, setPlans] = useState<SubscriptionType[] | undefined>(undefined);
  const [subscribeModalState, setSubscribeModalState] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);

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
    <>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full 3xl:grid-cols-4'>
        {loading ? (
          <LoadingIndicator />
        ) : plans && plans.length ? (
          plans.map((plan) => (
            <SubscriptionCard
              key={plan._id}
              plan={plan}
              setSelectedPlan={setSelectedPlan}
              setSubscribeModalState={setSubscribeModalState}
            />
          ))
        ) : (
          <p className='text-xl text-[#4B5768]'>No plans found</p>
        )}
      </div>
      {/* Modals */}
      <SubscribeModal
        onClose={() => setSubscribeModalState(false)}
        open={subscribeModalState}
        selectedPlan={selectedPlan}
      />
    </>
  );
};

export default SubscriptionPlans;
