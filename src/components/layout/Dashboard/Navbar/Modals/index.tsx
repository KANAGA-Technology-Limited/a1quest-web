import React, { SetStateAction } from 'react';
import LogoutModal from './LogoutModal';
import FreezeModal from './FreezeModal';
import UnFreezeModal from './UnFreezeModal';
import DeleteModal from './DeleteModal';

const Modals = ({
  deleteModal,
  freezeModal,
  logoutModal,
  setUnFreezeModal,
  unfreezeModal,
  setDeleteModal,
  setFreezeModal,
  setLogoutModal,
}: {
  logoutModal: boolean;
  setLogoutModal: React.Dispatch<SetStateAction<boolean>>;
  freezeModal: boolean;
  unfreezeModal: boolean;
  setFreezeModal: React.Dispatch<SetStateAction<boolean>>;
  setUnFreezeModal: React.Dispatch<SetStateAction<boolean>>;
  deleteModal: boolean;
  setDeleteModal: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <LogoutModal open={logoutModal} onClose={() => setLogoutModal(false)} />
      <FreezeModal open={freezeModal} onClose={() => setFreezeModal(false)} />
      <UnFreezeModal open={unfreezeModal} onClose={() => setUnFreezeModal(false)} />
      <DeleteModal open={deleteModal} onClose={() => setDeleteModal(false)} />
    </>
  );
};

export default Modals;
