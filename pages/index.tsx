import { Nav, Notification, PieChart, WalletForm } from '@/components';
import { NotificationContext, TokenBalances } from '@/types/index';
import { UseThemeI, useTheme } from '@/components/hooks/useTheme';
import { useState } from 'react';

export default function Web () {
  const { lightTheme, setLightTheme, mounted }: UseThemeI = useTheme();
  const [ walletAddress, setWalletAddress ] = useState<string | undefined>(undefined);
  const [ walletBalances, setWalletBalances ] = useState<TokenBalances | undefined>(undefined);
  const [ showAlert, setShowAlert ] = useState(true);
  const [ notificationContext, setNotificationContext ] =
    useState<NotificationContext | undefined>({ content: 'Welcome to SeaBuggy! 🎉', timerInMs: 6000, backgroundColor: 'bg-slate-100' });

  if (mounted && !walletBalances) {
    return (
      <div className={lightTheme ? 'transition-all duration-500 light' : 'transition-all duration-500 dark'}>
        <div className="min-h-screen transition-all duration-500 bg-sea-white-100 dark:bg-sea-blue-500">
          <Nav setLightTheme={setLightTheme} lightTheme={lightTheme} />
          <Notification
            notificationContext={notificationContext}
            setNotificationContext={setNotificationContext}
            showAlert={showAlert}
            setShowAlert={setShowAlert}
          />
          <div className="mt-10">
            <WalletForm
              setWalletBalances={setWalletBalances}
              setWalletAddress={setWalletAddress}
              setNotificationContext={setNotificationContext}
              setShowAlert={setShowAlert}
              walletAddress={walletAddress}
            />
          </div>
          {/* <PieChart chartData={tokenBalances.body} /> */}
        </div>
      </div>
    );
  } else if (mounted && walletBalances) {
    return (
      <div className={lightTheme ? 'transition-all duration-500 light' : 'transition-all duration-500 dark'}>
        <div className="min-h-screen transition-all duration-500 bg-sea-white-100 dark:bg-sea-blue-500">
          <Nav setLightTheme={setLightTheme} lightTheme={lightTheme} />
          <PieChart chartData={walletBalances} />
          <div className="mt-10">
            <WalletForm
              setWalletBalances={setWalletBalances}
              setWalletAddress={setWalletAddress}
              setNotificationContext={setNotificationContext}
              setShowAlert={setShowAlert}
              walletAddress={walletAddress}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
