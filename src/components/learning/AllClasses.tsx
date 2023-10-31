'use client';

import { appAxios } from '@/api/axios';
import { sendCatchFeedback } from '@/functions/feedback';
import { ClassType } from '@/types/data';
import React, { useEffect, useState } from 'react';
import ArrowIcon from '@/assets/icons/learning/keyboard_arrow_right.svg';
import LockIcon from '@/assets/icons/learning/lock.svg';
import LoadingIndicator from '@/common/LoadingIndicator';
import Image from 'next/image';
import { useAppSelector } from '@/store/hooks';
import { useRouter } from 'next/navigation';

const AllClasses = () => {
  const [classes, setClasses] = useState<ClassType[] | undefined>(undefined);
  const [loading, setLoading] = React.useState(true);
  const { user } = useAppSelector((state) => state.user);
  const router = useRouter();

  // Classes
  useEffect(() => {
    const getClasses = async () => {
      try {
        setLoading(true);
        const response = await appAxios.post('/learning/view-classes', {
          fields: 'name',
        });
        setClasses(response.data.data);
      } catch (error) {
        sendCatchFeedback(error);
      } finally {
        setLoading(false);
      }
    };
    getClasses();
  }, []);

  return (
    <div>
      <h1 className='text-[#323A46] text-xl md:text-2xl font-semibold mb-10'>
        Choose your class
      </h1>
      <div className='w-full flex flex-col gap-6'>
        {loading ? (
          <LoadingIndicator />
        ) : classes && classes.length > 0 ? (
          classes.map((item) => (
            <button
              key={item._id}
              className='w-full shadow rounded-md bg-white flex items-center p-4 justify-between cursor-pointer hover:bg-primaryDark hover:text-white duration-300 group'
              style={{
                pointerEvents: user?.classLevel === item.name ? 'auto' : 'none',
              }}
              onClick={() =>
                router.push(`/dashboard/learning/class/?id=${item._id}&name=${item.name}`)
              }
            >
              <span className='text-sm'>{item.name}</span>
              <Image
                src={user?.classLevel === item.name ? ArrowIcon : LockIcon}
                alt='class'
                className='group-hover:brightness-0 group-hover:invert duration-300'
              />
            </button>
          ))
        ) : (
          <p className='text-sm'>No class found</p>
        )}
      </div>
    </div>
  );
};

export default AllClasses;
