'use client';
import React, { useEffect, useState } from 'react';
import ManageSubscriptionModal from '../ManageSubscriptionModal';
import LoadingIndicator from '@/common/LoadingIndicator';
import { sendCatchFeedback } from '@/functions/feedback';
import { appAxios } from '@/api/axios';
import { SubscriptionType } from '@/types/data';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import TimeCard from './TimeCard';
import ManageCard from './ManageCard';
import { updateUser } from '@/store/features/user';
import { UserType } from '@/types/user';

const ExistingSubscription = () => {
  const [loading, setLoading] = useState(true);
  const [plans, setPlans] = useState<SubscriptionType[] | undefined>(undefined);
  const [subscribeModalState, setSubscribeModalState] = useState(false);
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

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

    // In case the subscription info has been updated
    const getUserDetails = async () => {
      try {
        setLoading(true);

        // Fetch updated user profile and set details
        const accountResponse = await appAxios.get('/auth/profile');
        const accountInfo: UserType = accountResponse.data.data;
        dispatch(updateUser({ user: { ...user, ...accountInfo } }));
      } catch (error) {
        sendCatchFeedback(error);
      } finally {
        setLoading(false);
      }
    };

    getPlans();
    getUserDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingIndicator />
      ) : plans &&
        plans.length &&
        plans.find((plan) => plan._id === user?.subscription?.plan) ? (
        <div className='flex flex-col gap-6 lg:flex-row items-stretch justify-between w-full'>
          <TimeCard plan={plans.find((plan) => plan._id === user?.subscription?.plan)} />
          <ManageCard setSubscribeModalState={setSubscribeModalState} />
        </div>
      ) : (
        <p className='text-xl text-[#4B5768]'>Plan not found</p>
      )}

      {/* Modals */}
      <ManageSubscriptionModal
        onClose={() => setSubscribeModalState(false)}
        open={subscribeModalState}
      />
    </div>
  );
};

export default ExistingSubscription;
