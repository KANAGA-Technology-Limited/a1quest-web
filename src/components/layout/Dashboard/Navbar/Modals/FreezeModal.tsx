'use client';

import { appAxios } from '@/api/axios';
import Button from '@/common/Button/Button';
import CustomModal from '@/common/CustomModal/CustomModal';
import { sendCatchFeedback, sendFeedback } from '@/functions/feedback';
import { updateUser } from '@/store/features/user';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import React, { useState } from 'react';
import { CrossIcon } from '../../navIcons';
import { UserType } from '@/types/user';

const FreezeModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const { user } = useAppSelector((state) => state.user);

  const freezeAccount = async () => {
    try {
      setLoading(true);
      const response = await appAxios.patch('/auth/freeze-account');
      onClose();
      sendFeedback(response.data.message, 'success');
      dispatch(updateUser({ user: { ...user, isNotFreezed: false } as UserType }));
    } catch (error) {
      sendCatchFeedback(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CustomModal isOpen={open} onRequestClose={onClose} width='500px'>
      <h3 className='text-[#191D23] font-semibold text-lg mb-4'>
        Freezing your account will do the following
      </h3>
      <ul className='flex flex-col gap-3'>
        <li className='flex items-center gap-[10px] text-[#4B5768]'>
          <CrossIcon />
          <span>Suspend your subscription for 14 days</span>
        </li>
        <li className='flex items-center gap-[10px] text-[#4B5768]'>
          <CrossIcon />
          <span>After 14 days it will automatically unfreeze</span>
        </li>
      </ul>
      <div className='flex justify-center mt-9'>
        <Button className='bg-red-600' onClick={() => freezeAccount()} loading={loading}>
          Freeze
        </Button>
      </div>
    </CustomModal>
  );
};

export default FreezeModal;
