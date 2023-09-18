'use client';
import DashboardLayout from '@/components/layout/Dashboard/DashboardLayout';
import DeleteModal from '@/components/layout/Dashboard/Navbar/Modals/DeleteModal';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const DeleteProfilePage = () => {
  const [deleteModal, setDeleteModal] = useState(true);
  const router = useRouter();

  return (
    <DashboardLayout pageTitle='Delete Account'>
      <DeleteModal
        open={deleteModal}
        onClose={() => {
          setDeleteModal(false);
          router.push('/dashboard/profile');
        }}
      />
    </DashboardLayout>
  );
};

export default DeleteProfilePage;
