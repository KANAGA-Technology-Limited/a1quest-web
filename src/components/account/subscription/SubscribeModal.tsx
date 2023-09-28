'use client';
import CustomModal from '@/common/CustomModal/CustomModal';
import React, { FormEvent, useEffect } from 'react';
import SubscribeIcon from '@/assets/icons/account/subscribe-alt.svg';
import Image from 'next/image';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { appAxios } from '@/api/axios';
import { sendCatchFeedback, sendFeedback } from '@/functions/feedback';
import LabelInput from '@/common/LabelInput';
import Button from '@/common/Button/Button';
import PaystackIcon from '@/assets/icons/payment/paystack.svg';
import FlutterwaveIcon from '@/assets/icons/payment/flutterwave.svg';
import usePaystackHook from '@/hooks/usePaystackHook';
import useFlutterwaveHook from '@/hooks/useFlutterwaveHook';
import { SubscriptionType } from '@/types/data';
import LoadingIndicator from '@/common/LoadingIndicator';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { UserType } from '@/types/user';
import { updateUser } from '@/store/features/user';

const SubscribeModal = ({
  open,
  onClose,
  selectedPlan,
}: {
  open: boolean;
  onClose: () => void;
  selectedPlan: string | undefined;
}) => {
  const [loading, setLoading] = React.useState(false);
  const [reference, setReference] = React.useState('');
  const [paymentMethod, setPaymentMethod] = React.useState('');
  const [subscribeLoading, setSubscribeLoading] = React.useState(false);
  const [subscriptionDetails, setSubscriptionDetails] = React.useState<
    SubscriptionType | undefined
  >(undefined);
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const { beginPaystackTransaction } = usePaystackHook({
    amount: (subscriptionDetails?.subscriptionAmount || 0) * 100, // converting to kobo
    reference,
    callback: () => {
      onClose();
    },
  });

  const { beginFlutterwaveTransaction } = useFlutterwaveHook({
    amount: subscriptionDetails?.subscriptionAmount || 0,
    reference,
    callback: () => {
      onClose();
    },
    description: 'Wallet Top Up',
  });

  // Select subscription and return details
  useEffect(() => {
    const selectSubscription = async () => {
      try {
        setLoading(true);

        const response = await appAxios.post('/payment/choose-subscription-plan', {
          plan: selectedPlan,
        });

        setSubscriptionDetails(response.data.data);

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

    if (open && selectedPlan) {
      selectSubscription();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, selectedPlan]);

  const newSubscription = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!paymentMethod) {
      return sendFeedback('Please select a payment method', 'error');
    }
    try {
      setSubscribeLoading(true);

      // Initiate charge to get payment reference
      const referenceResponse = await appAxios.post('/payment/transaction', {
        amount: subscriptionDetails?.subscriptionAmount,
        gateway: paymentMethod,
        txnName: 'Subscription Charge',
      });

      setReference(() => referenceResponse.data.data);
    } catch (error) {
      sendCatchFeedback(error);
    } finally {
      setSubscribeLoading(false);
    }
  };

  useEffect(() => {
    if (reference) {
      if (paymentMethod === 'paystack') {
        beginPaystackTransaction();
      }
      if (paymentMethod === 'flutterwave') {
        beginFlutterwaveTransaction();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reference]);

  return (
    <CustomModal
      isOpen={open}
      onRequestClose={onClose}
      width='412px'
      shouldCloseOnOverlayClick={false}
    >
      <Image src={SubscribeIcon} alt='Add' />
      <h1 className='mt-5 mb-6 text-[#191D23] text-xl font-semibold'>
        Subscribe Payment
      </h1>
      {loading ? (
        <LoadingIndicator />
      ) : subscriptionDetails && Object.keys(subscriptionDetails).length > 0 ? (
        <>
          <form onSubmit={newSubscription} className='w-full '>
            <h2 className='text-[#323A46] font-semibold mb-2'>Choose payment method</h2>
            <p className='text-[#4B5768] text-sm mb-[23px]'>
              How would you like to top up your wallet?
            </p>
            <div className='flex gap-4 items-center'>
              {[
                { value: 'paystack', image: PaystackIcon },
                { value: 'flutterwave', image: FlutterwaveIcon },
              ].map((item) => (
                <div
                  key={item.value}
                  className='px-[26px] py-[13px] rounded-md border-[#D0D5DD] border-[2px] w-fit duration-300 cursor-pointer'
                  style={{
                    boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.10)',
                    borderColor: paymentMethod === item.value ? '#1D4ED8' : '#D0D5DD',
                  }}
                  onClick={() => setPaymentMethod(item.value)}
                >
                  <Image src={item.image} alt='Payment' />
                </div>
              ))}
            </div>

            <div className='flex justify-end mt-[43px]'>
              <Button type='submit' loading={subscribeLoading}>
                Subscribe
              </Button>
            </div>
          </form>
        </>
      ) : (
        <p className='my-2'>Couldn&apos;t select subscription</p>
      )}
    </CustomModal>
  );
};

export default SubscribeModal;
