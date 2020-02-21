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

var precacheConfig = [["D:/My_Blog/public/2020/02/21/DVWA-CSRF/index.html","6c23a2ef41c1683dda3067e8c220032d"],["D:/My_Blog/public/2020/02/21/DVWA-SQL注入/index.html","7e045184da69f300fa2e94bb8deb3b89"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-DOM/index.html","f69d1498ee2139fdbc4c0df9ca913d61"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Reflected/index.html","3933c6d087025b380aba48f583fff8ba"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Stored/index.html","7e1db5c7f36de2430a719fe90b72b332"],["D:/My_Blog/public/2020/02/21/DVWA下利用XSS获取Cookie/index.html","f838cce495ad0c311973049379e561fc"],["D:/My_Blog/public/2020/02/21/LeetCode-14-最长公共前缀/index.html","dd81f0a0a9058bc84322a0b28786e88d"],["D:/My_Blog/public/2020/02/21/LeetCode-53-最大子序和-动态规划法/index.html","aab3eab8942d1cc1550e647e01ed8631"],["D:/My_Blog/public/2020/02/21/LeetCode-69-x的平方根-牛顿迭代法/index.html","1ce20806477c05a74e3f06bfba0bdbe5"],["D:/My_Blog/public/2020/02/21/LeetCode-70-爬楼梯/index.html","af4df49bef2a79cb6aec836b267cda7b"],["D:/My_Blog/public/2020/02/21/MISC中图片隐藏文件分离/index.html","13d3db18ffbcaa3329a872f966acfc6a"],["D:/My_Blog/public/2020/02/21/PaperNote-HOLMES：基于可疑信息流的实时APT检测/index.html","319357f51fc941e4ce9cab56b0847ffa"],["D:/My_Blog/public/2020/02/21/PaperNote-SLEUTH：基于COTS审计数据的实时攻击场景重构/index.html","272ca72bafcb755d05bf51c23186e13b"],["D:/My_Blog/public/2020/02/21/PaperNote-分析大量网络流量以进行APT检测/index.html","ce57d29441cca06838f3038ca6925273"],["D:/My_Blog/public/2020/02/21/PaperNote-基于高效数据流标记和跟踪的可精炼跨主机攻击调查/index.html","e4d01e6b8ca7487de9b64f1cfd573dd0"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-requests/index.html","55d5e7dcff6ab14f716296626eb59472"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-urllib/index.html","c2f13ae475bbc4f7bf4f674ce67bab8d"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-正则表达式/index.html","023252bd5d6c37af598d91a95a33963b"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库BeautifulSoup/index.html","2c53e8cd1c98ce5f3c7a125c5da8f54e"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库XPath/index.html","a83f786ead3a177bbc5714dc3097c84e"],["D:/My_Blog/public/2020/02/21/Python网络编程-TCP/index.html","23c0e14dc61ab73cd00a3c4ed1d20f6e"],["D:/My_Blog/public/2020/02/21/Python网络编程-UDP/index.html","656f9654b9041d4d888e005e177e95bd"],["D:/My_Blog/public/2020/02/21/SUCTF-Checkin/index.html","64ca0f821ae6e0969b2db9c27129f45f"],["D:/My_Blog/public/2020/02/21/Web安全之文件上传漏洞/index.html","9a784b0821a2fc4368ee8633f5eb220c"],["D:/My_Blog/public/2020/02/21/Web安全之文件包含漏洞/index.html","2196c9328e1fe014b652c71d9c11f158"],["D:/My_Blog/public/2020/02/21/X-Forwarded-For和Referer/index.html","e150e2c762e92d44baa598323c8223ba"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level1-10/index.html","e0c2357ff7417882fd537d8dd88b461e"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level11-20/index.html","24ff2acd34967fd2de7421f66e705746"],["D:/My_Blog/public/2020/02/21/zip格式和zip伪加密/index.html","e05b30b9a9d52aed10b13c79cf5bc099"],["D:/My_Blog/public/2020/02/21/《机器学习与安全》读书笔记/index.html","ee9d02339dfa38bd09786a24ec387e01"],["D:/My_Blog/public/2020/02/21/十分钟入门Pandas/index.html","f283764296207be9901f93a12a3d0349"],["D:/My_Blog/public/2020/02/21/基于知识图谱的APT组织追踪治理/index.html","57a3e15fd71ad44d4f8be68facc95e66"],["D:/My_Blog/public/2020/02/21/栅栏密码/index.html","be5352741a6226907fcaa06bf466db5f"],["D:/My_Blog/public/2020/02/21/神经网络的数据表示-张量Tensor/index.html","6a0c4e43e4e0297b3f39498ce6505521"],["D:/My_Blog/public/2020/02/21/记深信服2018秋季校园招聘-技术服务工程师/index.html","bdf31dce96c3164b723f9b1b9e216fef"],["D:/My_Blog/public/2020/02/21/读书-《叫魂-1768年中国妖术大恐慌》/index.html","fe58b131b1f9bdb6cb04ccee469238ee"],["D:/My_Blog/public/2020/02/21/读书-《许三观卖血记》/index.html","b56d7ee24193ca85ef19f13c574fd195"],["D:/My_Blog/public/archives/2020/02/index.html","95041440100657048040ea6a3ee8825f"],["D:/My_Blog/public/archives/2020/02/page/2/index.html","57d597b62c2cd67933e9ff21ca7602ff"],["D:/My_Blog/public/archives/2020/02/page/3/index.html","f8780b417be33b6dc57d7f48e78040b0"],["D:/My_Blog/public/archives/2020/02/page/4/index.html","b7935cf78236013fa6170ee208e18840"],["D:/My_Blog/public/archives/2020/index.html","2c54bdd4ae7aba19ea0600322696a836"],["D:/My_Blog/public/archives/2020/page/2/index.html","a85bd6a47ab62a6f4d033e5a209723ef"],["D:/My_Blog/public/archives/2020/page/3/index.html","14a3b312ddac7ffdbe487f0468b240f2"],["D:/My_Blog/public/archives/2020/page/4/index.html","c8abb218adfe756218f3446093317ea6"],["D:/My_Blog/public/archives/index.html","d0f5c2edafb26bd7f7c0da1d8d008042"],["D:/My_Blog/public/archives/page/2/index.html","d68517ee3656932266eeedf3b7673a33"],["D:/My_Blog/public/archives/page/3/index.html","6edaae0cc1609624492e860279f3e403"],["D:/My_Blog/public/archives/page/4/index.html","ede577776d770e675247d1ae85d2b1fb"],["D:/My_Blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/My_Blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/My_Blog/public/categories/index.html","09c36ab9140f51193bdb4bd08de95b36"],["D:/My_Blog/public/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["D:/My_Blog/public/css/index.css","4c6dc3784f2fb2e02e3179de59611949"],["D:/My_Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/My_Blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/My_Blog/public/index.html","3a84d8cf2bcaf01211967f75ff199497"],["D:/My_Blog/public/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["D:/My_Blog/public/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["D:/My_Blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/My_Blog/public/js/head.js","347edd99f8e3921b45fa617e839d8182"],["D:/My_Blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["D:/My_Blog/public/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["D:/My_Blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/My_Blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/My_Blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/My_Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/My_Blog/public/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["D:/My_Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/My_Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/My_Blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/My_Blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/My_Blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/My_Blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/My_Blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/My_Blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/My_Blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/My_Blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/My_Blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/My_Blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/My_Blog/public/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["D:/My_Blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/My_Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/My_Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/My_Blog/public/page/2/index.html","f7a3c883d605b403d2874cdea11c4a99"],["D:/My_Blog/public/page/3/index.html","1e1038a4fb6f760de112dbd3bb40ec50"],["D:/My_Blog/public/page/4/index.html","29c727042330aa5ab31950f8e0e08f74"],["D:/My_Blog/public/tags/AI/index.html","9fca6576f5c6439ea1b2ee0d944193ea"],["D:/My_Blog/public/tags/APT/index.html","e6aa14065185e879cb6fed320c463b2c"],["D:/My_Blog/public/tags/LeetCode/index.html","ed3b72227793be768d07f208b59c3811"],["D:/My_Blog/public/tags/MISC/index.html","f9269e9879a4a114f823cd6bb20db0ce"],["D:/My_Blog/public/tags/Python/index.html","057c8d6139d50117388f3ede8cc73c1e"],["D:/My_Blog/public/tags/Web安全/index.html","f44e2ad6b10641999a9cef81200079c7"],["D:/My_Blog/public/tags/Web安全/page/2/index.html","bc4d9b948c5674891e576f6f854f5d0f"],["D:/My_Blog/public/tags/index.html","68a82d0f6f08cdce5a1dd21d81e8d661"],["D:/My_Blog/public/tags/安全数据科学/index.html","39efdcf6ac4040b3461c6360f8adb1f7"],["D:/My_Blog/public/tags/密码学/index.html","9afd72defe76b2e81675f93f64be89d7"],["D:/My_Blog/public/tags/杂谈/index.html","92459616a13dccb86d472dd1d2448dd5"],["D:/My_Blog/public/tags/科研/index.html","bb894331ee880007c1f168ca2736597b"],["D:/My_Blog/public/tags/网络基础/index.html","0cacf53bc52a9defef2f9807d24522c4"]];
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







