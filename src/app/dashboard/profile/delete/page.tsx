'use client';
import PageTitle from '@/common/PageTitle';
import DeleteModal from '@/components/layout/Dashboard/Navbar/Modals/DeleteModal';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const DeleteProfilePage = () => {
  const [deleteModal, setDeleteModal] = useState(true);
  const router = useRouter();

  return (
    <>
      <PageTitle title='Delete Profile' showBackButton />

      <DeleteModal
        open={deleteModal}
        onClose={() => {
          setDeleteModal(false);
          router.push('/dashboard/profile');
        }}
      />
    </>
  );
};

export default DeleteProfilePage;
