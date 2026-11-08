/* Service Worker: cache app shell để dùng offline ngoài xà */
const CACHE_NAME = 'cali-tracker-v7';
const FONT_CACHE = 'cali-fonts-v1';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME && k !== FONT_CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Stale-while-revalidate: trả cache ngay (nếu có), đồng thời fetch nền để cập nhật cache.
function staleWhileRevalidate(req, cacheName) {
  return caches.open(cacheName).then((cache) =>
    cache.match(req, { ignoreSearch: true }).then((cached) => {
      const network = fetch(req).then((res) => {
        // Cache cả response opaque (cross-origin, status 0) lẫn response ok.
        if (res && (res.ok || res.type === 'opaque')) {
          cache.put(req, res.clone()).catch(() => {});
        }
        return res;
      }).catch(() => undefined);
      // Có cache thì trả ngay, fetch nền cập nhật; không có cache thì chờ mạng.
      return cached || network.then((res) => {
        if (res) return res;
        throw new Error('offline');
      });
    })
  );
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Runtime cache riêng cho Google Fonts (cross-origin, response opaque).
  if (url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com') {
    event.respondWith(staleWhileRevalidate(req, FONT_CACHE));
    return;
  }

  // Chỉ xử lý request cùng origin.
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    staleWhileRevalidate(req, CACHE_NAME).catch(() => {
      // Offline mà xin trang điều hướng -> trả index.html
      if (req.mode === 'navigate') return caches.match('./index.html');
      throw new Error('offline');
    })
  );
});
