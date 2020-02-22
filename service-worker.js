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

var precacheConfig = [["D:/My_Blog/public/1231489.png","649e11b9d2b015e1e36ca0204fb43eec"],["D:/My_Blog/public/2020/02/21/DVWA-CSRF/index.html","abd5a740d2504baee0a4d533b2f84ec7"],["D:/My_Blog/public/2020/02/21/DVWA-SQL注入/index.html","cf2f3a8c0c1e05c0ddc2fe3bdda5f94c"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-DOM/index.html","0962e762e42a47168683f14ffa241c63"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Reflected/index.html","5f21d29d29af6f054fc46f1f31c6c3c7"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Stored/index.html","9d884176eae5f9e1d69bb9f4670937cf"],["D:/My_Blog/public/2020/02/21/DVWA下利用XSS获取Cookie/index.html","39ee562e63967efa6406dff028222545"],["D:/My_Blog/public/2020/02/21/LeetCode-14-最长公共前缀/index.html","0041e35fc93e72256be4d9c8b1374777"],["D:/My_Blog/public/2020/02/21/LeetCode-53-最大子序和-动态规划法/index.html","0b1470705e07fc7e2a840cbe728db022"],["D:/My_Blog/public/2020/02/21/LeetCode-69-x的平方根-牛顿迭代法/index.html","030b54091a9353bbd11a45f9df00a2b1"],["D:/My_Blog/public/2020/02/21/LeetCode-70-爬楼梯/index.html","83bfbe2e31c16dc966b52d2b19fa3147"],["D:/My_Blog/public/2020/02/21/MISC中图片隐藏文件分离/index.html","7d36e1b14771e642276405782ee32a36"],["D:/My_Blog/public/2020/02/21/PaperNote-HOLMES：基于可疑信息流的实时APT检测/index.html","cf70556a7d6252c3f9add6a889e5cd62"],["D:/My_Blog/public/2020/02/21/PaperNote-SLEUTH：基于COTS审计数据的实时攻击场景重构/index.html","6314399a021fd025f469665525f51dbc"],["D:/My_Blog/public/2020/02/21/PaperNote-分析大量网络流量以进行APT检测/index.html","00f155834696ea105f5fb3ba7e008d12"],["D:/My_Blog/public/2020/02/21/PaperNote-基于高效数据流标记和跟踪的可精炼跨主机攻击调查/index.html","c89c5b00b75b2644d11710fe87cbbbe2"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-requests/index.html","3c33d35f59e3ee8f7ccce2827483a25d"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-urllib/index.html","02ab6263c236bc339dc9f18711b33817"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-正则表达式/index.html","9c57eb301a5f9d2874559c0f52df1e10"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库BeautifulSoup/index.html","54ab28e925e3f7b120f07b2d2555224f"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库XPath/index.html","6222c6c9a737a94dd743dc4f72e53f65"],["D:/My_Blog/public/2020/02/21/Python网络编程-TCP/index.html","ed11fc67f71cede059dc58736b73a14f"],["D:/My_Blog/public/2020/02/21/Python网络编程-UDP/index.html","cb8a14b43122684ada385d7f4e1093ce"],["D:/My_Blog/public/2020/02/21/SUCTF-Checkin/index.html","65ea05b00f52b54a394a2bc7bee45592"],["D:/My_Blog/public/2020/02/21/Web安全之文件上传漏洞/index.html","0b79bb2e1a006391f7a8d0bd5330bb3b"],["D:/My_Blog/public/2020/02/21/Web安全之文件包含漏洞/index.html","6189b885e587bed90b60ea196bd1775b"],["D:/My_Blog/public/2020/02/21/X-Forwarded-For和Referer/index.html","4ee0ac0fe98e2c8ba9822504d80b5b79"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level1-10/index.html","5cb725abcd3be493e989fc70b921a7e9"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level11-20/index.html","3e4f8ecd9406f0c6d39fe8fca84ccdce"],["D:/My_Blog/public/2020/02/21/zip格式和zip伪加密/index.html","d5c8cb74673e9beeef045ecebf718aea"],["D:/My_Blog/public/2020/02/21/《机器学习与安全》读书笔记/index.html","1ea55a9cafe185b70b0d4612068af09a"],["D:/My_Blog/public/2020/02/21/十分钟入门Pandas/index.html","e8aaf66b90a13a0a5de6b1e6b9b5e9b0"],["D:/My_Blog/public/2020/02/21/栅栏密码/index.html","e63b85bcb01dc4093cf1bda86ed9f5c8"],["D:/My_Blog/public/2020/02/21/神经网络的数据表示-张量Tensor/index.html","bc0f17807c88bec92c23b5a7507cbcd5"],["D:/My_Blog/public/2020/02/21/记深信服2018秋季校园招聘-技术服务工程师/index.html","081b1ad0c9ae65d4622eb78b31d36964"],["D:/My_Blog/public/2020/02/21/读书-《叫魂-1768年中国妖术大恐慌》/index.html","666d5309b3bb981ec360658bc70e10a9"],["D:/My_Blog/public/2020/02/21/读书-《许三观卖血记》/index.html","000ab7cb465f0d5a4ea4836536c47118"],["D:/My_Blog/public/about/index.html","02da81c9aecb85a7f59555c76065e098"],["D:/My_Blog/public/archives/2020/02/index.html","4b7ad1a6b2035a45031323c0ea412669"],["D:/My_Blog/public/archives/2020/02/page/2/index.html","4b8da60a6a4997ada24ed86c30e26362"],["D:/My_Blog/public/archives/2020/02/page/3/index.html","c837e57bf25bc063bf5c2bd15d5aaf2d"],["D:/My_Blog/public/archives/2020/02/page/4/index.html","7043b4aa352b34b62f676a8df00e7bbb"],["D:/My_Blog/public/archives/2020/index.html","12ab4f78245fe35d7f4956f8894c86b7"],["D:/My_Blog/public/archives/2020/page/2/index.html","f03f1f4a75c802e6ce52a3bb5898b9ea"],["D:/My_Blog/public/archives/2020/page/3/index.html","702c901998a45d05e29d905281490d0d"],["D:/My_Blog/public/archives/2020/page/4/index.html","42810f343fc63f3078fb8af42e058b5f"],["D:/My_Blog/public/archives/index.html","fdf5fb8046129a3876a99f66a2379696"],["D:/My_Blog/public/archives/page/2/index.html","aec0bab191146d8dc0934c354e6112c5"],["D:/My_Blog/public/archives/page/3/index.html","8d4b362ecaeb5e674c80b603f5ea9753"],["D:/My_Blog/public/archives/page/4/index.html","922d54231efa6831c2c9d7afb31753c9"],["D:/My_Blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/My_Blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/My_Blog/public/categories/AI/index.html","36edd75b180201d7f466133441d417d4"],["D:/My_Blog/public/categories/LeetCode/index.html","2b0c4d1a4e21837ffc8964ef3f157ec5"],["D:/My_Blog/public/categories/MISC/index.html","bea962594ff7975f72991f7de1592c51"],["D:/My_Blog/public/categories/Python/index.html","9805b2ab26ad264b2dcebbe10bd09a83"],["D:/My_Blog/public/categories/Web安全/index.html","54f1972326b3bb5d629b6cd25ae9c226"],["D:/My_Blog/public/categories/Web安全/page/2/index.html","ed71205d5a0b4ed4dfc0001ac02d7fb0"],["D:/My_Blog/public/categories/index.html","db13ddba1e2be6092d15cb40833e3148"],["D:/My_Blog/public/categories/安全数据科学/index.html","f847430371a01f2574603889d7ad575a"],["D:/My_Blog/public/categories/密码学/index.html","158020adc1d80a8f22f27ad2ce242eb4"],["D:/My_Blog/public/categories/杂谈/index.html","abe0c771e3d34e78234dbebe8cfa2b4b"],["D:/My_Blog/public/categories/科研/index.html","3ab439d027a3ac92ea5344aa13c4c409"],["D:/My_Blog/public/categories/网络基础/index.html","69a45e7e6484a2390260d85929d0613b"],["D:/My_Blog/public/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["D:/My_Blog/public/css/index.css","1a8770d4815f16850f60f9989c73e11e"],["D:/My_Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/My_Blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/My_Blog/public/index.html","f2966ad5e377428747d892e9a0a02f2e"],["D:/My_Blog/public/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["D:/My_Blog/public/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["D:/My_Blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/My_Blog/public/js/head.js","347edd99f8e3921b45fa617e839d8182"],["D:/My_Blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["D:/My_Blog/public/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["D:/My_Blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/My_Blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/My_Blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/My_Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/My_Blog/public/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["D:/My_Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/My_Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/My_Blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/My_Blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/My_Blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/My_Blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/My_Blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/My_Blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/My_Blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/My_Blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/My_Blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/My_Blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/My_Blog/public/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["D:/My_Blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/My_Blog/public/page/2/index.html","ea6700e386a01b0252d324068339d1cd"],["D:/My_Blog/public/page/3/index.html","b20ef8d938c56ddb6c371602d909e8d9"],["D:/My_Blog/public/page/4/index.html","212f4c18f405c0dfc0b47154ca79a423"],["D:/My_Blog/public/tags/AI/index.html","0980ee4a38775cdd45bb2b267bb278f8"],["D:/My_Blog/public/tags/APT/index.html","fb263f8d7d5fbfb633ec5b0c3f248715"],["D:/My_Blog/public/tags/LeetCode/index.html","2400c8d08c86384c7c159a9f31577990"],["D:/My_Blog/public/tags/MISC/index.html","ec1ab2c30c118c47a3fdcb312bf43ab7"],["D:/My_Blog/public/tags/Python/index.html","8be93df4b2b3a7f52162ca52e5b5c7c1"],["D:/My_Blog/public/tags/Web安全/index.html","c89ccc8f7449a3a3b28b38a99d5d4cd8"],["D:/My_Blog/public/tags/Web安全/page/2/index.html","01c6874d87c8d40cf5eefc7ff822cb78"],["D:/My_Blog/public/tags/index.html","a00e4344908c71639f06655ad890e035"],["D:/My_Blog/public/tags/安全数据科学/index.html","973fc385a74912bbeb128040dfd6b89c"],["D:/My_Blog/public/tags/密码学/index.html","cc76cfd92beb4e526c48bf7909cd8f80"],["D:/My_Blog/public/tags/杂谈/index.html","4ab179669632f5b3794838eeeb9bf98a"],["D:/My_Blog/public/tags/爬虫/index.html","ea33f3bf54ede1bad53c585cccc7750d"],["D:/My_Blog/public/tags/科研/index.html","f5ca8b3a689efe71cacd19c69dce7952"],["D:/My_Blog/public/tags/网络基础/index.html","069197b9a6dd45f912013b0d06452505"],["D:/My_Blog/public/tags/读书/index.html","0f9bcd5859b5b6f64f777213d448649f"]];
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







