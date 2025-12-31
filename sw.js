const CACHE_NAME = '2k6-retreat-v2';
const ASSETS = [
  './',
  './index.html',
  './css/main.css',
  './js/main.js',
  './js/agenda.js',
  './manifest.json',
  './assets/icon-192.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
