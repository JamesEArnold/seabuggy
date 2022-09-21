import { NotificationContext, TokenBalances } from '@/types/index';
import React, { Dispatch, SetStateAction } from 'react';
import { ValidationRule, useForm } from 'react-hook-form';
import { FormInput } from '@/components/Forms/FormInput';
import useSwr from 'swr';

export type WalletFormProps = {
  setWalletBalances: Dispatch<SetStateAction<TokenBalances | undefined>>;
  setWalletAddress: Dispatch<SetStateAction<string | undefined>>;
  setNotificationContext: Dispatch<SetStateAction<NotificationContext | undefined>>;
  setShowAlert: Dispatch<SetStateAction<boolean>>;
  walletAddress: string | undefined;
}

export type WalletFormFields = {
  walletAddress: string;
};

const walletAddressPattern: ValidationRule<RegExp> = {
  value: RegExp(/^0x[a-fA-F0-9]{40}$/g),
  message: 'Enter a valid Ethereum wallet address',
};

const fetcher = (
  url: string,
  walletAddress: string,
  setNotificationContext: Dispatch<SetStateAction<NotificationContext | undefined>>,
  setShowAlert: Dispatch<SetStateAction<boolean>>,
  setWalletBalances: Dispatch<SetStateAction<TokenBalances | undefined>>,
) => fetch(`${url}/${walletAddress}`).then((res) => {
  if (!res.ok) {
    setNotificationContext({ content: 'No balances found 🕵️‍♂️', timerInMs: 6000, backgroundColor: 'bg-slate-100' });
    setShowAlert(true);
    return;
  }
  setWalletBalances(res.json() as unknown as TokenBalances);
  return {} as TokenBalances;
});

export const WalletForm = ({
  setWalletBalances,
  setWalletAddress,
  setNotificationContext,
  setShowAlert,
  walletAddress,
}: WalletFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WalletFormFields>();

  useSwr(walletAddress ? [ '/api/get-token-balances', walletAddress, setNotificationContext, setShowAlert, setWalletBalances ] : null, fetcher);
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
