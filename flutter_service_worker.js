'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "e0faa02626085b28f28cb97bf7300bb5",
"assets/LICENSE": "1f4cbddaed1ef2b16d69a10be21ce93c",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/backgrounds.png": "4ffc4568c05d52902fe879544f3bf957",
"assets/assets/dribbble.png": "907a33eab53296056f1aa116337ca996",
"assets/assets/instagram.png": "7a49dbdc08eaf5c72887946b88ccf7d2",
"assets/assets/linkedin.png": "7fcac4a41918f14887752376b22c0828",
"assets/assets/facebook.png": "cdea3d5e21ef3e6df20d06cd2261296c",
"assets/assets/twitter.png": "5c14852dc31f28126170651247c3194a",
"assets/assets/github.png": "9ac279f97fd30bde7b19709196d0a23c",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/AssetManifest.json": "d55084d6705cbb15913a4fb60465269b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"index.html": "8dc07322876ad16d59d0098a0a605bf2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "c822f8a019a0f58137f01521f51612c5",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
