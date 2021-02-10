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

var precacheConfig = [["D:/My_Blog/public/1231489.png","649e11b9d2b015e1e36ca0204fb43eec"],["D:/My_Blog/public/2020/02/21/DVWA-CSRF/index.html","46b53cf1973c6ce234139aaef6e9bc16"],["D:/My_Blog/public/2020/02/21/DVWA-SQL注入/index.html","8bfccc090aaf99767310e5abc25bcdfa"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-DOM/index.html","13723a2e3734f171f762b91a345312e7"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Reflected/index.html","8d9999ed44a5b5f156df8e35bd138416"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Stored/index.html","7f0f7883bd08fb1bcaf04cf4386a21bb"],["D:/My_Blog/public/2020/02/21/DVWA下利用XSS获取Cookie/index.html","f827ac92acdbcb39dbf3187b6f09dbd7"],["D:/My_Blog/public/2020/02/21/LeetCode-14-最长公共前缀/index.html","595fb720dece41356ec828fffd6f3159"],["D:/My_Blog/public/2020/02/21/LeetCode-53-最大子序和-动态规划法/index.html","ebb68dc5ef693f0289b7bf5c89004063"],["D:/My_Blog/public/2020/02/21/LeetCode-69-x的平方根-牛顿迭代法/index.html","e75a5f885bf21d75d400d352513c1d7e"],["D:/My_Blog/public/2020/02/21/LeetCode-70-爬楼梯/index.html","23058e0ca82c5ee07f6067cdce0cf8c2"],["D:/My_Blog/public/2020/02/21/MISC中图片隐藏文件分离/index.html","0288de8f5f63e037795834dbfff8ae40"],["D:/My_Blog/public/2020/02/21/PaperNote-HOLMES：基于可疑信息流的实时APT检测/index.html","6d0b1c6409021db3fe76c1574f24bab8"],["D:/My_Blog/public/2020/02/21/PaperNote-SLEUTH：基于COTS审计数据的实时攻击场景重构/index.html","8e4cc6fe189dc1b646dfa0c0e0a0ce8f"],["D:/My_Blog/public/2020/02/21/PaperNote-分析大量网络流量以进行APT检测/index.html","2a7b81dad739a1ade21639405472f39e"],["D:/My_Blog/public/2020/02/21/PaperNote-基于高效数据流标记和跟踪的可精炼跨主机攻击调查/index.html","dc866448ccff306dfc4f05632ee3ca33"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-requests/index.html","53904e5b9d2cc043f921de2b2f53d93a"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-urllib/index.html","81918459e46849ebb6100a9363744625"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-正则表达式/index.html","e37f63ce3b02031da57b9b12559c3e03"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库BeautifulSoup/index.html","ed328268fcaf035d160b4260712bc5ae"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库XPath/index.html","bfae927e8929c487dfae146f485a147d"],["D:/My_Blog/public/2020/02/21/Python网络编程-TCP/index.html","a36f8fa1bdd35bb4c75901e5595fb6fd"],["D:/My_Blog/public/2020/02/21/Python网络编程-UDP/index.html","8d847814e42364b3fc8e4096cfe0b066"],["D:/My_Blog/public/2020/02/21/SUCTF-Checkin/index.html","d0c7adc96fa24195158e836161044cde"],["D:/My_Blog/public/2020/02/21/Web安全之文件上传漏洞/index.html","e365d81aff0d9cc392cb9c79183a3d38"],["D:/My_Blog/public/2020/02/21/Web安全之文件包含漏洞/index.html","145fbde22cc3312d4afcc96dd4e3022e"],["D:/My_Blog/public/2020/02/21/X-Forwarded-For和Referer/index.html","d9326ff17d8bd25dee23009396825b23"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level1-10/index.html","0f856b4ed6991664c18cc2a8f8088112"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level11-20/index.html","f2c685dd84084ff023be5cd8153f97c6"],["D:/My_Blog/public/2020/02/21/zip格式和zip伪加密/index.html","854e8aedd91d199205c07c9978e30f4c"],["D:/My_Blog/public/2020/02/21/《机器学习与安全》读书笔记/index.html","75b55fc883b389e0cfd1d5af1530b6d5"],["D:/My_Blog/public/2020/02/21/十分钟入门Pandas/index.html","765c9d0da9aaa75b0456d8b832fe337e"],["D:/My_Blog/public/2020/02/21/栅栏密码/index.html","d25b1985ae96f6f897385c0c215e2069"],["D:/My_Blog/public/2020/02/21/神经网络的数据表示-张量Tensor/index.html","152ef77e1399da36a733150ac175c453"],["D:/My_Blog/public/2020/02/21/记深信服2018秋季校园招聘-技术服务工程师/index.html","ccde4440e50c2cf0661d2ea469ab1da3"],["D:/My_Blog/public/2020/02/21/读书-《叫魂-1768年中国妖术大恐慌》/index.html","809abb34e8b387a357afd622a9ddb6e5"],["D:/My_Blog/public/2020/02/21/读书-《许三观卖血记》/index.html","3fb3be4de0201d491be8434b2c326410"],["D:/My_Blog/public/2020/02/26/PaperNote-一种情报驱动的安全感知APT防御机制/index.html","086eb9e1f72da2acb7914e9a73d4bf35"],["D:/My_Blog/public/2020/03/05/PaperNote-基于时空特征融合的入侵检测系统模型/index.html","0ac7af6ac9dd78c90f9d1847307c8547"],["D:/My_Blog/public/2020/03/14/PaperNote-UNICORN：基于Provenance的实时APT检测器/index.html","f94caa55b3875c31e7343fa42df314f1"],["D:/My_Blog/public/2020/03/19/《网络安全态势感知》读书笔记/index.html","ad771ed8e330a58ca754abdbd2bad2bd"],["D:/My_Blog/public/2020/03/25/PaperNote-Poirot：对比攻击行为与内核审计记录以进行网络威胁猎杀/index.html","9179ef4cb6b87afb2ad70d9ac053528d"],["D:/My_Blog/public/2020/07/10/OSPF双LSA路由攻击的介绍与实现/index.html","85cf1febeb2130a4652b22c5d6846c72"],["D:/My_Blog/public/2020/08/09/PaperNote-Log2vec/index.html","dc452fe7e69f7b4797e60501201da1da"],["D:/My_Blog/public/2021/01/05/Deep-Graph-Library-Overview/index.html","c2123f4ff4bfd1a1d1477ac57ed645b0"],["D:/My_Blog/public/2021/02/10/Ubuntu安装ngx-lua-waf/index.html","44216430d414fe889b551e17cec461e1"],["D:/My_Blog/public/about/index.html","028236fa777fbbea0a5209fe6d42268f"],["D:/My_Blog/public/archives/2020/02/index.html","e7732630124a3d935d5e981a84ac12ad"],["D:/My_Blog/public/archives/2020/02/page/2/index.html","abebd3a586e2862532a6b7c20d5e9931"],["D:/My_Blog/public/archives/2020/02/page/3/index.html","4c7ccfc0b19b742a8006e35c3384a040"],["D:/My_Blog/public/archives/2020/02/page/4/index.html","7b97bb5828bd1e191d8798212761fcf7"],["D:/My_Blog/public/archives/2020/03/index.html","c382048a5a702a38b727169574f6129d"],["D:/My_Blog/public/archives/2020/07/index.html","7090205f0ab96317c64c69f3816dbe7d"],["D:/My_Blog/public/archives/2020/08/index.html","8db315f4026c0c58d0613693ba4b4c13"],["D:/My_Blog/public/archives/2020/index.html","3b7af9fd0c6dc356cc20224d82d6f9c0"],["D:/My_Blog/public/archives/2020/page/2/index.html","68672fe192dde0b6461220e2fb89ee3b"],["D:/My_Blog/public/archives/2020/page/3/index.html","414342f4240fe340d7b8261f68efa243"],["D:/My_Blog/public/archives/2020/page/4/index.html","145d9fe4acf55fdafc32f354b10408dd"],["D:/My_Blog/public/archives/2020/page/5/index.html","63228dc97b64f48e1ea10bf1e8136b74"],["D:/My_Blog/public/archives/2021/01/index.html","dc9577e1e16cd529eb9acd1bd7b98f22"],["D:/My_Blog/public/archives/2021/02/index.html","2720f14cdaf8f9e36714e7f36a1466cf"],["D:/My_Blog/public/archives/2021/index.html","fc615a2f57b2e5a99cc25ca815d5c086"],["D:/My_Blog/public/archives/index.html","9d6124c3c0d6916a2cb44c4f9acf37f6"],["D:/My_Blog/public/archives/page/2/index.html","9a120b60699aac06841cdafe948a402f"],["D:/My_Blog/public/archives/page/3/index.html","e9f0f6caf68852cefb22a0016a523a80"],["D:/My_Blog/public/archives/page/4/index.html","c1376d79246bb9703e2736ce7440fc1a"],["D:/My_Blog/public/archives/page/5/index.html","999bb22c4e0c97a05118b41e5ff1c0b0"],["D:/My_Blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/My_Blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/My_Blog/public/categories/AI/index.html","c2fc33d4d59feaf0871571cb21412d69"],["D:/My_Blog/public/categories/LeetCode/index.html","6619eea2bb53552631d9e247c5166a1f"],["D:/My_Blog/public/categories/MISC/index.html","bebf343086f8976a8a74f2a69cfafea0"],["D:/My_Blog/public/categories/Python/index.html","c718f35e7e7823fd239c303c130b04bc"],["D:/My_Blog/public/categories/Web安全/index.html","ea4450e5c851bf9db8276d6602f17d98"],["D:/My_Blog/public/categories/Web安全/page/2/index.html","1324535f2e4fa8f77412864f8c1826d7"],["D:/My_Blog/public/categories/index.html","d08b4c2396e9b9ee6286516e7a597227"],["D:/My_Blog/public/categories/安全防护/index.html","15ad1463e20f33759585df31a0079606"],["D:/My_Blog/public/categories/密码学/index.html","7747e4eb5a99a106fa5555dc0fe603cd"],["D:/My_Blog/public/categories/杂谈/index.html","e67e463c88f37801c10435ba55d97085"],["D:/My_Blog/public/categories/漏洞复现/index.html","b558d7e2b0f84a30f9de3725e535ad47"],["D:/My_Blog/public/categories/科研/index.html","d4da9c2eb8c1f5dccbd246263707228a"],["D:/My_Blog/public/categories/网络基础/index.html","f1ffbae985a3622e29e2df747686b0c5"],["D:/My_Blog/public/categories/读书/index.html","2fde083084e172ee2dd7b895bea3defc"],["D:/My_Blog/public/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["D:/My_Blog/public/css/index.css","1a8770d4815f16850f60f9989c73e11e"],["D:/My_Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/My_Blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/My_Blog/public/index.html","a66b3206a56042bd9b36a28be6f7dccd"],["D:/My_Blog/public/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["D:/My_Blog/public/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["D:/My_Blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/My_Blog/public/js/head.js","347edd99f8e3921b45fa617e839d8182"],["D:/My_Blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["D:/My_Blog/public/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["D:/My_Blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/My_Blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/My_Blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/My_Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/My_Blog/public/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["D:/My_Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/My_Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/My_Blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/My_Blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/My_Blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/My_Blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/My_Blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/My_Blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/My_Blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/My_Blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/My_Blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/My_Blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/My_Blog/public/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["D:/My_Blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/My_Blog/public/page/2/index.html","8509c67564a593e598b58e3dbab9cac4"],["D:/My_Blog/public/page/3/index.html","be47bca9f8bccb7dc907fed74fa130ff"],["D:/My_Blog/public/page/4/index.html","ba9a14299eda45af9412a9cb2748d831"],["D:/My_Blog/public/page/5/index.html","24bfa5a7c9f9858a75fe922ff04ef03f"],["D:/My_Blog/public/tags/AI/index.html","2bcd5fd9715cc5d18d0a2f25efbe2efb"],["D:/My_Blog/public/tags/APT/index.html","1bdb96951261676958911728a7d6f925"],["D:/My_Blog/public/tags/Graph-Neural-Network/index.html","3f0656a794dfa4579950c8852bf823eb"],["D:/My_Blog/public/tags/LeetCode/index.html","7cb9a176780df6766284956987b76f7a"],["D:/My_Blog/public/tags/MISC/index.html","8ca7e08cdc255bb983e59775478e2bef"],["D:/My_Blog/public/tags/Python/index.html","c751020d42ff9c1bd133a9780714e5ca"],["D:/My_Blog/public/tags/WAF/index.html","c77d52c577bb4f25ab972e9fe20c66dc"],["D:/My_Blog/public/tags/Web安全/index.html","3c037ad1900764dfcd688dd49805072f"],["D:/My_Blog/public/tags/Web安全/page/2/index.html","5633f2c40b097bea5da9b3b970cf2a34"],["D:/My_Blog/public/tags/index.html","3ef72b28bef5a09a0817d6cda790df79"],["D:/My_Blog/public/tags/入侵检测/index.html","8ee3e2374f76070e0f8af194252459df"],["D:/My_Blog/public/tags/威胁猎杀/index.html","729face91bdb344fd00de678aae5ed45"],["D:/My_Blog/public/tags/安全数据科学/index.html","884610d2d47b7f062a631e14136cdd24"],["D:/My_Blog/public/tags/密码学/index.html","bcb57177f900931ada7ed43371c3b613"],["D:/My_Blog/public/tags/异常检测/index.html","4f9dc2e88dcf7b1f854a3a3a7e918afa"],["D:/My_Blog/public/tags/态势感知/index.html","91297205875b3090c61470f344690dd5"],["D:/My_Blog/public/tags/杂谈/index.html","d4d0fcade52144e45cef7a902ccadf08"],["D:/My_Blog/public/tags/爬虫/index.html","d5ecf6bb62519a8c9a10a932aa9923e6"],["D:/My_Blog/public/tags/神经网络/index.html","5ee27342ddc42e8cf699b5ce7f6d50a7"],["D:/My_Blog/public/tags/科研/index.html","25d25010b11ea1b00962ac01131006e4"],["D:/My_Blog/public/tags/网络基础/index.html","61abc4acafa6b69edf006430520c8a16"],["D:/My_Blog/public/tags/读书/index.html","c114a928e84ecb4b97191fdbd488e806"],["D:/My_Blog/public/tags/路由攻击/index.html","c24991facd024f48bbd181fdc55da869"]];
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







