import { Nav, Notification, PieChart } from '@/components';
import { UseThemeI, useTheme } from '@/pages/hooks/useTheme';
import useSwr from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Web () {
  const { lightTheme, setLightTheme, mounted }: UseThemeI = useTheme();

  const { data: gasHistory, error: gasHistoryError } = useSwr('/api/gas', fetcher);
  const { data: tokenBalances, error: tokenBalanceError } = useSwr('/api/get-token-balance', fetcher);

  if (gasHistoryError) return <div>Failed to load gas</div>;
  if (!gasHistory) return <div>Loading...</div>;

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
