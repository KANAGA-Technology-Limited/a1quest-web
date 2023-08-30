import AccountInfoForm from '@/components/account-info/AccountInfoForm';
import DashboardLayout from '@/components/layout/Dashboard/DashboardLayout';
import React from 'react';

const EditProfilePage = () => {
  return (
    <DashboardLayout pageTitle='Edit Profile' showBackButton>
      <AccountInfoForm
        containerClass='!px-0 !py-0'
        contentClass='!max-w-full'
        conductCheck={false}
        destination='/dashboard/profile'
        showCancel
      />
    </DashboardLayout>
  );
};

export default EditProfilePage;
