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

var precacheConfig = [["D:/My_Blog/public/1231489.png","649e11b9d2b015e1e36ca0204fb43eec"],["D:/My_Blog/public/2020/02/21/DVWA-CSRF/index.html","848d6944b919f046961a85fb8b687b32"],["D:/My_Blog/public/2020/02/21/DVWA-SQL注入/index.html","1d0ada0803505b36643288d6cd5b8134"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-DOM/index.html","be611279e3d3e4ca3d24e4a3193ac83f"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Reflected/index.html","1bf8c8449937938d85f6e1c3997bed61"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Stored/index.html","0f8f04831603de8fac16c0e1d7ee06e5"],["D:/My_Blog/public/2020/02/21/DVWA下利用XSS获取Cookie/index.html","1fe719c2104a474b4d26f7381651f6bf"],["D:/My_Blog/public/2020/02/21/LeetCode-14-最长公共前缀/index.html","8b1606819a626087c6186fd74d0e3502"],["D:/My_Blog/public/2020/02/21/LeetCode-53-最大子序和-动态规划法/index.html","f9973449e50a7cbc86a878f2ff731904"],["D:/My_Blog/public/2020/02/21/LeetCode-69-x的平方根-牛顿迭代法/index.html","95ebdb56947e7a349a9807c733e1e68a"],["D:/My_Blog/public/2020/02/21/LeetCode-70-爬楼梯/index.html","79d24e6be9f6cce491f9debefc67df72"],["D:/My_Blog/public/2020/02/21/MISC中图片隐藏文件分离/index.html","7382ebf331bc8ce78c008f5b11368d2b"],["D:/My_Blog/public/2020/02/21/PaperNote-HOLMES：基于可疑信息流的实时APT检测/index.html","18ab095818d1b97b3a6752fcad938164"],["D:/My_Blog/public/2020/02/21/PaperNote-SLEUTH：基于COTS审计数据的实时攻击场景重构/index.html","1d5fd5331dce5b2524de8a44acf868f7"],["D:/My_Blog/public/2020/02/21/PaperNote-分析大量网络流量以进行APT检测/index.html","99439b61444a662ba33d7bad5c12fecc"],["D:/My_Blog/public/2020/02/21/PaperNote-基于高效数据流标记和跟踪的可精炼跨主机攻击调查/index.html","9d40ae58ee5fe549d36de8d08bb9051b"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-requests/index.html","c826b7ce64ab59457618a7b469b8fe08"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-urllib/index.html","bb4281e4649dc25210e0a481bea82078"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-正则表达式/index.html","38d95495dc9abaa4ba8e82f131f89789"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库BeautifulSoup/index.html","0988f193475c4a249d88b5150b52a213"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库XPath/index.html","62fddb00fe3679d95b340f1fac196563"],["D:/My_Blog/public/2020/02/21/Python网络编程-TCP/index.html","2d1c1b84d11bdcc8b3e441b9588b7a06"],["D:/My_Blog/public/2020/02/21/Python网络编程-UDP/index.html","08043d2d5747af0bd327f6967865d883"],["D:/My_Blog/public/2020/02/21/SUCTF-Checkin/index.html","41c450cebc6b0b15dc21bd2eb107913b"],["D:/My_Blog/public/2020/02/21/Web安全之文件上传漏洞/index.html","fac25cbff8dd011907951aa29558e602"],["D:/My_Blog/public/2020/02/21/Web安全之文件包含漏洞/index.html","f13e3965bac6c726d7a8f88d20ee9675"],["D:/My_Blog/public/2020/02/21/X-Forwarded-For和Referer/index.html","aef5164f2105b2fec0633fe23693673c"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level1-10/index.html","73c53b534d1728f57bcd2ef55d0f2cdd"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level11-20/index.html","13e5af34c6588ab3819168de5cd2b14d"],["D:/My_Blog/public/2020/02/21/zip格式和zip伪加密/index.html","801ec74f423ee6f1314886afbb870631"],["D:/My_Blog/public/2020/02/21/《机器学习与安全》读书笔记/index.html","c813aa03cc7009333fc090251d46ba10"],["D:/My_Blog/public/2020/02/21/十分钟入门Pandas/index.html","b150854d844214b6f9c39a0e722ab919"],["D:/My_Blog/public/2020/02/21/栅栏密码/index.html","b048c290e7f35bcc82f698c6b4a9a83d"],["D:/My_Blog/public/2020/02/21/神经网络的数据表示-张量Tensor/index.html","b067ba89a2c71090b254aedc1eab66c8"],["D:/My_Blog/public/2020/02/21/记深信服2018秋季校园招聘-技术服务工程师/index.html","29cc2359ef8e8600f21030ce0bb98b4c"],["D:/My_Blog/public/2020/02/21/读书-《叫魂-1768年中国妖术大恐慌》/index.html","5126d7211c11a59fcb982cd5cabb6e7f"],["D:/My_Blog/public/2020/02/21/读书-《许三观卖血记》/index.html","8bc9fc65676b47aec00d61b90eac958a"],["D:/My_Blog/public/2020/02/26/PaperNote-一种情报驱动的安全感知APT防御机制/index.html","579ad059000df459ed562102d4a77842"],["D:/My_Blog/public/2020/03/05/PaperNote-基于时空特征融合的入侵检测系统模型/index.html","9c0ab5284ce517a790e2ef4204c28fab"],["D:/My_Blog/public/2020/03/14/PaperNote-UNICORN：基于Provenance的实时APT检测器/index.html","5927fd3cd358eceb4132bafeb42b4744"],["D:/My_Blog/public/2020/03/19/《网络安全态势感知》读书笔记/index.html","6d9fbf433171a518bb323a31724dad7a"],["D:/My_Blog/public/about/index.html","6bd84b39a8fa948bdd799297aa60eb2f"],["D:/My_Blog/public/archives/2020/02/index.html","8683f796d3143f9be15721b36aab73dd"],["D:/My_Blog/public/archives/2020/02/page/2/index.html","44d4847e21043b87c3357ed7b4105d14"],["D:/My_Blog/public/archives/2020/02/page/3/index.html","b7bf6f9cc5b48bde3c68f5326e0db922"],["D:/My_Blog/public/archives/2020/02/page/4/index.html","4e1518c915253167cbc6d3defb02f369"],["D:/My_Blog/public/archives/2020/03/index.html","8c7f794f40fbd7ea09e05ce17ecaeba3"],["D:/My_Blog/public/archives/2020/index.html","59ce52af30f18621923ee4916da1b2f6"],["D:/My_Blog/public/archives/2020/page/2/index.html","61357a7a97be248d7370e47a70f886ad"],["D:/My_Blog/public/archives/2020/page/3/index.html","59c546ad2772311e028d212c8c4e2492"],["D:/My_Blog/public/archives/2020/page/4/index.html","eee6612d9a6a4ac6c020a0ce30dc4c5b"],["D:/My_Blog/public/archives/index.html","e1be095a8f1bb1e12c17fdb09ac3ceac"],["D:/My_Blog/public/archives/page/2/index.html","5162873e3967afd57ac32f0ec2edc144"],["D:/My_Blog/public/archives/page/3/index.html","803e5fd6be929ac37ac7687ae3e296e5"],["D:/My_Blog/public/archives/page/4/index.html","d9953465f37e41cab0f8d52135de4964"],["D:/My_Blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/My_Blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/My_Blog/public/categories/AI/index.html","6c017c37837b8dade9e8b55767de9810"],["D:/My_Blog/public/categories/LeetCode/index.html","d6fbe533b0a35afa0331d550d30de11b"],["D:/My_Blog/public/categories/MISC/index.html","9b9ddb45f992863ef65bce4bb9f8564d"],["D:/My_Blog/public/categories/Python/index.html","b583461d843ad0471a773ef9531a1552"],["D:/My_Blog/public/categories/Web安全/index.html","06432ef5338ec770f84e3b54937a6e81"],["D:/My_Blog/public/categories/Web安全/page/2/index.html","496fbf25ef2a085b37342351575312cf"],["D:/My_Blog/public/categories/index.html","dac35ca51287910a8238a6fa2ef4085e"],["D:/My_Blog/public/categories/安全数据科学/index.html","e8d19b11ce05bf7b26209150762351f7"],["D:/My_Blog/public/categories/安全数据科学/读书/index.html","e8684ed065cfb2fd1345f0d811253f01"],["D:/My_Blog/public/categories/密码学/index.html","3dae7f41a1f9e04a729f043062dd40ae"],["D:/My_Blog/public/categories/杂谈/index.html","3049d2041b1ff1481bd9b02b2faf224c"],["D:/My_Blog/public/categories/科研/index.html","0dfc16f468459b1bedb8aaeabecf4963"],["D:/My_Blog/public/categories/网络基础/index.html","a260fa0d84c0003a6ef4d49412ccb801"],["D:/My_Blog/public/categories/读书/index.html","2aaee07a447b17a14322f286136c97c9"],["D:/My_Blog/public/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["D:/My_Blog/public/css/index.css","1a8770d4815f16850f60f9989c73e11e"],["D:/My_Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/My_Blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/My_Blog/public/index.html","89920e4dba646e6cade74f96c354856f"],["D:/My_Blog/public/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["D:/My_Blog/public/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["D:/My_Blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/My_Blog/public/js/head.js","347edd99f8e3921b45fa617e839d8182"],["D:/My_Blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["D:/My_Blog/public/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["D:/My_Blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/My_Blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/My_Blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/My_Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/My_Blog/public/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["D:/My_Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/My_Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/My_Blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/My_Blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/My_Blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/My_Blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/My_Blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/My_Blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/My_Blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/My_Blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/My_Blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/My_Blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/My_Blog/public/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["D:/My_Blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/My_Blog/public/page/2/index.html","ad51a0fdcf80bad310e3061e87af544c"],["D:/My_Blog/public/page/3/index.html","1a8a7e3f7b4e97b62e2ad9a4c9fe4254"],["D:/My_Blog/public/page/4/index.html","38222b65de43d33e7aa96c3e7c22ce2f"],["D:/My_Blog/public/tags/AI/index.html","ef9c3aea7a030f9a77bcd85e064f5385"],["D:/My_Blog/public/tags/APT/index.html","f3a6a07228c3ae3c1f0233aad0867cbc"],["D:/My_Blog/public/tags/LeetCode/index.html","e881841242e1f956948a36cf1f25bc7e"],["D:/My_Blog/public/tags/MISC/index.html","32e089a4ca9a09f67259081ee23c6183"],["D:/My_Blog/public/tags/Python/index.html","be017d00893313b752d3016dd6a59dc8"],["D:/My_Blog/public/tags/Web安全/index.html","8bbbf5b0a66fa0705bc92a7c48c9aafc"],["D:/My_Blog/public/tags/Web安全/page/2/index.html","9fe32a4d49f6ffc06a16af029ab65421"],["D:/My_Blog/public/tags/index.html","c0e57db9dbc6bd28c7078620a53de45e"],["D:/My_Blog/public/tags/入侵检测/index.html","b7f559038c6cf5adc9951d418fffe450"],["D:/My_Blog/public/tags/安全数据科学/index.html","1ffcc2940c986d1419d267d8952f89bf"],["D:/My_Blog/public/tags/密码学/index.html","332d8e9102b52d64e83f06365adabc59"],["D:/My_Blog/public/tags/态势感知/index.html","e1c60538459aae4554de35d4c4b46847"],["D:/My_Blog/public/tags/杂谈/index.html","72605b22ccdecede602ae6e7c73408ff"],["D:/My_Blog/public/tags/爬虫/index.html","c013b2d116ced91216d1eed4e4a8b124"],["D:/My_Blog/public/tags/神经网络/index.html","1e0b861657b411d4312b583f1266c600"],["D:/My_Blog/public/tags/科研/index.html","874fb87fd15dfd2c7bbc9a6d21de7ef2"],["D:/My_Blog/public/tags/网络基础/index.html","fd3625a6a09188599bbbc2accb3327fa"],["D:/My_Blog/public/tags/读书/index.html","ffc1156ad33350fb6d7010dcf3ed3c6c"]];
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







