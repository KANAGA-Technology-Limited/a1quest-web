'use client';
import CustomModal from '@/common/CustomModal/CustomModal';
import SubscriptionPlans from './SubscriptionPlans';

const ManageSubscriptionModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <CustomModal
      isOpen={open}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={false}
      title='Manage Subscription'
      width='1000px'
    >
      <div className='py-[76px] px-5'>
        <SubscriptionPlans />
      </div>
    </CustomModal>
  );
};

export default ManageSubscriptionModal;
