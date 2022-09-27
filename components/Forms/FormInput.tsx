import { DeepMap, FieldError, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { Input, InputProps } from '@/components/Forms/Input';
import { RefObject, useRef } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import classNames from 'classnames';
import { get } from 'lodash';

export type FormInputProps<FormValues extends Record<string, unknown>> = {
  name: Path<FormValues>;
  rules?: RegisterOptions;
  register?: UseFormRegister<FormValues>;
  errors?: Partial<DeepMap<FormValues, FieldError>>;
} & Omit<InputProps, 'name'>;

export const FormInput = <FormValues extends Record<string, unknown>>({
  className,
  name,
  register,
  rules,
  errors,
  ...props
}: FormInputProps<FormValues>) => {
  const ref: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const errorMessages = get(errors, name);
  const hasError: boolean = !!(errors && errorMessages);

  return <div className={classNames([ 'mb-5' ])}>
    <div className={classNames([ 'flex w-full justify-center', className ])} aria-live="polite">
      <Input
        name={name}
        aria-invalid={hasError}
        className={classNames({
          'transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50 border-red-600 hover:border-red-600 focus:border-red-600 focus:ring-red-600':
          hasError,
        })}
        {...props}
        ref={ref}
        {...(register && register(name, rules))}
      />
    </div>
    <div className="flex justify-center">
      <ErrorMessage
        errors={errors}
        name={name as any}
        render={({ message }) => (

          // TODO: Change error message styling
          <p
            data-cy="form-input-error-message"
            className="mt-1 font-serif text-sm block text-red-600"
          >
            {message}
          </p>
        )}
      />
    </div>
  </div>;
};
