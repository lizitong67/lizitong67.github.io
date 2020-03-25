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

var precacheConfig = [["D:/My_Blog/public/1231489.png","649e11b9d2b015e1e36ca0204fb43eec"],["D:/My_Blog/public/2020/02/21/DVWA-CSRF/index.html","b707c5beb088f42e217d03a24398e386"],["D:/My_Blog/public/2020/02/21/DVWA-SQL注入/index.html","6e5f03b8a38e585dfb278f57c6dbfbb1"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-DOM/index.html","56677d766c692af111a60f366312b8ab"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Reflected/index.html","97c3191288c6e3b8d2db07188d1bad7c"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Stored/index.html","946b2a235c32206a7a58a170906b6fbe"],["D:/My_Blog/public/2020/02/21/DVWA下利用XSS获取Cookie/index.html","6cbe3725eff06e5141a13f4777314487"],["D:/My_Blog/public/2020/02/21/LeetCode-14-最长公共前缀/index.html","704240be899e5313372cd9b8176ffdf2"],["D:/My_Blog/public/2020/02/21/LeetCode-53-最大子序和-动态规划法/index.html","7b563a845218e5875620faa2eced8fcc"],["D:/My_Blog/public/2020/02/21/LeetCode-69-x的平方根-牛顿迭代法/index.html","ca026a3bc1ee3ae7cda4267916c837ed"],["D:/My_Blog/public/2020/02/21/LeetCode-70-爬楼梯/index.html","973f9e29ef8611040c29f3e0207e73fb"],["D:/My_Blog/public/2020/02/21/MISC中图片隐藏文件分离/index.html","26c3d6161b7c1180e054cba5d8890db5"],["D:/My_Blog/public/2020/02/21/PaperNote-HOLMES：基于可疑信息流的实时APT检测/index.html","4f2ed3e7291871c47423a8e3c138b9ef"],["D:/My_Blog/public/2020/02/21/PaperNote-SLEUTH：基于COTS审计数据的实时攻击场景重构/index.html","066866a64369144a3f782143e5843f7c"],["D:/My_Blog/public/2020/02/21/PaperNote-分析大量网络流量以进行APT检测/index.html","090d5067bbe8815d5ee8a2750345add8"],["D:/My_Blog/public/2020/02/21/PaperNote-基于高效数据流标记和跟踪的可精炼跨主机攻击调查/index.html","fb76767ada2ec39a118a0e18502ac5ce"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-requests/index.html","15212fdd4143956efdb7a5da6d324909"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-urllib/index.html","07316b55395e9ccb77bfdd9d119abad1"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-正则表达式/index.html","8f4813dd7af709882ededd6ceb13c290"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库BeautifulSoup/index.html","8eb18643c8c1a36a538b388a6301a622"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库XPath/index.html","8b2421236db453daaf4e6c53a2464b10"],["D:/My_Blog/public/2020/02/21/Python网络编程-TCP/index.html","fa3634e1e7e48c4e8fa49dff200ba0e2"],["D:/My_Blog/public/2020/02/21/Python网络编程-UDP/index.html","b0cb00711cdbd455c86d744b4fdeaad2"],["D:/My_Blog/public/2020/02/21/SUCTF-Checkin/index.html","6b80a4e53ba9fb14da579fe26378f2ed"],["D:/My_Blog/public/2020/02/21/Web安全之文件上传漏洞/index.html","80c8ca7154ba5fbf0f42493fbb3ab1c1"],["D:/My_Blog/public/2020/02/21/Web安全之文件包含漏洞/index.html","d70b7818a037f5e82541e419cf7dd2c0"],["D:/My_Blog/public/2020/02/21/X-Forwarded-For和Referer/index.html","19ec6ed7a3be499ebd7ba0ff2caf57c8"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level1-10/index.html","43cdf1ac09c2f36e86b724f040a7f501"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level11-20/index.html","2a9be66f5fe082bbb80e9009e8e77083"],["D:/My_Blog/public/2020/02/21/zip格式和zip伪加密/index.html","7d01506fae3a65d1e0aad05f834a7dab"],["D:/My_Blog/public/2020/02/21/《机器学习与安全》读书笔记/index.html","a0bec859b2344ab40f7f1a50b9261ee4"],["D:/My_Blog/public/2020/02/21/十分钟入门Pandas/index.html","d5e7b0b517d22c12f6a1b395c9bbaa81"],["D:/My_Blog/public/2020/02/21/栅栏密码/index.html","15a4aa5e68846acb4ed33d27dccd0ed6"],["D:/My_Blog/public/2020/02/21/神经网络的数据表示-张量Tensor/index.html","a55a265e00db8f50e8ef348ea2bd3249"],["D:/My_Blog/public/2020/02/21/记深信服2018秋季校园招聘-技术服务工程师/index.html","df8fc9e8c5f4624dac1cff880633fe06"],["D:/My_Blog/public/2020/02/21/读书-《叫魂-1768年中国妖术大恐慌》/index.html","83f659e7143bc3c2c45f9b834971a5cb"],["D:/My_Blog/public/2020/02/21/读书-《许三观卖血记》/index.html","38bcdf5232f85b36db7fb8d353bed2fe"],["D:/My_Blog/public/2020/02/26/PaperNote-一种情报驱动的安全感知APT防御机制/index.html","0ea5cf23359dedb88f721fecc79394d9"],["D:/My_Blog/public/2020/03/05/PaperNote-基于时空特征融合的入侵检测系统模型/index.html","bdaa73ae30239dc82c8f06c80add562e"],["D:/My_Blog/public/2020/03/14/PaperNote-UNICORN：基于Provenance的实时APT检测器/index.html","483e927765e730441748a102daf18417"],["D:/My_Blog/public/2020/03/19/《网络安全态势感知》读书笔记/index.html","68a5b7db6657e96dad4fd1de902eeaaf"],["D:/My_Blog/public/2020/03/25/PaperNote-Poirot：对比攻击行为与内核审计记录保以进行网络威胁猎杀/index.html","34475a8a2c7f42500ca668e3f1ec487a"],["D:/My_Blog/public/about/index.html","f65e0b25f60d5019789d98ccbddbf079"],["D:/My_Blog/public/archives/2020/02/index.html","c6e33e199f2a15790329126b978e2875"],["D:/My_Blog/public/archives/2020/02/page/2/index.html","ccb886981a0254c0edb529c39551f4c9"],["D:/My_Blog/public/archives/2020/02/page/3/index.html","d43edf324884c745b29cfb12bc8bff81"],["D:/My_Blog/public/archives/2020/02/page/4/index.html","5e2d81048410fee526dbce02474e1447"],["D:/My_Blog/public/archives/2020/03/index.html","339b96e13a99f3bb04a3a89653c66f57"],["D:/My_Blog/public/archives/2020/index.html","5147f9c8cd18ea9265ee615c0244a16a"],["D:/My_Blog/public/archives/2020/page/2/index.html","327163c3fc621add6f899cfd464effc7"],["D:/My_Blog/public/archives/2020/page/3/index.html","dad20545cfc03d4e2361922514839ead"],["D:/My_Blog/public/archives/2020/page/4/index.html","e50a25892bec2e753c30e0007e7d82be"],["D:/My_Blog/public/archives/2020/page/5/index.html","e036c595fbc982e04ad9ee5eb44ad439"],["D:/My_Blog/public/archives/index.html","cca860999049090f8cfae04a99c63a43"],["D:/My_Blog/public/archives/page/2/index.html","4b697b0d6376d66daab17c304f21958c"],["D:/My_Blog/public/archives/page/3/index.html","26819b934e407fb9232cba35800c3e40"],["D:/My_Blog/public/archives/page/4/index.html","4cb0b39482c2c1aaf4f1eeafa1f88610"],["D:/My_Blog/public/archives/page/5/index.html","ea590caf507c87efb793de282b45a8de"],["D:/My_Blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/My_Blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/My_Blog/public/categories/AI/index.html","3acc776f530e15a0d2faaa9b6cdbc11b"],["D:/My_Blog/public/categories/LeetCode/index.html","4330613969d48f9a2e026ca15e7e8787"],["D:/My_Blog/public/categories/MISC/index.html","a070812663755551fbb42f3e27017f57"],["D:/My_Blog/public/categories/Python/index.html","818ab4934d4003216d20c4d328d16488"],["D:/My_Blog/public/categories/Web安全/index.html","30d083326782f257f42d178444b9d144"],["D:/My_Blog/public/categories/Web安全/page/2/index.html","9c13b169cec714587c93dffed40a98ee"],["D:/My_Blog/public/categories/index.html","aa32b86d8dc555611e2604ef41112bf0"],["D:/My_Blog/public/categories/安全数据科学/index.html","d09b7ef03f08eb6705e083e755223349"],["D:/My_Blog/public/categories/安全数据科学/读书/index.html","b9931e456b8810e3d5acf942b664fc88"],["D:/My_Blog/public/categories/密码学/index.html","d9840e48d11c3e1c8604024e7d03d167"],["D:/My_Blog/public/categories/杂谈/index.html","afd6f7bce96f7b4f4d29adf272c13bee"],["D:/My_Blog/public/categories/科研/index.html","8d415aa4725a81312098266364258f58"],["D:/My_Blog/public/categories/网络基础/index.html","ea5a76bc2cba32c9156b16eea730f412"],["D:/My_Blog/public/categories/读书/index.html","86e1471af085bc306e405cae2397201d"],["D:/My_Blog/public/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["D:/My_Blog/public/css/index.css","1a8770d4815f16850f60f9989c73e11e"],["D:/My_Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/My_Blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/My_Blog/public/index.html","5e3dc2d431bd450a80619670483fa8be"],["D:/My_Blog/public/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["D:/My_Blog/public/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["D:/My_Blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/My_Blog/public/js/head.js","347edd99f8e3921b45fa617e839d8182"],["D:/My_Blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["D:/My_Blog/public/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["D:/My_Blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/My_Blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/My_Blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/My_Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/My_Blog/public/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["D:/My_Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/My_Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/My_Blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/My_Blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/My_Blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/My_Blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/My_Blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/My_Blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/My_Blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/My_Blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/My_Blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/My_Blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/My_Blog/public/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["D:/My_Blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/My_Blog/public/page/2/index.html","eab7e95203c9e66e2274bce36c67183f"],["D:/My_Blog/public/page/3/index.html","3a9fc53cbf7b8b29f47648bbdc1227f8"],["D:/My_Blog/public/page/4/index.html","199ec644d55692f6b5f924d754651022"],["D:/My_Blog/public/page/5/index.html","6cd1b4b2503774135f281d0e8d0b05b0"],["D:/My_Blog/public/tags/AI/index.html","ebfcd93787ecefedadc177352c72ed5b"],["D:/My_Blog/public/tags/APT/index.html","56af22ee1957fde6f5bab447a4d9ba50"],["D:/My_Blog/public/tags/LeetCode/index.html","876d00d46e40a4348cbbc9cda3117b81"],["D:/My_Blog/public/tags/MISC/index.html","415bede05a0838a5036fcec933921c44"],["D:/My_Blog/public/tags/Python/index.html","bc55f1220208f5b9b15410a6279cc5a6"],["D:/My_Blog/public/tags/Web安全/index.html","969176189fc3403d23c79466aa3121a5"],["D:/My_Blog/public/tags/Web安全/page/2/index.html","d2d88f1ce56a46296f97f888d039c1d8"],["D:/My_Blog/public/tags/index.html","fd9f058f29030c1434731fe34de14465"],["D:/My_Blog/public/tags/入侵检测/index.html","5451fba55bc079e93c9aa18c2bcaef88"],["D:/My_Blog/public/tags/威胁猎杀/index.html","b03203bb3941ec933933af42eeb3f8b4"],["D:/My_Blog/public/tags/安全数据科学/index.html","7b702550a3964ce42f70715f434bca6f"],["D:/My_Blog/public/tags/密码学/index.html","7ad2fcbfca422a8991ac1c438668a699"],["D:/My_Blog/public/tags/态势感知/index.html","baf75bfd896a38e7794a99fac4c7dd1c"],["D:/My_Blog/public/tags/杂谈/index.html","90e472eaa1af150482c8db942b90f30d"],["D:/My_Blog/public/tags/爬虫/index.html","9f4f3135d4602cd4f1cc1d9968719c61"],["D:/My_Blog/public/tags/神经网络/index.html","d628dcbab237283438df8cd0ac9b5891"],["D:/My_Blog/public/tags/科研/index.html","6c1103785515ac625e585e4e5771b302"],["D:/My_Blog/public/tags/网络基础/index.html","713a2c477ae5fd408d61615ca2e80f15"],["D:/My_Blog/public/tags/读书/index.html","ace0c1a086ea68f3706b6dee8dabe6cb"]];
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







