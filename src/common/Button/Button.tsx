import React, { ButtonHTMLAttributes, CSSProperties } from 'react';
import styles from './styles.module.css';
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
        (variant === 'outlined' ? styles.button : styles.buttonContained) +
        ' ' +
        className
      }
      onClick={onClick}
      {...rest}
    >
      {loading ? <LoadingIndicator /> : children}
    </button>
  );
}

export default Button;
