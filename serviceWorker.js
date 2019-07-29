const CACHE = 'network-update-cache';
const STATIC_FILES = [
  'index.html',
  'favicon.ico',
  'assets/nosleep.mov',
  'images/app-icon-48x48.png',
  'images/app-icon-72x72.png',
  'images/app-icon-76x76.png',
  'images/app-icon-96x96.png',
  'images/app-icon-120x120.png',
  'images/app-icon-144x144.png',
  'images/app-icon-152x152.png',
  'images/app-icon-180x180.png',
  'images/app-icon-192x192.png',
  'images/app-icon-256x256.png',
  'images/app-icon-512x512.png',
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
  event.respondWith((() => fromCache(event.request))());
});

async function preCache() {
  const cache = await caches.open(CACHE);
  return cache.addAll(STATIC_FILES);
}

async function fromCache(request) {
  const cache = await caches.open(CACHE);
  const matching = await cache.match(request);
  return matching || await fromNetworkWithUpdate(request);
}

async function fromNetworkWithUpdate(request) {
  const cache = await caches.open(CACHE);
  // Requesting data
  const response = await fetch(request);
  // Dynamically caching requested data
  cache.put(request, response.clone());
  return response;
}
