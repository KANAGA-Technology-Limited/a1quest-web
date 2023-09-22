'use client';

import { sendFeedback } from './../functions/feedback';
import { useAppSelector } from './../store/hooks';
import { FLUTTERWAVE_KEY } from './../functions/environmentVariables';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import BrandLogo from '@/assets/brand/logo-small.svg';

const useFlutterwaveHook = ({
  amount,
  reference,
  callback,
  description,
}: {
  amount: number;
  reference: string;
  description?: string;
  callback?: () => void;
}) => {
  const { user } = useAppSelector((state) => state.user);
  const config = {
    public_key: FLUTTERWAVE_KEY!,
    tx_ref: reference,
    amount,
    currency: 'NGN',
    payment_options: 'card,mobilemoney',
    customer: {
      email: user?.email || '',
      name: user?.userName || '',
      phone_number: '',
    },
    customizations: {
      title: 'A1Quest',
      description: description || '',
      logo: 'https://res.cloudinary.com/dtnrisb98/image/upload/v1695371317/brand/a1quest_logo-small_png.png',
    },
  };

  const initializePayment = useFlutterwave(config);

  // you can call this function anything
  const onSuccessFunction = (response) => {
    // Implementation for whatever you want to do with reference and after success call.
    sendFeedback('Transaction completed', 'success');
    closePaymentModal();
    callback?.();
  };

  // you can call this function anything
  const onCloseFunction = () => {
    // implementation for  whatever you want to do when the Flutterwave dialog closed.
    sendFeedback('Transaction stopped');
  };

  const beginFlutterwaveTransaction = () =>
    initializePayment({
      callback: (response) => onSuccessFunction(response),
      onClose: onCloseFunction,
    });

  return { beginFlutterwaveTransaction };
};

export default useFlutterwaveHook;
