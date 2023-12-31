import React, { ButtonHTMLAttributes } from 'react';
import LoadingIndicator from '../LoadingIndicator';

function Button({
  className,
  type = 'button',
  loading = false,
  onClick,
  children,
  variant = 'contained',
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'outlined' | 'contained';
  loading?: boolean;
}) {
  return (
    <button
      type={type}
      className={
        (variant === 'outlined'
          ? 'w-fit h-[50px] border bg-transparent border-main text-primary rounded-lg py-3 px-8 hover:brightness-90 duration-300 font-medium disabled:bg-gray-300 flex items-center justify-center'
          : 'w-fit h-[50px] bg-primary text-white rounded-lg py-3 px-8 hover:brightness-110 duration-300 font-medium disabled:bg-gray-300 flex items-center justify-center') +
        ' ' +
        className
      }
      onClick={onClick}
      {...rest}
    >
      {loading ? <LoadingIndicator size={20} /> : children}
    </button>
  );
}

export default Button;
