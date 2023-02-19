import React, { useState, useEffect } from 'react';
import '../App.css';

function ThemeButtons() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeLight = () => {
    setTheme(theme === 'dark' ? '' : '');
  };
  const handleThemeDark = () => {
    setTheme(theme === !'dark' ? 'dark' : 'dark');
  };

  return (
    <div className="">
      <button type="button" onClick={handleThemeLight} className="bg-zinc-500 dark:bg-zinc-300 px-1 border-zinc-900 text-zinc-200 dark:text-zinc-900 dark:border-zinc-200 border m-2 shadow-cardBoxShadow">Light</button>
      <button type="button" onClick={handleThemeDark} className="bg-zinc-300 px-1 dark:bg-zinc-600 border-zinc-900 dark:text-zinc-200 dark:border-zinc-200 border m-2 shadow-cardBoxShadow">Dark</button>
    </div>
  );
}

export default ThemeButtons;
