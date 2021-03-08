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

var precacheConfig = [["D:/My_Blog/public/1231489.png","649e11b9d2b015e1e36ca0204fb43eec"],["D:/My_Blog/public/2020/02/21/DVWA-CSRF/index.html","397d1917fb88830595b893c2752aa5ab"],["D:/My_Blog/public/2020/02/21/DVWA-SQL注入/index.html","a62c317da90f67ed52b24578445d9715"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-DOM/index.html","aae5f48fde6c294316dfa4fb58af7dcb"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Reflected/index.html","d222e5eefa08b32b5cded8998af33df6"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Stored/index.html","5f691a8847ab1e1eedfd98edf183f7f7"],["D:/My_Blog/public/2020/02/21/DVWA下利用XSS获取Cookie/index.html","153b1179bf32a627e4f85a182763252e"],["D:/My_Blog/public/2020/02/21/LeetCode-14-最长公共前缀/index.html","0ceeaab9aa48feb589ea17ac0dbfed06"],["D:/My_Blog/public/2020/02/21/LeetCode-53-最大子序和-动态规划法/index.html","a9f4eb3cd6308078b61c9ddba8d953be"],["D:/My_Blog/public/2020/02/21/LeetCode-69-x的平方根-牛顿迭代法/index.html","0a224a6afb70da04ffd40ad73b082a44"],["D:/My_Blog/public/2020/02/21/LeetCode-70-爬楼梯/index.html","6f413c1a2558f8d5cef64a92ade42a40"],["D:/My_Blog/public/2020/02/21/MISC中图片隐藏文件分离/index.html","31a6f48ce576f23ac392a876f6161291"],["D:/My_Blog/public/2020/02/21/PaperNote-HOLMES：基于可疑信息流的实时APT检测/index.html","722afb5d97583ac0aa1c3bb3ed2dcd6e"],["D:/My_Blog/public/2020/02/21/PaperNote-SLEUTH：基于COTS审计数据的实时攻击场景重构/index.html","f647248e093ff05ff68064f028faabc9"],["D:/My_Blog/public/2020/02/21/PaperNote-分析大量网络流量以进行APT检测/index.html","7ee3fb209c4aece4db84da45c91de4c1"],["D:/My_Blog/public/2020/02/21/PaperNote-基于高效数据流标记和跟踪的可精炼跨主机攻击调查/index.html","a4b23d521d45247e4b201c20dc9384e1"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-requests/index.html","d49c1817c80a3be193cc01a644e53693"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-urllib/index.html","5a10055ad67d5a7ea90dfffe60a3f322"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-正则表达式/index.html","d27755e1d5ec584d55572b16c8b82119"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库BeautifulSoup/index.html","a86cd64bd62d1bcf8fff79a6aa1cb808"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库XPath/index.html","5622390d167305a171048d3bcba1efe7"],["D:/My_Blog/public/2020/02/21/Python网络编程-TCP/index.html","057e4f535eb19b672ba4c968f4e3a3e7"],["D:/My_Blog/public/2020/02/21/Python网络编程-UDP/index.html","17dca72ba24f31d191d96c566db60a6b"],["D:/My_Blog/public/2020/02/21/SUCTF-Checkin/index.html","8f0e1c73f74ed00ed18ab64073b2a432"],["D:/My_Blog/public/2020/02/21/Web安全之文件上传漏洞/index.html","a30ec4cef95a40ee1670cacf5eabab26"],["D:/My_Blog/public/2020/02/21/Web安全之文件包含漏洞/index.html","ae8c759e7d8ed69f62890e8575bb9ad0"],["D:/My_Blog/public/2020/02/21/X-Forwarded-For和Referer/index.html","2a0712fecdfed058842c91d1b8e01e1b"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level1-10/index.html","bf7831d6c4b0cae836f7797b9dc9e530"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level11-20/index.html","630f81947d5ee8533a39aac1944747a7"],["D:/My_Blog/public/2020/02/21/zip格式和zip伪加密/index.html","3d2cff265e4e2da18aaa2d69ac4d8496"],["D:/My_Blog/public/2020/02/21/《机器学习与安全》读书笔记/index.html","3946553db615be36da8abd3ee0aa8ed7"],["D:/My_Blog/public/2020/02/21/十分钟入门Pandas/index.html","e9bc078b343c52c35c912350fdb11e6c"],["D:/My_Blog/public/2020/02/21/栅栏密码/index.html","992e6ba86df9c69b1b4eb79cbf9dcbb1"],["D:/My_Blog/public/2020/02/21/神经网络的数据表示-张量Tensor/index.html","8f8245b614aec91aa83611ef5d3ccfb6"],["D:/My_Blog/public/2020/02/21/记深信服2018秋季校园招聘-技术服务工程师/index.html","a4c06058d8235a52be9c47e13bfb8064"],["D:/My_Blog/public/2020/02/21/读书-《叫魂-1768年中国妖术大恐慌》/index.html","ba9299f10c79b54586608a2f04c8121f"],["D:/My_Blog/public/2020/02/21/读书-《许三观卖血记》/index.html","179fe1ef53cf750f29f450894a80abec"],["D:/My_Blog/public/2020/02/26/PaperNote-一种情报驱动的安全感知APT防御机制/index.html","a2279d95b276e98baee92dbdc7b860be"],["D:/My_Blog/public/2020/03/05/PaperNote-基于时空特征融合的入侵检测系统模型/index.html","a514fa0ab456a7bc309a4b9272973f53"],["D:/My_Blog/public/2020/03/14/PaperNote-UNICORN：基于Provenance的实时APT检测器/index.html","918204741eeccb87adda93351254731c"],["D:/My_Blog/public/2020/03/19/《网络安全态势感知》读书笔记/index.html","7b3ad44c75eea1a31d7188837b678033"],["D:/My_Blog/public/2020/03/25/PaperNote-Poirot：对比攻击行为与内核审计记录以进行网络威胁猎杀/index.html","54c0acb98171111c1b8d9bd5b1cbd405"],["D:/My_Blog/public/2020/07/10/OSPF双LSA路由攻击的介绍与实现/index.html","48fa2c88600f92be5de991b3a84d59f5"],["D:/My_Blog/public/2020/08/09/PaperNote-Log2vec/index.html","5ab2b91ba74210b8256f4fe5102ff103"],["D:/My_Blog/public/2021/01/05/Deep-Graph-Library-Overview/index.html","dc488c83853a5b215f7cfb7d42cb3980"],["D:/My_Blog/public/2021/02/10/漏洞靶场安装ngx-lua-waf/index.html","84350f0ab2ce12da73e9fbc6d39563b5"],["D:/My_Blog/public/2021/03/07/DGL源码解析-GAT/index.html","a72dfa405f9a69d90b5108c7a3b59252"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/index.html","a21b89baf7243a0343e498fe948c71ad"],["D:/My_Blog/public/about/index.html","dbd86a79f793e39ea583a1d9ba530ac4"],["D:/My_Blog/public/archives/2020/02/index.html","57da9610138a7f4bfbb0c19a33bc8bce"],["D:/My_Blog/public/archives/2020/02/page/2/index.html","eb384c675432681542d07c69f9bc4b7d"],["D:/My_Blog/public/archives/2020/02/page/3/index.html","499a9d890abf9cf9051b09be5f7a1e40"],["D:/My_Blog/public/archives/2020/02/page/4/index.html","7ffeddc1ad7638c59ed6a42f1fcfed60"],["D:/My_Blog/public/archives/2020/03/index.html","16c680a1fd26c4a1b609c555727df1b3"],["D:/My_Blog/public/archives/2020/07/index.html","ee1f52b19444218c543365c45c0769c2"],["D:/My_Blog/public/archives/2020/08/index.html","bedbf2093b8dc9a80dc4aa07ffd1d069"],["D:/My_Blog/public/archives/2020/index.html","96f1fd36ca3b99fb1e7345750b8014f8"],["D:/My_Blog/public/archives/2020/page/2/index.html","6e1fe7c8781aac1df82bf11c6dd4cf16"],["D:/My_Blog/public/archives/2020/page/3/index.html","eccff2bfee84882a20f48d0380bd5e96"],["D:/My_Blog/public/archives/2020/page/4/index.html","98d20e572ddd75982cf6118337b2cf44"],["D:/My_Blog/public/archives/2020/page/5/index.html","ffb637601a7a635ab26a6a38774e9a33"],["D:/My_Blog/public/archives/2021/01/index.html","4762d8a9ece2b99f736c8bc291b524fe"],["D:/My_Blog/public/archives/2021/02/index.html","027965c41b20bae33f1925d529f57849"],["D:/My_Blog/public/archives/2021/03/index.html","a575875b9fdcf63d35ca7711a2f5a986"],["D:/My_Blog/public/archives/2021/index.html","13713d5995397f4a251dae915ec1e350"],["D:/My_Blog/public/archives/index.html","095c069c25a57d1edd49417d02bfe5eb"],["D:/My_Blog/public/archives/page/2/index.html","86c80f86d6c6add11cfca073d4882e69"],["D:/My_Blog/public/archives/page/3/index.html","6170786e10374d2e0db41130171774f5"],["D:/My_Blog/public/archives/page/4/index.html","d0d38cb65e05ce8efa19a9225c651825"],["D:/My_Blog/public/archives/page/5/index.html","ccdd0a13542b011b563d393d655e83bf"],["D:/My_Blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/My_Blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/My_Blog/public/categories/LeetCode/index.html","b59670d9bb5fc36c44e770a3da73a422"],["D:/My_Blog/public/categories/MISC/index.html","fafe36417175091670d7c03428b1a1cc"],["D:/My_Blog/public/categories/Python/index.html","220e67a296f11e64abd23f95df4a7013"],["D:/My_Blog/public/categories/Web安全/index.html","98e80604d39a89233dab3373950aa382"],["D:/My_Blog/public/categories/Web安全/page/2/index.html","3542e92ba5fe03cbbe58822837404e8f"],["D:/My_Blog/public/categories/index.html","da82b8c943151adcea6a4a46a51ef7b2"],["D:/My_Blog/public/categories/安全防护/index.html","7aef3bcb0cf79fc2bee7057398d42fb1"],["D:/My_Blog/public/categories/密码学/index.html","bcfb812f4e6916adf91df4c9f19411e1"],["D:/My_Blog/public/categories/异常检测/index.html","379347f6f2be6ebb4a56052f6a85370f"],["D:/My_Blog/public/categories/机器学习/index.html","15bac4ee03bcb9e2f73efd2de92d24a1"],["D:/My_Blog/public/categories/杂谈/index.html","d9e885903c3ce87d9cd5bb8bd9f8290c"],["D:/My_Blog/public/categories/漏洞复现/index.html","e2533e08c3041fd5bd4c290844785e7a"],["D:/My_Blog/public/categories/科研/index.html","8768eededc1f0efbca4e72100006910d"],["D:/My_Blog/public/categories/网络基础/index.html","0f100a0b26395ab6a19d5c51d8cfc4bc"],["D:/My_Blog/public/categories/读书/index.html","e168763e746caa778eae2557ff902ad4"],["D:/My_Blog/public/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["D:/My_Blog/public/css/index.css","1a8770d4815f16850f60f9989c73e11e"],["D:/My_Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/My_Blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/My_Blog/public/index.html","c57cac08c810cc21494223c504f337a6"],["D:/My_Blog/public/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["D:/My_Blog/public/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["D:/My_Blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/My_Blog/public/js/head.js","347edd99f8e3921b45fa617e839d8182"],["D:/My_Blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["D:/My_Blog/public/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["D:/My_Blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/My_Blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/My_Blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/My_Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/My_Blog/public/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["D:/My_Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/My_Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/My_Blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/My_Blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/My_Blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/My_Blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/My_Blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/My_Blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/My_Blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/My_Blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/My_Blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/My_Blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/My_Blog/public/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["D:/My_Blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/My_Blog/public/page/2/index.html","66a1dae040cd7a38b10a6fd8bea51663"],["D:/My_Blog/public/page/3/index.html","fd3aa2478ec2963a4810169d3d2cc410"],["D:/My_Blog/public/page/4/index.html","a95458de0903b9cb8fbce13b9fefd9f8"],["D:/My_Blog/public/page/5/index.html","e2f4bc30c02e6dd4eeab7eb2c137371d"],["D:/My_Blog/public/tags/APT/index.html","217d91027050731d74f87460574f5739"],["D:/My_Blog/public/tags/Anomaly-Detection/index.html","1df7e71fa64bbfc103a104ac5b0ff362"],["D:/My_Blog/public/tags/DGL/index.html","5d7beaf8e00a2d2210ce9a2598fb1a68"],["D:/My_Blog/public/tags/GAT/index.html","a3053a40b3a67d351fd0acd54f40eb96"],["D:/My_Blog/public/tags/GNN/index.html","eeabd6feb44e48db092a1e44f4bc7cbb"],["D:/My_Blog/public/tags/Graph-Neural-Network/index.html","2953413853cecb189ca28ca418bc8da7"],["D:/My_Blog/public/tags/LeetCode/index.html","7c38ce563b82ab51a39dfc66a47c51c2"],["D:/My_Blog/public/tags/MISC/index.html","35d4d6ebf4c24bd6917e8f7e205ccc06"],["D:/My_Blog/public/tags/Outlier-Analysis/index.html","de1c3ae2c16eec624b8525ee5207e447"],["D:/My_Blog/public/tags/Python/index.html","6f8735bc2a96540d444355505d9c4982"],["D:/My_Blog/public/tags/WAF/index.html","7b7d4d525849b4c39e71dc5226242045"],["D:/My_Blog/public/tags/Web安全/index.html","c81531caebf0632a472d2ad24d5ebe68"],["D:/My_Blog/public/tags/Web安全/page/2/index.html","e5d10f2ae99a5446633ada4738045a03"],["D:/My_Blog/public/tags/index.html","174077cf0609962f5c2fda75422513cd"],["D:/My_Blog/public/tags/入侵检测/index.html","10f323cd5519d70a391881d5b710bc7d"],["D:/My_Blog/public/tags/威胁猎杀/index.html","4aa8a535de4a17b2c21d4553adf3265d"],["D:/My_Blog/public/tags/安全数据科学/index.html","0cfd0fd6bdcb4024270f3bcc6354cbd9"],["D:/My_Blog/public/tags/密码学/index.html","c269968af12e94a25ab187f83cb3db68"],["D:/My_Blog/public/tags/异常检测/index.html","5bd477347f26e8e2ec1e9d1528c4674a"],["D:/My_Blog/public/tags/态势感知/index.html","ffae21e228978affdab85d259891fa17"],["D:/My_Blog/public/tags/机器学习/index.html","7ae5d1d01c6d5673fdb7a074cf5fc204"],["D:/My_Blog/public/tags/杂谈/index.html","3fa8025f9dd236dd8e7650cf41f237ff"],["D:/My_Blog/public/tags/爬虫/index.html","2c2d86d78f6fc3de7308067148792e22"],["D:/My_Blog/public/tags/神经网络/index.html","288e09921793ce6ba2925129d039dbc7"],["D:/My_Blog/public/tags/科研/index.html","6093aed405018b0b2f264e8afa1335dc"],["D:/My_Blog/public/tags/网络基础/index.html","a557961a2e7fb44a4eca71ae1976b02b"],["D:/My_Blog/public/tags/读书/index.html","64f59c30451fad5b772bc5a67791cd64"],["D:/My_Blog/public/tags/路由攻击/index.html","1e6532b8bb2fc759f5ce2ac8b360e572"]];
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







