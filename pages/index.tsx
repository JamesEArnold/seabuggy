import { Nav, Notification, PieChart } from '@/components';
import { UseThemeI, useTheme } from '@/pages/hooks/useTheme';
import useSwrImmutable from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Web () {
  const { lightTheme, setLightTheme, mounted }: UseThemeI = useTheme();
  const { data: tokenBalances, error: tokenBalanceError } = useSwrImmutable('/api/get-token-balances', fetcher);

  if (tokenBalanceError) return <div>Failed to load gas</div>;
  if (!tokenBalances) return <div>Loading...</div>;

  if (mounted && tokenBalances !== undefined) {
    return (
      <div className={lightTheme ? 'light' : 'dark'}>
        <div className="min-h-screen bg-sea-white-100 dark:bg-sea-blue-500">
          <Nav setLightTheme={setLightTheme} lightTheme={lightTheme} />
          <Notification />
          <PieChart chartData={tokenBalances.body} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
