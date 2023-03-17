'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "67410620fce72cfdb88f40b5f292f0da",
".git/config": "cdbf6675329551a92fb24112d8abaf2d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2939cc6a87eb276099c4d9eedc9251de",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "42de0db8a2a566dfc6431d0eabe26548",
".git/logs/refs/heads/main": "42de0db8a2a566dfc6431d0eabe26548",
".git/logs/refs/remotes/origin/HEAD": "a4893bcbba44a0addd40156208bd1984",
".git/logs/refs/remotes/origin/main": "746dc4c1c14028ba7004b07d24396c8b",
".git/objects/09/1262fba8e32346f400767fb6c12f393e48ed20": "ed14d9f8707ae4e34a0e1eaf9e1f2710",
".git/objects/0f/064b8a46fe4046aec86e598b92c1aee3c98da9": "aa65a892929197285f6f42b8535f8aae",
".git/objects/0f/2d1c5876281eee24092ccfd95ea7113a5d9ccb": "9d446bb20d3c5680ab42980a7ccd1dbf",
".git/objects/1a/dd86d2e4c4c0d7184c41a3c63f7b89a4b8b0f2": "f863cf899bca2fdbf2dc4b1b47f69ddb",
".git/objects/1f/cf73f05a309834d12cf995d97bbbd3b0d8e39e": "80ebd56f9173018ec03df110f3133801",
".git/objects/21/9a5463ac72e466e64741e344ac99a8b7f71f3d": "e67a32b4736409b7daecb3f7efb0ec43",
".git/objects/28/298999cdbd1855e34a76dca812c2dba63bf2c6": "a35d4cc855fa14bc3057c3a642d65376",
".git/objects/29/d5fcd635387f36b5a60ffbcbaec98d3953728c": "a38e10a2be75aeda3e96a71fa1a33089",
".git/objects/36/4f3b65757d0bc3cbc4347a941b373599b1b9b9": "5b4f656b95b0e243895bc4b0e5af5b5d",
".git/objects/3f/791b3ccb29daa4bc41ee9ec91fd49b4e526f11": "ffc592ed76b8ecbfbf450902f6d35fa7",
".git/objects/48/8334a988857fec8bb8354084ed0ee9a9825542": "a473612a4fd06873a4a8bd43d2e3d8be",
".git/objects/53/9285107c1b3455be69a2745be43b6380cfc533": "50b40ddccf4517e250f5e0b25d167d26",
".git/objects/57/b11f58b887e28dcb906442a582b22c1a0faef4": "b7a02971d80f88471e793adf1ad72643",
".git/objects/5c/5247ba2d5afd384455c604813fcb6628b87e1e": "bd07b37b74888aba9796d54a0113524f",
".git/objects/5c/c8b920c3e69eec5c6540141b23f10839eb016d": "c171062528a4637f0fbaae6c5af42f0c",
".git/objects/67/fbbbf139ad393cabea20a8bcda44460989ebcc": "700ec0ee013ad3fd4e3eb643ad6e8601",
".git/objects/68/06455b0d0c013a9a740a43aac78829d4ea2505": "c57b0fc0220a77650449ba28b4550237",
".git/objects/69/2fc4bf0b41b0903aaa25317b197372a4e7771e": "b11fe4501850fcf897a1e84b6859c1e9",
".git/objects/6e/3c0e76b4004e0768709169ea116fd0419634a6": "a45db0ccefd12e70d290b400374e3727",
".git/objects/7f/1f5643fab0b0a0970fb15a8d76809e1f6bf9b6": "07cc31af0a1636c5f28475883dc423cd",
".git/objects/80/645302f0706e3b5e596be1be9297078468d86f": "e5473c22e6845109615a9dd217215de5",
".git/objects/85/1d4c338a62e9791f6be05131bcc54fcbfe387a": "07b748eabe1078644f11021d543123f9",
".git/objects/89/4fc9f249eeb22548e064aa3be33da0454a39b0": "592ae7db6ad05e94bf132fba81400f10",
".git/objects/8b/713f8301367ef2757f50bae67acd1ad1b44a51": "77c44390192fcc13115babb822ddc56f",
".git/objects/8b/fa65e5c1c4f8b8b12de9dd1ebeecb18a7c4fe2": "2b951ddc7dc0793caf86cf6db2e6c878",
".git/objects/8c/60ad758c1079cda6c35b48e70539d12e9c1880": "3ad3597fa33ca2ac52e460c004394276",
".git/objects/95/51b95a68190320fd0481f43c5687f6e4af9f37": "7fa30a33ce934a0f4c2083aade9fcae2",
".git/objects/98/b4ce92695a24006294d1003a2b605d5428fcc3": "a35ed8c3fe59292e98e23cf3c9895a68",
".git/objects/ab/cba6eb384371b43382bb9dd5821e54c4ed02c6": "3ca62a42ec26edc161dbe0f2edf968a7",
".git/objects/b6/6612af137f0fa91aa5b4150597ee05888bd3c7": "3d4aa5af10aac4f4fe81d1e65144f4e6",
".git/objects/b9/a10c7142c54d197d2b58bb49c53ffe13ee1ff0": "7c15e25ee8f1361734f45bb9f66dd2c3",
".git/objects/c0/77a9777314100bedd6dede4b4e4390a8cfd4e4": "50606ad818e6a14e305f4668cfa37bd6",
".git/objects/c1/6425a48c900da23e761de774a329099f4b38cd": "b394d223e70d5fc43404ad4eae631291",
".git/objects/c3/613eb9b756e885076c624e24fc9c15714b7cd7": "b5a0a12c1c5d131e47f9342299f10b5c",
".git/objects/c4/3db629b58f3d425dd071cdcfcce513ef0f6fa5": "f1bfd4353fe142b2cbe9311be770d071",
".git/objects/c5/fb565eb8dce49e8d229e759ca2c827066e3d67": "e241c28bee3edf0759c88bb3c1eb28c2",
".git/objects/cd/f605baf942439ffa1d685e1e1ff19923c96367": "13aabfc7567e3c6de57bc2b6ebb6f36d",
".git/objects/ce/a858ad29e9f2b6c09020bb5544793a88101ae7": "dc370e10cf1fcda004133f0a86bab479",
".git/objects/d3/b9c8684f7d15aa36a5b5c47685f4623acbb804": "b7938b208f9c9ffb8f89ba81828e6780",
".git/objects/da/d5735b9989d61fdf446b821ce7b90d9afe9d74": "a8c0bb2eab8b5161fa05990916e89421",
".git/objects/df/94253840c99a4e8d2ad11fa2e980f45cbdab09": "f5e47e21df7aee88420a1db745fa124a",
".git/objects/e0/7911de748d276b9ac57ffa12e45621f46b42a2": "26e81a001f33a5cd466c1d4fe8af7923",
".git/objects/e7/6e35e72d386433ab3908f27041a11d53ecd06d": "cad98307bc21897f3f6ddab172a4cb60",
".git/objects/e8/9545364e9da67a3f5cc33074458ddd9ec00d77": "d940a3b2e146ca0775ddfc1baefd2b3b",
".git/objects/ee/4c0814aea4c4205ba1c875148eef6dcb8e16a5": "468aa706d0b4338f36ee07bf77755204",
".git/objects/f1/c723bfebec609426ba9e0c0efbae2931138c31": "a4cb36e83baebd025b13b9ad6aaa10a7",
".git/objects/pack/pack-e520696693662f1420b3635bc903bad1af44292b.idx": "60ca1c7539e17fae4de973c6a749a9ad",
".git/objects/pack/pack-e520696693662f1420b3635bc903bad1af44292b.pack": "858b7825f1ac8b79debd32d2ec6781e2",
".git/packed-refs": "01190f609b541ccfd6391411a60dae29",
".git/refs/heads/main": "65c27b34f8c90afa7aa592b50d5449bc",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "65c27b34f8c90afa7aa592b50d5449bc",
"apple-touch-icon.png": "e224988d3f5b6c22309563d02e6746d5",
"assets/AssetManifest.json": "92e9907c21fad04acd54a645991ca8fd",
"assets/assets/download/Resume.pdf": "c0543672b8959ceae7114169fe8b7ba9",
"assets/assets/image/main.png": "24ffd5c36a7870245a7301a47ff03e9d",
"assets/assets/image/small.png": "c440dc5ec2915c1bb54db5057588ff42",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "6da504e380078aab988760358b8f01e2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon-16x16.png": "243329348a40278a409accf190babc84",
"favicon-32x32.png": "57ad674b780cf69314e1047c633d4fbd",
"favicon.ico": "70dcc031809006d3ca52ac11b04c9ee4",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "cbd85180c6309c15e97ed114f1b25143",
"icons/Icon-512.png": "3b4592d372092ed517efbe33b65b24c8",
"icons/Icon-maskable-192.png": "cbd85180c6309c15e97ed114f1b25143",
"icons/Icon-maskable-512.png": "3b4592d372092ed517efbe33b65b24c8",
"icons/maskable_icon.png": "12492cbcc548896fa783b67295bf95ec",
"icons/maskable_icon_x192.png": "ed0f85f9b1547cf5fdb6ab6009fd7374",
"icons/maskable_icon_x512.png": "42d687c2afb74fb8e8522f10c9739c44",
"index.html": "f2fede6b9f76a81e2d16af929cf70d5a",
"/": "f2fede6b9f76a81e2d16af929cf70d5a",
"main.dart.js": "749e419afa3a9a0ab3d4b392a94be555",
"manifest.json": "e2c772be8c1aa387daba6f170872f4f1",
"README.md": "f62eeaa7616cee091b7df40146427806",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
