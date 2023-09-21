'use client';

import { sendFeedback } from './../functions/feedback';
import { useAppSelector } from './../store/hooks';
import { PAYSTACK_KEY } from './../functions/environmentVariables';
import { usePaystackPayment } from 'react-paystack';

const usePaystackHook = ({
  amount,
  reference,
  callback,
}: {
  amount: number;
  reference: string;
  callback?: () => void;
}) => {
  const { user } = useAppSelector((state) => state.user);
  const config = {
    reference,
    email: user?.email || '',
    amount,
    publicKey: PAYSTACK_KEY!,
  };
  const initializePayment = usePaystackPayment(config);

  // you can call this function anything
  const onSuccessFunction = () => {
    // Implementation for whatever you want to do with reference and after success call.
    sendFeedback('Transaction completed', 'success');
    callback?.();
  };

  // you can call this function anything
  const onCloseFunction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    sendFeedback('Transaction stopped');
  };

  const beginPaystackTransaction = () =>
    initializePayment(onSuccessFunction, onCloseFunction);

  return { beginPaystackTransaction };
};

export default usePaystackHook;
