const CACHE = 'network-or-cache';
const STATIC_FILES = [
  '/',
  '/index.html',
  '/main.js',
  '/tea-64.png',
];

self.addEventListener('install', event => {
  console.log('[Service Worker] Installing Service Worker...', event);
  // caches.open() is an async operation
  // but event.waitUntil() will not finish installation until the operation finished
  event.waitUntil(preCache());
});

self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating Service Worker...', event);
  return self.clients.claim();
});

self.addEventListener('fetch', event => {
  console.log('[Service Worker] Serving the asset...');
  // Network with cache fallback strategy
  event.respondWith(async function() {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());
});

function preCache() {
  return caches.open(CACHE).then(cache => {
    return cache.addAll(STATIC_FILES);
  });
}
