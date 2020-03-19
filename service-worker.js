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

var precacheConfig = [["D:/My_Blog/public/1231489.png","649e11b9d2b015e1e36ca0204fb43eec"],["D:/My_Blog/public/2020/02/21/DVWA-CSRF/index.html","ade1c524c68f4fa74b6cb7be8732506a"],["D:/My_Blog/public/2020/02/21/DVWA-SQL注入/index.html","eb7c76afca45b4930ac686e6d9fe04f7"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-DOM/index.html","4b00e7e98de9da791669d11c87c383e7"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Reflected/index.html","1821a2d6fcd7b3f6151e4bbb68a49708"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Stored/index.html","9ff815fb13a2c00b3409a314383cdcdc"],["D:/My_Blog/public/2020/02/21/DVWA下利用XSS获取Cookie/index.html","f93dfdebd66f47c99ed377cdf976e846"],["D:/My_Blog/public/2020/02/21/LeetCode-14-最长公共前缀/index.html","49d8f5fffca78f2cea0f7eb79b31d104"],["D:/My_Blog/public/2020/02/21/LeetCode-53-最大子序和-动态规划法/index.html","d639f9398a697aea3a794ae10c444684"],["D:/My_Blog/public/2020/02/21/LeetCode-69-x的平方根-牛顿迭代法/index.html","902dfad29578499cb53dfa493c77fa1b"],["D:/My_Blog/public/2020/02/21/LeetCode-70-爬楼梯/index.html","4cb037e9a593aa810367552a7a6c39c8"],["D:/My_Blog/public/2020/02/21/MISC中图片隐藏文件分离/index.html","4a489695bd05d0aab2954e6ee2607fcb"],["D:/My_Blog/public/2020/02/21/PaperNote-HOLMES：基于可疑信息流的实时APT检测/index.html","5d0a1337e0db42d2ddbc676882209003"],["D:/My_Blog/public/2020/02/21/PaperNote-SLEUTH：基于COTS审计数据的实时攻击场景重构/index.html","ce19f0b9077ed6acd16cb6b6db6a6ee3"],["D:/My_Blog/public/2020/02/21/PaperNote-分析大量网络流量以进行APT检测/index.html","9a8f9514b92386428b6b92046e4de0d0"],["D:/My_Blog/public/2020/02/21/PaperNote-基于高效数据流标记和跟踪的可精炼跨主机攻击调查/index.html","407f2b28b483c536141b682a10063150"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-requests/index.html","b776598586be64e64631871aaf4c244e"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-urllib/index.html","5bd1efdc5361ac6d2bdd701a033afcb7"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-正则表达式/index.html","a4d815b00926d8f2c8693ae22e0d93ce"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库BeautifulSoup/index.html","10ea59acaf0ce8381b76387a44ba2708"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库XPath/index.html","d6d76d950e555061def3d7b0b98a96c0"],["D:/My_Blog/public/2020/02/21/Python网络编程-TCP/index.html","11f3569a497185957e2326c06e42a19f"],["D:/My_Blog/public/2020/02/21/Python网络编程-UDP/index.html","0fd8b8c728a5154cfe5c5326e8bbbc90"],["D:/My_Blog/public/2020/02/21/SUCTF-Checkin/index.html","b2e700e80b30349a4b21173771d49a2c"],["D:/My_Blog/public/2020/02/21/Web安全之文件上传漏洞/index.html","49f62312636cccdfa40fc4de56dd5b34"],["D:/My_Blog/public/2020/02/21/Web安全之文件包含漏洞/index.html","55337e6c6f96c2117cc3c7092ff49365"],["D:/My_Blog/public/2020/02/21/X-Forwarded-For和Referer/index.html","0fdf7703db14aa26a01470e316b00cfc"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level1-10/index.html","fa3c15329a6f084cdfdb9f81b01bbc48"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level11-20/index.html","e8dc9ac6d21d163dc06be03d1220b333"],["D:/My_Blog/public/2020/02/21/zip格式和zip伪加密/index.html","fd0632e1d855bb79a44d91509ffc760f"],["D:/My_Blog/public/2020/02/21/《机器学习与安全》读书笔记/index.html","3bfe3ea1c66e153fc2e78ca2ec410c33"],["D:/My_Blog/public/2020/02/21/十分钟入门Pandas/index.html","8146ab88535f5cd83af0e0058f06bdc7"],["D:/My_Blog/public/2020/02/21/栅栏密码/index.html","7d7c220886c4e05f7c224f92befe6667"],["D:/My_Blog/public/2020/02/21/神经网络的数据表示-张量Tensor/index.html","ed1e43efe1b8594aeaae317b27d8b45b"],["D:/My_Blog/public/2020/02/21/记深信服2018秋季校园招聘-技术服务工程师/index.html","511d7ceae591abbe852bed55a130d40b"],["D:/My_Blog/public/2020/02/21/读书-《叫魂-1768年中国妖术大恐慌》/index.html","9fe1ca2a3fc357a0fec798d2fa2d976e"],["D:/My_Blog/public/2020/02/21/读书-《许三观卖血记》/index.html","5dfd280b2c1f5819c0cbcc20f7b7c93a"],["D:/My_Blog/public/2020/02/26/PaperNote-一种情报驱动的安全感知APT防御机制/index.html","14827acb4d9b28b20c8411299e7b9616"],["D:/My_Blog/public/2020/03/05/PaperNote-基于时空特征融合的入侵检测系统模型/index.html","ce19749493a92394e644addbfa9a9702"],["D:/My_Blog/public/2020/03/14/PaperNote-UNICORN：基于Provenance的实时APT检测器/index.html","5af0484391cc5d21869b2a5c63325996"],["D:/My_Blog/public/about/index.html","940fccbd0c4e60f2bde28bb984774405"],["D:/My_Blog/public/archives/2020/02/index.html","77f28ec0b44f52bf17249d1466cad053"],["D:/My_Blog/public/archives/2020/02/page/2/index.html","7842387427112d4981e5b6d7b03b0659"],["D:/My_Blog/public/archives/2020/02/page/3/index.html","7895b5f89cc07ce77cfe5ffa617c0117"],["D:/My_Blog/public/archives/2020/02/page/4/index.html","7380e6d5a1b5a4e4400edb9a31d60ceb"],["D:/My_Blog/public/archives/2020/03/index.html","feae838254ec655037200bdfd8966271"],["D:/My_Blog/public/archives/2020/index.html","fa1d3951c79c01a6531fe640f312ba1f"],["D:/My_Blog/public/archives/2020/page/2/index.html","033b65fdbc1d9df1d1b62e908e613abe"],["D:/My_Blog/public/archives/2020/page/3/index.html","e4c45c1dac0cbbe5914dbe2ba38bcaad"],["D:/My_Blog/public/archives/2020/page/4/index.html","10697a1beea7391f2676603b7c279f8d"],["D:/My_Blog/public/archives/index.html","fc7df6f65796665da6adbbbc50e64e13"],["D:/My_Blog/public/archives/page/2/index.html","9fd31a5e9418213d8d56320c16e3e642"],["D:/My_Blog/public/archives/page/3/index.html","ae5df81439bf9e0a8cd057778a6b12aa"],["D:/My_Blog/public/archives/page/4/index.html","79401ea731c0378fc53bd15dcf86694b"],["D:/My_Blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/My_Blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/My_Blog/public/categories/AI/index.html","21733ccbbbaa6e3ba8af14fd9e149e83"],["D:/My_Blog/public/categories/LeetCode/index.html","c2fb5d72e013c2fe19b0278e5c937446"],["D:/My_Blog/public/categories/MISC/index.html","00c837e851fc43b511dbda1e3939c7f0"],["D:/My_Blog/public/categories/Python/index.html","56e9fdf1dba83977f3d0e8be9bbc693c"],["D:/My_Blog/public/categories/Web安全/index.html","ca7663ec3a77480e95331d051b2e0a2f"],["D:/My_Blog/public/categories/Web安全/page/2/index.html","7e536e09cc33cc61fd8ed91f8a8858ef"],["D:/My_Blog/public/categories/index.html","4bec0b6fb6a255e2283b29a3afae7209"],["D:/My_Blog/public/categories/安全数据科学/index.html","c14b8a0daa09b86604b4ed553c3bf799"],["D:/My_Blog/public/categories/密码学/index.html","bdf15907dd973b050d681e0edece735a"],["D:/My_Blog/public/categories/杂谈/index.html","75eb426d11529d957edfe981e7de4c1c"],["D:/My_Blog/public/categories/科研/index.html","712bfacb435c779648375c9c253f4f22"],["D:/My_Blog/public/categories/网络基础/index.html","3c68e441366c715af64b1748fe9bfb80"],["D:/My_Blog/public/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["D:/My_Blog/public/css/index.css","1a8770d4815f16850f60f9989c73e11e"],["D:/My_Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/My_Blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/My_Blog/public/index.html","dc1d1eb50aa40500eeaf47982a3e9af9"],["D:/My_Blog/public/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["D:/My_Blog/public/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["D:/My_Blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/My_Blog/public/js/head.js","347edd99f8e3921b45fa617e839d8182"],["D:/My_Blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["D:/My_Blog/public/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["D:/My_Blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/My_Blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/My_Blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/My_Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/My_Blog/public/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["D:/My_Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/My_Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/My_Blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/My_Blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/My_Blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/My_Blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/My_Blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/My_Blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/My_Blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/My_Blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/My_Blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/My_Blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/My_Blog/public/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["D:/My_Blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/My_Blog/public/page/2/index.html","c20f3111b75f7b0a36af1cc07080a3bb"],["D:/My_Blog/public/page/3/index.html","15503993c95ac93356f38270d3d927ca"],["D:/My_Blog/public/page/4/index.html","f3fc6ae6fc168386b3db380cc9dd9216"],["D:/My_Blog/public/tags/AI/index.html","c759ad9071a4eb8f684f56d232d56b9b"],["D:/My_Blog/public/tags/APT/index.html","f14ff5dfc471a0ba5899e88cd1def68f"],["D:/My_Blog/public/tags/LeetCode/index.html","5f64c71207ab81ebc97fd714c0d600b1"],["D:/My_Blog/public/tags/MISC/index.html","54f2cf9716a72074ca767864015773fd"],["D:/My_Blog/public/tags/Python/index.html","8924c9bfb12a71c1ca9c5972e589481a"],["D:/My_Blog/public/tags/Web安全/index.html","34dd6c0dc851ba32fad4eb31ec2a5999"],["D:/My_Blog/public/tags/Web安全/page/2/index.html","73d0875c56c7bf7bcb21d96343a5232f"],["D:/My_Blog/public/tags/index.html","d9dc86b553ef6cd8fbf7fd307426cec5"],["D:/My_Blog/public/tags/入侵检测/index.html","ccc2a72f3ab4b4676dc07becf031c4d1"],["D:/My_Blog/public/tags/安全数据科学/index.html","22479bd580a8e7db56299120ea2bb323"],["D:/My_Blog/public/tags/密码学/index.html","5639fced619aa351596f0868115e220f"],["D:/My_Blog/public/tags/杂谈/index.html","04409047dc374b823bbfc4b27016c316"],["D:/My_Blog/public/tags/爬虫/index.html","fa720743c9c828565ebf34522824cb61"],["D:/My_Blog/public/tags/神经网络/index.html","fa585d4ad726f30c3e5930751e64ab08"],["D:/My_Blog/public/tags/科研/index.html","6f09c4e80b1096082d944d55c4980c51"],["D:/My_Blog/public/tags/网络基础/index.html","685b86953b39ca074cfb4dd96a249ed6"],["D:/My_Blog/public/tags/读书/index.html","a56e3b24b890428370b80ef0e80b24b7"]];
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







