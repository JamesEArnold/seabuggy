import { DetailedHTMLProps, ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';

export type InputSize = 'medium' | 'large';
export type InputType = 'text' | 'wallet';

export type InputProps = {
  id: string;
  name: string;
  label: string;
  type?: InputType;
  size?: InputSize;
  className?: string;
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'size'
>;

const sizeMap: Record<InputSize, string> = {
  medium: 'p-3 text-base',
  large: 'p-4 text-base',
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({
    id,
    name,
    label,
    type = 'text',
    size = 'medium',
    className = '',
    placeholder,
    ...props
  },
  ref: ForwardedRef<HTMLInputElement>) => <input
    id={id}
    name={name}
    aria-label={label}
    type={type}
    placeholder={placeholder}

    // TODO: Add dynamic width so the text field expands on focus
    className={classNames([
      'pl-7 transition-all hover:transition-all ease-in-out duration-500  h-12 w-72 md:w-1/3 rounded-lg font-normal bg-transparent dark:text-white border text-gray-600 border-gray-300 hover:border-gray-400 dark:border-gray-400 dark:hover:border-gray-200 dark:focus:border-gray-200  dark:bg-gray-900 outline-none',
      sizeMap[size],
      className,
    ])}
    ref={ref}
    {...props} />,
);

Input.displayName = 'GenericInput';

