'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b295f973a1cfdbf0055b3f3f9d39c1d5",
"index.html": "072ce5281d762b1a681e6b878e47e40e",
"/": "072ce5281d762b1a681e6b878e47e40e",
"main.dart.js": "21539f7476370e0ff842ed0da37f8431",
"README.md": "7f706434032015c195d99e5c3c9f9372",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e7c97effe7676849af89e1f09f107232",
".git/config": "e82a59206abddf73f6c48f67ca56b61c",
".git/objects/61/87b6a8eb04eca98b8279f2af053a5e99f7ee56": "70f28096c5ae9068f8f9fbfd263adce1",
".git/objects/0c/4de302078ccdf776fe7cfff6a5d87996be820d": "a6ad2a75e6c1d799ae5f6e9b665e7b95",
".git/objects/3e/5ca0a117f3fddedac08801432ab12253ad38c1": "1e66e0fdd0f7c9597a066fba2e2c15a7",
".git/objects/3e/516160f6602be50d74db8fbb4be91e2f37ca5b": "65c4f567aeaf0f5ddbf48ce5c2b7e3e0",
".git/objects/57/469c5bada152c357a3358dd78b2d4111f6e7b3": "2d53e5e5cbf8458b64f8603820e6d3a1",
".git/objects/57/0dc2f976417af5c7f9b43bd51eef6117543c7f": "3608495ecf0318aa44262ce5e5bc5c60",
".git/objects/3b/4efc97ddf31d016d4233e06be3ccc27d95c72c": "5ee916969ada1d907ee694829302d657",
".git/objects/6f/ba5f364a153c01a828ae060f2e85af8ba7e056": "6ec0b17d4e04da60f533ba81f75eb95c",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/5e79bf68bcea8549a0a7f92caa8e33ddfce434": "1315322e1957e30638014e1055928d1f",
".git/objects/32/6c3b527db7df7c4ce6bb74d3f54e1988be2f50": "f222e0e24ad44fa2fb78b44a782a96ef",
".git/objects/69/2b574763a028ef548fe42908eefeb9de97f80d": "cd0307535dee04265c464c2778c40ffd",
".git/objects/69/db5aca9353c737e85274558aa4dee672ec6964": "b706d3a15f3d5d73899918a2094fe38d",
".git/objects/56/50ba558088bbe3b70b7158d072eacde9ac8aae": "7cba9b4c4edcd542ed34bad3df346c13",
".git/objects/94/4ed5d9b991ec9bbbdadfaf236a166cdea835ee": "06629eb70f1a5f65d0008e47b17f37e7",
".git/objects/60/d46764760c46841732be1097ce6deeb093c65e": "818ebb5b99a2ddc33926b3c516f604f8",
".git/objects/5a/adf5295426976999f3ec1090ffcead4f1d9a6a": "ce4f56deb37d038b96136acc040e6178",
".git/objects/5a/99621502433d18e4945ca33f821b6d09ecfc01": "dd2afaf49a0d279a4c0ce296a7449cea",
".git/objects/5a/85ea6de198d6097171ae486478dbe8c0e92ae5": "82690509b96c16c0f653eea7fe90423e",
".git/objects/05/dac947ccf57e723bd987bc26a48f28c2c85e50": "7075a9ae9f2c05410bf4f34e3b742a12",
".git/objects/d9/084ee9f2b6df0c6753d73b731709de369157cd": "380d0c903e8b5f468eb670d9e513545b",
".git/objects/ad/ea80cf4c4255705877303bf92a15f0e2a3f2dd": "02d60279d64507dc518e3d3aaac93855",
".git/objects/bb/9a37cd72e4123f9554e1f45eabde6771238577": "0490911c3b583fb5aa063288ee7d729a",
".git/objects/be/bbb5b704d634846ee7c3914314fe05108c4cc2": "6f8a666ce83de3a2f3e789d1b2cdee3d",
".git/objects/da/f7844c5b0d6d645de95cccfa6e064ceea2f3ff": "70b923050230582e46aea79c53abce84",
".git/objects/b4/3f3e6d186f8f5d47e65872e3fe6ec62ea71643": "ddc5854964b3a588dcb81cca08070f9b",
".git/objects/a2/14b9afb073d00b3ba5cb26839790ba937862d6": "cdd63fbcd11780f7378c2e4f09e853fc",
".git/objects/d6/14c5ba6a979aa401a089cddc82d0a4bd05cc13": "98338bc6afb0917c381dc74400170d5f",
".git/objects/bc/36299060544f1c5e1de5fa6f355922435b6943": "31fa21279bdb2fe5c3c8b5ea8cdb5d5a",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/fd02d6ca2b56f9eb9609fa51af23e5ed00ba66": "d04f1d32dc3ddaf64e85fe91f3657200",
".git/objects/c9/a61f70b3d0c8b17241248a53892061b5c1441a": "215f2bf8c97c7cb4c5dfef161762a62a",
".git/objects/c9/334041f45aee2a178d2833cc65281e3743079f": "58107567621de507e532b6f794fbdb82",
".git/objects/f2/219bd3d3f980ad26f677f0b6cb4773da2550a9": "637ccbd115a41248a0c09936e869d37e",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/c8/9567482452d139369ef3a314d749f68601eb56": "74316ff3da1e12a8b955f44450093f3f",
".git/objects/c6/e99d8b4ec3c684f424aa241d90076539475fa1": "783b7845a389adea5d9c066cd46012ac",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/29/13e7ec1fcc2a28eb9eb42f4516dfb288a722b0": "6062d76a8bff3eeeb8b0c5d2088e0923",
".git/objects/16/7231bf507f4776c37e08b778d8822042087c73": "03228820e070a8262bdc13c29715fc29",
".git/objects/89/f2f95a8d55c211a83ddea17babe3cd4354325a": "065733c863d5be4ca894b83f2d246e47",
".git/objects/73/1f7645985f4cbfdceae57ab39bbb36eff27052": "9793f19db2596b6a8c69a5bd7af821f6",
".git/objects/74/66b697976ee51388deadb0cdf54f3ff5140981": "41644379f5ff6d506e6f3e065325c4e8",
".git/objects/1a/41a926be1f55269ac04806554140475464be9c": "49c872600721ea32a673cda40ac754f7",
".git/objects/8a/dca7bdb75f4d559b9981f6d07bf96ba5d68639": "eabfa01f018112f015d2faf2281ec870",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/23e027e321c306d6ccad0da9e2cc54b9562d41": "3798cce57bd1e7b66143ed060dde9781",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/0a9b33742ad74e8f5e474a861e8d23702a6b20": "6874b8559388c5e182550d8b0a0da54d",
".git/objects/9a/790acb55382fb112abc7f630d7c9e15073db6c": "dc8c05fb50253dee93e434cbbd3da6d4",
".git/objects/5c/477b0bad14865d080bc637f81b947b69de429a": "f0cd7b079c8fc38774831cd1212c7b1e",
".git/objects/91/69074d4f1321996c63c6d4938e56fdb488702b": "d512174af5286a9ac6c9ae400a6df2e5",
".git/objects/91/c93ebe0ce3ea9d6649370f01278aeb4718e0ed": "f82992e5edfd408ffaae298438c33f97",
".git/objects/96/9124f69edb595b03958ad47d8e4f13619e1bac": "b200b3cd909a1d3183f4ebe84349ca05",
".git/objects/3f/bdd623b4f8d2e8484bff13d4b21504b159f021": "82492726c012b931b8b706e1407e2c49",
".git/objects/37/f454a7927d1a84964410ff0d900be5abac2605": "8767a4b22fe7f7976cb73d2a7c145cd4",
".git/objects/37/36576f5ce17f20216003a8912f84e7049feba0": "c1de9f3204d0a77d26c7ecde93fcbd04",
".git/objects/0a/6afbd1579a101bfad568be1b973f1c8d89aa59": "893869f5356340efa5cc67295f69af6f",
".git/objects/bf/ae3f65dbb9cc4fdcaeb8b468d10439777786b9": "e2dc4f3b7c5ebec8551f70958d677ada",
".git/objects/d3/a99eb6b9df835613dac181d4b750b71f92f6dd": "541dac66fb98fbd3f757b04c9998c59e",
".git/objects/a0/dc70f9a138f6bbe468dcc9984af4d7a003613d": "efd62c9d512932f8db96aefe7ee3e981",
".git/objects/dc/4e7e15736885f9d770bbdb1fe69dc6789d56f4": "16872551f0ee478e0831b06eb2efb2b7",
".git/objects/dc/f44d44f606a01ea82deacc25ec2be2d0a1cb11": "41fd0431735ff59ba34a5da2a0fa32b0",
".git/objects/a9/022719567edaad1792312a3ae8b7fb3f227cae": "36d617e3f0953a772b580c5d4cd55da1",
".git/objects/aa/8942ec50dc7513dd644ca6c95b09cc4fb940a5": "f4e3505de95b1d14ee0bcd109a175b03",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/129426f7f2a5e96e7fb74360fc33987f11e67e": "652c9e2ecc65b0e60473d60c5a327d33",
".git/objects/ef/20d2d5e42e3291a23497684cdbe4d638f660a6": "14993acc69754089276775baec87adad",
".git/objects/c4/02b7fa335216375897335eb5b5bb32d8c5eeb4": "7c422ab0541cf8cadb5352f5639be3b6",
".git/objects/c4/9746432f71c2ad1bf87e7fdf684d7c77ba054e": "03124b8b9c7a7f8cb10748b4b211775c",
".git/objects/c4/863af2970aaa6788a79c9f171ab0ec5d63b1c6": "8db5b0606d89ae66b3335dd2621bcef1",
".git/objects/ea/3f775c2a5a48b4fe6c29bf415af553fcf2500b": "7cceaa0e0f27a218e891ce8aaed347d4",
".git/objects/e1/928c0e3e855be6c599a408f9f2b95e09d87e82": "8106ee4780ebf9b8323821c16c98a4c5",
".git/objects/e1/82fb8259617ee0b3fe763e1c6f87218e3fb58f": "5d1dc68f69c83e88815b8ac3ff250d7b",
".git/objects/e1/d455166cdf76660366ae5a5f3b5a28ce8f025f": "37a974a515cf2244814e9ef958e003a3",
".git/objects/cc/6e497930955e1e4593673658c3acb6f51f00be": "4bd98e9302439345a513ae26a7552fbe",
".git/objects/cc/a8d27cde49dc1e0e1ae9f1aaba74eece740257": "6002b55e58b4ac5307b97ddabdcd4a44",
".git/objects/f6/4c3facb71e87d6be6ab42244dc33f4d103b9d6": "03536b654da2de4195f587f4fd0f7da5",
".git/objects/ce/2d253adafcb58e40f85af995b47d7e45fce413": "fce87886824454860358781faae4fa2f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1e/e494fa22816f71f7ffd10f1a0d2af8018571f0": "8a61ad90330bc648238e939f3e86ee96",
".git/objects/84/7e65ab20398d78cd8c8d0d1684f1ca65cec29a": "23948d6333fdecb602389db27525b633",
".git/objects/23/b68f7048776fd4c89845ed16750b81b20e1d90": "ffb2e8b8e2fb9d5aba08e1ee0f3a0091",
".git/objects/8d/f8bbf6c694098e0e5bfbbad63eb0f845edb841": "9c96caa8e283b80504b02c00a4c1fb38",
".git/objects/8c/907a2f9a25fd42092f43d06d41f9ef4b6a2c27": "e594d7a3298dc7af6cb6afbba517857e",
".git/objects/71/06e1cc4e27936b8481cb3e9bbd8689b47886ee": "2dd1e4aa82ff95a1b607522eb13a8e67",
".git/objects/82/04a7cf16f2033569f27b00d3862219d86afbf5": "80b39e2f6ea8173a7b13ab20381dad59",
".git/objects/2b/a353f8ab1bab1f2efe6a91f25c66916d238e82": "a3b04a9acdd6b47946d0dd807b828259",
".git/objects/78/e423e2930c4b5158a9abc727a33b5c10732af4": "60a1263b55a1da9633e1422d3ae2dc13",
".git/objects/13/7a9e7769448b8f968e43c00dc939f8a2d075a9": "6fd4fd9a2ec2e8117f9307465ad18388",
".git/objects/7a/da2f6c5a1a20de083b8964c329051d745be83c": "76aec049c1a95845f655ef0ed6948272",
".git/objects/14/e436e808678655445edd243325a0ac0a116cb0": "82b3222a00601b054b59edff8501fb32",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "0fa4700ff1aba987964fdfc0b7a79b09",
".git/logs/refs/heads/master": "0fa4700ff1aba987964fdfc0b7a79b09",
".git/logs/refs/remotes/origin/master": "bf59a18f329b8bb085f14f462fdf5ed6",
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
".git/refs/heads/master": "be0daf837e07dc8db5cd90a67af5b16b",
".git/refs/remotes/origin/master": "be0daf837e07dc8db5cd90a67af5b16b",
".git/index": "e18b3585a1b7805ff0ad67fe6cf57212",
".git/COMMIT_EDITMSG": "c6566f64461986ffe46c913e76644b70",
"assets/AssetManifest.json": "fc28f6e6fec5414ebe6f9d6d0f2ad1a2",
"assets/NOTICES": "2b0a3a5872fce04708f0dfd59e686d3b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "8f5ac78dd0b9b5c9959ea1ade77f68ae",
"assets/packages/fluttertoast/assets/toastify.css": "8beb4c67569fb90146861e66d94163d7",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/image/img_gas_demo_3.webp": "3ce677bcfd7cb8c35e15aa57bf6cd7d8",
"assets/assets/image/img_food_demo_6.webp": "413f665ce43b11cc0532b2674eef08b2",
"assets/assets/image/icon_github.png": "a29dc3691124638b000809a7696281d5",
"assets/assets/image/img_food_demo_3.png": "68192022806506d20e89c369171e143a",
"assets/assets/image/img_food_demo_7.webp": "859b941a309eb57fa413202c7c5b3ba2",
"assets/assets/image/img_gas_demo_9.webp": "e9deff88ff7b279a797d105c082f110f",
"assets/assets/image/img_food_demo_11.webp": "89a27eec53f8c3c7b2d22da76a17538a",
"assets/assets/image/icon_gas.png": "9f9ad6c77ad3d98c3462a8e783dfbb7c",
"assets/assets/image/img_gas_demo_5.webp": "5e0cfa9d3140f6e83f4c6411264aee64",
"assets/assets/image/img_food_demo_1.webp": "6672e1a67138c2801747ff165ef1b151",
"assets/assets/image/img_food_demo_10.webp": "24bbf1511a7a179515c0b2665e4bf8d8",
"assets/assets/image/img_gas_demo_8.webp": "98a8178081a6354616eaee6fdddc1e4d",
"assets/assets/image/icon_food.webp": "9eeb576939e92b173932a38f9dc6f5b1",
"assets/assets/image/img_food_demo_2.webp": "b55aec70cdc5ce610869265b6a749de9",
"assets/assets/image/img_gas_demo_7.webp": "931ca362b6142951d8579debf2017213",
"assets/assets/image/img_gas_demo_4.png": "973d11ce48c1c3aea8625ac2ee6d3b78",
"assets/assets/image/img_gas_demo_6.webp": "0f36b85f2f2c1a8795df5d2c6eda637a",
"assets/assets/image/img_gas_demo_1.png": "c3ef2bc1af05879df965743e25a6d83f",
"assets/assets/image/icon_linkedin.png": "30c453b7f5fbdb09ea0cb42a5dc7a6e5",
"assets/assets/image/img_gas_demo_2.png": "5cb43b6835008213699d31883802100b",
"assets/assets/image/img_food_demo_4.webp": "4874349b0178363aa0fb948b1348aef0",
"assets/assets/image/img_head.png": "0c2afe9459cf195c9989444b5f6cad53",
"assets/assets/image/img_food_demo_8.webp": "14cc60d3f74f045ead2635046db8a309",
"assets/assets/image/img_food_demo_9.webp": "55d1950934926f136f29e21b55a991c8",
"assets/assets/image/icon_facebook.png": "87e2de9c3536d686a96f394dfb9fa87c",
"assets/assets/image/img_food_demo_5.webp": "ac5d6d0561600e109a7f32437c97c1ae"
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
