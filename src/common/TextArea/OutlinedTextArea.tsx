import { HTMLProps, useState } from 'react';

interface Props {
  label?: string;
  formik?: any;
  name: string;
  className?: string;
  placeholder?: string;
  hint?: string;
  useFormik?: boolean;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
  value?: string | number;
  showError?: boolean;
  error?: string;
  required?: boolean;
  [x: string]: any;
}

function OutlinedTextArea({
  label = '',
  formik,
  name,
  className = '',
  placeholder,
  hint,
  useFormik = true,
  onChange,
  value,
  showError = false,
  error,
  required,
  ...rest
}: Props & HTMLProps<HTMLTextAreaElement>) {
  // Floating label needs a placeholder to work
  rest.placeholder = rest.placeholder || '';
  return (
    <div className={'floatingInputContainer ' + className}>
      {useFormik ? (
        <>
          <div className='relative'>
            <textarea
              name={name}
              id={name}
              placeholder={placeholder}
              value={formik.values[name]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched[name] && formik.errors[name] ? 'inputError peer' : 'peer'
              }
              {...rest}
            ></textarea>
            {rest.label && (
              <label
                htmlFor={name}
                className={`${
                  formik.touched[name] && formik.errors[name]
                    ? 'errorText absolute duration-300 bg-white transform -translate-y-4 scale-75 top-1 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1'
                    : 'absolute duration-300 transform bg-white -translate-y-4 scale-75 top-1 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 text-[#64748B]'
                }`}
              >
                {rest.label}

                {rest.required && <span>*</span>}
              </label>
            )}
          </div>

          {formik.touched[name] && formik.errors[name] && (
            <div className='error mt-[7px]'>{formik.errors[name]}</div>
          )}
        </>
      ) : (
        <>
          <div className='relative'>
            <textarea
              name={name}
              id={name}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              className={showError ? 'inputError peer' : 'peer'}
              required={required}
              {...rest}
            ></textarea>
            {rest.label && (
              <label
                htmlFor={name}
                className={`${
                  showError
                    ? 'errorText absolute duration-300 bg-white transform -translate-y-4 scale-75 top-1 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1'
                    : 'absolute duration-300 transform bg-white -translate-y-4 scale-75 top-1 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1'
                }`}
              >
                {rest.label}
              </label>
            )}
          </div>

          {showError && <div className='error mt-[7px]'>{error}</div>}
        </>
      )}
    </div>
  );
}

export default OutlinedTextArea;
