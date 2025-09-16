const CACHE_NAME = "forca-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "./style.css",   // seu CSS
  "./script.js",   // seu JS
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

// Instala e guarda no cache
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Responde com cache ou rede
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});