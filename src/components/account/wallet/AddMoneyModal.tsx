'use client';
import CustomModal from '@/common/CustomModal/CustomModal';
import { usePaystackPayment } from 'react-paystack';
import React, { useEffect } from 'react';
import AddIcon from '@/assets/icons/account/add-modal.svg';
import Image from 'next/image';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { appAxios } from '@/api/axios';
import { sendCatchFeedback, sendFeedback } from '@/functions/feedback';
import LabelInput from '@/common/LabelInput';
import Button from '@/common/Button/Button';
import PaystackIcon from '@/assets/icons/payment/paystack.svg';
import usePaystackHook from '@/hooks/usePaystackHook';

const AddMoneyModal = ({
  open,
  onClose,
  refetch,
}: {
  open: boolean;
  onClose: () => void;
  refetch: () => void;
}) => {
  const [loading, setLoading] = React.useState(false);
  const [reference, setReference] = React.useState('');

  const formik = useFormik({
    initialValues: {
      amount: 0,
      paymentMethod: '',
    },
    onSubmit: () => {
      submitValues();
    },
    validationSchema: yup.object({
      amount: yup.number().typeError('Enter a valid number').required('Required'),
    }),
  });
  const { beginPaystackTransaction } = usePaystackHook({
    amount: formik.values.amount * 100, // converting to kobo
    reference,
    callback: () => {
      onClose();
      refetch();
    },
  });

  const submitValues = async () => {
    if (!formik.values.paymentMethod) {
      return sendFeedback('Please select a payment method', 'error');
    }
    try {
      setLoading(true);
      const response = await appAxios.post('/payment/transaction', {
        amount: formik.values.amount,
        gateway: formik.values.paymentMethod,
        txnName: 'Wallet Top Up',
      });

      setReference(() => response.data.data);
    } catch (error) {
      sendCatchFeedback(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (reference) {
      if (formik.values.paymentMethod === 'paystack') {
        return beginPaystackTransaction();
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
      <Image src={AddIcon} alt='Add' />
      <h1 className='mt-5 mb-6 text-[#191D23] text-xl font-semibold'>Add Money</h1>
      <form onSubmit={formik.handleSubmit} className='w-full '>
        <LabelInput
          formik={formik}
          name='amount'
          label='Enter Amount'
          type='number'
          className='mb-[27px]'
        />
        <h2 className='text-[#323A46] font-semibold mb-2'>Choose payment method</h2>
        <p className='text-[#4B5768] text-sm mb-[23px]'>
          How would you like to top up your wallet?
        </p>
        {[{ value: 'paystack', image: PaystackIcon }].map((item) => (
          <div
            key={item.value}
            className='px-[26px] py-[13px] rounded-md border-[#D0D5DD] border-[2px] w-fit duration-300 cursor-pointer'
            style={{
              boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.10)',
              borderColor:
                formik.values.paymentMethod === item.value ? '#1D4ED8' : '#D0D5DD',
            }}
            onClick={() => formik.setFieldValue('paymentMethod', item.value)}
          >
            <Image src={item.image} alt='Payment' />
          </div>
        ))}
        <div className='flex justify-end mt-[43px]'>
          <Button type='submit' loading={loading}>
            Fund wallet
          </Button>
        </div>
      </form>
    </CustomModal>
  );
};

export default AddMoneyModal;
