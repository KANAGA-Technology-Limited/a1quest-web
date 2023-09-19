'use client';
import CustomModal from '@/common/CustomModal/CustomModal';
import { usePaystackPayment } from 'react-paystack';
import React from 'react';
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

const AddMoneyModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [loading, setLoading] = React.useState(false);
  const { initializePayment, onClose: closeFunction, onSuccess } = usePaystackHook({});
  const formik = useFormik({
    initialValues: {
      amount: '',
    },
    onSubmit: () => {
      submitValues();
    },
    validationSchema: yup.object({
      amount: yup.number().typeError('Enter a valid number').required('Required'),
    }),
  });

  const submitValues = async () => {
    try {
      // @ts-ignore
      initializePayment(onSuccess, closeFunction);

      console.log('came');
    } catch (error) {
      sendCatchFeedback(error);
    }

    // try {
    //   setLoading(true);
    //   const response = await appAxios.post('/auth/login', {
    //     amount: formik.values.amount,
    //   });
    //   sendFeedback(response.data?.message, 'success');
    //   formik.resetForm();
    // } catch (error: any) {
    //   sendCatchFeedback(error);
    // } finally {
    //   setLoading(false);
    // }
  };
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
            className='px-[26px] py-[13px] rounded-md border-[#D0D5DD] border-[2px] w-fit'
            style={{
              boxShadow: ' 0px 4px 8px 0px rgba(0, 0, 0, 0.10)',
            }}
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
