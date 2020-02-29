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

var precacheConfig = [["D:/My_Blog/public/1231489.png","649e11b9d2b015e1e36ca0204fb43eec"],["D:/My_Blog/public/2020/02/21/DVWA-CSRF/index.html","ed4e7f06e34e188892e7430fc2a384d8"],["D:/My_Blog/public/2020/02/21/DVWA-SQL注入/index.html","a0c6adbd36130caabebc60b3a9a278ea"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-DOM/index.html","ded1308216ddfc2e13e6a22e220ef368"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Reflected/index.html","0c4a061da3c4e99d3a9b66332ffff404"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Stored/index.html","131120fae5bc6ee0f9b1a9e046bd899f"],["D:/My_Blog/public/2020/02/21/DVWA下利用XSS获取Cookie/index.html","6bf392c1b7864013e77d6e4032eaa088"],["D:/My_Blog/public/2020/02/21/LeetCode-14-最长公共前缀/index.html","efbf7557c6fcfe689c53951cc52198ac"],["D:/My_Blog/public/2020/02/21/LeetCode-53-最大子序和-动态规划法/index.html","8e16de95b056ab3aa4b1b53135c48be8"],["D:/My_Blog/public/2020/02/21/LeetCode-69-x的平方根-牛顿迭代法/index.html","f450f1f11e5755e6ff174ee0930b84b9"],["D:/My_Blog/public/2020/02/21/LeetCode-70-爬楼梯/index.html","523db89250505e882885fd293385ba8b"],["D:/My_Blog/public/2020/02/21/MISC中图片隐藏文件分离/index.html","992fab19d57bffa43b2a983413e4eafa"],["D:/My_Blog/public/2020/02/21/PaperNote-HOLMES：基于可疑信息流的实时APT检测/index.html","17f684e7e7d96d46e68a252a50d10cfe"],["D:/My_Blog/public/2020/02/21/PaperNote-SLEUTH：基于COTS审计数据的实时攻击场景重构/index.html","fa50a954b46a781dae48154c3c74da5e"],["D:/My_Blog/public/2020/02/21/PaperNote-分析大量网络流量以进行APT检测/index.html","4ecbb39a92ddbb805315ee0441867c55"],["D:/My_Blog/public/2020/02/21/PaperNote-基于高效数据流标记和跟踪的可精炼跨主机攻击调查/index.html","e94653febc50f2cef9786f5a02c8d960"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-requests/index.html","301d105c54242c38b7b214707d936ead"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-urllib/index.html","32e6b1c1b86115de4c1bbc115a5ebf66"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-正则表达式/index.html","2950f9953ed73092b66e6fea63c1b847"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库BeautifulSoup/index.html","06f80de045a7ba5758696e13aeb09fab"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库XPath/index.html","31d1bf27a3593361bc136e600ceb7c9c"],["D:/My_Blog/public/2020/02/21/Python网络编程-TCP/index.html","34f9da9d8404ad8178ee24c6095d7ed1"],["D:/My_Blog/public/2020/02/21/Python网络编程-UDP/index.html","8a9d6f7329a7c65dd7719145efa58daa"],["D:/My_Blog/public/2020/02/21/SUCTF-Checkin/index.html","9f9235a8902949de22d41ba588b0419d"],["D:/My_Blog/public/2020/02/21/Web安全之文件上传漏洞/index.html","c5a9f1b8a5c075b8637ebea7940b8088"],["D:/My_Blog/public/2020/02/21/Web安全之文件包含漏洞/index.html","9bf4e3a2a29441b82e5ae28837ba35fa"],["D:/My_Blog/public/2020/02/21/X-Forwarded-For和Referer/index.html","6c953dea1297d84d243b07b4c6e943e7"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level1-10/index.html","eefa9c50651d6c9ddccf9298922bc7e4"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level11-20/index.html","5b19dc0971e098940767e42561c40b2c"],["D:/My_Blog/public/2020/02/21/zip格式和zip伪加密/index.html","fd98c83a3912419fa158261b0fc5292b"],["D:/My_Blog/public/2020/02/21/《机器学习与安全》读书笔记/index.html","74dc18bd10803c4f8aa0a18bcc7ff367"],["D:/My_Blog/public/2020/02/21/十分钟入门Pandas/index.html","f85d9cee2e00dcd71d020372e29971d7"],["D:/My_Blog/public/2020/02/21/栅栏密码/index.html","51bef0d2b701e2f1232feedbd19f0744"],["D:/My_Blog/public/2020/02/21/神经网络的数据表示-张量Tensor/index.html","3655aca13ef0096491be0ab1ca21dd9e"],["D:/My_Blog/public/2020/02/21/记深信服2018秋季校园招聘-技术服务工程师/index.html","dd77f66dd658eb2d9e2d1f660337384d"],["D:/My_Blog/public/2020/02/21/读书-《叫魂-1768年中国妖术大恐慌》/index.html","b9cfe90bbdb8ef2d602792e0965cd29c"],["D:/My_Blog/public/2020/02/21/读书-《许三观卖血记》/index.html","2e6e0a5a7e36bc0fc216a9674301b90b"],["D:/My_Blog/public/2020/02/26/PaperNote-一种情报驱动的安全感知APT防御机制/index.html","7e3da16cbcd33491d36410a03d3c5161"],["D:/My_Blog/public/about/index.html","7a26bcb2bf57b7e9acd67d64fee30464"],["D:/My_Blog/public/archives/2020/02/index.html","42ec0c494f7bb6edf991c8dc64288798"],["D:/My_Blog/public/archives/2020/02/page/2/index.html","03a53e40a7bc04842a3c4cb7b4c42121"],["D:/My_Blog/public/archives/2020/02/page/3/index.html","f001e99f0bd580b7cd00858149bc3d29"],["D:/My_Blog/public/archives/2020/02/page/4/index.html","de2580ecf6a7a5449ebf77fc944d5e08"],["D:/My_Blog/public/archives/2020/index.html","4477f56a5cc1c10357017d470cc11033"],["D:/My_Blog/public/archives/2020/page/2/index.html","69882d1ab84f55fad1c2ca85e102bc85"],["D:/My_Blog/public/archives/2020/page/3/index.html","8be1447def70747f59cb816a0fe9e541"],["D:/My_Blog/public/archives/2020/page/4/index.html","28fcff420a2806e7aa66db6bf467b52e"],["D:/My_Blog/public/archives/index.html","754ae03801ea9fa8fd7960f52700a21f"],["D:/My_Blog/public/archives/page/2/index.html","b84914b1bb93bca89f0db0aa5900d90f"],["D:/My_Blog/public/archives/page/3/index.html","bf9f54aaded114397fe2c9d140ca2b94"],["D:/My_Blog/public/archives/page/4/index.html","8acd973c9d9c9705be1a42def3d09a30"],["D:/My_Blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/My_Blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/My_Blog/public/categories/AI/index.html","89fe12bd80a25275e3e8eead811ae309"],["D:/My_Blog/public/categories/LeetCode/index.html","a22a8e33faaacb52bccd2fcc0b07ffa8"],["D:/My_Blog/public/categories/MISC/index.html","27afed0a08de0c096ecbe445fc156370"],["D:/My_Blog/public/categories/Python/index.html","73a96cd398c0afbf955eeba383419b68"],["D:/My_Blog/public/categories/Web安全/index.html","7af8174a5e8db07963e56c2706946383"],["D:/My_Blog/public/categories/Web安全/page/2/index.html","2d892966ae839ba68fa9eea62ea6de88"],["D:/My_Blog/public/categories/index.html","533f70963434873e67d137bc41bb4091"],["D:/My_Blog/public/categories/安全数据科学/index.html","3366e827f26e6a7e14f58c10ba0c2c10"],["D:/My_Blog/public/categories/密码学/index.html","16496558950fbbadeaca0c4e09a684de"],["D:/My_Blog/public/categories/杂谈/index.html","f55de2cca5969a8558097aa02a51e228"],["D:/My_Blog/public/categories/科研/index.html","6691d24551024243f3bce39b2155f64e"],["D:/My_Blog/public/categories/网络基础/index.html","bb2cc4956fe89d585401cc213d3ec37a"],["D:/My_Blog/public/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["D:/My_Blog/public/css/index.css","1a8770d4815f16850f60f9989c73e11e"],["D:/My_Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/My_Blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/My_Blog/public/index.html","ceb3429099ba529578425c4db1016be8"],["D:/My_Blog/public/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["D:/My_Blog/public/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["D:/My_Blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/My_Blog/public/js/head.js","347edd99f8e3921b45fa617e839d8182"],["D:/My_Blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["D:/My_Blog/public/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["D:/My_Blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/My_Blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/My_Blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/My_Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/My_Blog/public/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["D:/My_Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/My_Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/My_Blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/My_Blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/My_Blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/My_Blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/My_Blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/My_Blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/My_Blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/My_Blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/My_Blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/My_Blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/My_Blog/public/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["D:/My_Blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/My_Blog/public/page/2/index.html","1bb7fa983831fa68266aeae1a78f70fb"],["D:/My_Blog/public/page/3/index.html","0a01c00896f07e63b2bc50b6b51c6641"],["D:/My_Blog/public/page/4/index.html","7d7f127a3e12e5cf70a992b166aea1b0"],["D:/My_Blog/public/tags/AI/index.html","574b8439469103e377b20c5584a64d39"],["D:/My_Blog/public/tags/APT/index.html","fa80d8b710b8f2f244f1442e597940e0"],["D:/My_Blog/public/tags/LeetCode/index.html","c2b758a75019f69ee081525361c9c345"],["D:/My_Blog/public/tags/MISC/index.html","1c2db72123d06e2ba57dde447d60618f"],["D:/My_Blog/public/tags/Python/index.html","4b4aa1bc1afa17881fc3d6b421085e2c"],["D:/My_Blog/public/tags/Web安全/index.html","2666879ce5f33ed14cb931093c9f9427"],["D:/My_Blog/public/tags/Web安全/page/2/index.html","b7ea893ec123eda9e78d0d68362eae3e"],["D:/My_Blog/public/tags/index.html","31d6bd37cbeebcee9967d7159d123ea3"],["D:/My_Blog/public/tags/安全数据科学/index.html","5e49f7d9fa59e2ec74d9a6c6f690ae90"],["D:/My_Blog/public/tags/密码学/index.html","5879da23b3086252fa71ec615ba1f636"],["D:/My_Blog/public/tags/杂谈/index.html","e522182e42db14b64f795826354b28d0"],["D:/My_Blog/public/tags/爬虫/index.html","2419730cbd777545250859e27816cc34"],["D:/My_Blog/public/tags/科研/index.html","859a203b516ed53f26ba0b015a798acb"],["D:/My_Blog/public/tags/网络基础/index.html","8f7f1efc0eed7780f6878bd8bfdf09ca"],["D:/My_Blog/public/tags/读书/index.html","725bfb456a2a194f64b41bd2df27e2ab"]];
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







