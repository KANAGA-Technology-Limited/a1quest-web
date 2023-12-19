import AuthLayout from '@/components/auth/AuthLayout';
import RegisterForm from '@/components/auth/RegisterForm';
import React from 'react';
import FormImage from '@/assets/images/auth/register.svg';

const RegisterPage = () => {
  return (
    <AuthLayout image={FormImage}>
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
