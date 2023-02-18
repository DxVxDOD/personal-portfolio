import React, { useState, useEffect } from 'react'
import '../App.css'

const ThemeButtons = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleThemeLight = () => {
    setTheme(theme === 'dark' ? '' : '')
  }

  const handleThemeDark = () => {
    setTheme(theme === !'dark' ? 'dark' : 'dark')
  }

  return (
    <div className=''>
        <button onClick={handleThemeLight} className='bg-zinc-500 dark:bg-zinc-300 shadow-md m-1 px-1 border-zinc-900 dark:border-zinc-200 border '>Light</button>
        <button onClick={handleThemeDark} className='bg-zinc-300 shadow-md m-1 px-1 dark:bg-zinc-600  border-zinc-900 dark:border-zinc-200 border '>Dark</button>
    </div>
  )
}

export default ThemeButtons
