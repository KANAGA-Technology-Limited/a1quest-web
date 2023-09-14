'use client';

import { formatNumberToNaira } from '@/functions/stringManipulations';
import React, { useCallback, useEffect, useState } from 'react';
import creditIcon from '@/assets/icons/account/credit-icon.svg';
import debitIcon from '@/assets/icons/account/debit-icon.svg';
import addIcon from '@/assets/icons/account/add.svg';
import sendIcon from '@/assets/icons/account/send.svg';
import subscribeIcon from '@/assets/icons/account/subscribe.svg';
import creditAltIcon from '@/assets/icons/account/credit-alt.svg';
import debitAltIcon from '@/assets/icons/account/debit-alt.svg';
import Image from 'next/image';
import Button from '@/common/Button/Button';
import { TransactionType } from '@/types/data';
import { sendCatchFeedback } from '@/functions/feedback';
import { appAxios } from '@/api/axios';
import LoadingIndicator from '@/common/LoadingIndicator';
import Link from 'next/link';

const AccountWallet = () => {
  const [balanceLoading, setBalanceLoading] = useState(false);
  const [walletBalance, setWalletBalance] = useState<number | undefined>(undefined);
  const [transactionsLoading, setTransactionsLoading] = useState(false);
  const [transactions, setTransactions] = useState<TransactionType[] | undefined>(
    undefined
  );

  useEffect(() => {
    const getWalletBalance = async () => {
      try {
        setBalanceLoading(true);
        const response = await appAxios.get('/payment/wallet-balance');
        setWalletBalance(response.data.data);
      } catch (error) {
        sendCatchFeedback(error);
      } finally {
        setBalanceLoading(false);
      }
    };
    const getTransactionHistory = async () => {
      try {
        setTransactionsLoading(true);
        const response = await appAxios.get('/payment/transaction-history');
        setTransactions(response.data.data);
      } catch (error) {
        sendCatchFeedback(error);
      } finally {
        setTransactionsLoading(false);
      }
    };

    getWalletBalance();
    getTransactionHistory();
  }, []);

  const getTotalValues = useCallback(
    (type: 'credit' | 'debit') => {
      const value = transactions?.reduce(
        (prev, curr) => prev + (curr.txnType === type ? curr.amount : 0),
        0
      );
      return value;
    },
    [transactions]
  );

  const getStatusColor = useCallback((status: 'pending' | 'failed' | 'successful') => {
    let value = '';
    switch (status) {
      case 'pending':
        value = '#F59E0B';
        break;
      case 'failed':
        value = '#DC2626';
        break;
      case 'successful':
        value = '#059669';
        break;

      default:
        value = '#1D4ED8';
        break;
    }
    return value;
  }, []);

  return (
    <>
      {/* Balance Info */}
      <div className='account-bg w-full flex flex-col items-center md:items-start px-5 md:px-10 lg:px-[60px] text-white text-center md:text-left rounded-lg py-12'>
        <h3 className='font-semibold text-lg md:text-xl'>Current Balance</h3>
        <p className='text-[26px] font-extrabold md:text-[32px] mt-[14px] mb-6'>
          {balanceLoading ? (
            <LoadingIndicator size={20} />
          ) : (
            formatNumberToNaira(walletBalance || 0)
          )}
        </p>
        <div className='flex item-center gap-10 justify-center md:justify-start font-semibold'>
          <div className='flex item-center gap-3'>
            <Image src={creditIcon} alt='Credit' />
            <span className='md:text-lg'>
              {transactionsLoading ? (
                <LoadingIndicator size={15} />
              ) : (
                formatNumberToNaira(getTotalValues('credit') || 0, 2)
              )}
            </span>
          </div>
          <div className='flex item-center gap-3'>
            <Image src={debitIcon} alt='Debit' />
            <span className='md:text-lg'>
              {transactionsLoading ? (
                <LoadingIndicator size={15} />
              ) : (
                formatNumberToNaira(getTotalValues('debit') || 0, 2)
              )}
            </span>
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
        <a href='/dashboard/account/?tab=2'>
          <Button className='!text-[#A0731A] !bg-[#F7D593]'>
            <p className='flex items-center gap-2'>
              <Image src={subscribeIcon} alt='subscribe Image' />
              <span>Subscribe</span>
            </p>
          </Button>
        </a>
      </div>

      {/* Transactions */}
      <h4 className='text-[#191D23] mb-6 text-xl md:text-2xl text-center md:text-left'>
        Latest Transactions
      </h4>
      {transactionsLoading ? (
        <LoadingIndicator />
      ) : (
        <div className='flex flex-col gap-8 w-full'>
          {transactions && transactions.length ? (
            transactions.map((item) => (
              <div
                className='flex items-center justify-between flex-wrap gap-5'
                key={item._id}
              >
                <div className='flex items-start gap-6'>
                  <div>
                    <Image
                      src={item.txnType === 'credit' ? creditAltIcon : debitAltIcon}
                      alt={item.txnType}
                    />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <span className='text-[#191D23] text-lg md:text-xl'>
                      {item.txnName}
                    </span>
                    <p className='flex items-center gap-1'>
                      <span className='text-sm text-[#A0ABBB]'>
                        {new Date(item.createdAt).toLocaleDateString()}
                      </span>
                      <span>--</span>
                      <span
                        className='text-sm capitalize'
                        style={{
                          color: getStatusColor(item.status),
                        }}
                      >
                        {item.status}
                      </span>
                    </p>
                  </div>
                </div>
                <span
                  className='text-lg md:text-xl font-medium'
                  style={{
                    color: item.txnType === 'credit' ? '#059669' : '#DC2626',
                  }}
                >
                  {formatNumberToNaira(item.amount || 0)}
                </span>
              </div>
            ))
          ) : (
            <p className='text-xl text-center md:text-left text-[#4B5768]'>
              You’re yet to make any wallet transactions
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default AccountWallet;
