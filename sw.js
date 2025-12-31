const CACHE_NAME = '2k6-retreat-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/js/main.js',
  '/js/agenda.js',
  '/manifest.json',
  // Add your CSS and Images below so they work offline
  '/css/styles.css', 
  '/assets/icon-192.png',
  '/assets/icon-512.png'
];

// 1. Install Phase: Save files to the phone's storage
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching app assets');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// 2. Activate Phase: Clean up old versions of the app
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
});

// 3. Fetch Phase: Serve files from cache if offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
