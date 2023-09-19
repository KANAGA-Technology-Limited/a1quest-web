import React from 'react';
import { usePaystackPayment } from 'react-paystack';

const usePaystackHook = ({
  amount,
  reference,
}: {
  amount?: number;
  reference?: string;
}) => {
  const config = {
    reference: new Date().getTime().toString(),
    email: 'user@example.com',
    amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: 'pk_test_dsdfghuytfd2345678gvxxxxxxxxxx',
  };
  const initializePayment = usePaystackPayment(config);

  // you can call this function anything
  const onSuccess = (reference: string) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed');
  };

  return { initializePayment, onSuccess, onClose };
};

export default usePaystackHook;
