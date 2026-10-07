// public/sw.js
const CACHE_NAME = 'v1';
const ASSETS = [
  '/',
  '/manifest.json',
];

// Кэшируем базовые ресурсы при установке
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Стратегия: Сначала сеть, если нет интернета — берем из кэша
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
