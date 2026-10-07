'use client'

import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { ReactNode, useEffect } from 'react'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((reg) => console.log('Service Worker зарегистрирован!', reg.scope))
        .catch((err) => console.error('Ошибка SW:', err));
    }
  }, []);

  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
