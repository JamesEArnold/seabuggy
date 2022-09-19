import { Nav, Notification, PieChart, WalletForm } from '@/components';
import { UseThemeI, useTheme } from '@/components/hooks/useTheme';
import { TokenBalances } from '@/types/index';
import { useState } from 'react';

export default function Web () {
  const { lightTheme, setLightTheme, mounted }: UseThemeI = useTheme();
  const [ walletAddress, setWalletAddress ] = useState<string | undefined>(undefined);
  const [ walletBalances, setWalletBalances ] = useState<TokenBalances | undefined>(undefined);

  if (mounted && !walletBalances) {
    return (
      <div className={lightTheme ? 'transition-all duration-500 light' : 'transition-all duration-500 dark'}>
        <div className="min-h-screen transition-all duration-500 bg-sea-white-100 dark:bg-sea-blue-500">
          <Nav setLightTheme={setLightTheme} lightTheme={lightTheme} />
          <Notification content="Welcome to SeaBuggy! 🎉" dismissTime={6000}/>
          <div className="h-screen mt-10">
            <WalletForm
              setWalletBalances={setWalletBalances}
              setWalletAddress={setWalletAddress}
              walletAddress={walletAddress}
            />
          </div>
          {/* <PieChart chartData={tokenBalances.body} /> */}
        </div>
      </div>
    );
  } else if (mounted && walletBalances) {
    <div className={lightTheme ? 'transition-all duration-500 light' : 'transition-all duration-500 dark'}>
      <div className="min-h-screen transition-all duration-500 bg-sea-white-100 dark:bg-sea-blue-500">
        <Nav setLightTheme={setLightTheme} lightTheme={lightTheme} />
        <PieChart chartData={walletBalances} />
        <div className="h-screen mt-10">
          <WalletForm
            setWalletBalances={setWalletBalances}
            setWalletAddress={setWalletAddress}
            walletAddress={walletAddress}
          />
        </div>
      </div>
    </div>;
  } else {
    return null;
  }
}
