'use client';
import React from 'react';
import ReferralImage from '@/assets/backgrounds/referral.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useAppSelector } from '@/store/hooks';
import { formatNumberToNaira } from '@/functions/stringManipulations';
import Button from '@/common/Button/Button';
import { sendFeedback } from '@/functions/feedback';
import EarningIcon from '@/assets/icons/profile/earning.svg';

const Referral = () => {
  const { user } = useAppSelector((state) => state.user);

  const shareCode = () => {
    return window.navigator.share({
      text: user?.personalReferralCode || '',
      title: 'A1Quest Referral Code',
    });
  };

  const copyCode = () => {
    window.navigator.clipboard.writeText(user?.personalReferralCode || '');
    return sendFeedback('Copied to clipboard');
  };

  return (
    <>
      {/* Referral earning */}
      <div className='relative text-white text-center'>
        <Image
          src={ReferralImage}
          alt=''
          className='w-full h-[229px] object-cover rounded-lg'
        />
        <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
          <div className='flex flex-col items-center justify-center'>
            <p className='font-semibold text-lg md:text-xl'>Referral Earnings</p>
            <p className='mt-[14px] mb-3 font-extrabold text-2xl md:text-[32px]'>
              {formatNumberToNaira(user?.referralEarnings || 0)}
            </p>
            {user?.referralActivity && user?.referralActivity?.length > 0 && (
              <p>
                You&apos;ve earned through {user?.referralActivity?.length} successful
                referrals and added to{' '}
                <Link href='/dashboard/account?tab=1' className='text-secondary'>
                  wallet
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Referral Code */}
      <div className='mt-8'>
        <h2 className='font-semibold text-xl mb-[10px]'>Refer and earn</h2>
        <p className='text-[#64748B] mb-5'>
          When anyone uses your code to join the app, you get 5% of their subscription
        </p>
        <div className='flex flex-col gap-[5px] w-full'>
          <span className='text-[12px] text-[#C1C1C1]'>Referral code</span>
          <div className='flex items-end md:gap-10 flex-wrap lg:flex-nowrap w-full gap-5'>
            <div className='border border-[#CECECE] rounded-[4px] md:w-[60%] w-full flex items-center justify-between px-4 py-3'>
              <span className='text-sm text-[#797979]'>{user?.personalReferralCode}</span>
              <button className='text-primary text-sm' onClick={copyCode}>
                copy code
              </button>
            </div>
            <Button onClick={shareCode}>Share code</Button>
          </div>
        </div>
      </div>

      {/* Referral Activity */}
      <div className='mt-20'>
        <h2 className='font-semibold text-xl lg:text-2xl mb-6'>Recent Activity</h2>
        <div className='flex flex-col gap-3 w-full'>
          {user?.referralActivity && user.referralActivity.length ? (
            user.referralActivity.map((activity) => (
              <div
                key={activity._id}
                className='bg-white border-[0.6px] border-[#D0D5DD] py-6 px-12 flex items-center justify-between w-full rounded-lg'
              >
                <div className='flex items-center gap-4'>
                  <Image src={EarningIcon} alt='Inflow' />
                  <div className='flex flex-col gap-[6px]'>
                    <span className='text-xl text-[#06102B]'>
                      You earned {formatNumberToNaira(activity.amountEarned || 0)}
                    </span>
                    <span className='text-[#64748B] text-sm'>
                      {formatNumberToNaira(activity.amountEarned || 0)} from{' '}
                      {formatNumberToNaira(activity.subscriptionAmount || 0)}{' '}
                      {activity.subscriptionPlan} subscription
                    </span>
                  </div>
                </div>
                <div className='bg-[#F7D593] px-[6px] py-3 rounded-full font-semibold text-sm'>
                  {formatNumberToNaira(activity.amountEarned || 0)}
                </div>
              </div>
            ))
          ) : (
            <div className='w-full h-[200px] flex items-center justify-center text-[#4B5768] text-lg md:text-xl'>
              You will see your earnings here when you begin to refer your friends
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Referral;
