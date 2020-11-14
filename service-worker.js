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

var precacheConfig = [["D:/My_Blog/public/1231489.png","649e11b9d2b015e1e36ca0204fb43eec"],["D:/My_Blog/public/2020/02/21/DVWA-CSRF/index.html","85c857db9fa9cf732dd352aece3981b0"],["D:/My_Blog/public/2020/02/21/DVWA-SQL注入/index.html","032032659574aa6a1e3d4cb1491cb6cd"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-DOM/index.html","33a2305862ba26050a9bf6a625b06217"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Reflected/index.html","b7f7f833e670c5d018995c637418b0b0"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Stored/index.html","7717d20be9e5806518110b5df505d434"],["D:/My_Blog/public/2020/02/21/DVWA下利用XSS获取Cookie/index.html","cc9023209d1d8e8b254a3c48e51d8f2e"],["D:/My_Blog/public/2020/02/21/LeetCode-14-最长公共前缀/index.html","1935e7a621d1e9ad39d0341e82dfb2ad"],["D:/My_Blog/public/2020/02/21/LeetCode-53-最大子序和-动态规划法/index.html","6b174cf72be1935186325e182db1a046"],["D:/My_Blog/public/2020/02/21/LeetCode-69-x的平方根-牛顿迭代法/index.html","1969ae96cd449144ae70db7f97e1b6ef"],["D:/My_Blog/public/2020/02/21/LeetCode-70-爬楼梯/index.html","36f64771da536395db15657cfc2029ac"],["D:/My_Blog/public/2020/02/21/MISC中图片隐藏文件分离/index.html","d38ba63a72392217410e1c7fd49af382"],["D:/My_Blog/public/2020/02/21/PaperNote-HOLMES：基于可疑信息流的实时APT检测/index.html","1d8d1e39aea4b08048c44ef426468e9d"],["D:/My_Blog/public/2020/02/21/PaperNote-SLEUTH：基于COTS审计数据的实时攻击场景重构/index.html","ee840de12d6835b28d095c539a3629a6"],["D:/My_Blog/public/2020/02/21/PaperNote-分析大量网络流量以进行APT检测/index.html","84a8e4960b61cd2c246266fe68eb8ce2"],["D:/My_Blog/public/2020/02/21/PaperNote-基于高效数据流标记和跟踪的可精炼跨主机攻击调查/index.html","62f7b2982aa8e4d411926c53ab10947c"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-requests/index.html","70a6a9f5f3ad3ade907065297837d920"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-urllib/index.html","d086bab87691a0f7e130fbe846780d9f"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-正则表达式/index.html","92d9f707122d6f4a4585e9d335bcc1ea"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库BeautifulSoup/index.html","0b01a7a9c843416711812fa157424eb8"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库XPath/index.html","363cc718258457c684623d6d2c3a35e9"],["D:/My_Blog/public/2020/02/21/Python网络编程-TCP/index.html","e3cc36883526cf9db8dad7c6d1af93ca"],["D:/My_Blog/public/2020/02/21/Python网络编程-UDP/index.html","a3785512f26f8e2f6a05ffc4458291c5"],["D:/My_Blog/public/2020/02/21/SUCTF-Checkin/index.html","322d8cfa07796067e885fa1671f95d82"],["D:/My_Blog/public/2020/02/21/Web安全之文件上传漏洞/index.html","4fbb4ecd0cb0f05532888203c29dae29"],["D:/My_Blog/public/2020/02/21/Web安全之文件包含漏洞/index.html","74b36de7f65c9c4ae47ce00003a61e50"],["D:/My_Blog/public/2020/02/21/X-Forwarded-For和Referer/index.html","37178b81e3e79518b1902d36704bdbbf"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level1-10/index.html","90a04098dc7b042083aaaf1e8391beb4"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level11-20/index.html","5030eb55550600aa2bbbd1ec5fddfcd4"],["D:/My_Blog/public/2020/02/21/zip格式和zip伪加密/index.html","5ec8eb371add5d8ae90f67390c68c8a9"],["D:/My_Blog/public/2020/02/21/《机器学习与安全》读书笔记/index.html","daac5bdef2f60c9a224f052dc5da2a47"],["D:/My_Blog/public/2020/02/21/十分钟入门Pandas/index.html","89c3146005fa6237e4d3459453fd163a"],["D:/My_Blog/public/2020/02/21/栅栏密码/index.html","018854151b89650d38ad227781b7e699"],["D:/My_Blog/public/2020/02/21/神经网络的数据表示-张量Tensor/index.html","c0ccbc45541e289361c15528b4a89211"],["D:/My_Blog/public/2020/02/21/记深信服2018秋季校园招聘-技术服务工程师/index.html","8d9cb7b95004723b7224887b0d60756c"],["D:/My_Blog/public/2020/02/21/读书-《叫魂-1768年中国妖术大恐慌》/index.html","066524751b51d3de9fcd9de692de6695"],["D:/My_Blog/public/2020/02/21/读书-《许三观卖血记》/index.html","7ab0330f18f6c040c6f0fa22f42178b9"],["D:/My_Blog/public/2020/02/26/PaperNote-一种情报驱动的安全感知APT防御机制/index.html","821459f04edd825b48350a40443e9284"],["D:/My_Blog/public/2020/03/05/PaperNote-基于时空特征融合的入侵检测系统模型/index.html","3db50ca1474ed4c3794764e8f914c3c5"],["D:/My_Blog/public/2020/03/14/PaperNote-UNICORN：基于Provenance的实时APT检测器/index.html","feaf302bb2bf1ac451f360e844506d94"],["D:/My_Blog/public/2020/03/19/《网络安全态势感知》读书笔记/index.html","605d377e11f2d1a6692a011782867241"],["D:/My_Blog/public/2020/03/25/PaperNote-Poirot：对比攻击行为与内核审计记录以进行网络威胁猎杀/index.html","86f9eea5ca80a20df6b270e42cd0536c"],["D:/My_Blog/public/2020/07/10/OSPF双LSA路由攻击的介绍与实现/index.html","248a7733e77870d024ae0de03ee32e38"],["D:/My_Blog/public/2020/08/09/PaperNote-Log2vec/index.html","c86795460355b2dfc8b1d5095988a552"],["D:/My_Blog/public/about/index.html","2b24e4ff38c9d186d9d7cb67ab3b5f54"],["D:/My_Blog/public/archives/2020/02/index.html","92da1aad0fc1199a0a3c08b8001ecea3"],["D:/My_Blog/public/archives/2020/02/page/2/index.html","c9ae7ab36d91a25b748075fd88b9423a"],["D:/My_Blog/public/archives/2020/02/page/3/index.html","83be48ce545ca3f65bf31cb5eca0c809"],["D:/My_Blog/public/archives/2020/02/page/4/index.html","47ae8d3a069244a8bcb0f8d697c2e293"],["D:/My_Blog/public/archives/2020/03/index.html","e29291d51c8b663308733e700c6b36fe"],["D:/My_Blog/public/archives/2020/07/index.html","5f7aa945882d279fef2ba26dc5ba687d"],["D:/My_Blog/public/archives/2020/08/index.html","19955c65966f3ef0bfc849fcc7afe312"],["D:/My_Blog/public/archives/2020/index.html","f4e09d2c82946de858fa037dd713929e"],["D:/My_Blog/public/archives/2020/page/2/index.html","f82d0f39b0e2a9165c163219ba449eb9"],["D:/My_Blog/public/archives/2020/page/3/index.html","5245782f32684a01bb00432152c45412"],["D:/My_Blog/public/archives/2020/page/4/index.html","0364846b926394ee88699a3198405c4e"],["D:/My_Blog/public/archives/2020/page/5/index.html","39777ff8d6b7a095dfe63ba9b6ad4ad9"],["D:/My_Blog/public/archives/index.html","8db11f792c9baf30ff8b26d5cee1d690"],["D:/My_Blog/public/archives/page/2/index.html","b00542f7a5c2aeaa0eab3b930991c835"],["D:/My_Blog/public/archives/page/3/index.html","4648d2bcf65d41824cf75e094f76d25e"],["D:/My_Blog/public/archives/page/4/index.html","49f5a25b87e31e296a898d1c2511d9dd"],["D:/My_Blog/public/archives/page/5/index.html","5426768cdf85d2e63c3fd225a469d0c4"],["D:/My_Blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/My_Blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/My_Blog/public/categories/AI/index.html","8152d00409a4557b943c284e66010e2c"],["D:/My_Blog/public/categories/LeetCode/index.html","81909a3d8b0cc1fb9b8bac97ed9dd7e6"],["D:/My_Blog/public/categories/MISC/index.html","98c4234f1498a6f13e08717d5a210997"],["D:/My_Blog/public/categories/Python/index.html","d5d30120082159d2bbd25ae67d38a661"],["D:/My_Blog/public/categories/Web安全/index.html","1cec145500ad535465b7324dd642543e"],["D:/My_Blog/public/categories/Web安全/page/2/index.html","8e50bad5df29c3801fae8f442313935c"],["D:/My_Blog/public/categories/index.html","3945df48a26df1d828a9a280c9694baa"],["D:/My_Blog/public/categories/密码学/index.html","c0436392f7d8d8fc41778851df65dd01"],["D:/My_Blog/public/categories/杂谈/index.html","1d033c2189faf43caff2c84eedf355ab"],["D:/My_Blog/public/categories/漏洞复现/index.html","244c537a5e51ba267491776db0fc55d3"],["D:/My_Blog/public/categories/科研/index.html","10cd76540eb47380f4c81489799d362c"],["D:/My_Blog/public/categories/网络基础/index.html","45e1baf2bd39f4b546231fe85dbae4d2"],["D:/My_Blog/public/categories/读书/index.html","5d21e9093d1283203155620a1e6fa288"],["D:/My_Blog/public/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["D:/My_Blog/public/css/index.css","1a8770d4815f16850f60f9989c73e11e"],["D:/My_Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/My_Blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/My_Blog/public/index.html","a99e443f546147e262e1083b6898fbca"],["D:/My_Blog/public/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["D:/My_Blog/public/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["D:/My_Blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/My_Blog/public/js/head.js","347edd99f8e3921b45fa617e839d8182"],["D:/My_Blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["D:/My_Blog/public/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["D:/My_Blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/My_Blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/My_Blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/My_Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/My_Blog/public/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["D:/My_Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/My_Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/My_Blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/My_Blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/My_Blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/My_Blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/My_Blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/My_Blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/My_Blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/My_Blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/My_Blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/My_Blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/My_Blog/public/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["D:/My_Blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/My_Blog/public/page/2/index.html","20f22c5cba81a6aa342e37df47da803a"],["D:/My_Blog/public/page/3/index.html","5e096367fbe5925891a3014fe1723024"],["D:/My_Blog/public/page/4/index.html","d0441dcf3857776e4ae0fcad9aabea34"],["D:/My_Blog/public/page/5/index.html","1fb4d25d05a349fceff700b56c2613a8"],["D:/My_Blog/public/tags/AI/index.html","1f18e16825eed1eb4a897d941d663478"],["D:/My_Blog/public/tags/APT/index.html","5cd0927a0a1758a3ed3caa2955572ee3"],["D:/My_Blog/public/tags/LeetCode/index.html","795c74fcae2c9af2654387a3beca71cb"],["D:/My_Blog/public/tags/MISC/index.html","8f685b08a53b7ad91b39bf5454bafd5c"],["D:/My_Blog/public/tags/Python/index.html","255cb8c455d1bdb1a7d1e209a0462208"],["D:/My_Blog/public/tags/Web安全/index.html","dcb3788afab77b6b75cd1a009c89bf51"],["D:/My_Blog/public/tags/Web安全/page/2/index.html","780131ee1f1267e11ce9e8b6a11e8b2d"],["D:/My_Blog/public/tags/index.html","18a6d3e6b7822dfb34a59e48f32de155"],["D:/My_Blog/public/tags/入侵检测/index.html","955c483b8d472e453a9342e9996014ef"],["D:/My_Blog/public/tags/威胁猎杀/index.html","aa65d1e1b5bd30e9d152565bb4a7f189"],["D:/My_Blog/public/tags/安全数据科学/index.html","03d022d7dfbea4f8fd22ec8a86eb2962"],["D:/My_Blog/public/tags/密码学/index.html","6bd60a0ae23e62f1dfc24b898254075a"],["D:/My_Blog/public/tags/异常检测/index.html","a2550fb6c4fbea74262be7032f8fa6b3"],["D:/My_Blog/public/tags/态势感知/index.html","151861e6268b575edb1ba10e2646e472"],["D:/My_Blog/public/tags/杂谈/index.html","59cc5c71a67c8a43922e0635c1ff75bd"],["D:/My_Blog/public/tags/爬虫/index.html","53a15c0510396d9b73a08f83747b3c7c"],["D:/My_Blog/public/tags/神经网络/index.html","f042d6f0a56c2d5cc672fdb4b480a291"],["D:/My_Blog/public/tags/科研/index.html","78cbf2adc67204ab518ee1746b3dbb83"],["D:/My_Blog/public/tags/网络基础/index.html","3c05104a374bc60e822609e8a392e774"],["D:/My_Blog/public/tags/读书/index.html","efc56c5fbbbd572c61de0c102d73a2fd"],["D:/My_Blog/public/tags/路由攻击/index.html","318f88485a96941456d32ffbe924c6b1"]];
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







