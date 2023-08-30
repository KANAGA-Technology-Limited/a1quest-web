'use client';

import { appAxios } from '@/api/axios';
import Button from '@/common/Button/Button';
import LabelInput from '@/common/LabelInput';
import TextArea from '@/common/TextArea/TextArea';
import { sendCatchFeedback, sendFeedback } from '@/functions/feedback';
import { useAppDispatch } from '@/store/hooks';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React from 'react';
import * as yup from 'yup';

const HelpForm = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      phoneNumber: '',
      email: '',
      message: '',
    },
    onSubmit: () => {
      submitValues();
    },
    validationSchema: yup.object({
      email: yup.string().email('Enter a valid email').required('Required'),
      name: yup.string().required('Required'),
      phoneNumber: yup.string().required('Required'),
      message: yup.string().required('Required'),
    }),
  });
  const submitValues = async () => {
    try {
      setLoading(true);
      // const response = await appAxios.post('/feedback', {
      //   name: formik.values.name,
      //   phoneNumber: formik.values.phoneNumber,
      //   email: formik.values.email,
      //   message: formik.values.message,
      // });

      // sendFeedback(response.data?.message, 'success');
      sendFeedback('Your message has been sent successfully', 'success');
      formik.resetForm();
    } catch (error: any) {
      sendCatchFeedback(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className='font-semibold text-xl md:text-[28px] mb-2 text-primary'>
        Need help? Get in touch
      </h1>
      <p className='mb-9 text-[#797979]'>
        Any question or remarks? You can write us a message!
      </p>
      <form onSubmit={formik.handleSubmit} className='w-full '>
        <LabelInput formik={formik} name='name' label='Your Name' className='mb-10' />
        <LabelInput
          formik={formik}
          name='phoneNumber'
          label='Phone Number'
          type='tel'
          className='mb-10'
        />
        <LabelInput
          formik={formik}
          name='email'
          label='Email'
          type='email'
          className='mb-10'
        />
        <TextArea
          formik={formik}
          name='message'
          label='Message'
          className='mb-10'
          rows={4}
        />

        <Button type='submit' loading={loading} className='w-full'>
          Send message
        </Button>
      </form>
    </div>
  );
};

export default HelpForm;
