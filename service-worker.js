/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/My_Blog/public/1231489.png","649e11b9d2b015e1e36ca0204fb43eec"],["D:/My_Blog/public/2020/02/21/DVWA-CSRF/index.html","39111c18418acd6e535a1ae0f4da6b02"],["D:/My_Blog/public/2020/02/21/DVWA-SQL注入/index.html","c13f279ffa91599ee41221a373f8ce3b"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-DOM/index.html","dcf51e7c4379a8906466257600467da9"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Reflected/index.html","a58e7f6555496e777cf602e2518bf6fa"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Stored/index.html","0e71f30ffbbbfc32ebba2fa03e1fe287"],["D:/My_Blog/public/2020/02/21/DVWA下利用XSS获取Cookie/index.html","83e478549cdacc14e3f1fee18a3dd42f"],["D:/My_Blog/public/2020/02/21/LeetCode-14-最长公共前缀/index.html","9c586a439b704106205ef7d25c32dc3a"],["D:/My_Blog/public/2020/02/21/LeetCode-53-最大子序和-动态规划法/index.html","022c061b3f30d76c351cc2d025242911"],["D:/My_Blog/public/2020/02/21/LeetCode-69-x的平方根-牛顿迭代法/index.html","d4a5eba2af1416336f17e8f85b1e6525"],["D:/My_Blog/public/2020/02/21/LeetCode-70-爬楼梯/index.html","bf29737e62535a68d29f3eb3ea362c7b"],["D:/My_Blog/public/2020/02/21/MISC中图片隐藏文件分离/index.html","3d6d1d5efa332cb8a60cf315e2971981"],["D:/My_Blog/public/2020/02/21/PaperNote-HOLMES：基于可疑信息流的实时APT检测/index.html","c27d744163ea8bb286d4f958eaa68c93"],["D:/My_Blog/public/2020/02/21/PaperNote-SLEUTH：基于COTS审计数据的实时攻击场景重构/index.html","8443d33e545d805a5d31d578d72a2c34"],["D:/My_Blog/public/2020/02/21/PaperNote-分析大量网络流量以进行APT检测/index.html","0e026a937fe5240d4b1f9feab59d23b3"],["D:/My_Blog/public/2020/02/21/PaperNote-基于高效数据流标记和跟踪的可精炼跨主机攻击调查/index.html","f9ccb8958ad9b688eb38f3f2926a8205"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-requests/index.html","b4d0173d36a1ead7e676b29f52d21af4"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-urllib/index.html","45354a9c83623742303dc823824305a0"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-正则表达式/index.html","eb5655a0889dd421b149531388bacd85"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库BeautifulSoup/index.html","dd213dfdae194b38566ecc5c1177da8e"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库XPath/index.html","28401a1df29c3736b93fe719bd63e265"],["D:/My_Blog/public/2020/02/21/Python网络编程-TCP/index.html","8df492b7184196b35af57426ce2c637f"],["D:/My_Blog/public/2020/02/21/Python网络编程-UDP/index.html","b87939e0379cf196a1af272f00082ed1"],["D:/My_Blog/public/2020/02/21/SUCTF-Checkin/index.html","5cb328b815748b256eb548e9481ebaea"],["D:/My_Blog/public/2020/02/21/Web安全之文件上传漏洞/index.html","dbbaa140d481b47a920d5972f95095e2"],["D:/My_Blog/public/2020/02/21/Web安全之文件包含漏洞/index.html","7dc6b6591686c69c489a5c6ea1b49960"],["D:/My_Blog/public/2020/02/21/X-Forwarded-For和Referer/index.html","af3cdf5e13a9122afb775872efc1efce"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level1-10/index.html","7de479d05efba209c6f97cc0cfe4eadd"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level11-20/index.html","aab5971ebdd2020cfca75c94610f4294"],["D:/My_Blog/public/2020/02/21/zip格式和zip伪加密/index.html","d1fef56eb20e57033cfb2fa7f2a4a028"],["D:/My_Blog/public/2020/02/21/《机器学习与安全》读书笔记/index.html","3c5ff73ddc59ae27e89f094dd0b43e9b"],["D:/My_Blog/public/2020/02/21/十分钟入门Pandas/index.html","f04108a813be01d6e3fcb991169b2c7f"],["D:/My_Blog/public/2020/02/21/栅栏密码/index.html","efc6e86311e4144d417ee4d270058a19"],["D:/My_Blog/public/2020/02/21/神经网络的数据表示-张量Tensor/index.html","527f36375090cd8c896b47a99a2e842b"],["D:/My_Blog/public/2020/02/21/记深信服2018秋季校园招聘-技术服务工程师/index.html","9be873d8622789de9e08e33bac979263"],["D:/My_Blog/public/2020/02/21/读书-《叫魂-1768年中国妖术大恐慌》/index.html","116c38553f1458e600460eedfd1ef1d3"],["D:/My_Blog/public/2020/02/21/读书-《许三观卖血记》/index.html","bd248c1d595e6845a42e53ace25596ce"],["D:/My_Blog/public/2020/02/26/PaperNote-一种情报驱动的安全感知APT防御机制/index.html","7f1c0655af772c8652aa4e81e93eae7b"],["D:/My_Blog/public/2020/03/05/PaperNote-基于时空特征融合的入侵检测系统模型/index.html","5128d5f4bd75230c973afe8d57170df2"],["D:/My_Blog/public/2020/03/14/PaperNote-UNICORN：基于Provenance的实时APT检测器/index.html","8028ef6db3df5469ff2124ddc58f5ed8"],["D:/My_Blog/public/2020/03/19/《网络安全态势感知》读书笔记/index.html","c48a95517021e999828bf09b0de9ead3"],["D:/My_Blog/public/2020/03/25/PaperNote-Poirot：对比攻击行为与内核审计记录以进行网络威胁猎杀/index.html","2e3433273d61741be73166456f82f393"],["D:/My_Blog/public/about/index.html","57eab355f7ac82bea32c1be9f386bc5c"],["D:/My_Blog/public/archives/2020/02/index.html","b9813e6db9175ba77be6a7e8f163d477"],["D:/My_Blog/public/archives/2020/02/page/2/index.html","88324ae19cc05820aa88c9a0fed27983"],["D:/My_Blog/public/archives/2020/02/page/3/index.html","8745d56f680fc6463b2bfb3c49795d7f"],["D:/My_Blog/public/archives/2020/02/page/4/index.html","f6e5058002235a554fb92169e86de8c5"],["D:/My_Blog/public/archives/2020/03/index.html","f83cd85689f193cc44ed187bddac2049"],["D:/My_Blog/public/archives/2020/index.html","697a4848891435906e9b49e95ec29041"],["D:/My_Blog/public/archives/2020/page/2/index.html","592c58f5f6a2f6786647a2c3b29200f5"],["D:/My_Blog/public/archives/2020/page/3/index.html","9010b2c4732dc39219f14dc9824618b6"],["D:/My_Blog/public/archives/2020/page/4/index.html","67f55acab4b0042d41a4827a14373a07"],["D:/My_Blog/public/archives/2020/page/5/index.html","9ec469c46e6ff1cd9179d6d6424207d9"],["D:/My_Blog/public/archives/index.html","d1e9afd529f1cec15c9376c59b2e09a7"],["D:/My_Blog/public/archives/page/2/index.html","5467b22b1e618906c6d166824ddb183e"],["D:/My_Blog/public/archives/page/3/index.html","dc16f1b92225c52e0143fa8c9dfbe87e"],["D:/My_Blog/public/archives/page/4/index.html","9f2022deb508a74fb441d668d52cf5a0"],["D:/My_Blog/public/archives/page/5/index.html","9b03451da1c50ff47a14c5f2215d6519"],["D:/My_Blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/My_Blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/My_Blog/public/categories/AI/index.html","99d0a811b6aec78c02765bb602c96863"],["D:/My_Blog/public/categories/LeetCode/index.html","ad5e26b8411a9c869b42a009102dfdf1"],["D:/My_Blog/public/categories/MISC/index.html","3f482a6035bd15675dfd8f48e07e820d"],["D:/My_Blog/public/categories/Python/index.html","97e2b156017fb0839dd09eb6ff9f392f"],["D:/My_Blog/public/categories/Web安全/index.html","9399d461532a51601c2329a50a90a473"],["D:/My_Blog/public/categories/Web安全/page/2/index.html","821c6ff2697ed2f174a899ec9091f92d"],["D:/My_Blog/public/categories/index.html","d4a849aa603effa3f0a0003b3ff7d520"],["D:/My_Blog/public/categories/密码学/index.html","78cdf249005fb6dba979874c70ee87bf"],["D:/My_Blog/public/categories/杂谈/index.html","a0d10fea0817d24c85fea779b81f827b"],["D:/My_Blog/public/categories/科研/index.html","1c264ecc69dfb4feb4fa42100e82cb27"],["D:/My_Blog/public/categories/网络基础/index.html","138a664a5c5374e19a53baa9f8ac655b"],["D:/My_Blog/public/categories/读书/index.html","d0d841e83dd977aaae3a49120ca0ca71"],["D:/My_Blog/public/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["D:/My_Blog/public/css/index.css","1a8770d4815f16850f60f9989c73e11e"],["D:/My_Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/My_Blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/My_Blog/public/index.html","4ea6f1a65488ee133f9b7234affab011"],["D:/My_Blog/public/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["D:/My_Blog/public/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["D:/My_Blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/My_Blog/public/js/head.js","347edd99f8e3921b45fa617e839d8182"],["D:/My_Blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["D:/My_Blog/public/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["D:/My_Blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/My_Blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/My_Blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/My_Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/My_Blog/public/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["D:/My_Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/My_Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/My_Blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/My_Blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/My_Blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/My_Blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/My_Blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/My_Blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/My_Blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/My_Blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/My_Blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/My_Blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/My_Blog/public/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["D:/My_Blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/My_Blog/public/page/2/index.html","09685671eeb85998af70e30a53504b6b"],["D:/My_Blog/public/page/3/index.html","24200c61eb96b182d8db719f6db6dbb2"],["D:/My_Blog/public/page/4/index.html","739a9ffdd11a51632929e4a929dee3d4"],["D:/My_Blog/public/page/5/index.html","b5d23c9bc82720310177b8c52ef5c847"],["D:/My_Blog/public/tags/AI/index.html","423eceeea1eceebbf7450880af9577d1"],["D:/My_Blog/public/tags/APT/index.html","f566b21a3aa5f3504d638be529441132"],["D:/My_Blog/public/tags/LeetCode/index.html","495756bfc46f2d93d583d18afc07266c"],["D:/My_Blog/public/tags/MISC/index.html","796bbd67136f0ce5c961d237a44bbe70"],["D:/My_Blog/public/tags/Python/index.html","ea253ab0cb7536162f7224068df6896e"],["D:/My_Blog/public/tags/Web安全/index.html","48d73b868891e5167fb22805853f7628"],["D:/My_Blog/public/tags/Web安全/page/2/index.html","fcd4c774844fb675b3d703df11432180"],["D:/My_Blog/public/tags/index.html","8d74fb1d4ef3dccb759fd93969dbb574"],["D:/My_Blog/public/tags/入侵检测/index.html","0ef8287f14c83808fee09b5536003d46"],["D:/My_Blog/public/tags/威胁猎杀/index.html","c1b15155ccf22160ccec719d7e53f99a"],["D:/My_Blog/public/tags/安全数据科学/index.html","b1a58b4f849fa6332f318a19215f7149"],["D:/My_Blog/public/tags/密码学/index.html","db326582594c165bbc40d66dcee72779"],["D:/My_Blog/public/tags/态势感知/index.html","c9ace46e3310cd4b91dcd12911eb1fb9"],["D:/My_Blog/public/tags/杂谈/index.html","346ad02d71fe7a70664043db046cb724"],["D:/My_Blog/public/tags/爬虫/index.html","d78fb1d5a4dc037caa11e5022bae54f1"],["D:/My_Blog/public/tags/神经网络/index.html","249c250c7190827d1b6e7a0996eca7d1"],["D:/My_Blog/public/tags/科研/index.html","8397ceedee83960546f304ac87ec9b9e"],["D:/My_Blog/public/tags/网络基础/index.html","9568614c50651b6a7df09776e2a730fd"],["D:/My_Blog/public/tags/读书/index.html","f50e22d072c05a6f7a0a692a14911141"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







