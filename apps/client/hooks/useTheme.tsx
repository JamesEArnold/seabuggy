import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export interface UseThemeI {
  lightTheme: boolean,
  setLightTheme: Dispatch<SetStateAction<boolean>>,
  mounted: boolean,
}

export const useTheme = ():UseThemeI => {
  const [lightTheme, setLightTheme] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const localTheme = localStorage.getItem('light');
      return localTheme !== null ? JSON.parse(localTheme) : false;
    }
  });

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('light', JSON.stringify(lightTheme));
    }
  }, [lightTheme]);

  return { lightTheme, setLightTheme, mounted };
};
