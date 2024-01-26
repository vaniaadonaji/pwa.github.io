// service-worker.js

self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('mi-app-v1').then(function(cache) {
        return cache.addAll([
          '/',
          '/css/style.css',
          '/css/styleMenu.css',
          '/paginas/Inicio.html',
          '/paginas/Ejemplo1.html',
          '/paginas/ListaVideos.html',
          '/paginas/Perfil.html'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  