const CACHE = 'network-update-cache';
const STATIC_FILES = [
  '/',
  '/index.html',
  '/favicon.ico',
  'manifest.json',
  '/assets/nosleep.mov',
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
  // Cache with network and update fallback strategy
  event.respondWith(function() {
    try {
      return fromCache(event.request);
    } catch (err) {
      return fromNetworkWithUpdate(event.request);
    }
  }());
});

async function preCache() {
  console.log('---------->requesting cache');
  const cache = await caches.open(CACHE);
  console.log('---------->requesting cache:', cache);
  console.log('---------->requesting cache:', STATIC_FILES);
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
