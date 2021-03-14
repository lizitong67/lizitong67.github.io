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

var precacheConfig = [["D:/My_Blog/public/1231489.png","649e11b9d2b015e1e36ca0204fb43eec"],["D:/My_Blog/public/2020/02/21/DVWA-CSRF/index.html","9a19371a2b89cb2a273c80cd72b86e41"],["D:/My_Blog/public/2020/02/21/DVWA-SQL注入/index.html","fb8c6888254581a69521a4d6145330ff"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-DOM/index.html","193565ae936be10ff689f127669165c9"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Reflected/index.html","1f6eda115383c20c0a740a23012c881f"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Stored/index.html","b1a7bd12062a4e8f3a2740052c247b5c"],["D:/My_Blog/public/2020/02/21/DVWA下利用XSS获取Cookie/index.html","3f4d360d2ba63a31c2c7579f9533ce3d"],["D:/My_Blog/public/2020/02/21/LeetCode-14-最长公共前缀/index.html","9bd7c2efb7aa827923eb920324b99e56"],["D:/My_Blog/public/2020/02/21/LeetCode-53-最大子序和-动态规划法/index.html","96de12991824ed7a9b78660f3eddfed6"],["D:/My_Blog/public/2020/02/21/LeetCode-69-x的平方根-牛顿迭代法/index.html","64fe38ee974edf0dc7f72931fd980be9"],["D:/My_Blog/public/2020/02/21/LeetCode-70-爬楼梯/index.html","f1fc57f0c7d485dcb978dc833ed9c6c4"],["D:/My_Blog/public/2020/02/21/MISC中图片隐藏文件分离/index.html","94153927c16333ff456f3162703c604a"],["D:/My_Blog/public/2020/02/21/PaperNote-HOLMES：基于可疑信息流的实时APT检测/index.html","645a03e0ded5869cb7fcedd12224c386"],["D:/My_Blog/public/2020/02/21/PaperNote-SLEUTH：基于COTS审计数据的实时攻击场景重构/index.html","44661ed878699dbee37ae1595811ddfc"],["D:/My_Blog/public/2020/02/21/PaperNote-分析大量网络流量以进行APT检测/index.html","5373b74342cc4ab11f33a4538fbc3393"],["D:/My_Blog/public/2020/02/21/PaperNote-基于高效数据流标记和跟踪的可精炼跨主机攻击调查/index.html","17542a2c6e95358ee66b1a2843d69a6e"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-requests/index.html","c9433526722fa34b4eb0a4f1e45ade13"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-urllib/index.html","b7070a358bbd6820c18b45a1ed6def96"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-正则表达式/index.html","4f9832dfe1e406f5576662f1b2925e83"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库BeautifulSoup/index.html","942b3021a631b6b47ded9ffee47abefd"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库XPath/index.html","fd47af98bf19e78844df7d4e9ec5013b"],["D:/My_Blog/public/2020/02/21/Python网络编程-TCP/index.html","e3b2300a4fb464027e5421da6ba59c56"],["D:/My_Blog/public/2020/02/21/Python网络编程-UDP/index.html","7d9cab7234b7949abf758f34ad6a4c9f"],["D:/My_Blog/public/2020/02/21/SUCTF-Checkin/index.html","f1387e22009d2478d4d5df22c6a3e022"],["D:/My_Blog/public/2020/02/21/Web安全之文件上传漏洞/index.html","01401b9fe3ba554f7eeb0521e76a688b"],["D:/My_Blog/public/2020/02/21/Web安全之文件包含漏洞/index.html","d422a20eb38ee0cbe02301283c2f298e"],["D:/My_Blog/public/2020/02/21/X-Forwarded-For和Referer/index.html","743d168024c3271bcfe146c28d31e359"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level1-10/index.html","5a876064f3e5d4943e32099af37230e3"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level11-20/index.html","2302ca34d72dcba692a841f0dccea53e"],["D:/My_Blog/public/2020/02/21/zip格式和zip伪加密/index.html","866b813d99d3ec878e5de41ee4776e9d"],["D:/My_Blog/public/2020/02/21/《机器学习与安全》读书笔记/index.html","79627cf5749ba6a1fed2f17e6674e8fa"],["D:/My_Blog/public/2020/02/21/十分钟入门Pandas/index.html","ba107c3cc76d1c629d623e9ecca84ba5"],["D:/My_Blog/public/2020/02/21/栅栏密码/index.html","4925f3b8900ece4b2038727dffa04135"],["D:/My_Blog/public/2020/02/21/神经网络的数据表示-张量Tensor/index.html","208e32552ba079c7c3f45e07ae4002b7"],["D:/My_Blog/public/2020/02/21/记深信服2018秋季校园招聘-技术服务工程师/index.html","975d17387c89b56f2a514584b8d23a44"],["D:/My_Blog/public/2020/02/21/读书-《叫魂-1768年中国妖术大恐慌》/index.html","886f3d9aee6cc0434b07aa7d4fae5a7c"],["D:/My_Blog/public/2020/02/21/读书-《许三观卖血记》/index.html","879a646a7b29e98ccacb4994a3cf396f"],["D:/My_Blog/public/2020/02/26/PaperNote-一种情报驱动的安全感知APT防御机制/index.html","4d9cd86bb41fcbf2c62e2643467e0246"],["D:/My_Blog/public/2020/03/05/PaperNote-基于时空特征融合的入侵检测系统模型/index.html","2c51531702770c39354bd24a3b68e410"],["D:/My_Blog/public/2020/03/14/PaperNote-UNICORN：基于Provenance的实时APT检测器/index.html","c4dff70bdade0c33f79784f3fed2c5fa"],["D:/My_Blog/public/2020/03/19/《网络安全态势感知》读书笔记/index.html","2d8ddc8b4b98381bcfb9e3275fa8ff7f"],["D:/My_Blog/public/2020/03/25/PaperNote-Poirot：对比攻击行为与内核审计记录以进行网络威胁猎杀/index.html","032f2940b2331a4d37cfc98bf6959c9f"],["D:/My_Blog/public/2020/07/10/OSPF双LSA路由攻击的介绍与实现/index.html","c6e2122232562878832810962a07ae99"],["D:/My_Blog/public/2020/08/09/PaperNote-Log2vec/index.html","d75233c151c5ef8a71d0f993dc9d3660"],["D:/My_Blog/public/2021/01/05/Deep-Graph-Library-Overview/index.html","92c1b650a6e47a6e71e2887ec4da1973"],["D:/My_Blog/public/2021/02/10/漏洞靶场安装ngx-lua-waf/index.html","bea840b71d99bc7588957e7a5d71c815"],["D:/My_Blog/public/2021/03/07/DGL源码解析-GAT/index.html","f666981ecc3262307f4b2fcf7d68aebe"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210306101853084.png","1f88eec15610e53eb4ebda7da093bbf4"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210306102622681.png","f126f726b919d5e116657f93bdab1064"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210310211557467.png","3964f3539b4f9c8d887d76303981c70b"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210312154228666.png","8c41042fd087ea28f382c75977a53022"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210312160437581.png","7dfd84c6e78a8e3fd408b86117f6f22d"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210312160529128.png","42341b679ec265b46862882df54dc07c"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210312231044909.png","463e395574a3ca56bab73f2ee3e84cc2"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210313144517562.png","dba38892c49b04543844e829bc2338c9"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210313144810442.png","3cb4e4f9f220c5ffb9f650a6380f2da5"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210313145905999.png","aedafb3befcb037c57c840e79cc1b868"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/index.html","2d2ac9d5fcd8d0e1bc1829ef9d062d79"],["D:/My_Blog/public/about/index.html","0b51ca93d7188cd952523e357eacf1f5"],["D:/My_Blog/public/archives/2020/02/index.html","27ddf68cd3433bb543d0caa2bcf61b14"],["D:/My_Blog/public/archives/2020/02/page/2/index.html","a3e499ffe589f743d5ed4dbc687501ff"],["D:/My_Blog/public/archives/2020/02/page/3/index.html","feb0f13cec02afce51d2150cf66aa696"],["D:/My_Blog/public/archives/2020/02/page/4/index.html","bbd8f064ccf0e7f63fa17d5f55646b30"],["D:/My_Blog/public/archives/2020/03/index.html","c4beef76e3b891ae707527e31df512e4"],["D:/My_Blog/public/archives/2020/07/index.html","a4d100496ae66668080815808cfd2053"],["D:/My_Blog/public/archives/2020/08/index.html","22a01e0bf86ec738220bfdad9a8ad519"],["D:/My_Blog/public/archives/2020/index.html","f3621b8c925205d38dc392826fd7116b"],["D:/My_Blog/public/archives/2020/page/2/index.html","c19227faf524fc1c028099f4b4e4083e"],["D:/My_Blog/public/archives/2020/page/3/index.html","9dd6b21ac6e05e45a1c4e984ff8c1a71"],["D:/My_Blog/public/archives/2020/page/4/index.html","90997920647d0974f3eec1173c12a686"],["D:/My_Blog/public/archives/2020/page/5/index.html","dfca909165ce450eefaea6dabcf6503a"],["D:/My_Blog/public/archives/2021/01/index.html","4ca2480c0242711180cb9698c0ff37e5"],["D:/My_Blog/public/archives/2021/02/index.html","b54965963171a688d60f3dfdf773f29d"],["D:/My_Blog/public/archives/2021/03/index.html","2ace0482653d1b3409f2c81282227711"],["D:/My_Blog/public/archives/2021/index.html","d85bd9b4ecbfde91c6cfdf210c0022d2"],["D:/My_Blog/public/archives/index.html","3adeb0d360aa75bafba015cb117fb368"],["D:/My_Blog/public/archives/page/2/index.html","aa8605d6c9dd2a8af9c308b53ed270a6"],["D:/My_Blog/public/archives/page/3/index.html","7546588d64679e189195763b7d127f63"],["D:/My_Blog/public/archives/page/4/index.html","c6dda9fd5a419a9079b5521d95591317"],["D:/My_Blog/public/archives/page/5/index.html","924dfee4ffe44fe549c8777e0ee88398"],["D:/My_Blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/My_Blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/My_Blog/public/categories/LeetCode/index.html","c6f6cfd86b8112d0727f96ebf938197b"],["D:/My_Blog/public/categories/MISC/index.html","bd42d6f907b24ddfadf55e811f408cef"],["D:/My_Blog/public/categories/Python/index.html","ebd17fddfd8e994ad21435c7f7ad50fd"],["D:/My_Blog/public/categories/Web安全/index.html","043294a516921a3b6b3f6b0e162c0286"],["D:/My_Blog/public/categories/Web安全/page/2/index.html","0452822e7dcb88332b4b8f00ad4e1dc9"],["D:/My_Blog/public/categories/index.html","f9066db36942da9111b00283c6662a88"],["D:/My_Blog/public/categories/安全防护/index.html","3a4d9853d857a3800c4aa2413b2e7e34"],["D:/My_Blog/public/categories/密码学/index.html","b0846fc440287d050fc84f6e9926bfa6"],["D:/My_Blog/public/categories/异常检测/index.html","abc8c125d26c865c6b9d0cce27a6f784"],["D:/My_Blog/public/categories/机器学习/index.html","8d373cfe6cb92881829d6645edeb0b8d"],["D:/My_Blog/public/categories/杂谈/index.html","25e8fbf531a9bebea2a7e9f15522bea2"],["D:/My_Blog/public/categories/漏洞复现/index.html","1d69b4342d943e702e7b2ae6a28a30fa"],["D:/My_Blog/public/categories/科研/index.html","7d8ba87f82ad97ba2ca9d4f5e8d211f5"],["D:/My_Blog/public/categories/网络基础/index.html","6f95698791070e0bdac2c3d157f3f9a5"],["D:/My_Blog/public/categories/读书/index.html","51737e63aa6f093761c52e3ef36e9a5d"],["D:/My_Blog/public/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["D:/My_Blog/public/css/index.css","1a8770d4815f16850f60f9989c73e11e"],["D:/My_Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/My_Blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/My_Blog/public/index.html","dae09e3aed27a55dd74bfd9af2d0cb1b"],["D:/My_Blog/public/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["D:/My_Blog/public/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["D:/My_Blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/My_Blog/public/js/head.js","347edd99f8e3921b45fa617e839d8182"],["D:/My_Blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["D:/My_Blog/public/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["D:/My_Blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/My_Blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/My_Blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/My_Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/My_Blog/public/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["D:/My_Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/My_Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/My_Blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/My_Blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/My_Blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/My_Blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/My_Blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/My_Blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/My_Blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/My_Blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/My_Blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/My_Blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/My_Blog/public/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["D:/My_Blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/My_Blog/public/page/2/index.html","6b47d065b0ac040360b3be7e5b99a5f0"],["D:/My_Blog/public/page/3/index.html","e96a9b80ba3f3e1de9764f37081d06e5"],["D:/My_Blog/public/page/4/index.html","0ff3572294a470bb77e5187c83b93d88"],["D:/My_Blog/public/page/5/index.html","39d25ba0db7de9f5083f96ac629aa824"],["D:/My_Blog/public/tags/APT/index.html","59195bb730ce8318d71662aafb5a7468"],["D:/My_Blog/public/tags/Anomaly-Detection/index.html","3a1dc8ee79fe4813643f9f254fcf8643"],["D:/My_Blog/public/tags/DGL/index.html","792fa6376c4399d95066603410580f53"],["D:/My_Blog/public/tags/GAT/index.html","3801d32896fefb2307ba0c8654af2a60"],["D:/My_Blog/public/tags/GNN/index.html","574959e90a850a1b907a449bff7354ff"],["D:/My_Blog/public/tags/Graph-Neural-Network/index.html","ed5cf4fe7b0cc4a84d7595a901e46df5"],["D:/My_Blog/public/tags/LeetCode/index.html","728fcc50af7725d31863e57cc28967a1"],["D:/My_Blog/public/tags/MISC/index.html","9542f28d2dfbf72385acec90aa862dd8"],["D:/My_Blog/public/tags/Outlier-Analysis/index.html","f9cc097ef41562d85a4545086c34ceb5"],["D:/My_Blog/public/tags/Python/index.html","9b00d99768f43f008db887191b5cf7d3"],["D:/My_Blog/public/tags/WAF/index.html","835ec25417a27ba8e2dc2f4da0d5c170"],["D:/My_Blog/public/tags/Web安全/index.html","5b587c818ed9bc95541ca2eff2fcf83c"],["D:/My_Blog/public/tags/Web安全/page/2/index.html","31a60e3207b546c9cca7057110d2319b"],["D:/My_Blog/public/tags/index.html","5237b3a45d77c5866135f84751500566"],["D:/My_Blog/public/tags/入侵检测/index.html","0eb6e21ce278a566ce30d395b1aeca1e"],["D:/My_Blog/public/tags/威胁猎杀/index.html","0e6aaaf6ed529fa01f365bd6e4dad5e3"],["D:/My_Blog/public/tags/安全数据科学/index.html","b413262de9ec1a51f207ab9dccd97a0c"],["D:/My_Blog/public/tags/密码学/index.html","1542e1c4e5902ed1e6cfa7b9e3bf158d"],["D:/My_Blog/public/tags/异常检测/index.html","e8893ab4a8bd76aaa5fbaae2ca1ddf59"],["D:/My_Blog/public/tags/态势感知/index.html","c1d6a4a44757def613a316cef0dacc34"],["D:/My_Blog/public/tags/机器学习/index.html","2ce5e71c04e3ddd97f2e30fdcab48dee"],["D:/My_Blog/public/tags/杂谈/index.html","fae53e8eea701b355336c1d166901f26"],["D:/My_Blog/public/tags/爬虫/index.html","aca05f57bd893d1b644b5669e3f3ddc0"],["D:/My_Blog/public/tags/神经网络/index.html","f2b9bc7323c89eec04fcb603d22c45b5"],["D:/My_Blog/public/tags/科研/index.html","96560d8b6aa0cd29de46dbf8379962f8"],["D:/My_Blog/public/tags/网络基础/index.html","732e0c7e046b4d327301dd7aecba4f7f"],["D:/My_Blog/public/tags/读书/index.html","4d4b2c515a08edf88aef029c35bb54ed"],["D:/My_Blog/public/tags/路由攻击/index.html","d522d95d754eaf6c6f2bf84cef68cdfa"]];
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







