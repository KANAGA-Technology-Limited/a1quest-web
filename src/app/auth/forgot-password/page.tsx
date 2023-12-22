import AuthLayout from '@/components/auth/AuthLayout';
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';
import React from 'react';
import FormImage from '@/assets/images/auth/forgot-password.svg';

const ForgotPasswordPage = () => {
  return (
    <AuthLayout image={FormImage}>
      <ForgotPasswordForm />
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
