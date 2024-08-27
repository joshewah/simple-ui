import { useEffect, useState } from 'react'

const useTheme = () => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem('theme') || '',
  )

  useEffect(() => {
    // Check if theme is stored in localStorage
    if (localStorage.getItem('theme')) {
      setTheme(localStorage.getItem('theme') as string)
      return
    }

    // Otherwise check the user's preference
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches
    if (prefersDarkMode) {
      setTheme('dark')
      if (localStorage.getItem('theme') === null) setLocalStorageTheme('dark')
    } else {
      setTheme('light')
      if (localStorage.getItem('theme') === null) setLocalStorageTheme('light')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      setLocalStorageTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      setLocalStorageTheme('light')
    }
  }, [theme])

  const handleThemeChange = (): void => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
    localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark') // Taking into account that state won't update immediately
  }

  const setLocalStorageTheme = (newTheme: string) => {
    localStorage.setItem('theme', newTheme)
  }

  return {
    theme,
    handleThemeChange,
  }
}

export { useTheme }
