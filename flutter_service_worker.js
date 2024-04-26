'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "cff49c8845cf34f42eef9698b3e2b9fc",
"index.html": "be6f03d2dd2776f349de2398432623ef",
"/": "be6f03d2dd2776f349de2398432623ef",
"main.dart.js": "e3ee7efbba5ec722744ed58ee89877d8",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "40417608e3c6ed13fa4f94d0d96962e3",
"icons/Icon-192.png": "29f4f541e7ec74efe39f3a10fe8a8cae",
"icons/Icon-maskable-192.png": "29f4f541e7ec74efe39f3a10fe8a8cae",
"manifest.json": "f4097b9cd8b8641b6b427e6fb7c5ba71",
".git/ORIG_HEAD": "403a8ed95c3cc9b82f45e733808c4273",
".git/config": "a97f96e90c1b92dcd18c158535e54017",
".git/objects/0d/b97d0bc3e992c8c04e37fcfeb9c43f4eb58be7": "652f86fc9cf4531e14ec07d452ef043c",
".git/objects/92/15dbe2152e037a2581b0d8f679e96958f0718f": "e67ba8e17db75ac1e05e4826a17ca5bf",
".git/objects/50/a1c34637144562798e7f78df45a2e56eb21fda": "0bc5c2d8b7f2de3ef324c34017dfb912",
".git/objects/57/d89b87f145fc95ef985b6e8a05cff3cf045796": "5bf6caae26e5bab1d4e119838fa425e1",
".git/objects/57/f992a5420cff13b0d668924e87d6439d4c9da6": "9d45e4541299a0f8b2ba9592dc71bb14",
".git/objects/9b/a7070da0db8e8ee871ebddd54d3b4a7adbc659": "6a316241e2a3ef9e85a9442f7bf11fe7",
".git/objects/9e/90c72fe538766150f7480ad4e0640060d00224": "354789dbc54a514ee825c0b3c4ae4263",
".git/objects/04/7431a778e55f9bc3da28f70995fcb20cfc76d3": "c12f3a0fddc2116374f5d779bcf8de76",
".git/objects/6a/d169a5b7d765b16ef7ad77f2941ebd72ef6694": "4987474535977496a50a22780cbe2425",
".git/objects/51/6b626157b238c55ee4439c474b00f33a6beb3e": "f12bf303c3c239f36075c8844f593237",
".git/objects/67/dd298d385b26ab18f53aa75cfa93daca8016d6": "cfe7a5f0ab3f29cc05750557f7c6916f",
".git/objects/34/5110bf8e6799eb1895feb761b33d6b5b7f2449": "c08daca76a9ca2a77c4addfbb12d4218",
".git/objects/5f/af911f1710e0ec62cbb255a82ef9a9b3be62fb": "a4a01beb4ab8ec0f27c8884fca5a70a9",
".git/objects/a4/59b3dc1f38d46f309dd6cbc49e4ad54a28f98f": "0d85499f25009598c29b73f6076501fa",
".git/objects/ac/df5df72abba52b0b58fce88165e016770b8ea1": "c5853dd292c0e4f2304b3b690991fa53",
".git/objects/d0/60e1e06c8502e6b27970978c6d92bec333540c": "73e2bb66602259c54e0106fd31b531b1",
".git/objects/df/b7792cde3ac1a844ecf9e999e964dc34613ca4": "d5c5df67a19d1751175229d68418e999",
".git/objects/a2/d3094c5a6bfbfec9f6ec2cf00cd6e2567bbfac": "8160e1db8d4ddd2109acea660d141f5b",
".git/objects/a2/1f86cf0c85bcb9b6fb4f2e41a9f884ee83c3a5": "58c026af4442989c44adfd37f63dba95",
".git/objects/ae/81bcfc2b4c34623444ecbfe7d27b04a7d9beff": "f92a96f1aede94a1f1aa4aacc37d7a80",
".git/objects/c7/3e4229599122558b8b8dc785562791ffc5d206": "e499ba53d54f05998b2791362dde4f55",
".git/objects/c0/e3d3b4d226560e863aece77afb83e7b4abb1df": "19da627a242e9a63c313fcfdbf34a04f",
".git/objects/c9/4803fbdab3d09563f73b0b387d025b919521fb": "f23e6fe7a7e4ba717ae2886baa896a49",
".git/objects/c8/7c590608620cb33f7e88fc0c9473f611fd0245": "8f7406bdffbfe2cac57ab58c21b46e85",
".git/objects/18/abd8951eea00639ede185910db8bc047ee0b87": "dd4be5fadf820b0544d1de5600147e6c",
".git/objects/18/35b20790967bd89066b3ee43ea951f6f0019a4": "14898e2ec909e70605626fbca4035ffa",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/pack/pack-1a11f532406812917e1d17dc7cd8071dd499314e.pack": "132d88ab46a6681f5e243d2910ad4e5e",
".git/objects/pack/pack-1a11f532406812917e1d17dc7cd8071dd499314e.idx": "61826f55ee2aef91cf404783c7b1be36",
".git/objects/11/a5fd5c5b3dd3e9f9de2557ea0c7c1cc656102a": "11a160dcd7bd0c56a9285e6134d360c7",
".git/objects/7c/1c57c757bf827cd72c35d2b28a29dd75241386": "2e5fae0ab3ff148e51ef5b4333975c3b",
".git/objects/42/c8d457865888f1944bbce3db2b3387ceae4497": "a26f53a41342e9dedf56e4b35c19ce27",
".git/objects/87/be57c1ad4eb30ddaa504aba1fc6c1c95e894ca": "4d4945bc61ad0bec9a5caab39b2d18cf",
".git/objects/28/3869f7284a5b12ee168be2e9c8d0cdf9eef56a": "138bb1af9159c973bd52b2c22f5a6e94",
".git/objects/10/2175f15e4d406f5a28a46bfb1548cdc70e2ad9": "b0420095c11502620b2d342e804650c1",
".git/objects/21/40391e9036b5feeb058cb22ade9f72d16d5047": "960177573415feb916812b5b739ae2f5",
".git/objects/4d/58eff29b3b86b1e99069e905d677accb3c598d": "6cd5ab9095d6046e3e4e0231e18dee87",
".git/objects/75/9d64465000a6f0212c8492bfbab1060fdda36f": "9bd3387ec6a2ac1359c4008814283851",
".git/objects/86/cd88007b4ae7055aaab96f0d372b16ca189c66": "47b0555dd2821c28e885f231d214ac2c",
".git/objects/72/1859b996abdd23ba0ef63b6f3cfd96f1245c00": "74ef361ecc31c4ebab7f47bdc7725a59",
".git/objects/72/0a50b5ae79fe3dbaa24edd51a75177a7a25e96": "97716ad4b4db094b440b6d4779b9edfe",
".git/objects/6b/d88f77457c9810ff3f787f51df6d2a0b612322": "9bcb09d3d2dcff038f07592fd8a7aabe",
".git/objects/6b/90319acffb265b415179361b904ac199f31719": "36841d0d4597ea72a9104c1efb21adde",
".git/objects/00/f251aad5df76598412974b939d62b9b82c74cd": "3bae220654b5256be0c677cb62451a11",
".git/objects/00/33c300352a9c733400e34e3dab02405bc4ee8a": "925b56ef5ae55a19911c1d1d47251c85",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/31/2cb3bf8ba0289082deb48f2be79fdd411bb2a5": "e8c725033917c4bdb4e6232e1bfd104d",
".git/objects/98/b2f672b05b46fbc5425f927e736a098f450c0a": "67fa04bccf84ba27843e666618efea7e",
".git/objects/5b/8e56d54bd394505d7417400bc8005d270e2b6c": "362b30d50def5fa7b204c23c73f3ac5f",
".git/objects/08/70ed47b487da0f67ce181aeba51a01b9bfa607": "faab16ba2b4d2d8a50fe42110a925262",
".git/objects/06/5072fa97bbb762c79c320de73c7f5032c59670": "6125bf98a0256acc952a56e123640eba",
".git/objects/06/a9bdc52d1fee0ff0a2e59d70ef5e74b811e438": "2e1f7f6be79a8c0ddfb257bb278d838e",
".git/objects/6c/7310fe7bcc112804d41f7159d1fe8e915b309b": "339eac167e0aaa0bed964012c55e7744",
".git/objects/6c/c9b4645b89d4a50c1601bf3b4bbdb3a68b4b62": "e6989a67ced8c8a25d3ca3549e3d1f87",
".git/objects/99/a5474c3d95926811b58ead1b66e7e189146886": "b8b0d527d39cdb167e5135ab28658bfe",
".git/objects/52/7245ac4feb67df35e87abc3c22b2fd8575ca74": "1231c103fd2095b9873b399eb6d9db54",
".git/objects/97/37132f065bcc9cb06cc2c3d906883467de91cf": "fd42275687357dab2918a65f3eb1fc5f",
".git/objects/63/570ef05c8a1e3b8829f98c7f98e7b0f8f79b03": "9cd80126c9fc9c546ff77491fe8be33d",
".git/objects/a0/5151831ca4ddd9fa0f5cf54193bef6b188f2b0": "49df3c7ad5d0523dca509cf3b2bd3034",
".git/objects/a7/61fb6930fec0dd867069c01b286b718f040618": "57b798f029de40ab221251dbffebac48",
".git/objects/d5/68e54dada482a0edca3ebf91a6bf7c188606b6": "05af1f89bf98bce9ff36b047ff524c59",
".git/objects/d2/daf3fa48e5b2351717d4f3e68b96c99ad001b8": "ebad6bfbe9b1b1bf580dc5aedcf038c3",
".git/objects/b7/af25e96ce54aef850afa44fc6380fb91004c8c": "f60d521fee7ed97cd3b687a18a289022",
".git/objects/de/630b8bf05673fc6584c3b57d3f0bde36642013": "1357806444073cb71221b372209a12da",
".git/objects/a6/6a1fe415edf545c6868cc54f0b5dfc7bcb1643": "4e13ea8c485ba1351607fcf6aaac6ca6",
".git/objects/c4/af8f75a8e66b6f63c9f02aae0ef89ba3fc8d94": "651c7366cb27aa01a5b8bb57a51bf982",
".git/objects/ea/6602b5075b507800f74737bcd2066748edac3c": "b9c5148a1efa4c43a78642037d56f23f",
".git/objects/cd/76cef14f31a480bedc8119a5deb90f0b663424": "1c60f1b86b5946ac498b88d5dee2b805",
".git/objects/cd/676fc1cf8cef86f292d55bc5a0ecea912446d9": "8845f564493d4a6be87e6f4d84deab3f",
".git/objects/e6/c96c36e5a9da86496092d145131cb45018c204": "e194f6b596205baeb02f59739f66c3f6",
".git/objects/e9/8e25477a4145c04f644411a73651f9a264ece0": "63c1c9e13acb71d5c0f01b4d5790d363",
".git/objects/f8/ff618bfcef868df2cbfb83a483fb07df6a4706": "5c560ad88c006fd403e560c67d69c0a0",
".git/objects/46/e35ce6777f5524a68aeec9ef92591ff1129ea0": "b95478c5bf67fdc7761fe67622744864",
".git/objects/46/7f1ed22aefc8b4d288e08ee424535a4fe7ed55": "ff9a2f38610aba9710e798f29af44a10",
".git/objects/2d/c535bb201843396a03a1e75c15ed319d38c924": "ca9a2c10ccaf3f680636df0dca58bd4a",
".git/objects/8d/724ac8caec92147dbaa22496473d1f85e14228": "8a40fc12780a6d79d6065d7019898427",
".git/objects/8c/22dd0e20b3b3c399ce233fd3e9d914b9c76294": "98b9a6d489ad583c3a29578fe07b62f1",
".git/objects/71/a53c62b18372aac8f9392f09d464a62f646dd7": "8f3ece95f98fb023afedb2d33c81752f",
".git/objects/82/2dfefb22017a0a3ff6182c03469f34c88346c1": "bb7731923e97a75e297b4f95ef8b53d7",
".git/objects/49/75d3c83d8df4e1e52de3e59d1a264e23073df4": "3ff2d6c23fe12ff4a08021028f848df9",
".git/objects/2b/feb5a4d074282adc93edf003544e6bb17d8e40": "bccf2246b7b7b2550ee2f51ad78b9fad",
".git/objects/13/3593187da033ee5d66873d6284d4fa344975c0": "03ca053422575ebb8e78cc64249bfe9d",
".git/objects/14/b7d2946123053320eaf896ceecdc21714c00fe": "a499078d5790339df648d90ba1094555",
".git/objects/22/adfb0e322bdf1e4ce5146724a89005f53c8c41": "175e92cc94b44196e948258832849fdb",
".git/objects/22/f0947821584a2c5f7a3ccfafbb91972796aae5": "c6efbc69f14e0126588c3133a526ea27",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/fork-settings": "535f37270844b562332259ff20fd9aa8",
".git/logs/HEAD": "6fb39dbfc50f2788aad969ff2d5f456a",
".git/logs/refs/heads/main": "6fb39dbfc50f2788aad969ff2d5f456a",
".git/logs/refs/remotes/origin/HEAD": "b5270f38875bda4b89429a1cbaec0ca8",
".git/logs/refs/remotes/origin/main": "58b0ec87d2730ef6162da791047fa3b3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "c061130f2d3c1c90b0ce7fe36d264f22",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "c061130f2d3c1c90b0ce7fe36d264f22",
".git/index": "1cc748881fc663b651d2217dda31b608",
".git/packed-refs": "d1aaeb2931c37aac31cc5b0dfcc9689f",
".git/COMMIT_EDITMSG": "bdf72dd89e9f5be7a8794430eb8ccf0b",
".git/FETCH_HEAD": "fce4d3e52b919acdebe95f1a318ea8d7",
"assets/AssetManifest.json": "c3b91bb638a77bb9e6dee0beb8e8d383",
"assets/NOTICES": "ba222bc8a043a6dadab087eb9ebc1ff6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "e2ba762105af2a09fb25bdead31ee19d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "889dd0dd573ec37ae206c6cc242aa23e",
"assets/fonts/MaterialIcons-Regular.otf": "0808d3d256e9c96f9e762636d41c457e",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/2.0x/flutter_logo.png": "4efb9624185aff46ca4bf5ab96496736",
"assets/assets/images/3.0x/flutter_logo.png": "b8ead818b15b6518ac627b53376b42f2",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
