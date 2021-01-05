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

var precacheConfig = [["D:/My_Blog/public/1231489.png","649e11b9d2b015e1e36ca0204fb43eec"],["D:/My_Blog/public/2020/02/21/DVWA-CSRF/index.html","1b76da30dc737876296b2d881cf77805"],["D:/My_Blog/public/2020/02/21/DVWA-SQL注入/index.html","9c1e29288767f42f13f353f98e16c970"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-DOM/index.html","288e51301f1ef8406216779c8c4919a9"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Reflected/index.html","f80b18661e5002508fc6b4b7ac790a81"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Stored/index.html","3c2c80387ac4b53ac81673f359dd4579"],["D:/My_Blog/public/2020/02/21/DVWA下利用XSS获取Cookie/index.html","5a8679a4ff72dafa75f3cd4407a674a4"],["D:/My_Blog/public/2020/02/21/LeetCode-14-最长公共前缀/index.html","31dad934f90346aedcaf9b40687f4401"],["D:/My_Blog/public/2020/02/21/LeetCode-53-最大子序和-动态规划法/index.html","82adc48748a0a3bf1c97eaecab5a86bf"],["D:/My_Blog/public/2020/02/21/LeetCode-69-x的平方根-牛顿迭代法/index.html","454cdec147810be760fb44ce4f477bab"],["D:/My_Blog/public/2020/02/21/LeetCode-70-爬楼梯/index.html","f63ad747a772d987691aca33960b2d82"],["D:/My_Blog/public/2020/02/21/MISC中图片隐藏文件分离/index.html","372e34d49cc54e554fbe814dd40f4f23"],["D:/My_Blog/public/2020/02/21/PaperNote-HOLMES：基于可疑信息流的实时APT检测/index.html","5b14181ca1778ef281accaf126fa3e15"],["D:/My_Blog/public/2020/02/21/PaperNote-SLEUTH：基于COTS审计数据的实时攻击场景重构/index.html","4b8a553dc7584e0654c50b942b988edd"],["D:/My_Blog/public/2020/02/21/PaperNote-分析大量网络流量以进行APT检测/index.html","d7d4bd64f8c502666b506759fbb2db89"],["D:/My_Blog/public/2020/02/21/PaperNote-基于高效数据流标记和跟踪的可精炼跨主机攻击调查/index.html","059f6a8240a1a000c198ad0ec25eab6b"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-requests/index.html","fd9ec5d86e838724504bf1b7aa447ecd"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-urllib/index.html","1b061474a7039b0a8aac93efebcbc25c"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-正则表达式/index.html","8cee70ebcf56c5fee1aac23b5cd5072b"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库BeautifulSoup/index.html","dcd041649fd46716538095405d055ed7"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库XPath/index.html","e3ca6c0069771e5e786d94208c09a38e"],["D:/My_Blog/public/2020/02/21/Python网络编程-TCP/index.html","371286a0b0d69ecc81d0ef565841ab42"],["D:/My_Blog/public/2020/02/21/Python网络编程-UDP/index.html","85a6acea2794c9912c704d71239503e7"],["D:/My_Blog/public/2020/02/21/SUCTF-Checkin/index.html","56de3fb7f16af6161b3995a77f7d67af"],["D:/My_Blog/public/2020/02/21/Web安全之文件上传漏洞/index.html","99b18d3393a4dbef7951421cd25a57a9"],["D:/My_Blog/public/2020/02/21/Web安全之文件包含漏洞/index.html","425707e2d643144bdb069e8093342673"],["D:/My_Blog/public/2020/02/21/X-Forwarded-For和Referer/index.html","0b86e67673561a0dd3fdbf3d33efcc7e"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level1-10/index.html","0566351322acd9e50867ba63fc162538"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level11-20/index.html","b93b3fbe2baaa4a257164c8bb0521fdc"],["D:/My_Blog/public/2020/02/21/zip格式和zip伪加密/index.html","2af4eceec418a5d6437b2da58ff6b1ee"],["D:/My_Blog/public/2020/02/21/《机器学习与安全》读书笔记/index.html","b5f021b615a958b675aa6c2f127bb502"],["D:/My_Blog/public/2020/02/21/十分钟入门Pandas/index.html","739fc4e398441b5ede96057d80c6a4ce"],["D:/My_Blog/public/2020/02/21/栅栏密码/index.html","5c7949b037b003dfa34879dabe1c6961"],["D:/My_Blog/public/2020/02/21/神经网络的数据表示-张量Tensor/index.html","de6216a7f82441f0aa380434ad101a3e"],["D:/My_Blog/public/2020/02/21/记深信服2018秋季校园招聘-技术服务工程师/index.html","dce4476402170bdad5a4668be4243797"],["D:/My_Blog/public/2020/02/21/读书-《叫魂-1768年中国妖术大恐慌》/index.html","89fac8fcc28ecdbfc6474cdc294ee2f6"],["D:/My_Blog/public/2020/02/21/读书-《许三观卖血记》/index.html","db691ed8ff61ed42b7f3cf737452051a"],["D:/My_Blog/public/2020/02/26/PaperNote-一种情报驱动的安全感知APT防御机制/index.html","c61ba7e31b50ceeb0a0c3a9b9ed4ab06"],["D:/My_Blog/public/2020/03/05/PaperNote-基于时空特征融合的入侵检测系统模型/index.html","e2850d269bfb1162843c4b6e2250cdc8"],["D:/My_Blog/public/2020/03/14/PaperNote-UNICORN：基于Provenance的实时APT检测器/index.html","aed6e49114950d681fc36bafbaaa068c"],["D:/My_Blog/public/2020/03/19/《网络安全态势感知》读书笔记/index.html","82abe88574c091665b1f5a0f960b3250"],["D:/My_Blog/public/2020/03/25/PaperNote-Poirot：对比攻击行为与内核审计记录以进行网络威胁猎杀/index.html","f8491a44107807b9031581c315913891"],["D:/My_Blog/public/2020/07/10/OSPF双LSA路由攻击的介绍与实现/index.html","568f7c644c019d8ac711962a4c850930"],["D:/My_Blog/public/2020/08/09/PaperNote-Log2vec/index.html","1613bfa05e50001fe5dc1dd8401c4082"],["D:/My_Blog/public/2021/01/05/Deep-Graph-Library/index.html","f9d4f1a392a22b506bcfd343da2da8a4"],["D:/My_Blog/public/about/index.html","228968ac50c8d41074a240b8bdc17235"],["D:/My_Blog/public/archives/2020/02/index.html","90b5a51427b95f7f5a068c16f9a5367f"],["D:/My_Blog/public/archives/2020/02/page/2/index.html","11e7fde0d8e18ee2f362b29d6acb75ca"],["D:/My_Blog/public/archives/2020/02/page/3/index.html","903007796c9479dd19ea933d56b581db"],["D:/My_Blog/public/archives/2020/02/page/4/index.html","3901326817bf5f0346070bd590390b19"],["D:/My_Blog/public/archives/2020/03/index.html","04ccd9b439d8421eeb9051c03303660a"],["D:/My_Blog/public/archives/2020/07/index.html","4b91b707f9dc7d6700d59891920e6c85"],["D:/My_Blog/public/archives/2020/08/index.html","16878bb5b47ff39648e1b15c30f60163"],["D:/My_Blog/public/archives/2020/index.html","d94eee74bfca31796e6c0b76384eaf36"],["D:/My_Blog/public/archives/2020/page/2/index.html","0b180ebc74a03d5526ed1cf8e7c290e9"],["D:/My_Blog/public/archives/2020/page/3/index.html","5421408b0b5d9420779ff50d885bc613"],["D:/My_Blog/public/archives/2020/page/4/index.html","34e53c08181b7d1c0258418f20646430"],["D:/My_Blog/public/archives/2020/page/5/index.html","34fd13808703e53f577d04b1e5fd85e1"],["D:/My_Blog/public/archives/2021/01/index.html","55b0ddf2c7207becaa2820a78e6836cf"],["D:/My_Blog/public/archives/2021/index.html","a220f7f0165f57e8d8d6cd690cc98286"],["D:/My_Blog/public/archives/index.html","a2fd3ae646ba83e269b240661d0ab5bc"],["D:/My_Blog/public/archives/page/2/index.html","eb1ff37ad1bb74559626c6398346df05"],["D:/My_Blog/public/archives/page/3/index.html","4c8928034b9e537fe39cf45ab4df3f40"],["D:/My_Blog/public/archives/page/4/index.html","d446758ef058fb1674fa49bde3fd9e5d"],["D:/My_Blog/public/archives/page/5/index.html","182bd38a97fd358a468b5c5d115bf31e"],["D:/My_Blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/My_Blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/My_Blog/public/categories/AI/index.html","1d9af5199438fd5aecdc701c0e6b6b83"],["D:/My_Blog/public/categories/LeetCode/index.html","06b6a472a7374799e158001ccee548ed"],["D:/My_Blog/public/categories/MISC/index.html","e37583451da73c92111e7d5e6273405a"],["D:/My_Blog/public/categories/Python/index.html","fadcace4cd49b8212188870f0b2caf78"],["D:/My_Blog/public/categories/Web安全/index.html","875d8565323ba0849b8b6881705e63a4"],["D:/My_Blog/public/categories/Web安全/page/2/index.html","cb31df5d514e0dd4497b9bcb2a816543"],["D:/My_Blog/public/categories/index.html","2cf85f7b01765d347e951f979baa4ee5"],["D:/My_Blog/public/categories/密码学/index.html","c98a4ca5711b72699620e2fd17edee61"],["D:/My_Blog/public/categories/杂谈/index.html","a1d547cc47b35a08f5f097581560f64d"],["D:/My_Blog/public/categories/漏洞复现/index.html","13aa3cb8ef39b804aec235bd41309237"],["D:/My_Blog/public/categories/科研/index.html","be98127798be016002a6317f91193c94"],["D:/My_Blog/public/categories/网络基础/index.html","f74d6a29b3c1f214005f213500a99e8b"],["D:/My_Blog/public/categories/读书/index.html","2c13d294485cdfe8efb1c94ae4f3ab8b"],["D:/My_Blog/public/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["D:/My_Blog/public/css/index.css","1a8770d4815f16850f60f9989c73e11e"],["D:/My_Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/My_Blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/My_Blog/public/index.html","03bbea527ef5c2a25e1f552482c1d3b0"],["D:/My_Blog/public/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["D:/My_Blog/public/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["D:/My_Blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/My_Blog/public/js/head.js","347edd99f8e3921b45fa617e839d8182"],["D:/My_Blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["D:/My_Blog/public/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["D:/My_Blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/My_Blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/My_Blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/My_Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/My_Blog/public/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["D:/My_Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/My_Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/My_Blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/My_Blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/My_Blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/My_Blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/My_Blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/My_Blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/My_Blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/My_Blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/My_Blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/My_Blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/My_Blog/public/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["D:/My_Blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/My_Blog/public/page/2/index.html","93e77bda8017aaab57530ee27a9054fb"],["D:/My_Blog/public/page/3/index.html","a9c7290dddf99a17cbe6594e9b8ce72c"],["D:/My_Blog/public/page/4/index.html","c5f1580dca98f7f6c9eb435a6f278f6b"],["D:/My_Blog/public/page/5/index.html","f00c1876a006198a9bf5aaf08109a4ad"],["D:/My_Blog/public/tags/AI/index.html","38220bbb3102ecf0c8456fb2c46c7588"],["D:/My_Blog/public/tags/APT/index.html","4c874bc9dece988e9eba8f21800321b6"],["D:/My_Blog/public/tags/Graph-Neural-Network/index.html","c685d8fdfba485082328dbd6f7008fdd"],["D:/My_Blog/public/tags/LeetCode/index.html","1db7349ae1db6139e2724eb0f801df83"],["D:/My_Blog/public/tags/MISC/index.html","aa03b937e4166cfeb4c39c8819f6f860"],["D:/My_Blog/public/tags/Python/index.html","3f652fe1456f32b71afb77f74042722d"],["D:/My_Blog/public/tags/Web安全/index.html","973d40597650be3447a3bc191d78b303"],["D:/My_Blog/public/tags/Web安全/page/2/index.html","b121dc63ef6726eb0d1e1beda2646ca7"],["D:/My_Blog/public/tags/index.html","89ae6fca87d3eb5288a7b066a19862eb"],["D:/My_Blog/public/tags/入侵检测/index.html","03e79491b4eea81001b8daae48333ea1"],["D:/My_Blog/public/tags/威胁猎杀/index.html","667017b40edc2807a2e49eb3d6a5cf83"],["D:/My_Blog/public/tags/安全数据科学/index.html","1a323250e14127345040623d26dbaf4e"],["D:/My_Blog/public/tags/密码学/index.html","ec9905b9c7a74d4324808c038f400c41"],["D:/My_Blog/public/tags/异常检测/index.html","b1123e1d30076605fabcf415119927e3"],["D:/My_Blog/public/tags/态势感知/index.html","98c636ababfec080dfcf77bde119be0a"],["D:/My_Blog/public/tags/杂谈/index.html","403194f588f1740c9540af6d21c0473c"],["D:/My_Blog/public/tags/爬虫/index.html","a39ca3f9292dfc668105bfdc23b24a10"],["D:/My_Blog/public/tags/神经网络/index.html","313f0b4a16fed6815c0bfacca96cd99d"],["D:/My_Blog/public/tags/科研/index.html","9c9bb779c8d0e37b83ec9cd89b404741"],["D:/My_Blog/public/tags/网络基础/index.html","30dd54d7cb74c2fdcad631f588ce6dfd"],["D:/My_Blog/public/tags/读书/index.html","95869f324cbac5b5feedf03c46b9b80a"],["D:/My_Blog/public/tags/路由攻击/index.html","2e5b7ed4871384a305506b3903310e5d"]];
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







