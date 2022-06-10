import { useState, useEffect } from 'react';
import { Nav, Notification } from 'ui';

export default function Web() {
  const getDefaultTheme = (): boolean => {
    if (typeof window !== 'undefined') {
      const localTheme: string | null = localStorage.getItem('dark');
      if (localTheme !== null) {
         return true;
      }
    }
    return false;
  };

  const [darkTheme, setDarkTheme] = useState(getDefaultTheme());

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkTheme));
  }, [darkTheme]);

  return (
    <div className={darkTheme ? 'light' : 'dark'}>
      <div className="min-h-screen bg-sea-white-100 dark:bg-sea-blue-500">
        <Nav setDarkTheme={setDarkTheme} />
        <Notification />
      </div>
    </div>
  );
}
