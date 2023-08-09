import AuthLayout from '@/components/auth/AuthLayout';
import RegisterForm from '@/components/auth/RegisterForm';
import React from 'react';
import FormImage from '@/assets/images/auth/register.webp';

const RegisterPage = () => {
  return (
    <AuthLayout image={FormImage}>
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
