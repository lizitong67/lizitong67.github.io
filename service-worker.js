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

var precacheConfig = [["D:/My_Blog/public/1231489.png","649e11b9d2b015e1e36ca0204fb43eec"],["D:/My_Blog/public/2020/02/21/DVWA-CSRF/index.html","ed791ae325bfcc34435be70b44398b0e"],["D:/My_Blog/public/2020/02/21/DVWA-SQL注入/index.html","655c4dbe6220ee35e45d624d0925113e"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-DOM/index.html","f75626b474713f1952458290bdbd2f06"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Reflected/index.html","af1b7bcf2108bd4b62d426145b540da5"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Stored/index.html","d275b4002458c8de12fd73bc3806ca9c"],["D:/My_Blog/public/2020/02/21/DVWA下利用XSS获取Cookie/index.html","dad1feb006b860551d84465de2890681"],["D:/My_Blog/public/2020/02/21/LeetCode-14-最长公共前缀/index.html","ccd43dfd26276d697bfd478602ba055f"],["D:/My_Blog/public/2020/02/21/LeetCode-53-最大子序和-动态规划法/index.html","9d15d9a569c2703bd36282a8198d6190"],["D:/My_Blog/public/2020/02/21/LeetCode-69-x的平方根-牛顿迭代法/index.html","4cdf1d95e04e9f84ce3ff017e04c334e"],["D:/My_Blog/public/2020/02/21/LeetCode-70-爬楼梯/index.html","4b58d799d42e7dcc5fa06652f2c8c05d"],["D:/My_Blog/public/2020/02/21/MISC中图片隐藏文件分离/index.html","892d8174d6b5d47cfe22e697251023ba"],["D:/My_Blog/public/2020/02/21/PaperNote-HOLMES：基于可疑信息流的实时APT检测/index.html","42177e17b6b50745d28c2302f401ada3"],["D:/My_Blog/public/2020/02/21/PaperNote-SLEUTH：基于COTS审计数据的实时攻击场景重构/index.html","17a98ff1099c5109fd3c0bbc442ee94f"],["D:/My_Blog/public/2020/02/21/PaperNote-分析大量网络流量以进行APT检测/index.html","b86663f03a0a2b402e2e22d785665488"],["D:/My_Blog/public/2020/02/21/PaperNote-基于高效数据流标记和跟踪的可精炼跨主机攻击调查/index.html","62a842425e5ce7a502a0377570c61fe4"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-requests/index.html","433daddb1c4cdbc2438436138b497cbb"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-urllib/index.html","7747a27e481f892f7f1db5fe361d4083"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-正则表达式/index.html","ee96dc6c9ef050c9f60e89e789086de5"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库BeautifulSoup/index.html","4501d1b5581e8602c5f23dab0bf7ab99"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库XPath/index.html","376d789f961dee107fc54ce4c02f1c09"],["D:/My_Blog/public/2020/02/21/Python网络编程-TCP/index.html","a353028768f666bec991f21a288ec394"],["D:/My_Blog/public/2020/02/21/Python网络编程-UDP/index.html","8527c47ca56694d50bfe8fa1e3f44247"],["D:/My_Blog/public/2020/02/21/SUCTF-Checkin/index.html","dcb1521f7bdd1316d957990c3bbc2c43"],["D:/My_Blog/public/2020/02/21/Web安全之文件上传漏洞/index.html","abad258ba37c0def70d7b40c21d552b2"],["D:/My_Blog/public/2020/02/21/Web安全之文件包含漏洞/index.html","6be51fa4345436e9b21faabf6fc7c274"],["D:/My_Blog/public/2020/02/21/X-Forwarded-For和Referer/index.html","08aed55b432d191d3f9d17252346175b"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level1-10/index.html","b6a21590ab4d875059380c9909f5cbe2"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level11-20/index.html","818cd650a3e5ff790bc7c3adbf89003b"],["D:/My_Blog/public/2020/02/21/zip格式和zip伪加密/index.html","5b4b7d80152a3210ec3dfd7770b3c7c1"],["D:/My_Blog/public/2020/02/21/《机器学习与安全》读书笔记/index.html","df218d3e4e6c46330227144b120a57aa"],["D:/My_Blog/public/2020/02/21/十分钟入门Pandas/index.html","dee76a4875f606e52df7481279650711"],["D:/My_Blog/public/2020/02/21/栅栏密码/index.html","13828e924f1f29edeb12dad21ae6c987"],["D:/My_Blog/public/2020/02/21/神经网络的数据表示-张量Tensor/index.html","b5434b7f743fbab3bfc163e591811128"],["D:/My_Blog/public/2020/02/21/记深信服2018秋季校园招聘-技术服务工程师/index.html","71d5e550527f58b21964b24d70bfdc27"],["D:/My_Blog/public/2020/02/21/读书-《叫魂-1768年中国妖术大恐慌》/index.html","fd473097d242c52b6e16b9789328d29d"],["D:/My_Blog/public/2020/02/21/读书-《许三观卖血记》/index.html","e0ce7c2fc1e1ba39b20bbb91159a762c"],["D:/My_Blog/public/2020/02/26/PaperNote-一种情报驱动的安全感知APT防御机制/index.html","e136a28798c99f8e58da40eebb9e3920"],["D:/My_Blog/public/2020/03/05/PaperNote-基于时空特征融合的入侵检测系统模型/index.html","e4c9386ae3f2f4c5df9afcbce1648857"],["D:/My_Blog/public/2020/03/14/PaperNote-UNICORN：基于Provenance的实时APT检测器/index.html","090f96d5582b7a0e64629baadc067689"],["D:/My_Blog/public/2020/03/19/《网络安全态势感知》读书笔记/index.html","eeff734bc045cc6242d12e791bec1a13"],["D:/My_Blog/public/2020/03/25/PaperNote-Poirot：对比攻击行为与内核审计记录以进行网络威胁猎杀/index.html","5a05e51ee8eec1d2b313b28ed87190cd"],["D:/My_Blog/public/2020/07/10/OSPF双LSA路由攻击的介绍与实现/index.html","7c968d8ec8228c7b8cbffdca3e068329"],["D:/My_Blog/public/2020/08/09/PaperNote-Log2vec/index.html","9ba1c919d4b47c2bb066aa2ef0f9ca25"],["D:/My_Blog/public/2021/02/10/漏洞靶场安装ngx-lua-waf/index.html","3af2e0847df411629b6aaddb6024bc7b"],["D:/My_Blog/public/2021/03/07/DGL源码解析-GAT/index.html","c6caaebbb6834b6370a7e4e280fedc94"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210306101853084.png","1f88eec15610e53eb4ebda7da093bbf4"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210306102622681.png","f126f726b919d5e116657f93bdab1064"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210310211557467.png","3964f3539b4f9c8d887d76303981c70b"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210312154228666.png","8c41042fd087ea28f382c75977a53022"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210312160437581.png","7dfd84c6e78a8e3fd408b86117f6f22d"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210312160529128.png","42341b679ec265b46862882df54dc07c"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210312231044909.png","463e395574a3ca56bab73f2ee3e84cc2"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210313144517562.png","dba38892c49b04543844e829bc2338c9"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210313144810442.png","3cb4e4f9f220c5ffb9f650a6380f2da5"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210313145905999.png","aedafb3befcb037c57c840e79cc1b868"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/index.html","81ee56cfb0c4ce2632f1b15ce6f18e2b"],["D:/My_Blog/public/2021/03/14/DGL源码解析-GCN/index.html","f7603c074b2467753b88e3e101685c6e"],["D:/My_Blog/public/2021/03/15/DGL源码解析-GraphSAGE/index.html","2e4ef807887d3d8431d25e39a95829e7"],["D:/My_Blog/public/2021/03/17/Deep-Graph-Library/index.html","ba830de794b668bcd60644388e1955f7"],["D:/My_Blog/public/about/index.html","494738cd0ed6462e9a412856210d9dc1"],["D:/My_Blog/public/archives/2020/02/index.html","152d3646c3d8c9ad91955ef95242f2d1"],["D:/My_Blog/public/archives/2020/02/page/2/index.html","d5a019ee95168a6b12f4dffa8be0e7a8"],["D:/My_Blog/public/archives/2020/02/page/3/index.html","628abdee4dea3f5f54f78bcaf174905a"],["D:/My_Blog/public/archives/2020/02/page/4/index.html","308422eecce2440990368d5e489d24ce"],["D:/My_Blog/public/archives/2020/03/index.html","72ec0b36500a0e041f9aa146a077ab07"],["D:/My_Blog/public/archives/2020/07/index.html","bc81ad1ef65aa79e2d935b61bec70d5f"],["D:/My_Blog/public/archives/2020/08/index.html","5ac6df48829a55d35d5662f543c7dac1"],["D:/My_Blog/public/archives/2020/index.html","3f88a02aef83d94ab5f48a38eb183f7f"],["D:/My_Blog/public/archives/2020/page/2/index.html","4b86073cecd96e2e321251dcfe699d8c"],["D:/My_Blog/public/archives/2020/page/3/index.html","b1c3beefeeed352ac8d4c6f714a974ce"],["D:/My_Blog/public/archives/2020/page/4/index.html","8dfbc6fb3391718aeb0eadff27c55612"],["D:/My_Blog/public/archives/2020/page/5/index.html","ee0bb44626c894a959b5a74a0558acd7"],["D:/My_Blog/public/archives/2021/02/index.html","6a6f8cedd891d13bdfc5cfa8de6989be"],["D:/My_Blog/public/archives/2021/03/index.html","324884f8c6a2acd18dcd6daf2a827183"],["D:/My_Blog/public/archives/2021/index.html","05060360db39ed652bc7766ceeb129a0"],["D:/My_Blog/public/archives/index.html","ce12d8015cb2454fae0a31aa9aaa9b38"],["D:/My_Blog/public/archives/page/2/index.html","1c27ab83851431c24a97cbeed0073d4b"],["D:/My_Blog/public/archives/page/3/index.html","94baca56afeba3a5933c29efd4fe7416"],["D:/My_Blog/public/archives/page/4/index.html","35672ff5d913d7f6b21cbd7c9d8c1874"],["D:/My_Blog/public/archives/page/5/index.html","083527ad95dd6243bf3d8184ff9d32bd"],["D:/My_Blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/My_Blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/My_Blog/public/categories/LeetCode/index.html","32128abf7e7b62bc9cc184a64cb28c95"],["D:/My_Blog/public/categories/MISC/index.html","f41b9d74e3a7b90e80e67b46f9968a7c"],["D:/My_Blog/public/categories/Python/index.html","18b965e1670edc20b57186502852de6f"],["D:/My_Blog/public/categories/Web安全/index.html","051d7d10680f7a3e405fed8839ff14e1"],["D:/My_Blog/public/categories/Web安全/page/2/index.html","87eb837e6db6a3e56c628d919f23ec65"],["D:/My_Blog/public/categories/index.html","fa05751453166ac2d2a69a05f9e72071"],["D:/My_Blog/public/categories/安全防护/index.html","a095a80a5a84dbf3d19a8304743c5d4c"],["D:/My_Blog/public/categories/密码学/index.html","b203a7925ef96344ba0736f480e305ec"],["D:/My_Blog/public/categories/异常检测/index.html","637652c0cb6fb1ae1837962d94467381"],["D:/My_Blog/public/categories/机器学习/index.html","07833c698a8592b22013f40c5c0e23a8"],["D:/My_Blog/public/categories/杂谈/index.html","49e25dcb3fe033733e49f423fc85de4e"],["D:/My_Blog/public/categories/漏洞复现/index.html","1d84144eba024865a835554686544ff6"],["D:/My_Blog/public/categories/科研/index.html","8ae6de36ea596624054e0915f43a1e42"],["D:/My_Blog/public/categories/网络基础/index.html","a9ef55f5f77547434be40ecfca2809da"],["D:/My_Blog/public/categories/读书/index.html","e8669d909535fba52c49c335cc8f4637"],["D:/My_Blog/public/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["D:/My_Blog/public/css/index.css","1a8770d4815f16850f60f9989c73e11e"],["D:/My_Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/My_Blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/My_Blog/public/index.html","8c3efdc16bee51016d7d2657701a8a7c"],["D:/My_Blog/public/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["D:/My_Blog/public/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["D:/My_Blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/My_Blog/public/js/head.js","347edd99f8e3921b45fa617e839d8182"],["D:/My_Blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["D:/My_Blog/public/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["D:/My_Blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/My_Blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/My_Blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/My_Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/My_Blog/public/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["D:/My_Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/My_Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/My_Blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/My_Blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/My_Blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/My_Blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/My_Blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/My_Blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/My_Blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/My_Blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/My_Blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/My_Blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/My_Blog/public/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["D:/My_Blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/My_Blog/public/page/2/index.html","f8f8ca9eed254407828f9d675433a7f9"],["D:/My_Blog/public/page/3/index.html","cf5649afdd2b000d5e06190bf258dc63"],["D:/My_Blog/public/page/4/index.html","277ba606736e0509c9e225611472758f"],["D:/My_Blog/public/page/5/index.html","1dcdc0edf6075ba5373a727696cffa45"],["D:/My_Blog/public/tags/APT/index.html","3a9972fd47535e9dc795548dfa6d993a"],["D:/My_Blog/public/tags/Anomaly-Detection/index.html","a63695e01701cc639f7843b0dafcbe7f"],["D:/My_Blog/public/tags/DGL/index.html","389ae670cf84d2c6ec60abd615c7104b"],["D:/My_Blog/public/tags/GAT/index.html","832a1786c699ef83c70bcc7e2494086b"],["D:/My_Blog/public/tags/GCN/index.html","da4431caf7be07f2c202ddc23ee1389c"],["D:/My_Blog/public/tags/GNN/index.html","0574d4c59a8b4dccb33317468a6b2242"],["D:/My_Blog/public/tags/GraphSAGE/index.html","8b77d737ba6058b49b16902e93b9bbcc"],["D:/My_Blog/public/tags/LeetCode/index.html","7de020f8a8eee4a062df0bda3ba83dc8"],["D:/My_Blog/public/tags/MISC/index.html","727d84871f3b1eadc2f62c4085e4c044"],["D:/My_Blog/public/tags/Outlier-Analysis/index.html","a9dcdc1828da9f3d3ef8584f94081c85"],["D:/My_Blog/public/tags/Python/index.html","877c38e8611fa052f8e7e662fbeb1ba7"],["D:/My_Blog/public/tags/WAF/index.html","cf8fed6fd38c42cc43fae3610b785f9a"],["D:/My_Blog/public/tags/Web安全/index.html","9af5f49bf2205943bb92b453d50bde4b"],["D:/My_Blog/public/tags/Web安全/page/2/index.html","113b56f573985e1c06ed47da48ec03d4"],["D:/My_Blog/public/tags/index.html","6d2c42fc4b7a710f0ee0117f8422dc0e"],["D:/My_Blog/public/tags/入侵检测/index.html","c056c6a7f495393880fa5152ac0ce45e"],["D:/My_Blog/public/tags/威胁猎杀/index.html","9eac90e0cab2cb4e28ab6a0ab72b78f4"],["D:/My_Blog/public/tags/安全数据科学/index.html","511978274a5b2c202861de42b096f3ca"],["D:/My_Blog/public/tags/密码学/index.html","331aec3f9be1bfaf0fbc7c83ecd00b82"],["D:/My_Blog/public/tags/异常检测/index.html","e8ce90c092ff79d09d24b7b68d23c212"],["D:/My_Blog/public/tags/态势感知/index.html","39b47af557e924e2c0bde4a675535004"],["D:/My_Blog/public/tags/机器学习/index.html","00c0ff3bdc4b6a6b811d0ae1ab28a36b"],["D:/My_Blog/public/tags/杂谈/index.html","e1113e4876384b82f17daf2616452c9e"],["D:/My_Blog/public/tags/爬虫/index.html","539a85f9416b8e4d235a4f56c2bc709a"],["D:/My_Blog/public/tags/神经网络/index.html","cbdd4c3122907e9abcfd2c15deea9dcd"],["D:/My_Blog/public/tags/科研/index.html","fa61841f2989d613143a49a76dd62f3c"],["D:/My_Blog/public/tags/网络基础/index.html","c7970ee38850a6c469715aee942c6228"],["D:/My_Blog/public/tags/读书/index.html","c7a6598153b1022a36aea58ef2016581"],["D:/My_Blog/public/tags/路由攻击/index.html","fc327d6b4f7747b86cb9f458a58c3467"]];
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







