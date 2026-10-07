import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    name: 'Sonorus Music',
    short_name: 'Sonorus',
    description: 'Приложение на React и Vite',
    theme_color: '#ffffff',
    icons: [
      {
        src: 'Icon192px.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: 'Icon512px.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  }
}
