'use client';
import { appAxios } from '@/api/axios';
import Button from '@/common/Button/Button';
import { sendCatchFeedback, sendFeedback } from '@/functions/feedback';
import { updateUser } from '@/store/features/user';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { UserType } from '@/types/user';
import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import GoalCard from './GoalCard';

const GoalInfoForm = () => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      goal: undefined,
    },
    onSubmit: () => {
      submitValues();
    },
    validationSchema: yup.object({
      goal: yup.number().required('Required'),
    }),
  });
  const submitValues = async () => {
    try {
      setLoading(true);

      const response = await appAxios.post('/auth/goal', {
        goal: formik.values.goal,
      });
      const accountInfo: UserType = response.data.data;
      dispatch(
        updateUser({
          user: {
            ...user,
            goal: accountInfo.goal,
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
        pointerEvents:
          !user?.guardianFullName || !user.school || user.goal ? 'none' : 'auto',
        opacity: !user?.guardianFullName || !user.school || user.goal ? 0.5 : 1,
      }}
      className='w-full'
    >
      <h2 className='mb-1 font-semibold text-xl md:text-2xl'>Set your goal</h2>
      <p className='mb-6 text-[#828282] text-sm'>
        How many minutes a day would you be learning for?
      </p>
      <form onSubmit={formik.handleSubmit} className='w-full'>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full'>
          {[15, 30, 45, 60].map((item) => (
            <GoalCard
              key={item}
              goal={item}
              selected={formik.values.goal === item}
              onChange={() => {
                formik.setFieldTouched('goal', true);
                formik.setFieldValue('goal', item);
              }}
            />
          ))}
        </div>
        {formik.touched.goal && formik.errors.goal && (
          <div className='text-error mt-2'>{formik.errors.goal}</div>
        )}
        <Button type='submit' loading={loading} className='!w-[134px] mt-[25px]'>
          Save
        </Button>
      </form>
    </div>
  );
};

export default GoalInfoForm;
