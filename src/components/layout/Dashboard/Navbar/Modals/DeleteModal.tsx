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
import TextArea from '@/common/TextArea/TextArea';

const DeleteModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [reason, setReason] = useState('');

  const deleteAccount = async () => {
    try {
      setLoading(true);
      const response = await appAxios.delete('/auth/delete-account', {
        data: {
          reason: reason || undefined,
        },
      });
      sendFeedback(response.data.message, 'success');
      onClose();
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
      <p className='text-[#4B5768] my-4'>
        We&apos;re sorry to see you go. Could you kindly share the reason for deleting
        your account? Your feedback helps us improve our services(optional).
      </p>
      <TextArea
        useFormik={false}
        name='reason'
        value={reason}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setReason(e.target.value)
        }
        rows={4}
        placeholder='Please provide your feedback here...'
      />
      <div className='flex justify-center mt-9'>
        <Button className='bg-red-600' onClick={() => deleteAccount()} loading={loading}>
          Delete
        </Button>
      </div>
    </CustomModal>
  );
};

export default DeleteModal;
