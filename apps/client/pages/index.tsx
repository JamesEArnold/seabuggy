import { useState, useEffect } from 'react';
import { Nav, Notification } from 'ui';

export default function Web() {
  const [lightTheme, setLightTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const localTheme = localStorage.getItem('light');
      return localTheme !== null ? JSON.parse(localTheme) : false;
    }
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('light', JSON.stringify(lightTheme));
    }
  }, [lightTheme]);

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
