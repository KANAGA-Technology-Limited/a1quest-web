'use client';

import { appAxios } from '@/api/axios';
import Button from '@/common/Button/Button';
import CustomModal from '@/common/CustomModal/CustomModal';
import { sendCatchFeedback, sendFeedback } from '@/functions/feedback';
import { signOut } from '@/store/features/user';
import { useAppDispatch } from '@/store/hooks';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { CrossIcon } from '../../navIcons';

const DeleteModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const deleteAccount = async () => {
    try {
      setLoading(true);
      const response = await appAxios.delete('/auth/delete-account');
      sendFeedback(response.data.message, 'success');
    } catch (error) {
      sendCatchFeedback(error);
    } finally {
      dispatch(signOut());
      router.push('/auth/login');
      setLoading(false);
    }
  };
  return (
    <CustomModal isOpen={open} onRequestClose={onClose} width='500px'>
      <h3 className='text-[#191D23] font-semibold text-lg mb-4'>
        Deleting your account will do the following
      </h3>
      <ul className='flex flex-col gap-3'>
        <li className='flex items-center gap-[10px] text-[#4B5768]'>
          <CrossIcon />
          <span>Log you out </span>
        </li>
        <li className='flex items-center gap-[10px] text-[#4B5768]'>
          <CrossIcon />
          <span>Delete all your information</span>
        </li>
      </ul>
      <div className='flex justify-center mt-9'>
        <Button className='bg-red-600' onClick={() => deleteAccount()} loading={loading}>
          Delete
        </Button>
      </div>
    </CustomModal>
  );
};

export default DeleteModal;
