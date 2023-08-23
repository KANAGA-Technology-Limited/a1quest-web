'use client';

import { appAxios } from '@/api/axios';
import Button from '@/common/Button/Button';
import CustomModal from '@/common/CustomModal/CustomModal';
import { sendCatchFeedback, sendFeedback } from '@/functions/feedback';
import { signOut } from '@/store/features/user';
import { useAppDispatch } from '@/store/hooks';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const LogoutModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const logoutUser = async () => {
    try {
      setLoading(true);
      const response = await appAxios.get('/auth/logout');
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
      <h3 className='text-[#191D23] font-semibold text-lg mb-4'>Sign Out?</h3>
      <p className='text-[#4B5768]'>Are you sure you want to sign out?</p>
      <div className='flex justify-center mt-9'>
        <Button className='bg-red-600' onClick={() => logoutUser()} loading={loading}>
          Sign out
        </Button>
      </div>
    </CustomModal>
  );
};

export default LogoutModal;
