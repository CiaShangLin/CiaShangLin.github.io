'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b295f973a1cfdbf0055b3f3f9d39c1d5",
"index.html": "26be82e8944807ef8328708e4740c8d9",
"/": "26be82e8944807ef8328708e4740c8d9",
"main.dart.js": "5014a64c1b36eef013bf31408098995e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e7c97effe7676849af89e1f09f107232",
".git/config": "e82a59206abddf73f6c48f67ca56b61c",
".git/objects/61/87b6a8eb04eca98b8279f2af053a5e99f7ee56": "70f28096c5ae9068f8f9fbfd263adce1",
".git/objects/0c/4de302078ccdf776fe7cfff6a5d87996be820d": "a6ad2a75e6c1d799ae5f6e9b665e7b95",
".git/objects/3e/516160f6602be50d74db8fbb4be91e2f37ca5b": "65c4f567aeaf0f5ddbf48ce5c2b7e3e0",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/6c3b527db7df7c4ce6bb74d3f54e1988be2f50": "f222e0e24ad44fa2fb78b44a782a96ef",
".git/objects/69/2b574763a028ef548fe42908eefeb9de97f80d": "cd0307535dee04265c464c2778c40ffd",
".git/objects/56/50ba558088bbe3b70b7158d072eacde9ac8aae": "7cba9b4c4edcd542ed34bad3df346c13",
".git/objects/94/4ed5d9b991ec9bbbdadfaf236a166cdea835ee": "06629eb70f1a5f65d0008e47b17f37e7",
".git/objects/60/d46764760c46841732be1097ce6deeb093c65e": "818ebb5b99a2ddc33926b3c516f604f8",
".git/objects/d9/084ee9f2b6df0c6753d73b731709de369157cd": "380d0c903e8b5f468eb670d9e513545b",
".git/objects/bb/9a37cd72e4123f9554e1f45eabde6771238577": "0490911c3b583fb5aa063288ee7d729a",
".git/objects/be/bbb5b704d634846ee7c3914314fe05108c4cc2": "6f8a666ce83de3a2f3e789d1b2cdee3d",
".git/objects/a2/14b9afb073d00b3ba5cb26839790ba937862d6": "cdd63fbcd11780f7378c2e4f09e853fc",
".git/objects/d6/14c5ba6a979aa401a089cddc82d0a4bd05cc13": "98338bc6afb0917c381dc74400170d5f",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/c9/334041f45aee2a178d2833cc65281e3743079f": "58107567621de507e532b6f794fbdb82",
".git/objects/f2/219bd3d3f980ad26f677f0b6cb4773da2550a9": "637ccbd115a41248a0c09936e869d37e",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/16/7231bf507f4776c37e08b778d8822042087c73": "03228820e070a8262bdc13c29715fc29",
".git/objects/89/f2f95a8d55c211a83ddea17babe3cd4354325a": "065733c863d5be4ca894b83f2d246e47",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/23e027e321c306d6ccad0da9e2cc54b9562d41": "3798cce57bd1e7b66143ed060dde9781",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/96/9124f69edb595b03958ad47d8e4f13619e1bac": "b200b3cd909a1d3183f4ebe84349ca05",
".git/objects/3f/bdd623b4f8d2e8484bff13d4b21504b159f021": "82492726c012b931b8b706e1407e2c49",
".git/objects/dc/f44d44f606a01ea82deacc25ec2be2d0a1cb11": "41fd0431735ff59ba34a5da2a0fa32b0",
".git/objects/aa/8942ec50dc7513dd644ca6c95b09cc4fb940a5": "f4e3505de95b1d14ee0bcd109a175b03",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/9746432f71c2ad1bf87e7fdf684d7c77ba054e": "03124b8b9c7a7f8cb10748b4b211775c",
".git/objects/e1/928c0e3e855be6c599a408f9f2b95e09d87e82": "8106ee4780ebf9b8323821c16c98a4c5",
".git/objects/cc/a8d27cde49dc1e0e1ae9f1aaba74eece740257": "6002b55e58b4ac5307b97ddabdcd4a44",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1e/e494fa22816f71f7ffd10f1a0d2af8018571f0": "8a61ad90330bc648238e939f3e86ee96",
".git/objects/23/b68f7048776fd4c89845ed16750b81b20e1d90": "ffb2e8b8e2fb9d5aba08e1ee0f3a0091",
".git/objects/8c/907a2f9a25fd42092f43d06d41f9ef4b6a2c27": "e594d7a3298dc7af6cb6afbba517857e",
".git/objects/7a/da2f6c5a1a20de083b8964c329051d745be83c": "76aec049c1a95845f655ef0ed6948272",
".git/objects/14/e436e808678655445edd243325a0ac0a116cb0": "82b3222a00601b054b59edff8501fb32",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "bca4bc479384777bf1036c3bd91c6f22",
".git/logs/refs/heads/master": "bca4bc479384777bf1036c3bd91c6f22",
".git/logs/refs/remotes/origin/master": "5ec650f0593d8f7af06117071d2122bf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "fe83c44353dd68aff30aefb2a2212a9d",
".git/refs/remotes/origin/master": "fe83c44353dd68aff30aefb2a2212a9d",
".git/index": "fcf1aa0fb7179e6fa2c8b5799cc4adf7",
".git/COMMIT_EDITMSG": "1b5e69d8f7d538e1efd9ac0e936ecabc",
"assets/AssetManifest.json": "4c4c86802f8aed8afe036a52bc39e2fc",
"assets/NOTICES": "2b0a3a5872fce04708f0dfd59e686d3b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "8f5ac78dd0b9b5c9959ea1ade77f68ae",
"assets/packages/fluttertoast/assets/toastify.css": "8beb4c67569fb90146861e66d94163d7",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/image/icon_github.png": "a29dc3691124638b000809a7696281d5",
"assets/assets/image/icon_linkedin.png": "30c453b7f5fbdb09ea0cb42a5dc7a6e5",
"assets/assets/image/img_head.png": "0c2afe9459cf195c9989444b5f6cad53",
"assets/assets/image/icon_facebook.png": "87e2de9c3536d686a96f394dfb9fa87c"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
