
const ServiceWorkerGlobalScope = this;
const cacheNameBasis = 'mokus';
const version = '22.04.11.2';
const cacheName = `${cacheNameBasis}-v${version}`;
const urlsToCache = [
    './images/mokusbufe_bw_64_64.png',
    './images/mokusbufe_bw_128_128.png',
    './images/mokusbufe_bw_256_256.png',
    './images/mokusbufe_bw_512_512.png',
    './images/mokusbufe_640.jpg',
    './images/mokusbufe_1280.jpg',
    './images/mokusbufe_1920.jpg',
    './images/mokusbufe_2560.jpg',
    './images/mokusbufe_3840.jpg',

    './',
    './index.html',

    './manifest.json',
];

ServiceWorkerGlobalScope.addEventListener("install", (event) => {
    event.waitUntil(
        caches
            .open(cacheName)
            .then((cache) => cache.addAll(urlsToCache))
            .then(() => ServiceWorkerGlobalScope.skipWaiting())
            .catch((err) => console.log(err))
    );
});

ServiceWorkerGlobalScope.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((keyList) => {
                return Promise.all(keyList.map((key) => {
                    if (key.startsWith(cacheNameBasis) && key !== cacheName) {
                        return caches.delete(key);
                    }
                }));
            })
            .then(() => ServiceWorkerGlobalScope.clients.claim())
            .catch((err) => console.log(err))
    );
});

ServiceWorkerGlobalScope.addEventListener('fetch', (event) => {
    event.respondWith(
        caches
            .open(cacheName)
            .then((cache) => cache.match(event.request, { ignoreSearch: true })
                .then((response) => response || fetch(event.request.clone())
                    .then((response) => {
                        if (response.ok) {
                            if (new URL(response.url).origin === location.origin) {
                                cache.put(event.request, response.clone()).then(() => { });
                            }
                        }
                        return response;
                    })
                )
            )
            .catch((err) => console.log(err))
    );
});