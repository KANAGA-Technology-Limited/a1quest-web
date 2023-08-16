'use client';
import { appAxios } from '@/api/axios';
import Button from '@/common/Button/Button';
import Dropdown from '@/common/Dropdown';
import LabelInput from '@/common/LabelInput';
import { sendCatchFeedback, sendFeedback } from '@/functions/feedback';
import { updateUser } from '@/store/features/user';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { UserType } from '@/types/user';
import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';

const GuardianInfoForm = () => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      parentName: '',
      parentEmail: '',
      report: '',
    },
    onSubmit: () => {
      submitValues();
    },
    validationSchema: yup.object({
      parentName: yup.string().required('Required'),
      parentEmail: yup.string().email('Enter a valid email').required('Required'),
      report: yup.string().required('Required'),
    }),
  });
  const submitValues = async () => {
    try {
      setLoading(true);

      const response = await appAxios.post('/auth/guardian', {
        guardianFullName: formik.values.parentName,
        guardianEmail: formik.values.parentEmail,
        reportToGuardian: formik.values.report,
      });
      const accountInfo: UserType = response.data.data;
      dispatch(
        updateUser({
          user: {
            ...user,
            guardianFullName: accountInfo.guardianFullName,
            guardianEmail: accountInfo.guardianEmail,
            reportToGuardian: accountInfo.reportToGuardian,
          } as UserType,
        })
      );

      sendFeedback(response.data?.message, 'success');
    } catch (error: any) {
      sendCatchFeedback(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        // Check to know when to disable form
        pointerEvents: !user?.school || user.guardianFullName ? 'none' : 'auto',
        opacity: !user?.school || user.guardianFullName ? 0.3 : 1,
      }}
      className='w-full'
    >
      <h2 className='mb-6 font-semibold text-xl md:text-2xl'>
        Parent/Guardian Information
      </h2>
      <form onSubmit={formik.handleSubmit} className='w-full'>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full mb-[25px]'>
          <LabelInput
            formik={formik}
            name='parentName'
            label='Name'
            placeholder="Your parent's name"
          />
          <LabelInput
            formik={formik}
            name='parentEmail'
            label='Email'
            type='email'
            placeholder="Your parent's email"
          />

          <Dropdown
            values={['weekly', 'monthly', 'quarterly', 'yearly'].map((item) => ({
              label: item,
              value: item,
            }))}
            placeholder='How often do you want report sent to them'
            name='report'
            formik={formik}
            label='Report Interval'
          />
        </div>

        <Button type='submit' loading={loading} className='!w-[134px]'>
          Save
        </Button>
      </form>
    </div>
  );
};

export default GuardianInfoForm;
