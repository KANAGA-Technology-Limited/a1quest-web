import { HTMLProps } from 'react';
import StandardTextArea from './StandardTextArea';
import OutlinedTextArea from './OutlinedTextArea';

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
  variant?: 'outlined' | 'standard';
}

function TextArea({
  variant = 'outlined',
  ...props
}: Props & HTMLProps<HTMLTextAreaElement>) {
  return variant === 'standard' ? (
    <StandardTextArea {...props} />
  ) : (
    <OutlinedTextArea {...props} />
  );
}

export default TextArea;
