'use client';

import { formatNumberToNaira } from '@/functions/stringManipulations';
import React from 'react';
import creditIcon from '@/assets/icons/account/credit-icon.svg';
import debitIcon from '@/assets/icons/account/debit-icon.svg';
import addIcon from '@/assets/icons/account/add.svg';
import sendIcon from '@/assets/icons/account/send.svg';
import subscribeIcon from '@/assets/icons/account/subscribe.svg';
import creditAltIcon from '@/assets/icons/account/credit-alt.svg';
import debitAltIcon from '@/assets/icons/account/debit-alt.svg';
import Image from 'next/image';
import Button from '@/common/Button/Button';

const AccountWallet = () => {
  return (
    <>
      {/* Balance Info */}
      <div className='account-bg w-full flex flex-col items-center md:items-start px-5 md:px-10 lg:px-[60px] text-white text-center md:text-left rounded-lg py-12'>
        <h3 className='font-semibold text-lg md:text-xl'>Current Balance</h3>
        <p className='text-[26px] font-extrabold md:text-[32px] mt-[14px] mb-6'>
          {formatNumberToNaira(0)}
        </p>
        <div className='flex item-center gap-10 justify-center md:justify-start font-semibold'>
          <div className='flex item-center gap-3'>
            <Image src={creditIcon} alt='Credit' />
            <span className='md:text-lg'>{formatNumberToNaira(0, 2)}</span>
          </div>
          <div className='flex item-center gap-3'>
            <Image src={debitIcon} alt='Debit' />
            <span className='md:text-lg'>{formatNumberToNaira(0, 2)}</span>
          </div>
        </div>
      </div>

      {/* Control Buttons */}
      <div className='flex justify-center md:justify-start gap-6 flex-wrap items-center w-full my-10'>
        <Button className='!text-[#A0731A] !bg-[#F7D593]'>
          <p className='flex items-center gap-2'>
            <Image src={addIcon} alt='add Image' />
            <span>Add money</span>
          </p>
        </Button>
        <Button className='!text-[#A0731A] !bg-[#F7D593]'>
          <p className='flex items-center gap-2'>
            <Image src={sendIcon} alt='send Image' />
            <span>Send</span>
          </p>
        </Button>
        <Button className='!text-[#A0731A] !bg-[#F7D593]'>
          <p className='flex items-center gap-2'>
            <Image src={subscribeIcon} alt='subscribe Image' />
            <span>Subscribe</span>
          </p>
        </Button>
      </div>

      {/* Transactions */}
      <h4 className='text-[#191D23] mb-6 text-xl md:text-2xl text-center md:text-left'>
        Latest Transactions
      </h4>
      <div className='flex flex-col gap-8 w-full'>
        <div className='flex items-center justify-between flex-wrap gap-5'>
          <div className='flex items-start gap-6'>
            <div>
              <Image src={debitAltIcon} alt='debit' />
            </div>
            <div className='flex flex-col gap-1'>
              <span className='text-[#191D23] text-lg md:text-xl'>Wallet top-up</span>
              <span className='text-sm text-[#A0ABBB]'>13/12/2023</span>
            </div>
          </div>
          <span
            className='text-lg md:text-xl font-medium'
            style={{
              color: '#059669' || '#DC2626',
            }}
          >
            {formatNumberToNaira(2000)}
          </span>
        </div>
      </div>
    </>
  );
};

export default AccountWallet;
