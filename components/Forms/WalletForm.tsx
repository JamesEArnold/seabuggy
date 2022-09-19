import React, { Dispatch, SetStateAction } from 'react';
import { ValidationRule, useForm } from 'react-hook-form';
import { FormInput } from '@/components/Forms/FormInput';
import { TokenBalances } from '@/types/index';
import useSwr from 'swr';

export type WalletFormProps = {
  setWalletBalances: Dispatch<SetStateAction<TokenBalances | undefined>>;
  setWalletAddress: Dispatch<SetStateAction<string | undefined>>;
  walletAddress: string | undefined;
}

export type WalletFormFields = {
  walletAddress: string;
};

const walletAddressPattern: ValidationRule<RegExp> = {
  value: RegExp(/^0x[a-fA-F0-9]{40}$/g),
  message: 'Enter a valid Ethereum wallet address',
};

const fetcher = (url: string, walletAddress: string) => fetch(`${url}/${walletAddress}`).then((res) => res.json());

export const WalletForm = ({
  setWalletBalances,
  setWalletAddress,
  walletAddress,
}: WalletFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WalletFormFields>();

  const { data: walletBalanceResponse }: { data?: TokenBalances } = useSwr<TokenBalances, any>(walletAddress ? [ '/api/get-token-balances', walletAddress ] : null, fetcher);
  setWalletBalances(walletBalanceResponse);
  const useWalletData = async (walletAddress: WalletFormFields) => {
    setWalletAddress(walletAddress.walletAddress);
  };

  const onSubmit = handleSubmit(useWalletData);

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
        className="flex mt-5 mx-auto text-base font-medium bg-sea-foam-blue-500 hover:bg-sea-foam-blue-600 text-white cursor-pointer px-7 py-3 rounded-3xl transition-all hover:transition-all ease-in-out hover:duration-300 duration-300"
        type="submit"
      >
        Submit
      </button>
    </form>
  </div>;
};
