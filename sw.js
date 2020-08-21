// SW code from https://adactio.com/
"use strict";

const version = "20200821";
const staticCacheName = version + "static";
const pagesCacheName = "pages";
const imagesCacheName = "images";
const maxPages = 50; // Maximum number of pages to cache
const maxImages = 100; // Maximum number of images to cache
const timeout = 3000; // Number of milliseconds before timing out

const cacheList = [staticCacheName, pagesCacheName, imagesCacheName];

function updateStaticCache() {
  return caches.open(staticCacheName).then((staticCache) => {
    // These items won't block the installation of the Service Worker
    staticCache.addAll([
      "/images/piano_y1wv8n/piano_y1wv8n_c_scale,w_2160.jpg",
      "/images/drums_ulbs6v/drums_ulbs6v_c_scale,w_2160.jpg",
      "/images/guitar_k2skaw/guitar_k2skaw_c_scale,w_2160.jpg",
      "/images/mixer_a6lonu/mixer_a6lonu_c_scale,w_2160.jpg",
      "/images/sax_lcabmf/sax_lcabmf_c_scale,w_2160.jpg",
      "/images/violins_kzmb3h/violins_kzmb3h_c_scale,w_1263.jpg",
      "/Beschwerdeverfahren.pdf",
      "/Empfehlungen-zu-Auslandsreisen.pdf",
    ]);
    // These items must be cached for the Service Worker to complete installation
    return staticCache.addAll(["/js/main.min.js", "/css/main.min.css"]); // "/offline",
  });
}

// Cache the page(s) that initiate the service worker
function cacheClients() {
  const pages = [];
  return clients
    .matchAll({
      includeUncontrolled: true,
    })
    .then((allClients) => {
      for (const client of allClients) {
        pages.push(client.url);
      }
    })
    .then(() => {
      caches.open(pagesCacheName).then((pagesCache) => {
        return pagesCache.addAll(pages);
      });
    });
}

// Remove caches whose name is no longer valid
function clearOldCaches() {
  return caches.keys().then((keys) => {
    return Promise.all(
      keys
        .filter((key) => !cacheList.includes(key))
        .map((key) => caches.delete(key))
    );
  });
}

function trimCache(cacheName, maxItems) {
  caches.open(cacheName).then((cache) => {
    cache.keys().then((keys) => {
      if (keys.length > maxItems) {
        cache.delete(keys[0]).then(() => {
          trimCache(cacheName, maxItems);
        });
      }
    });
  });
}

addEventListener("install", (event) => {
  event.waitUntil(
    updateStaticCache()
      .then(() => {
        cacheClients();
      })
      .then(() => {
        return skipWaiting();
      })
  );
});

addEventListener("activate", (event) => {
  event.waitUntil(
    clearOldCaches().then(() => {
      return clients.claim();
    })
  );
});

if (registration.navigationPreload) {
  addEventListener("activate", (event) => {
    event.waitUntil(registration.navigationPreload.enable());
  });
}

self.addEventListener("message", (event) => {
  if (event.data.command == "trimCaches") {
    trimCache(pagesCacheName, maxPages);
    trimCache(imagesCacheName, maxImages);
  }
});

addEventListener("fetch", (event) => {
  const request = event.request;

  // Ignore requests to some directories
  if (request.url.includes("/cms")) {
    return;
  }

  // Ignore non-GET requests
  if (request.method !== "GET") {
    return;
  }

  const retrieveFromCache = caches.match(request);

  // For HTML requests, try the network first, fall back to the cache, finally the offline page
  if (request.headers.get("Accept").includes("text/html")) {
    event.respondWith(
      new Promise((resolveWithResponse) => {
        const timer = setTimeout(() => {
          // Time out: CACHE
          retrieveFromCache.then((responseFromCache) => {
            if (responseFromCache) {
              resolveWithResponse(responseFromCache);
            }
          });
        }, timeout);

        const retrieveFromFetch = event.preloadResponse || fetch(request);

        retrieveFromFetch
          .then((responseFromFetch) => {
            // NETWORK
            clearTimeout(timer);
            const copy = responseFromFetch.clone();
            // Stash a copy of this page in the pages cache
            try {
              event.waitUntil(
                caches.open(pagesCacheName).then((pagesCache) => {
                  return pagesCache.put(request, copy);
                })
              );
            } catch (error) {
              console.error(error);
            }
            resolveWithResponse(responseFromFetch);
          })
          .catch((fetchError) => {
            clearTimeout(timer);
            console.error(fetchError);
            // CACHE or FALLBACK
            caches.match(request).then((responseFromCache) => {
              resolveWithResponse(
                responseFromCache
                // || caches.match('/offline')
              );
            });
          });
      })
    );
    return;
  }

  // For non-HTML requests, look in the cache first, fall back to the network
  event.respondWith(
    caches.match(request).then((responseFromCache) => {
      // CACHE
      return (
        responseFromCache ||
        fetch(request)
          .then((responseFromFetch) => {
            // NETWORK
            // If the request is for an image, stash a copy of this image in the images cache
            if (request.url.match(/\.(jpe?g|png|gif|svg|mapbox)/)) {
              const copy = responseFromFetch.clone();
              try {
                event.waitUntil(
                  caches.open(imagesCacheName).then((imagesCache) => {
                    return imagesCache.put(request, copy);
                  })
                );
              } catch (error) {
                console.error(error);
              }
            }
            return responseFromFetch;
          })
          .catch((fetchError) => {
            console.error(fetchError);
            // FALLBACK
            // show an offline placeholder
            if (request.url.match(/\.(jpe?g|png|gif|svg|mapbox)/)) {
              return new Response(
                '<svg role="img" aria-labelledby="offline-title" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><title id="offline-title">Offline</title><g fill="none" fill-rule="evenodd"><path fill="#D8D8D8" d="M0 0h400v300H0z"/><text fill="#9B9B9B" font-family="Helvetica Neue,Arial,Helvetica,sans-serif" font-size="72" font-weight="bold"><tspan x="93" y="172">offline</tspan></text></g></svg>',
                {
                  headers: {
                    "Content-Type": "image/svg+xml",
                    "Cache-Control": "no-store",
                  },
                }
              );
            }
          })
      );
    })
  );
});
