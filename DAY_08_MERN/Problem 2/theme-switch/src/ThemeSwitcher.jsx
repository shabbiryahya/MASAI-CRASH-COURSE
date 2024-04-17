import React, {  useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
// Define the context


// Define a theme switcher component
export const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() =>
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }
    >
      Switch Theme
    </button>
  );
};