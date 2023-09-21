'use client';
import CustomModal from '@/common/CustomModal/CustomModal';
import React, { useEffect, useState } from 'react';
import SendIcon from '@/assets/icons/account/send-modal.svg';
import Image from 'next/image';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { appAxios } from '@/api/axios';
import { sendCatchFeedback, sendFeedback } from '@/functions/feedback';
import LabelInput from '@/common/LabelInput';
import Button from '@/common/Button/Button';
import { BankType, VerifiedAccountType } from '@/types/bank';
import LoadingIndicator from '@/common/LoadingIndicator';
import Dropdown from '@/common/Dropdown';

const SendMoneyModal = ({
  open,
  onClose,
  refetch,
}: {
  open: boolean;
  onClose: () => void;
  refetch: () => void;
}) => {
  const [loading, setLoading] = React.useState(false);
  const [verifiedAccountDetails, setVerifiedAccountDetails] = useState<
    VerifiedAccountType | undefined
  >(undefined);
  const [verificationLoading, setVerificationLoading] = useState(false);
  const [bankLoading, setBankLoading] = useState(false);
  const [bankList, setBankList] = useState<BankType[] | undefined>(undefined);

  useEffect(() => {
    const getBanks = async () => {
      try {
        const response = await appAxios.get('/payment/fetch-banks?country=NG');
        setBankList(response.data.data);
      } catch (error) {
        sendCatchFeedback(error);
      } finally {
        setBankLoading(false);
      }
    };
    getBanks();
  }, []);

  const formik = useFormik({
    initialValues: {
      amount: 0,
      selectedBank: '',
      accountNumber: '',
      narration: '',
      accountVerified: false,
    },
    onSubmit: () => {
      submitValues();
    },
    validationSchema: yup.object({
      amount: yup.number().typeError('Enter a valid number').required('Required'),
      selectedBank: yup.string().required('Required'),
      accountNumber: yup.string().required('Required'),
    }),
  });

  const submitValues = async () => {
    if (!formik.values.accountVerified) {
      return sendFeedback('Please enter valid account details', 'error');
    }
    try {
      setLoading(true);
      const response = await appAxios.post('/payment/transfer', {
        account_number: formik.values.accountNumber,
        account_bank: formik.values.selectedBank,
        amount: formik.values.amount,
        currency: 'NGN',
        narration: formik.values.narration || 'A1Quest Transfer',
      });
      sendFeedback(response.data.message, 'success');
      formik.resetForm();
    } catch (error) {
      sendCatchFeedback(error);
    } finally {
      setLoading(false);
    }
  };

  const verifyAccountDetails = async () => {
    try {
      setVerificationLoading(true);
      const response = await appAxios.post('/payment/verify-bank-account', {
        account_number: formik.values.accountNumber,
        account_bank: formik.values.selectedBank,
      });
      setVerifiedAccountDetails(response.data.data);
      formik.setFieldValue('accountVerified', true);
    } catch (error) {
      sendCatchFeedback(error);
    } finally {
      setVerificationLoading(false);
    }
  };

  return (
    <CustomModal
      isOpen={open}
      onRequestClose={onClose}
      width='412px'
      shouldCloseOnOverlayClick={false}
    >
      <Image src={SendIcon} alt='Send' />
      <h1 className='mt-5 mb-6 text-[#191D23] text-xl font-semibold'>Send Money</h1>
      <form onSubmit={formik.handleSubmit} className='w-full '>
        <LabelInput
          formik={formik}
          name='amount'
          label='Enter Amount'
          type='number'
          className='mb-[27px]'
        />
        <h2 className='text-[#323A46] font-semibold mb-2'>Withdraw to</h2>
        <p className='text-[#4B5768] text-sm mb-4'>Enter the account details below</p>
        <Dropdown
          values={
            bankList?.map((bank) => ({
              label: bank.name,
              value: bank.code,
            })) || []
          }
          name='selectedBank'
          formik={formik}
          label='Select Bank'
          className='w-full mb-[27px]'
          isLoading={bankLoading}
          blurFunction={() => {
            if (formik.values.accountNumber) {
              verifyAccountDetails();
            }
          }}
          required
        />
        <LabelInput
          formik={formik}
          name='accountNumber'
          label='Account Number'
          style={{
            borderColor: formik.values.accountVerified ? 'var(--success)' : '#D0D5DD',
          }}
          blurFunction={() => {
            if (formik.values.selectedBank) {
              verifyAccountDetails();
            }
          }}
          required
        />
        {verificationLoading && (
          <div className='mt-2'>
            <LoadingIndicator size={20} />
          </div>
        )}
        {verifiedAccountDetails && (
          <div className='mt-2 text-success text-xs uppercase'>
            {verifiedAccountDetails.account_name}
          </div>
        )}
        <LabelInput
          formik={formik}
          name='narration'
          label='Narration'
          className='mt-[27px]'
        />
        <div className='flex justify-end mt-[43px]'>
          <Button type='submit' loading={loading}>
            Send money
          </Button>
        </div>
      </form>
    </CustomModal>
  );
};

export default SendMoneyModal;
