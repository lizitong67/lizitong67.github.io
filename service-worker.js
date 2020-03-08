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

var precacheConfig = [["D:/My_Blog/public/1231489.png","649e11b9d2b015e1e36ca0204fb43eec"],["D:/My_Blog/public/2020/02/21/DVWA-CSRF/index.html","3a8bfca0fee526d7836bd6c1e17f63c5"],["D:/My_Blog/public/2020/02/21/DVWA-SQL注入/index.html","02ee382bc32bafb7f001463ac50794c7"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-DOM/index.html","8b57d1834ac85249beabbc340e8953fc"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Reflected/index.html","92258b531bd1810b2129508fcbefcf43"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Stored/index.html","b2b22f53e639d7f3d7ab9f0428622ec8"],["D:/My_Blog/public/2020/02/21/DVWA下利用XSS获取Cookie/index.html","b4ba45736647c3954520413a0ecd7a73"],["D:/My_Blog/public/2020/02/21/LeetCode-14-最长公共前缀/index.html","4295cda48852071ea9e4ee0fa645c60a"],["D:/My_Blog/public/2020/02/21/LeetCode-53-最大子序和-动态规划法/index.html","008462bd6d243b6bb51c3422412365b9"],["D:/My_Blog/public/2020/02/21/LeetCode-69-x的平方根-牛顿迭代法/index.html","c2af338a2562e4faced3f896a9471c19"],["D:/My_Blog/public/2020/02/21/LeetCode-70-爬楼梯/index.html","2f48fcaa557c3f9623ead9f246dcfb62"],["D:/My_Blog/public/2020/02/21/MISC中图片隐藏文件分离/index.html","544bd59c583abeaa86300ee2d2eb6b68"],["D:/My_Blog/public/2020/02/21/PaperNote-HOLMES：基于可疑信息流的实时APT检测/index.html","1075f7e40635a4accbbe6d5664e8893d"],["D:/My_Blog/public/2020/02/21/PaperNote-SLEUTH：基于COTS审计数据的实时攻击场景重构/index.html","c0c379cb600771fecb373218f1bf730a"],["D:/My_Blog/public/2020/02/21/PaperNote-分析大量网络流量以进行APT检测/index.html","cfc98412872c0ee656004734a7b1608d"],["D:/My_Blog/public/2020/02/21/PaperNote-基于高效数据流标记和跟踪的可精炼跨主机攻击调查/index.html","36e285cb84679b71f1150919042bd61b"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-requests/index.html","f17cab42e9fd8b57963860d13c1fcb3f"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-urllib/index.html","a1e3d1cbb514babf4a909946b7745174"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-正则表达式/index.html","2b90e69c390e1f5543ccd48c903bfd9d"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库BeautifulSoup/index.html","3da6927451075c8dfc9c45d50820b5ae"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库XPath/index.html","3457edc3599fb52df458fc76577179df"],["D:/My_Blog/public/2020/02/21/Python网络编程-TCP/index.html","67187e79c6852094da1dcfee9232075e"],["D:/My_Blog/public/2020/02/21/Python网络编程-UDP/index.html","db9d43cc4442c747eed07cc8e3511613"],["D:/My_Blog/public/2020/02/21/SUCTF-Checkin/index.html","e823b141cf58a2fbdcd57ccf2b55ec31"],["D:/My_Blog/public/2020/02/21/Web安全之文件上传漏洞/index.html","cc80dbe23716439b9cdb26a592e64a40"],["D:/My_Blog/public/2020/02/21/Web安全之文件包含漏洞/index.html","726c1f1e9545c8501b28b6e125c4000d"],["D:/My_Blog/public/2020/02/21/X-Forwarded-For和Referer/index.html","7ebf1770a36195cd549529478d6ef1f0"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level1-10/index.html","1a933cf5d08a4472443e9b2d60fcc517"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level11-20/index.html","668ab9150fcff6d6ceed4bf88316816f"],["D:/My_Blog/public/2020/02/21/zip格式和zip伪加密/index.html","05af6f1d99f088adad5942a3ae679c1f"],["D:/My_Blog/public/2020/02/21/《机器学习与安全》读书笔记/index.html","41be5ea706d3aaff66c659f5228e1504"],["D:/My_Blog/public/2020/02/21/十分钟入门Pandas/index.html","25f733bc3647f5eecb0756db36a8c1ea"],["D:/My_Blog/public/2020/02/21/栅栏密码/index.html","192659d4653f9285f3f843fb4096514c"],["D:/My_Blog/public/2020/02/21/神经网络的数据表示-张量Tensor/index.html","3389a98ada3d49796161e2bcbf01cb8d"],["D:/My_Blog/public/2020/02/21/记深信服2018秋季校园招聘-技术服务工程师/index.html","663849d5cb7d8a001fbc8066aa2b53b7"],["D:/My_Blog/public/2020/02/21/读书-《叫魂-1768年中国妖术大恐慌》/index.html","d623126cb69c789e773650e87e21c558"],["D:/My_Blog/public/2020/02/21/读书-《许三观卖血记》/index.html","371b57f4ac3d0498ee5f7d7934eec653"],["D:/My_Blog/public/2020/02/26/PaperNote-一种情报驱动的安全感知APT防御机制/index.html","e603bd8246f035168b225df35b663fe7"],["D:/My_Blog/public/2020/03/05/PaperNote-基于时空特征融合的入侵检测系统模型/index.html","a3f4f250142fababc14402645ae8c663"],["D:/My_Blog/public/about/index.html","c9c4ff48e68d53d0407dbda68e7e4240"],["D:/My_Blog/public/archives/2020/02/index.html","b2bcac48b9b62ae5fa3a38d3f41f0988"],["D:/My_Blog/public/archives/2020/02/page/2/index.html","e7367860dacf172002fe62c7378162a1"],["D:/My_Blog/public/archives/2020/02/page/3/index.html","fb0c4061e2c2c6da29bffd8128498747"],["D:/My_Blog/public/archives/2020/02/page/4/index.html","ccd396022cd4dcc5869a295e3ca682d7"],["D:/My_Blog/public/archives/2020/03/index.html","0e299585e22135f3fbf03342c3cd8330"],["D:/My_Blog/public/archives/2020/index.html","92d76cc1efa754152913cd571d327b20"],["D:/My_Blog/public/archives/2020/page/2/index.html","5feccfad542f22075d8e9169bce1bf56"],["D:/My_Blog/public/archives/2020/page/3/index.html","dc625613916a771454bfe0f655007fc2"],["D:/My_Blog/public/archives/2020/page/4/index.html","cf6870b75eba08c027352cb50bd981cd"],["D:/My_Blog/public/archives/index.html","7d336043bdc9a25d52467dc18857c174"],["D:/My_Blog/public/archives/page/2/index.html","6ff6f9a489e5b017ba551ba912571011"],["D:/My_Blog/public/archives/page/3/index.html","55c9dc580952661b36f4eb294a3cebb5"],["D:/My_Blog/public/archives/page/4/index.html","ca1e049772d229a93cf073a8ade901d7"],["D:/My_Blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/My_Blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/My_Blog/public/categories/AI/index.html","8a4c928222d4e553919167de42361ee1"],["D:/My_Blog/public/categories/LeetCode/index.html","9caf8efe9a6805e0cdc651ce8e3521fa"],["D:/My_Blog/public/categories/MISC/index.html","6676895301ac5f90bf98f6b0daf0b2e8"],["D:/My_Blog/public/categories/Python/index.html","6ab8eb8c6e5748bc4579d763d00d03c5"],["D:/My_Blog/public/categories/Web安全/index.html","9e15e334fcea7f160e3ec9690480c412"],["D:/My_Blog/public/categories/Web安全/page/2/index.html","d94cb41ada48e084f73b84ead396fc99"],["D:/My_Blog/public/categories/index.html","643ce965855959fb1ea71d1cb0d5f95b"],["D:/My_Blog/public/categories/安全数据科学/index.html","8bfd735842434e892aaba2eb64259bad"],["D:/My_Blog/public/categories/密码学/index.html","2da001ac4674deb2e437de032c1df70b"],["D:/My_Blog/public/categories/杂谈/index.html","77fd0f2507047a28b1938efd95d80e05"],["D:/My_Blog/public/categories/科研/index.html","6bebcdba32f478888057d4f30b18b28b"],["D:/My_Blog/public/categories/网络基础/index.html","bbca09f368073c7e6717909be96e37ea"],["D:/My_Blog/public/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["D:/My_Blog/public/css/index.css","1a8770d4815f16850f60f9989c73e11e"],["D:/My_Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/My_Blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/My_Blog/public/index.html","d52977a792aa8113f441cae1c73fcb8c"],["D:/My_Blog/public/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["D:/My_Blog/public/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["D:/My_Blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/My_Blog/public/js/head.js","347edd99f8e3921b45fa617e839d8182"],["D:/My_Blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["D:/My_Blog/public/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["D:/My_Blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/My_Blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/My_Blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/My_Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/My_Blog/public/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["D:/My_Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/My_Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/My_Blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/My_Blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/My_Blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/My_Blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/My_Blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/My_Blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/My_Blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/My_Blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/My_Blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/My_Blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/My_Blog/public/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["D:/My_Blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/My_Blog/public/page/2/index.html","84eae2f5b7f571f507c2ac98d109b83d"],["D:/My_Blog/public/page/3/index.html","6f21079e808f231128ae8791f1c655c3"],["D:/My_Blog/public/page/4/index.html","0e8c0025ef419975f227b606694349da"],["D:/My_Blog/public/tags/AI/index.html","ef4116c0a4291c1a8b6343d8d7ad75e1"],["D:/My_Blog/public/tags/APT/index.html","b7ba6aac7141b5c46cea0667c5140414"],["D:/My_Blog/public/tags/LeetCode/index.html","aeaf740170a706658dee5054f883934a"],["D:/My_Blog/public/tags/MISC/index.html","3a105f0d2b9b3ae0ec0e8dc981cae5a2"],["D:/My_Blog/public/tags/Python/index.html","1bd5d0492d4a8aa21b03e41ee1ff8689"],["D:/My_Blog/public/tags/Web安全/index.html","80ed85fa3e2023ffb87171c4a4bd2107"],["D:/My_Blog/public/tags/Web安全/page/2/index.html","d2f1ec8dd8be690a4a3866602cd9dbe6"],["D:/My_Blog/public/tags/index.html","fcec5da1851261265eda435a1ea4780a"],["D:/My_Blog/public/tags/入侵检测/index.html","ebcd77da8c41cc592103bb293121be23"],["D:/My_Blog/public/tags/安全数据科学/index.html","c2233d377f6c4dbd754789645dcee871"],["D:/My_Blog/public/tags/密码学/index.html","74a1301a11c121d29c67a6a26c17410e"],["D:/My_Blog/public/tags/杂谈/index.html","b5b77931ecaf293843e08545cb425555"],["D:/My_Blog/public/tags/爬虫/index.html","2e21b39e85496e9d0172861411cf37d7"],["D:/My_Blog/public/tags/神经网络/index.html","a37fc1fdd9391e18785cafed7055bc91"],["D:/My_Blog/public/tags/科研/index.html","1ec6a4c21a97909cdca023f8dc19fe47"],["D:/My_Blog/public/tags/网络基础/index.html","b2838ffd2cf9db94be38cf224baecf7e"],["D:/My_Blog/public/tags/读书/index.html","a519b2810849dda287a0e4c7bfe3ecc4"]];
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







