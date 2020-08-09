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

var precacheConfig = [["D:/My_Blog/public/1231489.png","649e11b9d2b015e1e36ca0204fb43eec"],["D:/My_Blog/public/2020/02/21/DVWA-CSRF/index.html","e352c8a51d5b923d1cd17c3628bc1e24"],["D:/My_Blog/public/2020/02/21/DVWA-SQL注入/index.html","a43a1f2aba3fce4bb67ea5ed3178974d"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-DOM/index.html","0ffcff9b254b78c9ba04ce4aac6db6fe"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Reflected/index.html","80186e93994653112be66bc282ceffdd"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Stored/index.html","1f61a45e1a4a35ad399fe96332248f1d"],["D:/My_Blog/public/2020/02/21/DVWA下利用XSS获取Cookie/index.html","00a6a96bdf9b6ce54943e75a32c155b4"],["D:/My_Blog/public/2020/02/21/LeetCode-14-最长公共前缀/index.html","af6d30fe68237704fcc6351a8533a0eb"],["D:/My_Blog/public/2020/02/21/LeetCode-53-最大子序和-动态规划法/index.html","0b179515a136c5bb2ddedc71f4632b4b"],["D:/My_Blog/public/2020/02/21/LeetCode-69-x的平方根-牛顿迭代法/index.html","8c55477391c50ffba0fdbf7210ba0d15"],["D:/My_Blog/public/2020/02/21/LeetCode-70-爬楼梯/index.html","6b64ed594b0f290e11780e41aec8c458"],["D:/My_Blog/public/2020/02/21/MISC中图片隐藏文件分离/index.html","3de056e8bcefdc590db0f21d5aa017d8"],["D:/My_Blog/public/2020/02/21/PaperNote-HOLMES：基于可疑信息流的实时APT检测/index.html","5e6c00f0362879b854f0a6f83332d373"],["D:/My_Blog/public/2020/02/21/PaperNote-SLEUTH：基于COTS审计数据的实时攻击场景重构/index.html","c43e756295699f87e51089e5a093ed11"],["D:/My_Blog/public/2020/02/21/PaperNote-分析大量网络流量以进行APT检测/index.html","80ecae480ae49a0e439e7375a5f12e2a"],["D:/My_Blog/public/2020/02/21/PaperNote-基于高效数据流标记和跟踪的可精炼跨主机攻击调查/index.html","d86bd25d99913acf314303443c32da44"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-requests/index.html","4eb6797fd65d0f73c41423302c63debf"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-urllib/index.html","6b5d5863e88c43b2911533d5a459b1ca"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-正则表达式/index.html","b920fb47f20571fcecd25d2c7d169168"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库BeautifulSoup/index.html","fef7a94fa5cf186a05133d9d5c4f0e17"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库XPath/index.html","1ebdd3147c07f7532493e8ed2d678089"],["D:/My_Blog/public/2020/02/21/Python网络编程-TCP/index.html","4c75d75f857f4055b7da778ff75e4036"],["D:/My_Blog/public/2020/02/21/Python网络编程-UDP/index.html","97441780c255776100a675853aaae743"],["D:/My_Blog/public/2020/02/21/SUCTF-Checkin/index.html","dac3f2bbff30723e66a0a958cc94d098"],["D:/My_Blog/public/2020/02/21/Web安全之文件上传漏洞/index.html","26b241ae9adb94a3f2a9d912d9e88dcd"],["D:/My_Blog/public/2020/02/21/Web安全之文件包含漏洞/index.html","02d4c26f8c9d18bb2edbbe666fd69bc8"],["D:/My_Blog/public/2020/02/21/X-Forwarded-For和Referer/index.html","3c9351c0d999f2ab781687a5d2a1e6df"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level1-10/index.html","5063813222b1d6f8a3d5d4f934ea0574"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level11-20/index.html","1d2273d7d06e91fe3a9531177ad45509"],["D:/My_Blog/public/2020/02/21/zip格式和zip伪加密/index.html","ea28352358028a8afc446b3e4d93ccab"],["D:/My_Blog/public/2020/02/21/《机器学习与安全》读书笔记/index.html","fad3c598ecd76c16a31e657c031178be"],["D:/My_Blog/public/2020/02/21/十分钟入门Pandas/index.html","ff453d47593542009ac4c34d26d01e1d"],["D:/My_Blog/public/2020/02/21/栅栏密码/index.html","3728cc56976b3c5cd6c3923b126a72d3"],["D:/My_Blog/public/2020/02/21/神经网络的数据表示-张量Tensor/index.html","35104004f59b09a6cf9968207c2cf427"],["D:/My_Blog/public/2020/02/21/记深信服2018秋季校园招聘-技术服务工程师/index.html","98d11c63b6e03ba7465098b82b68355e"],["D:/My_Blog/public/2020/02/21/读书-《叫魂-1768年中国妖术大恐慌》/index.html","c788ab5aa9dc34bc7a31e6e95a32f845"],["D:/My_Blog/public/2020/02/21/读书-《许三观卖血记》/index.html","51b956af56d3dea308069ef6b582cfda"],["D:/My_Blog/public/2020/02/26/PaperNote-一种情报驱动的安全感知APT防御机制/index.html","961476e58a20d9f84d6acd7c292b49e6"],["D:/My_Blog/public/2020/03/05/PaperNote-基于时空特征融合的入侵检测系统模型/index.html","17da23e1ca4c989380dec41b4980f9b1"],["D:/My_Blog/public/2020/03/14/PaperNote-UNICORN：基于Provenance的实时APT检测器/index.html","47ef947528389fe2479c54353676c38b"],["D:/My_Blog/public/2020/03/19/《网络安全态势感知》读书笔记/index.html","c359c07abb5accc6645f5b283730af17"],["D:/My_Blog/public/2020/03/25/PaperNote-Poirot：对比攻击行为与内核审计记录以进行网络威胁猎杀/index.html","16d154b491fc06bec947c5bb3e4097c7"],["D:/My_Blog/public/2020/07/10/OSPF双LSA路由攻击的介绍与实现/index.html","7b81094c291ab9d8b13cd85d196eb5fc"],["D:/My_Blog/public/about/index.html","a3a5add04fdfffed8028b9c4cbb42515"],["D:/My_Blog/public/archives/2020/02/index.html","af8da4558a86f7e88a95271b42370179"],["D:/My_Blog/public/archives/2020/02/page/2/index.html","f074f3d8cdd62cfae5b3a8a6acfd6215"],["D:/My_Blog/public/archives/2020/02/page/3/index.html","2a943df12ed6ef822ce59739b6056b95"],["D:/My_Blog/public/archives/2020/02/page/4/index.html","d1ca61390aa9bc773c61b5d5e5308307"],["D:/My_Blog/public/archives/2020/03/index.html","382f1ed58912cfb01aeb44aaa6cd2e0f"],["D:/My_Blog/public/archives/2020/07/index.html","ba2f97382ba101220209981df9388371"],["D:/My_Blog/public/archives/2020/index.html","ff540a67ff5d5515474aa633f6b03a10"],["D:/My_Blog/public/archives/2020/page/2/index.html","674e8bc6f733df416ac79694f719d0fa"],["D:/My_Blog/public/archives/2020/page/3/index.html","c851d351ee9d5a7fd60a710d8d9e257f"],["D:/My_Blog/public/archives/2020/page/4/index.html","b2e3645b0bb76c7486786130160e61ef"],["D:/My_Blog/public/archives/2020/page/5/index.html","b32e8f1cbf7e52496bf8e5f08ca7666e"],["D:/My_Blog/public/archives/index.html","78c9add789550254d6b702b0fe43590a"],["D:/My_Blog/public/archives/page/2/index.html","84bfa35cf3c0c18de40ffee97ec9c064"],["D:/My_Blog/public/archives/page/3/index.html","880be02638abb117a2eb0f75eb1460f1"],["D:/My_Blog/public/archives/page/4/index.html","2102554daf93928ea0819049d014e3fb"],["D:/My_Blog/public/archives/page/5/index.html","c00f949c169a5539c9342814338eb90b"],["D:/My_Blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/My_Blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/My_Blog/public/categories/AI/index.html","6de275d1506c7b63b76dfcc6927ead55"],["D:/My_Blog/public/categories/LeetCode/index.html","f3eb2c5bdcf8f639e5daa8118f7c35b2"],["D:/My_Blog/public/categories/MISC/index.html","7e5fc48b41ba7cbbe823d203c1b29684"],["D:/My_Blog/public/categories/Python/index.html","bd60234d4561f19fe7f69ba84b8b9e21"],["D:/My_Blog/public/categories/Web安全/index.html","c1470152cb199d49d53e8d167883088f"],["D:/My_Blog/public/categories/Web安全/page/2/index.html","2db53c92c73dfe47a3397e30b0a9a4d6"],["D:/My_Blog/public/categories/index.html","10ce02aff27e1d552eddb36ccc8e18f6"],["D:/My_Blog/public/categories/密码学/index.html","8f6e9c1231f9d740781d01e25f543136"],["D:/My_Blog/public/categories/杂谈/index.html","056a2af076739c642e58190d73d80d8a"],["D:/My_Blog/public/categories/漏洞复现/index.html","a071820c61b0ed0ce9aa4497570ab541"],["D:/My_Blog/public/categories/科研/index.html","55cf43685a8f40030a943b0727ad2f8e"],["D:/My_Blog/public/categories/网络基础/index.html","93e79c980009fd11abe53387856df125"],["D:/My_Blog/public/categories/读书/index.html","d44b4ac2e8a5bb2c06cf2aecb0fe07e3"],["D:/My_Blog/public/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["D:/My_Blog/public/css/index.css","1a8770d4815f16850f60f9989c73e11e"],["D:/My_Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/My_Blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/My_Blog/public/index.html","4ba1bb7bcea5da130b761169d6beb481"],["D:/My_Blog/public/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["D:/My_Blog/public/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["D:/My_Blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/My_Blog/public/js/head.js","347edd99f8e3921b45fa617e839d8182"],["D:/My_Blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["D:/My_Blog/public/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["D:/My_Blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/My_Blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/My_Blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/My_Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/My_Blog/public/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["D:/My_Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/My_Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/My_Blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/My_Blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/My_Blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/My_Blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/My_Blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/My_Blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/My_Blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/My_Blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/My_Blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/My_Blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/My_Blog/public/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["D:/My_Blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/My_Blog/public/page/2/index.html","9e28a35e69f4c300d782a807c442d2f2"],["D:/My_Blog/public/page/3/index.html","bfbe77e6427a8de664b68e9f3f4fc144"],["D:/My_Blog/public/page/4/index.html","b9e4bfb4866ecb67f97aaf076b162889"],["D:/My_Blog/public/page/5/index.html","194b15622d66adb598f6f81b37beb7b1"],["D:/My_Blog/public/tags/AI/index.html","8d2465f0d4c49ec9f1f4710cc346d396"],["D:/My_Blog/public/tags/APT/index.html","d58511a8dd63fe1dfcbd8d9a3dc56f39"],["D:/My_Blog/public/tags/LeetCode/index.html","f3cd563cbfe78fba0d0a6474239dd048"],["D:/My_Blog/public/tags/MISC/index.html","df4d19df33767805b65493df17c2e942"],["D:/My_Blog/public/tags/Python/index.html","8406cb090815021515fd1aab563c056c"],["D:/My_Blog/public/tags/Web安全/index.html","d4d3e19238b8a218d78147b360867460"],["D:/My_Blog/public/tags/Web安全/page/2/index.html","74336450ac86aca15e59108e281c16ea"],["D:/My_Blog/public/tags/index.html","e21f368353a0b7827be9f8c0b2637ed5"],["D:/My_Blog/public/tags/入侵检测/index.html","24c034ede80c8df0ab7fd6528650a859"],["D:/My_Blog/public/tags/威胁猎杀/index.html","c1046eec4b62e0ae60ceb5d536ac00ea"],["D:/My_Blog/public/tags/安全数据科学/index.html","d578d010887409eae71cebf56b1a8af8"],["D:/My_Blog/public/tags/密码学/index.html","ca69066be4fb3ef12d55496fd7bbda1f"],["D:/My_Blog/public/tags/态势感知/index.html","fef2e164ba33466c5c69b96ea22a669a"],["D:/My_Blog/public/tags/杂谈/index.html","0792ac9b61cd40631f6984ba81db5fbd"],["D:/My_Blog/public/tags/爬虫/index.html","da0bdfe8b2a2f368f6719f69d13075c3"],["D:/My_Blog/public/tags/神经网络/index.html","ff667a0ad1acbc8075209b96811bcfbe"],["D:/My_Blog/public/tags/科研/index.html","b589ad474582044bdc07b13cf39a56b4"],["D:/My_Blog/public/tags/网络基础/index.html","4584186902de207a59cad8e85f99f590"],["D:/My_Blog/public/tags/读书/index.html","fe329cdf3eaedbc97961fec4b3b06977"],["D:/My_Blog/public/tags/路由攻击/index.html","7e28012d60a1399f726636a5bfabbbed"]];
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







