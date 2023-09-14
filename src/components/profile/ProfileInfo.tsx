'use client';

import LevelBadge from '@/common/LevelBadge';
import { useAppSelector } from '@/store/hooks';
import React, { useRef } from 'react';
import Image from 'next/image';
import Button from '@/common/Button/Button';
import shareIcon from '@/assets/icons/profile/share.svg';
import editIcon from '@/assets/icons/profile/edit.svg';
import Link from 'next/link';
import UserImage from './UserImage';

const ProfileInfo = () => {
  const { user } = useAppSelector((state) => state.user);

  if (!user) return null;
  return (
    <>
      {/* Header */}
      <div className='flex items-center justify-between flex-wrap gap-10'>
        <div className='flex gap-[22px] items-center'>
          <UserImage />
          <div className='flex flex-col'>
            <span className='font-extrabold text-2xl text-[#06102B]'>
              {user?.firstName + ' ' + user?.lastName}
            </span>
            <span className='text-[#4B5768] text-xl'>@{user?.userName}</span>
            <LevelBadge style={{ marginTop: 12 }} />
          </div>
        </div>
        <div className='gap-5 flex items-center justify-end'>
          <Button>
            <div className='gap-2 flex items-center flex-wrap justify-center'>
              <Image alt='' src={shareIcon} />
              <span>Share</span>
            </div>
          </Button>
          <Link href='/dashboard/profile/edit'>
            <Button variant='outlined'>
              <div className='gap-2 flex items-center flex-wrap justify-center'>
                <Image alt='' src={editIcon} />
                <span>Edit profile</span>
              </div>
            </Button>
          </Link>
        </div>
      </div>
      {/* Contents */}
      <div className='flex flex-col gap-6 mt-10 break-words md:break-normal'>
        <h2 className='text-xl text-[#242424] font-semibold'>Personal Details</h2>
        <div className='grid grid-cols-2 gap-5 pl-6 md:w-[30%] items-center'>
          <div className='flex flex-col gap-[21px] text-[#3C3C3C] text-lg font-semibold'>
            <span>Gender</span>
            <span>Class</span>
            <span>School</span>
            <span>Country</span>
            <span>State</span>
          </div>
          <div className='flex flex-col gap-[21px] text-[#797979]'>
            <span>{user?.gender}</span>
            <span>{user?.classLevel}</span>
            <span className='capitalize'>{user?.school}</span>
            <span>{user?.country}</span>
            <span>{user?.countryState}</span>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-6 mt-[60px] break-words md:break-normal'>
        <h2 className='text-xl text-[#242424] font-semibold'>
          Parent/Guardian Information
        </h2>
        <div className='grid grid-cols-2 gap-5 pl-6 md:w-[30%] items-center'>
          <div className='flex flex-col gap-[21px] text-[#3C3C3C] text-lg font-semibold'>
            <span>Name</span>
            <span>Email</span>
            <span>Report</span>
          </div>
          <div className='flex flex-col gap-[21px] text-[#797979]'>
            <span className='capitalize'>{user?.guardianFullName}</span>
            <span>{user?.guardianEmail}</span>
            <span className='capitalize'>{user?.reportToGuardian}</span>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-6 mt-[60px] break-words md:break-normal'>
        <h2 className='text-xl text-[#242424] font-semibold'>Your Goal</h2>
        <div className='grid grid-cols-2 gap-5 pl-6 md:w-[30%] items-center'>
          <div className='flex flex-col gap-[21px] text-[#3C3C3C] text-lg font-semibold'>
            <span>Duration</span>
          </div>
          <div className='flex flex-col gap-[21px] text-[#797979]'>
            <span>{user?.goal} minutes per day</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
