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

var precacheConfig = [["D:/My_Blog/public/1231489.png","649e11b9d2b015e1e36ca0204fb43eec"],["D:/My_Blog/public/2020/02/21/DVWA-CSRF/index.html","b7ad4a7f8258c7b9ecb01a688e32d077"],["D:/My_Blog/public/2020/02/21/DVWA-SQL注入/index.html","c07927a3b2a4d2b35f5d72ee6667c7c8"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-DOM/index.html","68cb71ea8ec0657d6d1234c81e222c82"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Reflected/index.html","016d2a49b0d1b8fe3a332a1479fa45e8"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Stored/index.html","b0611a57984b569aea19e186fec5172f"],["D:/My_Blog/public/2020/02/21/DVWA下利用XSS获取Cookie/index.html","0f594972cb286eb541011c95b3b9b8a6"],["D:/My_Blog/public/2020/02/21/LeetCode-14-最长公共前缀/index.html","cc9c8771bc9960ef9057df65ac689720"],["D:/My_Blog/public/2020/02/21/LeetCode-53-最大子序和-动态规划法/index.html","1611fbc8e0350912ddaf409261bea240"],["D:/My_Blog/public/2020/02/21/LeetCode-69-x的平方根-牛顿迭代法/index.html","4961481cc3ec490dfc034ef22ac18e5b"],["D:/My_Blog/public/2020/02/21/LeetCode-70-爬楼梯/index.html","4ade725a7f1c1a44bc3e64020e885ed5"],["D:/My_Blog/public/2020/02/21/MISC中图片隐藏文件分离/index.html","0bd104b01ab3a93ee45bb72c6d066bba"],["D:/My_Blog/public/2020/02/21/PaperNote-HOLMES：基于可疑信息流的实时APT检测/index.html","40b9c907af986f423362137f8c9d8ec6"],["D:/My_Blog/public/2020/02/21/PaperNote-SLEUTH：基于COTS审计数据的实时攻击场景重构/index.html","a2fda4acc9ea9b9993e0e3853f2939a8"],["D:/My_Blog/public/2020/02/21/PaperNote-分析大量网络流量以进行APT检测/index.html","f4c9516d86cd077f93a33c375e804f55"],["D:/My_Blog/public/2020/02/21/PaperNote-基于高效数据流标记和跟踪的可精炼跨主机攻击调查/index.html","19bc93bc2aa4eea844d304daf0a8adb6"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-requests/index.html","866c4e2395bae485776a49ecfa7ea28e"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-urllib/index.html","c7e8776f2a9925b1dc223fc0a69f6bfa"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-正则表达式/index.html","6066703f4ffd17f00b65538437accada"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库BeautifulSoup/index.html","337a2d4799bfac050a234d012d3f07d7"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库XPath/index.html","9a989d9f6d1f55ee292ee9af8e3974e6"],["D:/My_Blog/public/2020/02/21/Python网络编程-TCP/index.html","30a6644c0c5b19006a20705756955cf4"],["D:/My_Blog/public/2020/02/21/Python网络编程-UDP/index.html","de1069db433bd6d888f28bb0cb8643f2"],["D:/My_Blog/public/2020/02/21/SUCTF-Checkin/index.html","3836628b9f7594a286a43c18c8663a67"],["D:/My_Blog/public/2020/02/21/Web安全之文件上传漏洞/index.html","c4ba588f2a1760bcb55e3b22e4e8cde4"],["D:/My_Blog/public/2020/02/21/Web安全之文件包含漏洞/index.html","882b13d568655ef3d725d1a93a9d3e03"],["D:/My_Blog/public/2020/02/21/X-Forwarded-For和Referer/index.html","dde98c04dc91f3741105075e6205d145"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level1-10/index.html","3983707823ef2ec9333dee17649f6699"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level11-20/index.html","bf9e195fca6391417c4c2496388684f3"],["D:/My_Blog/public/2020/02/21/zip格式和zip伪加密/index.html","1f5d8957f240b7b12d0226a602bf7169"],["D:/My_Blog/public/2020/02/21/《机器学习与安全》读书笔记/index.html","6158d50489f6f65988339613a1f6446b"],["D:/My_Blog/public/2020/02/21/十分钟入门Pandas/index.html","6a30844bdf305193fb4b6b2047689cfa"],["D:/My_Blog/public/2020/02/21/栅栏密码/index.html","eefa4f59e7254e353f989d3f8b38c0e3"],["D:/My_Blog/public/2020/02/21/神经网络的数据表示-张量Tensor/index.html","9141a391c954767b89c9a64d0bcecaca"],["D:/My_Blog/public/2020/02/21/记深信服2018秋季校园招聘-技术服务工程师/index.html","7d848079c0842f5d6ede7318dd55a032"],["D:/My_Blog/public/2020/02/21/读书-《叫魂-1768年中国妖术大恐慌》/index.html","c4060c2fc0cb41ce9aaeae89fd5bada6"],["D:/My_Blog/public/2020/02/21/读书-《许三观卖血记》/index.html","ea289c1ca100123a3a9fa8292163a2ee"],["D:/My_Blog/public/2020/02/26/PaperNote-一种情报驱动的安全感知APT防御机制/index.html","e4df1c5695708d76579faac8faa08ef9"],["D:/My_Blog/public/2020/03/05/PaperNote-基于时空特征融合的入侵检测系统模型/index.html","64a3ac0c20604139602c70c716c4c2d4"],["D:/My_Blog/public/2020/03/14/PaperNote-UNICORN：基于Provenance的实时APT检测器/index.html","b23d549ee0343ec681ec4485f32c25d1"],["D:/My_Blog/public/2020/03/19/《网络安全态势感知》读书笔记/index.html","e5ff6e06e9de5b4e8fe2c41de3283501"],["D:/My_Blog/public/2020/03/25/PaperNote-Poirot：对比攻击行为与内核审计记录以进行网络威胁猎杀/index.html","6c8008a693a344e5791449654465eeba"],["D:/My_Blog/public/2020/07/10/OSPF双LSA路由攻击的介绍与实现/index.html","c07549089bbac4df1b2300ccd2d12acd"],["D:/My_Blog/public/2020/08/09/PaperNote-Log2vec/index.html","56be9787187eed449644e5ea95872907"],["D:/My_Blog/public/2021/01/05/Deep-Graph-Library-Overview/index.html","4041008efe94b80bc1dadc074c91986c"],["D:/My_Blog/public/2021/02/10/漏洞靶场安装ngx-lua-waf/index.html","f79b1ae1523e626c38325a2abc92a3a8"],["D:/My_Blog/public/2021/03/07/DGL源码解析-GAT/index.html","cd92b572e1e3a1e9a2994a0f845fbeff"],["D:/My_Blog/public/about/index.html","dee5d3503fb65b311c968726232c1768"],["D:/My_Blog/public/archives/2020/02/index.html","634685264a7f1f65341771bc7f1bf847"],["D:/My_Blog/public/archives/2020/02/page/2/index.html","bb6fdf22833c252ff9c14af46050b888"],["D:/My_Blog/public/archives/2020/02/page/3/index.html","30bdb1b553a60771978d2fcb712c3f7a"],["D:/My_Blog/public/archives/2020/02/page/4/index.html","39874be6dee323e1f5d38e8ab1c8972e"],["D:/My_Blog/public/archives/2020/03/index.html","e5a6a1447605ae9fe039f001d6fd7948"],["D:/My_Blog/public/archives/2020/07/index.html","a2f7c97673cc068e1984d95d88ba4268"],["D:/My_Blog/public/archives/2020/08/index.html","fe59d38d2396b6c5060d140f9730ae54"],["D:/My_Blog/public/archives/2020/index.html","fd3b0d143ae8f95415a1d976a6570fd3"],["D:/My_Blog/public/archives/2020/page/2/index.html","1d71825e34998ad0db281b1f80b974ed"],["D:/My_Blog/public/archives/2020/page/3/index.html","a350009b03ae38d2ed70000d58ab0767"],["D:/My_Blog/public/archives/2020/page/4/index.html","a1028d3491ce071ad79e20e22ab56ec2"],["D:/My_Blog/public/archives/2020/page/5/index.html","39da815d15339b12d90f0afa2bcf700e"],["D:/My_Blog/public/archives/2021/01/index.html","2534b8e9ca5b4d02d3ac5d52d5b708dc"],["D:/My_Blog/public/archives/2021/02/index.html","57ee339fb08d9ed854d4b7bf66584640"],["D:/My_Blog/public/archives/2021/03/index.html","9a584c3e071b8db017878c8dc4c8e22b"],["D:/My_Blog/public/archives/2021/index.html","8db72bd0433e5f6b98020245fa8d4761"],["D:/My_Blog/public/archives/index.html","528c524a0128c13eb5c62891cc303452"],["D:/My_Blog/public/archives/page/2/index.html","d89d0cfebbca6cef7077901f7434bae4"],["D:/My_Blog/public/archives/page/3/index.html","24d6c3d60b59083c82053bc233975868"],["D:/My_Blog/public/archives/page/4/index.html","d4d46af951be58c39b20fd12fedaf517"],["D:/My_Blog/public/archives/page/5/index.html","e4af4eea368771749be0b509230e5754"],["D:/My_Blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/My_Blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/My_Blog/public/categories/LeetCode/index.html","1bacf5852e4ad03876ecc9480ef654ea"],["D:/My_Blog/public/categories/MISC/index.html","c16fee0a629fb36e2163ec42d3500265"],["D:/My_Blog/public/categories/Python/index.html","b03b5f12e2a19c531e228c96b1d2f152"],["D:/My_Blog/public/categories/Web安全/index.html","0dc8e01e579b3c6adc087e5e1c0bba4c"],["D:/My_Blog/public/categories/Web安全/page/2/index.html","13002b432708e288dbdd86a4ebdb796d"],["D:/My_Blog/public/categories/index.html","6e9b4b7a96190ed257a10095088746f2"],["D:/My_Blog/public/categories/安全防护/index.html","6c794484f79965497acf4aed1567c335"],["D:/My_Blog/public/categories/密码学/index.html","05808afe8bb49f5879b9802377fdd14a"],["D:/My_Blog/public/categories/机器学习/index.html","c891f1cde48351e77d4172a9f0620168"],["D:/My_Blog/public/categories/杂谈/index.html","03bf58a0c1df33caadea0264ace68c9f"],["D:/My_Blog/public/categories/漏洞复现/index.html","3607399e506bf590d2c94746d1a0dd6b"],["D:/My_Blog/public/categories/科研/index.html","49b531711580a1b065c0d034899b04db"],["D:/My_Blog/public/categories/网络基础/index.html","c7f9976764ffedf226f5191993867966"],["D:/My_Blog/public/categories/读书/index.html","6e8768459b1ceee73977e05282f27d34"],["D:/My_Blog/public/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["D:/My_Blog/public/css/index.css","1a8770d4815f16850f60f9989c73e11e"],["D:/My_Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/My_Blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/My_Blog/public/index.html","894a13cd4b4665a86e7ca0d73c198912"],["D:/My_Blog/public/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["D:/My_Blog/public/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["D:/My_Blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/My_Blog/public/js/head.js","347edd99f8e3921b45fa617e839d8182"],["D:/My_Blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["D:/My_Blog/public/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["D:/My_Blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/My_Blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/My_Blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/My_Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/My_Blog/public/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["D:/My_Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/My_Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/My_Blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/My_Blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/My_Blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/My_Blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/My_Blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/My_Blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/My_Blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/My_Blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/My_Blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/My_Blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/My_Blog/public/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["D:/My_Blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/My_Blog/public/page/2/index.html","50e682f2d1ac40059f40663240693093"],["D:/My_Blog/public/page/3/index.html","2c2d9b4e1d863a65fc8c486c2308782b"],["D:/My_Blog/public/page/4/index.html","6fd1b73d8402fecd56c5633451a0b37f"],["D:/My_Blog/public/page/5/index.html","7ec8fc09b9ce0d8b6859aebbe097f859"],["D:/My_Blog/public/tags/APT/index.html","9233152382095272f1a881452084cb19"],["D:/My_Blog/public/tags/DGL/index.html","9b900d7635bdafb219d4c7a689ce40f3"],["D:/My_Blog/public/tags/GAT/index.html","1b2f962f977e08260f8de3040b4d3ae8"],["D:/My_Blog/public/tags/GNN/index.html","d1687ff76a283cc0c3ce7b8fc17e4c28"],["D:/My_Blog/public/tags/Graph-Neural-Network/index.html","2abef12dfb866489370e60bfd2594f8a"],["D:/My_Blog/public/tags/LeetCode/index.html","3fcf019cea9b2292225a1cc116d9b174"],["D:/My_Blog/public/tags/MISC/index.html","aff0cb2b3981b47736f368af83f89a65"],["D:/My_Blog/public/tags/Python/index.html","3763c36f344b3a1274789c618b34b3f1"],["D:/My_Blog/public/tags/WAF/index.html","2d4f7ed20a0b9896f313c41b5caf8002"],["D:/My_Blog/public/tags/Web安全/index.html","c60152337b56e4dbf762e20bf4c83a3a"],["D:/My_Blog/public/tags/Web安全/page/2/index.html","f0535c204045c1873fcd9dec0cae325c"],["D:/My_Blog/public/tags/index.html","fd4afb6cf1c31e7b0a75b3c38dd064e4"],["D:/My_Blog/public/tags/入侵检测/index.html","53bf86623e89f8a5d7c706dc28d8c7b0"],["D:/My_Blog/public/tags/威胁猎杀/index.html","5d67cf0660a34e58a285bcfb6117124b"],["D:/My_Blog/public/tags/安全数据科学/index.html","015f35bfc8c164af26640fdaad8fab45"],["D:/My_Blog/public/tags/密码学/index.html","c835e8a1073c0b9455360acbd6368aea"],["D:/My_Blog/public/tags/异常检测/index.html","7db73493ddf3bd43bf35b9bc4ce41546"],["D:/My_Blog/public/tags/态势感知/index.html","c29217901f4e9c9564b9a0bd826db44f"],["D:/My_Blog/public/tags/机器学习/index.html","e47e7ea52bb680c05ea6bd05bdeb0ecd"],["D:/My_Blog/public/tags/杂谈/index.html","56bc94df95e27421909f9fe92064dc45"],["D:/My_Blog/public/tags/爬虫/index.html","51ca4c46057b9f7f914fecb542b7cb8b"],["D:/My_Blog/public/tags/神经网络/index.html","68ce91852e6beb33f4ecb5b22bd2d2f3"],["D:/My_Blog/public/tags/科研/index.html","2ba8e70b3d14cfe63970f1e9c72e51dd"],["D:/My_Blog/public/tags/网络基础/index.html","5f8ffb8d4eb0358c1ec501cb9363da25"],["D:/My_Blog/public/tags/读书/index.html","dcc40623db7008491b876feedf9cf121"],["D:/My_Blog/public/tags/路由攻击/index.html","503d7289372f277168f908cf1b28eb14"]];
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







