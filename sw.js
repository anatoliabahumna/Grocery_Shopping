const CACHE_NAME = 'grocery-tracker-v1.0.0';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
];

// Install Service Worker
self.addEventListener('install', function(event) {
  console.log('Service Worker installing');
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(function(err) {
        console.log('Cache addAll failed:', err);
        // Even if some resources fail to cache, don't fail the install
        return Promise.resolve();
      })
  );
  
  // Force the waiting service worker to become the active service worker
  self.skipWaiting();
});

// Activate Service Worker
self.addEventListener('activate', function(event) {
  console.log('Service Worker activating');
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          // Delete old caches
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(function() {
      // Take control of all pages immediately
      return self.clients.claim();
    })
  );
});

// Fetch Event - Serve cached content when offline
self.addEventListener('fetch', function(event) {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin) && 
      !event.request.url.includes('cdn.tailwindcss.com') &&
      !event.request.url.includes('fonts.googleapis.com')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Return cached version or fetch from network
        if (response) {
          console.log('Serving from cache:', event.request.url);
          return response;
        }

        // Clone the request because it's a stream
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(function(response) {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response because it's a stream
          const responseToCache = response.clone();

          // Add to cache for future offline access
          caches.open(CACHE_NAME)
            .then(function(cache) {
              // Only cache GET requests
              if (event.request.method === 'GET') {
                cache.put(event.request, responseToCache);
              }
            })
            .catch(function(err) {
              console.log('Failed to cache:', err);
            });

          return response;
        }).catch(function() {
          // Network failed, try to serve a basic offline page for navigation requests
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
          
          // For other requests, just fail gracefully
          return new Response('Offline', {
            status: 503,
            statusText: 'Service Unavailable'
          });
        });
      })
  );
});

// Handle background sync (for future offline functionality)
self.addEventListener('sync', function(event) {
  if (event.tag === 'background-sync') {
    console.log('Background sync triggered');
    // Could be used to sync data when back online
  }
});

// Handle push notifications (for future notifications)
self.addEventListener('push', function(event) {
  console.log('Push notification received');
  
  const options = {
    body: 'Your grocery list has been updated!',
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><rect width="192" height="192" fill="%232563eb"/><text x="96" y="116" font-size="85" text-anchor="middle" fill="white">🛒</text></svg>',
    badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><rect width="96" height="96" fill="%232563eb"/><text x="48" y="58" font-size="42" text-anchor="middle" fill="white">🛒</text></svg>',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };

  if (event.data) {
    const notificationData = event.data.json();
    options.body = notificationData.body || options.body;
    options.data.primaryKey = notificationData.key || options.data.primaryKey;
  }

  event.waitUntil(
    self.registration.showNotification('Grocery Tracker', options)
  );
});

// Handle notification click
self.addEventListener('notificationclick', function(event) {
  console.log('Notification clicked');
  event.notification.close();

  event.waitUntil(
    clients.openWindow('./')
  );
}); 