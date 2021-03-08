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

var precacheConfig = [["D:/My_Blog/public/1231489.png","649e11b9d2b015e1e36ca0204fb43eec"],["D:/My_Blog/public/2020/02/21/DVWA-CSRF/index.html","e2512f52df83de4bc11c4c5ed9ffe55f"],["D:/My_Blog/public/2020/02/21/DVWA-SQL注入/index.html","7137b3f1f6ca41103be40efd3d2e79c8"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-DOM/index.html","c19b039a25ddcaf0b3da1c3c8461a886"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Reflected/index.html","fbe7c0e29c11b1cd10846e9446e5ffc7"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Stored/index.html","d252591211e549f106790584637c193c"],["D:/My_Blog/public/2020/02/21/DVWA下利用XSS获取Cookie/index.html","5e1f5a22b13e84707727ed820fee3358"],["D:/My_Blog/public/2020/02/21/LeetCode-14-最长公共前缀/index.html","0b8feebaaf13fd64babb61ea9340a2e8"],["D:/My_Blog/public/2020/02/21/LeetCode-53-最大子序和-动态规划法/index.html","7bef04174000e6fc629164314c92070f"],["D:/My_Blog/public/2020/02/21/LeetCode-69-x的平方根-牛顿迭代法/index.html","b8f1075f4188a47700202a3315addc35"],["D:/My_Blog/public/2020/02/21/LeetCode-70-爬楼梯/index.html","18181aee5b44970f1ac23f61b66dd15a"],["D:/My_Blog/public/2020/02/21/MISC中图片隐藏文件分离/index.html","c6d7677e18ca65eb65d7cf024d74b0c3"],["D:/My_Blog/public/2020/02/21/PaperNote-HOLMES：基于可疑信息流的实时APT检测/index.html","4245207f0fae2512f16c6d85a1319ec6"],["D:/My_Blog/public/2020/02/21/PaperNote-SLEUTH：基于COTS审计数据的实时攻击场景重构/index.html","e568ba797d44540bcaf01f69de7fd02e"],["D:/My_Blog/public/2020/02/21/PaperNote-分析大量网络流量以进行APT检测/index.html","ff8a3f3d673cdfa97f42f2d9392076b0"],["D:/My_Blog/public/2020/02/21/PaperNote-基于高效数据流标记和跟踪的可精炼跨主机攻击调查/index.html","2263f7fa5b6ad9e959ddc3f720d916c0"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-requests/index.html","f4dc6eea37852e017c39b75ea79f9b2a"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-urllib/index.html","24aa3908f368787db7d9e314fdba8bd1"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-正则表达式/index.html","621e96c9cc0f12058abb188d28e18ff2"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库BeautifulSoup/index.html","67817d64e4bdc4c7ecd82d22df13856b"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库XPath/index.html","22e5376f4453e59c943198e6c6e92e66"],["D:/My_Blog/public/2020/02/21/Python网络编程-TCP/index.html","64bf29882a9097aa3f719913b7341192"],["D:/My_Blog/public/2020/02/21/Python网络编程-UDP/index.html","3f60187ea19531366feccf76d20e89c7"],["D:/My_Blog/public/2020/02/21/SUCTF-Checkin/index.html","8155a6c1b5c9b641e7b70f1a4ee4a57f"],["D:/My_Blog/public/2020/02/21/Web安全之文件上传漏洞/index.html","40d79276d826882b40e4617c3f06d42b"],["D:/My_Blog/public/2020/02/21/Web安全之文件包含漏洞/index.html","48a2919ac628409f08bbda72bb4a9c72"],["D:/My_Blog/public/2020/02/21/X-Forwarded-For和Referer/index.html","a26ee3c8230692337a0fe813fc060112"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level1-10/index.html","a531c1f384a12aa059ca4018ffd0ead6"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level11-20/index.html","7c0c97c39e32f4a47544b4f18119b874"],["D:/My_Blog/public/2020/02/21/zip格式和zip伪加密/index.html","26c05a04cd42238762762baefd167e72"],["D:/My_Blog/public/2020/02/21/《机器学习与安全》读书笔记/index.html","63683e86c9806652908fedabf986cf87"],["D:/My_Blog/public/2020/02/21/十分钟入门Pandas/index.html","0bd3bd7f2095db30836995567909f4f0"],["D:/My_Blog/public/2020/02/21/栅栏密码/index.html","500b54f899d43c1d2b033624abe924cd"],["D:/My_Blog/public/2020/02/21/神经网络的数据表示-张量Tensor/index.html","90f364ec785c6039fc9f2898ade6c588"],["D:/My_Blog/public/2020/02/21/记深信服2018秋季校园招聘-技术服务工程师/index.html","251dd033ccd9036231a56cfaff181bde"],["D:/My_Blog/public/2020/02/21/读书-《叫魂-1768年中国妖术大恐慌》/index.html","ae43b8bb5041af9ee3688d80287bde46"],["D:/My_Blog/public/2020/02/21/读书-《许三观卖血记》/index.html","b8b25e73ee936bd090ab5fec7875d2bd"],["D:/My_Blog/public/2020/02/26/PaperNote-一种情报驱动的安全感知APT防御机制/index.html","409ae04471a8c6e69ebf4b15e925e6fc"],["D:/My_Blog/public/2020/03/05/PaperNote-基于时空特征融合的入侵检测系统模型/index.html","56bd0a132bd535bf8e403474cadd77c3"],["D:/My_Blog/public/2020/03/14/PaperNote-UNICORN：基于Provenance的实时APT检测器/index.html","d951c3334e8cf75aa6a3bcdb6bd8fd43"],["D:/My_Blog/public/2020/03/19/《网络安全态势感知》读书笔记/index.html","d879d979a1f58d0f1d88fb0ecb7167eb"],["D:/My_Blog/public/2020/03/25/PaperNote-Poirot：对比攻击行为与内核审计记录以进行网络威胁猎杀/index.html","c13b7b122424ca8d763e1e712f5d2b3c"],["D:/My_Blog/public/2020/07/10/OSPF双LSA路由攻击的介绍与实现/index.html","44531a4dcd2175572e3a12db8c0f0420"],["D:/My_Blog/public/2020/08/09/PaperNote-Log2vec/index.html","acab0d33ec1fe1eb669b45333774af89"],["D:/My_Blog/public/2021/01/05/Deep-Graph-Library-Overview/index.html","1d4401792e8c7304667fcefe85701a85"],["D:/My_Blog/public/2021/02/10/漏洞靶场安装ngx-lua-waf/index.html","df3c071536d665500ff94b5110baf13d"],["D:/My_Blog/public/2021/03/07/DGL源码解析-GAT/index.html","4525736fc98b4dfe2bdb560af246c7ea"],["D:/My_Blog/public/2021/03/08/test/index.html","9da755721a694395fbd97a00be8ed0d0"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/index.html","7f1ce862a9819640719c849288f19250"],["D:/My_Blog/public/about/index.html","1ecde7bfb04b1ff56d0cfdbd81374644"],["D:/My_Blog/public/archives/2020/02/index.html","4864706824c38396afa1e1d587099c66"],["D:/My_Blog/public/archives/2020/02/page/2/index.html","437bbaed82fba938173e40ff76b55d1c"],["D:/My_Blog/public/archives/2020/02/page/3/index.html","e55f69570f6bbda4c8511e3306869ad1"],["D:/My_Blog/public/archives/2020/02/page/4/index.html","c0f40481bc2f0e6f151ca8507a88d9c3"],["D:/My_Blog/public/archives/2020/03/index.html","7d1bc80b31d89eb8d218e432c1549ad9"],["D:/My_Blog/public/archives/2020/07/index.html","d21c082b4632ac679146aa379853e95d"],["D:/My_Blog/public/archives/2020/08/index.html","c79fb5dfa004e523525f9167231e42a0"],["D:/My_Blog/public/archives/2020/index.html","c22a5d9e04e1bae63bc6192b38cda3f6"],["D:/My_Blog/public/archives/2020/page/2/index.html","6f4e65d80e13e3d9fa04af91dc3cbae8"],["D:/My_Blog/public/archives/2020/page/3/index.html","e1018beee128b833f568e53d38c152ee"],["D:/My_Blog/public/archives/2020/page/4/index.html","899402338340a67b575674e9a54311ed"],["D:/My_Blog/public/archives/2020/page/5/index.html","a9a25adf4ee804bbb47b24f6efa7f21a"],["D:/My_Blog/public/archives/2021/01/index.html","2d9208bcaa4c2b2ca23e74a4a5fb10d8"],["D:/My_Blog/public/archives/2021/02/index.html","3f039e3086837aa508f33f39202b24db"],["D:/My_Blog/public/archives/2021/03/index.html","106f20eea70809a47acfbe9112ccbd16"],["D:/My_Blog/public/archives/2021/index.html","222e2a7f5e9d7e8ed1ebea920ae490d5"],["D:/My_Blog/public/archives/index.html","35db27608fbb1edd7cb89924b1771eea"],["D:/My_Blog/public/archives/page/2/index.html","254070d818c81ff8accd042b8cb203ef"],["D:/My_Blog/public/archives/page/3/index.html","7181b1bb192bb360c670ec216ed7e31d"],["D:/My_Blog/public/archives/page/4/index.html","77fc9193ec1f7e7c5fa8cc1c484a98bb"],["D:/My_Blog/public/archives/page/5/index.html","2cb2cce3d8c575d99806aa92eebd6118"],["D:/My_Blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/My_Blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/My_Blog/public/categories/LeetCode/index.html","01709e0136b9c709e08c914ae022603c"],["D:/My_Blog/public/categories/MISC/index.html","6b8bcde1964c36f0b83bb1bb831f7678"],["D:/My_Blog/public/categories/Python/index.html","34e3986a5b5d855a54a451a8526ce845"],["D:/My_Blog/public/categories/Web安全/index.html","86eb65fcddf1217024ad923fc2636add"],["D:/My_Blog/public/categories/Web安全/page/2/index.html","ebc9dc20763f313311fc08171fd6367e"],["D:/My_Blog/public/categories/index.html","643fa46337233e30fd3e578ff073bc6c"],["D:/My_Blog/public/categories/安全防护/index.html","68a06824080da79ee95b7d0de656dde2"],["D:/My_Blog/public/categories/密码学/index.html","15c9a53f2c822d140cd8fef2000af084"],["D:/My_Blog/public/categories/异常检测/index.html","8e04fbc407311db14729a574ad3dd896"],["D:/My_Blog/public/categories/机器学习/index.html","03c13e614cbfd05157ebe6428a49740d"],["D:/My_Blog/public/categories/杂谈/index.html","6e106fa6844ea9eb01141a2778de5bb8"],["D:/My_Blog/public/categories/漏洞复现/index.html","7716efaa89f82a3640037621291ebee0"],["D:/My_Blog/public/categories/科研/index.html","861f3ef32f2f458ba3253ec9d7fe76e0"],["D:/My_Blog/public/categories/网络基础/index.html","5c984882b8fa2181eb84433cd93cc487"],["D:/My_Blog/public/categories/读书/index.html","33e3653700e9cf662442e8d2889f5151"],["D:/My_Blog/public/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["D:/My_Blog/public/css/index.css","1a8770d4815f16850f60f9989c73e11e"],["D:/My_Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/My_Blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/My_Blog/public/index.html","414eebb6fc7fe550a1ef3ad042fa7eac"],["D:/My_Blog/public/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["D:/My_Blog/public/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["D:/My_Blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/My_Blog/public/js/head.js","347edd99f8e3921b45fa617e839d8182"],["D:/My_Blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["D:/My_Blog/public/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["D:/My_Blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/My_Blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/My_Blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/My_Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/My_Blog/public/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["D:/My_Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/My_Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/My_Blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/My_Blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/My_Blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/My_Blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/My_Blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/My_Blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/My_Blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/My_Blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/My_Blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/My_Blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/My_Blog/public/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["D:/My_Blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/My_Blog/public/page/2/index.html","a87c188c7d09014a68188699e5ea79ac"],["D:/My_Blog/public/page/3/index.html","21933d385552cd4b9c8c6b38cf4e5640"],["D:/My_Blog/public/page/4/index.html","4dabd121f7676dd5fb2ac2a69e2955be"],["D:/My_Blog/public/page/5/index.html","56c001b190252cec506adffc825ef0d1"],["D:/My_Blog/public/tags/APT/index.html","108f0502a56fcbdaf9e12a10a7094ef0"],["D:/My_Blog/public/tags/Anomaly-Detection/index.html","33b1e8bb8d381a2941cf0b530a04e186"],["D:/My_Blog/public/tags/DGL/index.html","81d099d8b4046819f5de0f19d8af6483"],["D:/My_Blog/public/tags/GAT/index.html","b05e15b8d310fb6f191587dd456fabcb"],["D:/My_Blog/public/tags/GNN/index.html","005e67881a0b48f22fdec58581d3f93a"],["D:/My_Blog/public/tags/Graph-Neural-Network/index.html","8b580d8b264f462b99e644be013fafb6"],["D:/My_Blog/public/tags/LeetCode/index.html","1b269744e8e21a408aee1d49dff07def"],["D:/My_Blog/public/tags/MISC/index.html","ecaffbb0b586f4beabcc8016ce125dfa"],["D:/My_Blog/public/tags/Outlier-Analysis/index.html","46a13929d88f4aa0ab0c9894c261983a"],["D:/My_Blog/public/tags/Python/index.html","550e5a75796d394971552e439747475f"],["D:/My_Blog/public/tags/WAF/index.html","2a9f21007d7926f2ec732c7189e64423"],["D:/My_Blog/public/tags/Web安全/index.html","4d105772ad78382a05fe57dba936c22d"],["D:/My_Blog/public/tags/Web安全/page/2/index.html","db4fff9042b149b7f59f2636b38e7517"],["D:/My_Blog/public/tags/index.html","4e40ab7aa568d42b0df3ae555201a826"],["D:/My_Blog/public/tags/入侵检测/index.html","d0cf355627c0a9a72d96ad925b519d92"],["D:/My_Blog/public/tags/威胁猎杀/index.html","fbb1af6f3c6d01865502fb6af3de2336"],["D:/My_Blog/public/tags/安全数据科学/index.html","4c55e93c13531de184cdc08fed1093f9"],["D:/My_Blog/public/tags/密码学/index.html","8e1558ac531313267675e5e4df4a7db4"],["D:/My_Blog/public/tags/异常检测/index.html","c60d58b705c8f18a8b517a62f3e59858"],["D:/My_Blog/public/tags/态势感知/index.html","19662b3595bc215533cbf05c1a2f50b3"],["D:/My_Blog/public/tags/机器学习/index.html","3cdd1b026d4b2a4cc7440eca3bcece99"],["D:/My_Blog/public/tags/杂谈/index.html","c76c34490a52d34249158e4901dc76bf"],["D:/My_Blog/public/tags/爬虫/index.html","68ba7405833025d13ff1ea14284d9d3d"],["D:/My_Blog/public/tags/神经网络/index.html","6c24406a7a7c422110fc607cc5cdb3a0"],["D:/My_Blog/public/tags/科研/index.html","fc60e309e8f08a9805bd0146850f438b"],["D:/My_Blog/public/tags/网络基础/index.html","e2dae48c8f061d3147b925fd5932b1a7"],["D:/My_Blog/public/tags/读书/index.html","2eb695ad2318c9d12eb946c63e6d6cba"],["D:/My_Blog/public/tags/路由攻击/index.html","4a64f2b5f5745a993b2c314b9a027346"]];
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







