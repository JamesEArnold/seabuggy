import { ValidationRule, useForm } from 'react-hook-form';
import { FormInput } from '@/components/Forms/FormInput';
import React from 'react';

export type WalletFormFields = {
  walletAddress: string;
};

export const WalletForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WalletFormFields>();

  const walletAddressPattern: ValidationRule<RegExp> = {
    value: RegExp(/^0x[a-fA-F0-9]{40}$/g),
    message: 'Enter a valid Ethereum wallet address',
  };

  const onValidSubmit = (data: WalletFormFields) => {
    console.log('submitting...', data);
  };

  const onSubmit = handleSubmit(onValidSubmit);

  return <div className=''>
    <form onSubmit={onSubmit}>
      <FormInput<WalletFormFields>
        id="walletAddress"
        type="text"
        name="walletAddress"
        label="Wallet Address"
        placeholder="Wallet Address"
        register={register}
        rules={{ required: 'Please enter a valid Ethereum wallet address.', maxLength: { value: 42, message: 'Please provide a valid address' }, pattern: walletAddressPattern }}
        errors={errors}
      />
      <button
        className="flex mt-5 mx-auto text-base font-medium bg-sea-foam-blue-500 hover:bg-sea-foam-blue-300 text-white cursor-pointer px-7 py-3 rounded-3xl transition-all hover:transition-all ease-in-out"
        type="submit"
      >
        Submit
      </button>
    </form>
  </div>;
};
