'use client';

import StandardInput from './StandardInput';
import OutlinedInput from './OutlinedInput';

interface Props {
  formik?: any;
  name: string;
  className?: string;
  useFormik?: boolean;
  showError?: boolean;
  error?: string;
  blurFunction?: () => void;
  variant?: 'outlined' | 'standard';
}

function LabelInput({
  variant = 'outlined',
  ...props
}: Props & React.HTMLProps<HTMLInputElement>) {
  return variant === 'standard' ? (
    <StandardInput {...props} />
  ) : (
    <OutlinedInput {...props} />
  );
}

export default LabelInput;
