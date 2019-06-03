const CACHE = 'network-update-cache';
const STATIC_FILES = [
  '/',
  '/index.html',
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
  // Network with update and cache fallback strategy
  event.respondWith(() => {
    try {
      return fromNetworkWithUpdate(event.request);
    } catch(e) {
      return fromCache(event.request);
    }
  })
});

async function preCache() {
  const cache = await caches.open(CACHE);
  return cache.addAll(STATIC_FILES);
}

async function fromCache(request) {
  const cache = await caches.open(CACHE);
  const matching = cache.match(request);
  return matching || Promise.reject('no-match');
}
async function fromNetworkWithUpdate(request) {
  const cache = await caches.open(CACHE);
  const response = await fetch(request);
  cache.put(request, response.clone());
  return response;
}
