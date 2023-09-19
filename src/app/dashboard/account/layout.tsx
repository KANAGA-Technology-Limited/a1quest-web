import Script from 'next/script';
import React from 'react';

const AccountBaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Script src='https://js.paystack.co/v1/inline.js' />
    </>
  );
};

export default AccountBaseLayout;
