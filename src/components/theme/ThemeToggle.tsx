// components/theme-toggle.tsx
'use client'

import { useTheme } from '@teispace/next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Предотвращает ошибку гидратации (отличие HTML сервера от клиента)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="w-9 h-9" /> // Заглушка на время загрузки

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded"
    >
      {theme === 'dark' ? '🌙 Тёмная' : '☀️ Светлая'}
    </button>
  )
}
