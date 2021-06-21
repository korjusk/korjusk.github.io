'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "42a9d586751949c2f8d809013f6f531a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"version.json": "b72b635ac00fc19a3a357ccf278a09c7",
"main.dart.js": "cd70f7b6c0422df214269ceeb94f2c77",
"index.html": "47dba87d98f6d22d3d46a1f286c3465b",
"/": "47dba87d98f6d22d3d46a1f286c3465b",
"assets/NOTICES": "872aaa487740cac985694d430a0c44ae",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.json": "a3cad9952fbb1f1a030c4543be21edcc",
"assets/assets/audio/Jenny/I%2520feel%2520empowered,%2520in%2520control,%2520and%2520confident.wav": "2931ae09bdc03124a291e91356a5d641",
"assets/assets/audio/Jenny/I%2520am%2520whole%2520and%2520complete.wav": "3772a8cd7155eb52e777984b0865e81f",
"assets/assets/audio/Jenny/I%2520feel%2520financially%2520secure%2520and%2520at%2520peace.wav": "f963d8e3b9dc5bb5398a1ac9f7b25938",
"assets/assets/audio/Jenny/I%2520am%2520loved%2520and%2520deserve%2520love%2520just%2520the%2520way%2520I%2520am.wav": "5ad890682914a97abd21028cbde81548",
"assets/assets/audio/Jenny/I%2520am%2520at%2520peace%2520with%2520myself.wav": "ccb8183e0fadf5c362c7e610d3b719c4",
"assets/assets/audio/Jenny/I%2520release%2520all%2520negative%2520feelings%2520about%2520money.wav": "5de30511ea1010ec61d141125eda056e",
"assets/assets/audio/Jenny/I%2520focus%2520on%2520what%2520I%2520can%2520change%2520and%2520let%2520go%2520of%2520everything%2520else.wav": "ff07617f9f5f21700c4c31c9df259afa",
"assets/assets/audio/Jenny/I%2520am%2520grateful%2520for%2520the%2520kind%2520and%2520loving%2520people%2520in%2520my%2520life.wav": "66f972552af450cab2eb62618948b4ca",
"assets/assets/audio/Jenny/I%2520open%2520my%2520mind%2520to%2520everything%2520life%2520has%2520to%2520offer.wav": "083a735d5531729c248efa8d659d8a59",
"assets/assets/audio/Jenny/I%2520accept%2520myself.wav": "e81367c3ce64ba0de64277b00514f988",
"assets/assets/audio/Jenny/I%2520welcome%2520abundance%2520into%2520my%2520life.wav": "7089a7c2e76b7f57277879978d326f18",
"assets/assets/audio/Jenny/I%2520am%2520grateful%2520for%2520having%2520a%2520sense%2520of%2520purpose%2520and%2520meaning.wav": "ec667a3ea1300a4ef824a27d87bdd715",
"assets/assets/audio/Jenny/My%2520success%2520brings%2520happiness%2520both%2520to%2520me%2520and%2520those%2520close%2520to%2520me.wav": "b559b627bd37c2529d5b1afce1915fd0",
"assets/assets/audio/Jenny/I%2520take%2520things%2520one%2520step%2520at%2520a%2520time.wav": "0d30dbee142bd10bd10c6bfb125e4607",
"assets/assets/audio/Jenny/My%2520thoughts%2520and%2520feelings%2520are%2520valid.wav": "25d6e0ab3d5c5d1f863d02b7bdbe9fc5",
"assets/assets/audio/Jenny/I%2520am%2520grateful%2520for%2520my%2520resilience%2520and%2520strength.wav": "263f423c393501dfeee7696d6f739b70",
"assets/assets/audio/Jenny/Opportunities%2520are%2520all%2520around%2520me.wav": "3a6eb2f881971ac5f2eea79e3c6b2272",
"assets/assets/audio/Jenny/I%2520am%2520grateful%2520for%2520my%2520imagination,%2520creativity,%2520and%2520all%2520the%2520great%2520ideas%2520I%2520come%2520up%2520with.wav": "e93258287ce840904b8eed271bb1829c",
"assets/assets/audio/Jenny/I%2520am%2520grateful%2520for%2520my%2520ability%2520to%2520learn%2520and%2520improve.wav": "eb0cc9c4bd24fc2172e8c8e7d7882cbf",
"assets/assets/audio/Jenny/I%2520matter,%2520no%2520matter%2520what.wav": "f9207ab959f64d403067f5d75d159829",
"assets/assets/audio/Jenny/I%2520am%2520grateful%2520for%2520all%2520the%2520experiences%2520that%2520make%2520me%2520who%2520I%2520am.wav": "0da70e60ad41798a8767dbf55c5a747e",
"assets/assets/audio/Jenny/I%2520accept%2520all%2520my%2520feelings%2520without%2520judgment.wav": "0c2a7eb7b58b1b8b512de3dbd113f70b",
"assets/assets/audio/Jenny/I%2520am%2520grateful%2520for%2520the%2520challenges%2520that%2520help%2520me%2520grow.wav": "8688fa648df4802f6d4141336c989bef",
"assets/assets/audio/Jenny/I%2520am%2520exactly%2520where%2520I%2520need%2520to%2520be%2520now.wav": "4e49fe1fbd285d1791937bc1f10da219",
"assets/assets/audio/Jenny/I%2520feel%2520calmer%2520and%2520more%2520at%2520peace%2520with%2520each%2520exhale.wav": "bba7727474d3cd95c047c59153fceb44",
"assets/assets/audio/Eric/I%2520feel%2520empowered,%2520in%2520control,%2520and%2520confident.wav": "bffd8ceb41715b15767dab47bfd0836b",
"assets/assets/audio/Eric/I%2520am%2520whole%2520and%2520complete.wav": "a52c92c962772ef9f872f147a6a210c6",
"assets/assets/audio/Eric/I%2520feel%2520financially%2520secure%2520and%2520at%2520peace.wav": "8690941144de5c406ed4b6363dab6656",
"assets/assets/audio/Eric/I%2520am%2520loved%2520and%2520deserve%2520love%2520just%2520the%2520way%2520I%2520am.wav": "0b2b05a9df791bac20c64cfae7903586",
"assets/assets/audio/Eric/I%2520am%2520at%2520peace%2520with%2520myself.wav": "352fa3fbc270473adbd957abf99a1daf",
"assets/assets/audio/Eric/I%2520release%2520all%2520negative%2520feelings%2520about%2520money.wav": "f19014039599a32e098a1e4444e11214",
"assets/assets/audio/Eric/I%2520focus%2520on%2520what%2520I%2520can%2520change%2520and%2520let%2520go%2520of%2520everything%2520else.wav": "f957eee47b670ad32cbfe824deb6ab1d",
"assets/assets/audio/Eric/I%2520am%2520grateful%2520for%2520the%2520kind%2520and%2520loving%2520people%2520in%2520my%2520life.wav": "287ecdb335ae9699ad6a665475e8dc10",
"assets/assets/audio/Eric/I%2520open%2520my%2520mind%2520to%2520everything%2520life%2520has%2520to%2520offer.wav": "7aa8194dc56142b472d4ef603423ebc8",
"assets/assets/audio/Eric/I%2520accept%2520myself.wav": "49aa14d177bccdf04f3cd7db586a406d",
"assets/assets/audio/Eric/I%2520welcome%2520abundance%2520into%2520my%2520life.wav": "a31e013cc98bcd542c3fadc29e5648cb",
"assets/assets/audio/Eric/I%2520am%2520grateful%2520for%2520having%2520a%2520sense%2520of%2520purpose%2520and%2520meaning.wav": "6228960fa7872539073b8b8b6c8be5c3",
"assets/assets/audio/Eric/My%2520success%2520brings%2520happiness%2520both%2520to%2520me%2520and%2520those%2520close%2520to%2520me.wav": "2cd2c3d56b39d2416269090f4fdbd092",
"assets/assets/audio/Eric/I%2520take%2520things%2520one%2520step%2520at%2520a%2520time.wav": "f1ff120722819745d511d2b3881a939a",
"assets/assets/audio/Eric/My%2520thoughts%2520and%2520feelings%2520are%2520valid.wav": "490b03ae94b6308c283b168445374e56",
"assets/assets/audio/Eric/I%2520am%2520grateful%2520for%2520my%2520resilience%2520and%2520strength.wav": "c1e30d13f037f19858e1b377142974b6",
"assets/assets/audio/Eric/Opportunities%2520are%2520all%2520around%2520me.wav": "5bdd689dcf3844a5631853ff07e2269d",
"assets/assets/audio/Eric/I%2520am%2520grateful%2520for%2520my%2520imagination,%2520creativity,%2520and%2520all%2520the%2520great%2520ideas%2520I%2520come%2520up%2520with.wav": "6d2fc8fe23c33e6c8113bf4d7b8bd04a",
"assets/assets/audio/Eric/I%2520am%2520grateful%2520for%2520my%2520ability%2520to%2520learn%2520and%2520improve.wav": "fd18ad8e84e021fa333c7d472be5657c",
"assets/assets/audio/Eric/I%2520matter,%2520no%2520matter%2520what.wav": "88c84ebdb173036ed3e15914d01e893c",
"assets/assets/audio/Eric/I%2520am%2520grateful%2520for%2520all%2520the%2520experiences%2520that%2520make%2520me%2520who%2520I%2520am.wav": "5121b5b4e65ad55c099944579746fa0a",
"assets/assets/audio/Eric/I%2520accept%2520all%2520my%2520feelings%2520without%2520judgment.wav": "c0ecc32cbf6bc54c9b67215aca01a23a",
"assets/assets/audio/Eric/I%2520am%2520grateful%2520for%2520the%2520challenges%2520that%2520help%2520me%2520grow.wav": "1e0ee146b5cce528178b1cecd14012c3",
"assets/assets/audio/Eric/I%2520am%2520exactly%2520where%2520I%2520need%2520to%2520be%2520now.wav": "1034cdbe6647da5917d1f44f94dca653",
"assets/assets/audio/Eric/I%2520feel%2520calmer%2520and%2520more%2520at%2520peace%2520with%2520each%2520exhale.wav": "dbb38982a9ba79587a1a7c2821d9a25b",
"assets/assets/audio/background/Raindrops.mp3": "ca5c32b1d7ff40b3eafa6fd4e228f93e",
"assets/assets/audio/background/Crickets.mp3": "d65db114e7748f6f3a59a6e22e02b5d3",
"assets/assets/audio/background/SlowHouse.mp3": "c8e5f48166b4bf80922b624a24ae71c9",
"assets/assets/audio/background/taustamuusika-tristan.mp3": "22ff9b9da65ccac0f72b6c6adae0541e",
"assets/assets/audio/background/1-minute-of-silence.mp3": "e452f1b8e1b7873f4597f11e4d832e3c",
"assets/assets/audio/background/Rain.mp3": "1aea3fbe296e3c7d2083ead2f7119159",
"assets/assets/audio/background/Birds.mp3": "19adc2a29ee0c4e13a8253de93ce178f",
"assets/assets/audio/background/taustamuusika-transcend.mp3": "40a4ca811712ef51931d33a46824579e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
