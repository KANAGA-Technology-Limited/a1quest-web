import PageTitle from '@/common/PageTitle';
import StyledTabs from '@/common/StyledTabs';
import DashboardLayout from '@/components/layout/Dashboard/DashboardLayout';
import Achievements from '@/components/profile/Achievements';
import ProfileInfo from '@/components/profile/ProfileInfo';
import Referral from '@/components/profile/Referral';
import React from 'react';

const tabs = ['Personal Information', 'Referral', 'Achievements'];
const panels = [
  <ProfileInfo key='Personal Information' />,
  <Referral key='Referral' />,
  <Achievements key='Achievements' />,
];

const ProfilePage = () => {
  return (
    <>
      <PageTitle title='Profile' />
      <StyledTabs tabs={tabs} panels={panels} />
    </>
  );
};

export default ProfilePage;
