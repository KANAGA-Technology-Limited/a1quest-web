'use client';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { appAxios } from '@/api/axios';
import { sendCatchFeedback, sendFeedback } from '@/functions/feedback';
import LabelInput from '@/common/LabelInput';
import Button from '@/common/Button/Button';
import { UserType } from '@/types/user';
import Dropdown from '@/common/Dropdown';
import { updateUser } from '@/store/features/user';
import { CountryType, StateType } from '@/types/data';

const SchoolInfoForm = () => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [classes, setClasses] = useState<string[]>([]);
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [states, setStates] = useState<StateType[]>([]);
  const [classLoading, setClassLoading] = useState(false);
  const [countryLoading, setCountryLoading] = useState(false);
  const [stateLoading, setStateLoading] = useState(false);
  const [loading, setLoading] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      schoolName: '',
      studentClass: '',
      gender: '',
      country: '',
      state: '',
    },
    onSubmit: () => {
      submitValues();
    },
    validationSchema: yup.object({
      schoolName: yup.string().required('Required'),
      studentClass: yup.string().required('Required'),
      gender: yup.string().required('Required'),
      country: yup.string().required('Required'),
      state: yup.string().required('Required'),
    }),
  });
  const submitValues = async () => {
    try {
      setLoading(true);

      const response = await appAxios.post('/auth/profile', {
        school: formik.values.schoolName,
        classLevel: formik.values.studentClass,
        gender: formik.values.gender,
        country: formik.values.country,
        countryState: formik.values.state,
      });
      const accountInfo: UserType = response.data.data;
      dispatch(
        updateUser({
          user: {
            ...user,
            school: accountInfo.school,
            classLevel: accountInfo.classLevel,
            gender: accountInfo.gender,
            country: accountInfo.country,
            countryState: accountInfo.countryState,
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

  // Classes
  useEffect(() => {
    const getClasses = async () => {
      try {
        setClassLoading(true);
        const response = await appAxios.get('/auth/classes');
        setClasses(response.data.data);
      } catch (error) {
        sendCatchFeedback(error);
      } finally {
        setClassLoading(false);
      }
    };
    getClasses();
  }, []);

  // Countries
  useEffect(() => {
    const getCountries = async () => {
      try {
        setCountryLoading(true);
        const response = await appAxios.get('/auth/countries');
        setCountries(response.data.data);
      } catch (error) {
        sendCatchFeedback(error);
      } finally {
        setCountryLoading(false);
      }
    };
    getCountries();
  }, []);

  // States
  useEffect(() => {
    const getStates = async () => {
      try {
        setStateLoading(true);
        const response = await appAxios.post('/auth/states', {
          country: formik.values.country,
        });
        setStates(response.data?.data?.states);
      } catch (error) {
        sendCatchFeedback(error);
      } finally {
        setStateLoading(false);
      }
    };
    if (formik.values.country) {
      getStates();
    }
  }, [formik.values.country]);

  return (
    <div
      style={{
        // Check to know when to disable form
        pointerEvents: user?.school ? 'none' : 'auto',
        opacity: user?.school ? 0.5 : 1,
      }}
      className='w-full'
    >
      <h2 className='mb-6 font-semibold text-xl md:text-2xl'>Your Information</h2>
      <form onSubmit={formik.handleSubmit} className='w-full'>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full mb-[25px]'>
          <LabelInput
            formik={formik}
            name='schoolName'
            label='School'
            placeholder='Your school name'
          />
          <Dropdown
            values={classes?.map((item) => ({
              label: item,
              value: item,
            }))}
            label='Class'
            name='studentClass'
            formik={formik}
            placeholder='Your class'
            isLoading={classLoading}
          />
          <Dropdown
            values={['Male', 'Female'].map((item) => ({ label: item, value: item }))}
            label='Gender'
            name='gender'
            formik={formik}
            placeholder='Gender'
          />
          <Dropdown
            values={countries?.map((item) => ({
              label: item.country,
              value: item.country,
            }))}
            label='Country'
            name='country'
            formik={formik}
            isLoading={countryLoading}
            placeholder='Country'
          />
          <Dropdown
            values={states?.map((item) => ({
              label: item.name,
              value: item.name,
            }))}
            label='State'
            name='state'
            formik={formik}
            placeholder='State'
            isLoading={stateLoading}
            isDisabled={!formik.values.country}
          />
        </div>

        <Button type='submit' loading={loading} className='!w-[134px]'>
          Save
        </Button>
      </form>
    </div>
  );
};

export default SchoolInfoForm;
