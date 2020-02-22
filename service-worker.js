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

var precacheConfig = [["D:/My_Blog/public/1231489.png","649e11b9d2b015e1e36ca0204fb43eec"],["D:/My_Blog/public/2020/02/21/DVWA-CSRF/index.html","78946c1eed5e1b6557be87e093afc4ca"],["D:/My_Blog/public/2020/02/21/DVWA-SQL注入/index.html","9a7e12a3a33b67aa4abcf09545222265"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-DOM/index.html","4fcdf63bc6c3824de78fda1faab53c0a"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Reflected/index.html","8f46696c342fbbd7dbc85d8ec82e5e3a"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Stored/index.html","9a16ab87c4b5882d6b799f533b05b994"],["D:/My_Blog/public/2020/02/21/DVWA下利用XSS获取Cookie/index.html","0deb4c84f41ba3423f9a7b101562af76"],["D:/My_Blog/public/2020/02/21/LeetCode-14-最长公共前缀/index.html","b5ebac868492c63236521c8ed47e6d7f"],["D:/My_Blog/public/2020/02/21/LeetCode-53-最大子序和-动态规划法/index.html","7ffe66baeaddb1ce04a3fc752c33ec4f"],["D:/My_Blog/public/2020/02/21/LeetCode-69-x的平方根-牛顿迭代法/index.html","d41d4df93edd12d899511a768a0d4271"],["D:/My_Blog/public/2020/02/21/LeetCode-70-爬楼梯/index.html","2e03c8d4c6335f7d4d659c86c73a416d"],["D:/My_Blog/public/2020/02/21/MISC中图片隐藏文件分离/index.html","74f8a65654f665e2b9af73c99a971e14"],["D:/My_Blog/public/2020/02/21/PaperNote-HOLMES：基于可疑信息流的实时APT检测/index.html","8a2e9317b5b4d8cefee14f8929ace8b2"],["D:/My_Blog/public/2020/02/21/PaperNote-SLEUTH：基于COTS审计数据的实时攻击场景重构/index.html","8bb21296e5bc6414095d3b680fae14e9"],["D:/My_Blog/public/2020/02/21/PaperNote-分析大量网络流量以进行APT检测/index.html","ecf9e3a22fe41fe1547a2a1046a6e1ee"],["D:/My_Blog/public/2020/02/21/PaperNote-基于高效数据流标记和跟踪的可精炼跨主机攻击调查/index.html","55b01d20f6478cb9f0270166c9c2e946"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-requests/index.html","ceff8b61a71b61b907aea888ddda617b"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-urllib/index.html","05d71ebd03c98f3a618f6ff6ec8fb0a2"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-正则表达式/index.html","a4db9a57f19de4fe424ff05581ff85bb"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库BeautifulSoup/index.html","505e2a6289202b7b64c409d2ea791419"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库XPath/index.html","2872d0ace889bb9fba607ef435900289"],["D:/My_Blog/public/2020/02/21/Python网络编程-TCP/index.html","f6e268518513a016386bea3d9e1f8945"],["D:/My_Blog/public/2020/02/21/Python网络编程-UDP/index.html","decd6626763fe0618b8432085eb1e2a5"],["D:/My_Blog/public/2020/02/21/SUCTF-Checkin/index.html","c90cf5217fbe91fe600dc5212125bba7"],["D:/My_Blog/public/2020/02/21/Web安全之文件上传漏洞/index.html","9a3b462423f14b4cc7799e4395831ef1"],["D:/My_Blog/public/2020/02/21/Web安全之文件包含漏洞/index.html","1a6e03d319ff5d74e65c39276d0fc851"],["D:/My_Blog/public/2020/02/21/X-Forwarded-For和Referer/index.html","ad0f9b75da7dc771499b3064b47e4d75"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level1-10/index.html","b0639b984fd9c22310499a24981c3566"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level11-20/index.html","900e28a99ff20778f5d91a35199b0694"],["D:/My_Blog/public/2020/02/21/zip格式和zip伪加密/index.html","842b132e26948a50c5a8c76304e60194"],["D:/My_Blog/public/2020/02/21/《机器学习与安全》读书笔记/index.html","a973f4bdf262d9b1dca835f777e9c25b"],["D:/My_Blog/public/2020/02/21/十分钟入门Pandas/index.html","f06246629333f0268c58834f5e0c3476"],["D:/My_Blog/public/2020/02/21/栅栏密码/index.html","a89357d31dbc62b92500b0e98aacb836"],["D:/My_Blog/public/2020/02/21/神经网络的数据表示-张量Tensor/index.html","c7ab61222b72ff1f6559351beb61cbe3"],["D:/My_Blog/public/2020/02/21/记深信服2018秋季校园招聘-技术服务工程师/index.html","ca7231dc0c2c4dbc06c0dfc62082571a"],["D:/My_Blog/public/2020/02/21/读书-《叫魂-1768年中国妖术大恐慌》/index.html","9c3b50192de6a14d0c4f51d8e3433afb"],["D:/My_Blog/public/2020/02/21/读书-《许三观卖血记》/index.html","251f8a14d4d01862a1b0f732d3199a27"],["D:/My_Blog/public/archives/2020/02/index.html","47b7e7595baaf3316bdc4bba9201dcd7"],["D:/My_Blog/public/archives/2020/02/page/2/index.html","5b6b241a4a170a732210a47eab146b1e"],["D:/My_Blog/public/archives/2020/02/page/3/index.html","b3048bceef5c9a929642dcf6904cae18"],["D:/My_Blog/public/archives/2020/02/page/4/index.html","e8d46c9a531dddc952bc7397980948cf"],["D:/My_Blog/public/archives/2020/index.html","72333f0302943895ddc4f95a0993a430"],["D:/My_Blog/public/archives/2020/page/2/index.html","5c296509d8b369758df86eae0324a96a"],["D:/My_Blog/public/archives/2020/page/3/index.html","a28c97d5b3087279098daab1959632da"],["D:/My_Blog/public/archives/2020/page/4/index.html","e9f43f77a37d37916a1cc11b8ad40b15"],["D:/My_Blog/public/archives/index.html","f74797d85ebba2c9cba4ae0b88e39c66"],["D:/My_Blog/public/archives/page/2/index.html","1664537067a66fd83c03ad4cff625372"],["D:/My_Blog/public/archives/page/3/index.html","58762d12eeb7fa6134c16d9c6f7e93a4"],["D:/My_Blog/public/archives/page/4/index.html","2617c837b0ce749424a1ccd088bc2b4e"],["D:/My_Blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/My_Blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/My_Blog/public/categories/AI/index.html","b58c9cd793183bb07df76fb4ef2acd15"],["D:/My_Blog/public/categories/LeetCode/index.html","a8c3401a71f986298774e9b565a8ff19"],["D:/My_Blog/public/categories/MISC/index.html","69754f2f1f51d12f57948b1e65a1904d"],["D:/My_Blog/public/categories/Python/index.html","64006aa979af251609903a2335ec4058"],["D:/My_Blog/public/categories/Web安全/index.html","126de9de26c2197438079f44a2e4e86b"],["D:/My_Blog/public/categories/Web安全/page/2/index.html","ea1aec6afb57d4d1316a7c013512b5b6"],["D:/My_Blog/public/categories/index.html","1ae6c01f0a66977f83e1b8cd48819226"],["D:/My_Blog/public/categories/安全数据科学/index.html","eddfb43bc1faffe046a18463559ae324"],["D:/My_Blog/public/categories/密码学/index.html","d4f603b48109c998734a486a5e69b13a"],["D:/My_Blog/public/categories/杂谈/index.html","4d4990c0e5a35b8134fbde773bccf3d7"],["D:/My_Blog/public/categories/科研/index.html","24025bd76f9bb1c5407b9d6a6696a2f1"],["D:/My_Blog/public/categories/网络基础/index.html","8f87b1eb284c72baa0cb3daf7d2089ca"],["D:/My_Blog/public/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["D:/My_Blog/public/css/index.css","1a8770d4815f16850f60f9989c73e11e"],["D:/My_Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/My_Blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/My_Blog/public/index.html","e60568e4f35df61892d65419d3009d20"],["D:/My_Blog/public/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["D:/My_Blog/public/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["D:/My_Blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/My_Blog/public/js/head.js","347edd99f8e3921b45fa617e839d8182"],["D:/My_Blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["D:/My_Blog/public/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["D:/My_Blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/My_Blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/My_Blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/My_Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/My_Blog/public/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["D:/My_Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/My_Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/My_Blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/My_Blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/My_Blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/My_Blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/My_Blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/My_Blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/My_Blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/My_Blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/My_Blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/My_Blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/My_Blog/public/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["D:/My_Blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/My_Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/My_Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/My_Blog/public/page/2/index.html","95bf0344d1c1577054777107a5c83890"],["D:/My_Blog/public/page/3/index.html","6111d23895a089c4d5d936b14488c48e"],["D:/My_Blog/public/page/4/index.html","2539ff82ae4688ad04127842c8e4481f"],["D:/My_Blog/public/tags/AI/index.html","d2b7df3a0b1aa98616620c9c6a101eba"],["D:/My_Blog/public/tags/APT/index.html","d0010acc8d0b64bb5807b5b2fa8d178b"],["D:/My_Blog/public/tags/LeetCode/index.html","02771ecd894549f5146e7dd141f2c340"],["D:/My_Blog/public/tags/MISC/index.html","c1cb7a6a2aa503147457a7a894a0afda"],["D:/My_Blog/public/tags/Python/index.html","3bcae654936d2e3a7298955b3d55d96c"],["D:/My_Blog/public/tags/Web安全/index.html","b83c25908931ea637125675cd24d7c6e"],["D:/My_Blog/public/tags/Web安全/page/2/index.html","149febfee47c3d3b46a5fcd5378dbedc"],["D:/My_Blog/public/tags/index.html","62d3e8de7a71892e0b663dfdb1bbb6ef"],["D:/My_Blog/public/tags/安全数据科学/index.html","fcdd71273d6d311128c0d583791207a8"],["D:/My_Blog/public/tags/密码学/index.html","6b7406ce9c52abca8ea0460e613b8f9b"],["D:/My_Blog/public/tags/杂谈/index.html","e8f955beca0060f3b41be711cfb6201d"],["D:/My_Blog/public/tags/爬虫/index.html","82e855716dcd05e7f030c09edbaf6c9f"],["D:/My_Blog/public/tags/科研/index.html","109fe8d189fb68d55b9d582e6dd8b96b"],["D:/My_Blog/public/tags/网络基础/index.html","44da2e4793d87971aa0fd7acceb5db33"],["D:/My_Blog/public/tags/读书/index.html","f28fbc0c14a2e934967ab95110e907c9"]];
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







