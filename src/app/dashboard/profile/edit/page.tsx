import PageTitle from '@/common/PageTitle';
import AccountInfoForm from '@/components/account-info/AccountInfoForm';
import React from 'react';

const EditProfilePage = () => {
  return (
    <>
      <PageTitle title='Edit Profile' showBackButton />
      <AccountInfoForm
        containerClass='!px-0 !py-0'
        contentClass='!max-w-full'
        conductCheck={false}
        destination='/dashboard/profile'
        showCancel
      />
    </>
  );
};

export default EditProfilePage;
