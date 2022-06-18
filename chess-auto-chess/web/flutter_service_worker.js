'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "acd405a3320d9e020790fa407280423b",
"assets/assets/audio/Bach-prelude-in-c-major-piano.mp3": "b69a3776138a0e1768cf7c1dd7406c77",
"assets/assets/audio/click_01.wav": "7eb94bc4ae60ad74725c89af12be6d34",
"assets/assets/audio/click_02.wav": "10eb0d84fe1c1d88d9d1f719a620d7c8",
"assets/assets/audio/click_03.wav": "0b0c75057fe7662a8ccb73bb20bf989b",
"assets/assets/audio/click_04.wav": "846794943f81d4e5de94728ce649e571",
"assets/assets/audio/click_05.wav": "9cd5b30ad5fef75749e27cf5efde2d20",
"assets/assets/audio/click_06.wav": "f89e5eb1e4fa4e073c7d4037fb422965",
"assets/assets/audio/click_07.wav": "f84945e4fe2c1bef23d578d883d7763f",
"assets/assets/audio/click_08.wav": "3e4d0e3a753ae8558445a101b776dd6e",
"assets/assets/audio/coins_01.wav": "cfd8fcba7c4016a1c5ec8ec70b71af2f",
"assets/assets/audio/hit_01.wav": "2926f932d1634290a87b908121fb570d",
"assets/assets/audio/hover_01.wav": "326399937a968a812941a29fb4bc164a",
"assets/assets/audio/hover_02.wav": "daa7dcb7c79c7594cffe70c764fa8698",
"assets/assets/audio/metal_01.wav": "a6be07795d1726c117787374b0930311",
"assets/assets/audio/pop_01.wav": "2aaa8eee917b60e87b61a2cf9917f70e",
"assets/assets/audio/swoosh_01.wav": "0ccd2984bfcc2b3b17f6175923c709a2",
"assets/assets/audio/swoosh_02.wav": "3d0d9f1e19940d76ff89db08b6ee46d3",
"assets/assets/audio/swoosh_03.wav": "a8cf6adac61a769461583c14ebede30c",
"assets/assets/audio/tap_01.wav": "d67ee7270a4b31465c79555af7b89353",
"assets/assets/audio/trumpet_01.wav": "60d15feafee904f9cbbff614f3daced5",
"assets/assets/audio/trumpet_02.wav": "ba24720d250a93083bb62b4d81720031",
"assets/assets/audio/trumpet_03.wav": "c0a6e5968c08a9ff355287f6951ae057",
"assets/assets/fonts/Lexend-Black.ttf": "06cd3576e01a0ff6300deac07c0e6e81",
"assets/assets/fonts/Lexend-Bold.ttf": "188e368917cd3c52c63cfa0ad8e3a9c3",
"assets/assets/fonts/Lexend-ExtraBold.ttf": "f03202dcfb5045d56bc9a02a7b4d3810",
"assets/assets/fonts/Lexend-ExtraLight.ttf": "d360327f4d01c8429da0416e4511c4bd",
"assets/assets/fonts/Lexend-Light.ttf": "25044bfd8bd01ab8e7bad3a3d481b1d3",
"assets/assets/fonts/Lexend-Medium.ttf": "0c1a7c636a9672082bf75d3a8bfafa7e",
"assets/assets/fonts/Lexend-Regular.ttf": "3bb33227f04ca88c87ce0f58340e3d03",
"assets/assets/fonts/Lexend-SemiBold.ttf": "539fb1cdad95a3c8eb708e20ab4a16bb",
"assets/assets/fonts/Lexend-Thin.ttf": "3f2f1aa7ef1283f51b05cde161a2b819",
"assets/FontManifest.json": "752b40174ad12e2762a862e26b5a315d",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "9269e4eb2175e83b101597e770f39d98",
"assets/packages/fluttericon/lib/fonts/Brandico.ttf": "791921e9b25210e2551b6eda3f86c733",
"assets/packages/fluttericon/lib/fonts/Elusive.ttf": "23f24df0388819e94db2b3c19841841c",
"assets/packages/fluttericon/lib/fonts/Entypo.ttf": "58edfaf27b1032ea4778b69297c02b5a",
"assets/packages/fluttericon/lib/fonts/FontAwesome.ttf": "799bb4e5c577847874f20bd0e9b38a9d",
"assets/packages/fluttericon/lib/fonts/FontAwesome5.ttf": "221b27a41202ddd33990e299939e4504",
"assets/packages/fluttericon/lib/fonts/Fontelico.ttf": "3a1e1cecf0a3eae6be5cba3677379ba2",
"assets/packages/fluttericon/lib/fonts/Iconic.ttf": "34e12214307f5f7cf7bc62086fbf55a3",
"assets/packages/fluttericon/lib/fonts/LineariconsFree.ttf": "276b1d61e45eb9b2dde9482545d9e3ac",
"assets/packages/fluttericon/lib/fonts/Linecons.ttf": "2d0ac407ed11860bf470cb01745fb144",
"assets/packages/fluttericon/lib/fonts/Maki.ttf": "9ecdcd7d24a2461a55d532b86b2740bd",
"assets/packages/fluttericon/lib/fonts/Meteocons.ttf": "8b9c7982496155bb39c67eaf2a243731",
"assets/packages/fluttericon/lib/fonts/MfgLabs.ttf": "09daa533ea11600a98e3148b7531afe3",
"assets/packages/fluttericon/lib/fonts/ModernPictograms.ttf": "5046c536516be5b91c15eb7795e0352d",
"assets/packages/fluttericon/lib/fonts/Octicons.ttf": "7242d2fe9e36eb4193d2bc7e521779bf",
"assets/packages/fluttericon/lib/fonts/RpgAwesome.ttf": "99232001effca5cf2b5aa92cc3f3e892",
"assets/packages/fluttericon/lib/fonts/Typicons.ttf": "3386cae1128e52caf268508d477fb660",
"assets/packages/fluttericon/lib/fonts/WebSymbols.ttf": "4fd66aa74cdc6e5eaff0ec916ac269c6",
"assets/packages/fluttericon/lib/fonts/Zocial.ttf": "c29d6e34d8f703a745c6f18d94ce316d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "58684d70645668426f0b035333b51c63",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "9312b341fc3f91615a158423b323ccd7",
"icons/Icon-512.png": "d70d9d4492f21cb8230eb8a3a3166e3f",
"icons/Icon-maskable-192.png": "9312b341fc3f91615a158423b323ccd7",
"icons/Icon-maskable-512.png": "d70d9d4492f21cb8230eb8a3a3166e3f",
"index.html": "781f26db7da91791c729378a474e00db",
"/": "781f26db7da91791c729378a474e00db",
"main.dart.js": "40e41a1c13fa8446ba279191d8b225ae",
"manifest.json": "3492cce8380ae06e0558d51f8037e029",
"version.json": "b367859200f4d522b47734107cbc51fc"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
