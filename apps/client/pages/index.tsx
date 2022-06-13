import { Nav, Notification } from 'ui';
import { useTheme, UseThemeI } from 'hooks/useTheme';

export default function Web() {
  const { lightTheme, setLightTheme, mounted }: UseThemeI = useTheme();

  if (mounted) {
    return (
      <div className={lightTheme ? 'light' : 'dark'}>
        <div className="min-h-screen bg-sea-white-100 dark:bg-sea-blue-500">
          <Nav setLightTheme={setLightTheme} lightTheme={lightTheme}/>
          <Notification />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
