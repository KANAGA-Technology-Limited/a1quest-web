'use client';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import ImageIcon from '@/assets/icons/profile/image.svg';
import DefaultImage from '@/assets/icons/profile/default-image.svg';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { appAxios } from '@/api/axios';
import { sendCatchFeedback, sendFeedback } from '@/functions/feedback';
import { updateUser } from '@/store/features/user';
import { UserType } from '@/types/user';
import LoadingIndicator from '@/common/LoadingIndicator';

const UserImage = () => {
  const { user } = useAppSelector((state) => state.user);
  const avatarFileRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const uploadProfileImage = async (file: File) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('profilePicture', file);

      const response = await appAxios.patch('/auth/profile-picture', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      sendFeedback(response.data.message, 'success');
      dispatch(
        updateUser({
          user: {
            ...user,
            photoUrl: response.data.data?.photoUrl,
            photoId: response.data.data?.photoId,
          } as UserType,
        })
      );
    } catch (error) {
      sendCatchFeedback(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='relative'>
      {/* Avatar */}
      {loading ? (
        <div className='w-[105px] h-[105px] flex item-center justify-center rounded-full'>
          <LoadingIndicator size={20} />
        </div>
      ) : (
        <Image
          src={user?.photoUrl || DefaultImage}
          width={105}
          height={105}
          className='h-[105px] w-[105px] object-cover border-[2px] border-main rounded-full'
          alt='Your Avatar'
        />
      )}

      <Image
        src={ImageIcon}
        alt='Upload Avatar'
        className='absolute right-0 bottom-[14px] cursor-pointer'
        onClick={() => avatarFileRef.current?.click()}
      />
      {/* Avatar Input when camera is clicked */}

      <input
        type='file'
        name='userAvatar'
        id='userAvatar'
        ref={avatarFileRef}
        onChange={(e) => {
          if (e.target.files) {
            uploadProfileImage(e.target.files[0]);
          }
        }}
        hidden
      />
    </div>
  );
};

export default UserImage;
