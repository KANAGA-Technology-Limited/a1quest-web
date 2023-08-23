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

const UnFreezeModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const { user } = useAppSelector((state) => state.user);

  const unFreezeAccount = async () => {
    try {
      setLoading(true);
      const response = await appAxios.patch('/auth/unfreeze-account');
      sendFeedback(response.data.message, 'success');
      dispatch(updateUser({ user: { ...user, isNotFreezed: true } as UserType }));
      onClose();
    } catch (error) {
      sendCatchFeedback(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <CustomModal isOpen={open} onRequestClose={onClose} width='500px'>
      <h3 className='text-[#191D23] font-semibold text-lg mb-4'>
        Unfreeze your account?
      </h3>
      <p className='text-[#4B5768]'>Are you sure you want to unfreeze your account?</p>

      <div className='flex justify-center mt-9'>
        <Button onClick={() => unFreezeAccount()} loading={loading}>
          Unfreeze
        </Button>
      </div>
    </CustomModal>
  );
};

export default UnFreezeModal;
