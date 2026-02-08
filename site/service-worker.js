// Study Track - Service Worker
const CACHE_NAME = 'study-track-v1';
const urlsToCache = [
  '/',
  '/dashboard.html',
  '/css/main.css',
  '/css/components.css',
  '/css/animations.css',
  '/js/app.js',
  '/js/utils.js',
  '/assets/logo-light.png',
  '/assets/logo-dark.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
