'use client';
import Button from '@/common/Button/Button';
import { sendFeedback } from '@/functions/feedback';
import { signOut } from '@/store/features/user';
import { useAppDispatch } from '@/store/hooks';
import { redirect } from 'next/navigation';
import React from 'react';

const DashboardPage = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>Dashboard</h1>
      <Button
        onClick={() => {
          dispatch(signOut());
          sendFeedback('Logout successful', 'success');
          redirect('/auth/login');
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default DashboardPage;
