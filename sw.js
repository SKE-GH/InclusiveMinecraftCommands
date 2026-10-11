// Kleiner Offline-Speicher: erst Netz, bei Fehler die gespeicherte Kopie.
// Bei einer neuen Version von index.html einfach CACHE hochzählen.
const CACHE = 'bau-helfer-v1';
const FILES = [
  './', 'index.html', 'manifest.webmanifest',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png',
  'fonts/lexend-latin-500-normal.woff2', 'fonts/lexend-latin-600-normal.woff2', 'fonts/lexend-latin-700-normal.woff2',
  'fonts/jetbrains-mono-latin-600-normal.woff2', 'fonts/jetbrains-mono-latin-800-normal.woff2',
  'fonts/press-start-2p-latin-400-normal.woff2'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(
    fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy));
      return res;
    }).catch(() => caches.match(req).then(m => m || caches.match('index.html')))
  );
});
