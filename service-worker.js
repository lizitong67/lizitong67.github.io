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

var precacheConfig = [["D:/My_Blog/public/1231489.png","649e11b9d2b015e1e36ca0204fb43eec"],["D:/My_Blog/public/2020/02/21/DVWA-CSRF/index.html","f65752c4872b0d73a798e1250ada68d4"],["D:/My_Blog/public/2020/02/21/DVWA-SQL注入/index.html","11c969a49dce29f3a037ab920285d0f1"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-DOM/index.html","618bf4c18c7251646cbe8f04624e96be"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Reflected/index.html","25bbf65aa2a0149fcc28566dddd6ef80"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Stored/index.html","09bb50e2e9e8a120730d9e98abd03465"],["D:/My_Blog/public/2020/02/21/DVWA下利用XSS获取Cookie/index.html","f220ac7b0a383e994b8d05d18bc9d878"],["D:/My_Blog/public/2020/02/21/LeetCode-14-最长公共前缀/index.html","0cdbbb3aa32e6e08f28a41520db1597b"],["D:/My_Blog/public/2020/02/21/LeetCode-53-最大子序和-动态规划法/index.html","537329b86d463c1d406f4bf5abcacdb4"],["D:/My_Blog/public/2020/02/21/LeetCode-69-x的平方根-牛顿迭代法/index.html","159873d7130b285fee629ac0b81da903"],["D:/My_Blog/public/2020/02/21/LeetCode-70-爬楼梯/index.html","2650fe3e4f8a94848b99672f09ddd060"],["D:/My_Blog/public/2020/02/21/MISC中图片隐藏文件分离/index.html","a742a980f3cc952c404103ec38df3911"],["D:/My_Blog/public/2020/02/21/PaperNote-HOLMES：基于可疑信息流的实时APT检测/index.html","2939cb19dce44fee60fef93cc77fcd4d"],["D:/My_Blog/public/2020/02/21/PaperNote-SLEUTH：基于COTS审计数据的实时攻击场景重构/index.html","fce96b34d1819aecff7f6e733a3eb14c"],["D:/My_Blog/public/2020/02/21/PaperNote-分析大量网络流量以进行APT检测/index.html","2d67754ddb0ad4f555b6e7316024dae7"],["D:/My_Blog/public/2020/02/21/PaperNote-基于高效数据流标记和跟踪的可精炼跨主机攻击调查/index.html","81acbe70d022a6046c7077c113bdb751"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-requests/index.html","55722380601bf477f5ab6b272c39d00d"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-urllib/index.html","bea1f6f59f6be1ed6df719d8cf1c3a3c"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-正则表达式/index.html","faae05df7d7a75168853f3e0b6f27333"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库BeautifulSoup/index.html","9642410db2feadde5052ca0b192ef52c"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库XPath/index.html","0100da1954aa1326d23eb390fef00de2"],["D:/My_Blog/public/2020/02/21/Python网络编程-TCP/index.html","ca6d96dfc433e2c4410359ce688198f4"],["D:/My_Blog/public/2020/02/21/Python网络编程-UDP/index.html","b0a5bb429af3a0d51d8fcaba628b5a47"],["D:/My_Blog/public/2020/02/21/SUCTF-Checkin/index.html","30eddef12167338e89f238c4558b12e1"],["D:/My_Blog/public/2020/02/21/Web安全之文件上传漏洞/index.html","8ecf5e2a8f7948ccbbb61cb276990d05"],["D:/My_Blog/public/2020/02/21/Web安全之文件包含漏洞/index.html","3e5fef94df0315e3f1647e787c9d8a00"],["D:/My_Blog/public/2020/02/21/X-Forwarded-For和Referer/index.html","1c448f0d104174fc0eaefc5ab4c0ae6f"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level1-10/index.html","f41f99b8b2f355f30f6658c5b275f3fb"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level11-20/index.html","0a83d78199db8c7a3d2601479e7b9860"],["D:/My_Blog/public/2020/02/21/zip格式和zip伪加密/index.html","ac1b63489a7aeb6686adfb15fdac3702"],["D:/My_Blog/public/2020/02/21/《机器学习与安全》读书笔记/index.html","62b764b5c5261b3d9732ea9f7322f67a"],["D:/My_Blog/public/2020/02/21/十分钟入门Pandas/index.html","8415ddb494099f2cf74635e2fa497f11"],["D:/My_Blog/public/2020/02/21/栅栏密码/index.html","508b2a7080fc72c06781b0bf49e14486"],["D:/My_Blog/public/2020/02/21/神经网络的数据表示-张量Tensor/index.html","d701bce14e815d5e1e40bdcdb1a39bdb"],["D:/My_Blog/public/2020/02/21/记深信服2018秋季校园招聘-技术服务工程师/index.html","53cc2b7c9c003d8acdf880932bc534c9"],["D:/My_Blog/public/2020/02/21/读书-《叫魂-1768年中国妖术大恐慌》/index.html","a171233833ae638466e041b207f5e2a4"],["D:/My_Blog/public/2020/02/21/读书-《许三观卖血记》/index.html","d0238fde0bbe1484e8f8e16393dbbd38"],["D:/My_Blog/public/2020/02/26/PaperNote-一种情报驱动的安全感知APT防御机制/index.html","a981bcd3aa9c95e6c6b2746f2d534fc7"],["D:/My_Blog/public/2020/03/05/PaperNote-基于时空特征融合的入侵检测系统模型/index.html","848f256d35162eb97ae11543895297e8"],["D:/My_Blog/public/2020/03/14/PaperNote-UNICORN：基于Provenance的实时APT检测器/index.html","d99b29ca57dd9b8f171ffc092085bc6c"],["D:/My_Blog/public/2020/03/19/《网络安全态势感知》读书笔记/index.html","19d17657d0610871cba59ae16eeb8237"],["D:/My_Blog/public/2020/03/25/PaperNote-Poirot：对比攻击行为与内核审计记录以进行网络威胁猎杀/index.html","14f11807a31bc435d7facfc1b64c798d"],["D:/My_Blog/public/2020/07/10/OSPF双LSA路由攻击的介绍与实现/index.html","3169864cdeb975940fdc1dbe88e303a7"],["D:/My_Blog/public/2020/08/09/PaperNote-Log2vec/index.html","79507bf4dfa1e66dc11b2ad2a3210484"],["D:/My_Blog/public/2021/01/05/Deep-Graph-Library-Overview/index.html","97332b6264f82091c3fea420ded1eb93"],["D:/My_Blog/public/2021/02/10/漏洞靶场安装ngx-lua-waf/index.html","533ecfdf6f60854f92ebf3e1da3b7d2f"],["D:/My_Blog/public/2021/03/07/DGL源码解析-GAT/index.html","6b9858f46762ab8e61a43171cd2431c0"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210306101853084.png","1f88eec15610e53eb4ebda7da093bbf4"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210306102622681.png","f126f726b919d5e116657f93bdab1064"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210310211557467.png","3964f3539b4f9c8d887d76303981c70b"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210312154228666.png","8c41042fd087ea28f382c75977a53022"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210312160437581.png","7dfd84c6e78a8e3fd408b86117f6f22d"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210312160529128.png","42341b679ec265b46862882df54dc07c"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210312231044909.png","463e395574a3ca56bab73f2ee3e84cc2"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210313144517562.png","dba38892c49b04543844e829bc2338c9"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210313144810442.png","3cb4e4f9f220c5ffb9f650a6380f2da5"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210313145905999.png","aedafb3befcb037c57c840e79cc1b868"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/index.html","c06214f7a8f2ea0662bf137e77baa325"],["D:/My_Blog/public/about/index.html","ed5f558299754e42d546680fb4054136"],["D:/My_Blog/public/archives/2020/02/index.html","29376d420c5828a84f62c409748828cd"],["D:/My_Blog/public/archives/2020/02/page/2/index.html","b4991974f707d1b55dfe324a1289a408"],["D:/My_Blog/public/archives/2020/02/page/3/index.html","fa3749a95f1267878d876629121e36a6"],["D:/My_Blog/public/archives/2020/02/page/4/index.html","fbbfa24186e5c8ebd1e95606a847fb44"],["D:/My_Blog/public/archives/2020/03/index.html","ee719ed98702639a02b572651970327c"],["D:/My_Blog/public/archives/2020/07/index.html","938f99f9428131a8dfc1a56c373dc0b4"],["D:/My_Blog/public/archives/2020/08/index.html","481bf70d8210a0baf631b5b91b55df7f"],["D:/My_Blog/public/archives/2020/index.html","dd9f678b2f6a2395a0708d358aca39dd"],["D:/My_Blog/public/archives/2020/page/2/index.html","f9df68af86c7cebc513938cf9c267eb3"],["D:/My_Blog/public/archives/2020/page/3/index.html","9806a424de62d443e9904d4c0ef8c0c7"],["D:/My_Blog/public/archives/2020/page/4/index.html","38f0bd48a350bdd5a03bbf5d1b19cffe"],["D:/My_Blog/public/archives/2020/page/5/index.html","1799b5c2d93446cf24ce4d1acf98decc"],["D:/My_Blog/public/archives/2021/01/index.html","e8dee0fec5d3c7212827aaad107766a4"],["D:/My_Blog/public/archives/2021/02/index.html","820975226ca616983085c2dde669904c"],["D:/My_Blog/public/archives/2021/03/index.html","16cfaa10dfbe9a759d68ea7cac9ca5fa"],["D:/My_Blog/public/archives/2021/index.html","3019ee1e932f336ece157ed51e5bef85"],["D:/My_Blog/public/archives/index.html","009c4169fd62ea0c757c257b39b7efb0"],["D:/My_Blog/public/archives/page/2/index.html","f0a586045de42aad6aaf5e060bce5ba8"],["D:/My_Blog/public/archives/page/3/index.html","fd4cfb91f2fc448b0c4a78a3b7cc8c45"],["D:/My_Blog/public/archives/page/4/index.html","6f74d8116e593563524510a48279b2d2"],["D:/My_Blog/public/archives/page/5/index.html","672516cbadfdc5a414d5cd704a24f662"],["D:/My_Blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/My_Blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/My_Blog/public/categories/LeetCode/index.html","4c65f62982564cacc8a460cde168e04a"],["D:/My_Blog/public/categories/MISC/index.html","128e18a689e58077568b2c2c5948073b"],["D:/My_Blog/public/categories/Python/index.html","a60dec264bfcb5ad68dc5e4abe0aa81e"],["D:/My_Blog/public/categories/Web安全/index.html","2649b1414b59c04c3928a76191160ddb"],["D:/My_Blog/public/categories/Web安全/page/2/index.html","159592975bb165f8900f7289f41d846d"],["D:/My_Blog/public/categories/index.html","8759c1bc725747895f2f1794adb30440"],["D:/My_Blog/public/categories/安全防护/index.html","efc1afbbf913643d9dbc2dea75c6e5d2"],["D:/My_Blog/public/categories/密码学/index.html","b0c81f60a3f4682226e71a19e13e7fb2"],["D:/My_Blog/public/categories/异常检测/index.html","ee19511cffb3d68f95f250019959f31d"],["D:/My_Blog/public/categories/机器学习/index.html","328dab4bd2dcbc5ecfee336a3ced8b14"],["D:/My_Blog/public/categories/杂谈/index.html","36b6e4ad7bdb32f7af5d920f4e31ac8e"],["D:/My_Blog/public/categories/漏洞复现/index.html","5cd1f808066450e6e8f0f187eb4f4ac1"],["D:/My_Blog/public/categories/科研/index.html","27aba40164851126c2e20457521b8dde"],["D:/My_Blog/public/categories/网络基础/index.html","4a468ec2509a2ed4b5edb16695edbc1b"],["D:/My_Blog/public/categories/读书/index.html","2c540f7ca630568b263b522bae0d6e4f"],["D:/My_Blog/public/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["D:/My_Blog/public/css/index.css","1a8770d4815f16850f60f9989c73e11e"],["D:/My_Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/My_Blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/My_Blog/public/index.html","aeb98071f7c41462ca70e98873de33f4"],["D:/My_Blog/public/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["D:/My_Blog/public/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["D:/My_Blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/My_Blog/public/js/head.js","347edd99f8e3921b45fa617e839d8182"],["D:/My_Blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["D:/My_Blog/public/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["D:/My_Blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/My_Blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/My_Blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/My_Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/My_Blog/public/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["D:/My_Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/My_Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/My_Blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/My_Blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/My_Blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/My_Blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/My_Blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/My_Blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/My_Blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/My_Blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/My_Blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/My_Blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/My_Blog/public/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["D:/My_Blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/My_Blog/public/page/2/index.html","4532c6d88e9d2748a6ccb586a802bbfd"],["D:/My_Blog/public/page/3/index.html","cff4fdf42514ac7ee8a61fbf81243ebf"],["D:/My_Blog/public/page/4/index.html","6f3538ecdfdede587b991146d8fec836"],["D:/My_Blog/public/page/5/index.html","a8178e574cc5c1ba2711f91d2a9d73a4"],["D:/My_Blog/public/tags/APT/index.html","e928c381b9df1f3eb3d518fd791b52cc"],["D:/My_Blog/public/tags/Anomaly-Detection/index.html","1d3f23d655f722f47cb44edc58494d0f"],["D:/My_Blog/public/tags/DGL/index.html","a7560bf20948aede298db8139dcbdbd3"],["D:/My_Blog/public/tags/GAT/index.html","b198495cae51f98bca7c45242f02660b"],["D:/My_Blog/public/tags/GNN/index.html","ba279211b0e85ebb67b5e05fd98ead6a"],["D:/My_Blog/public/tags/Graph-Neural-Network/index.html","6032899c9803462d77e7565e5834d9f6"],["D:/My_Blog/public/tags/LeetCode/index.html","9c8f59b152aecf89a4e9a7502be614d1"],["D:/My_Blog/public/tags/MISC/index.html","4905db1d7f456c4e34dea8b32a22c10e"],["D:/My_Blog/public/tags/Outlier-Analysis/index.html","317c0533c599a71af8706e4b4969b728"],["D:/My_Blog/public/tags/Python/index.html","048c9278fab27652705e5597dd527875"],["D:/My_Blog/public/tags/WAF/index.html","4837e02b0c1347de0055aeeb570f907f"],["D:/My_Blog/public/tags/Web安全/index.html","95a0482e642a43a0689b101b7accf213"],["D:/My_Blog/public/tags/Web安全/page/2/index.html","0614ebf70645ad01c7856855ad5859de"],["D:/My_Blog/public/tags/index.html","3e467eedaee548f6a2e3636d654dd350"],["D:/My_Blog/public/tags/入侵检测/index.html","4e511f5e4e306dba47925177d634f009"],["D:/My_Blog/public/tags/威胁猎杀/index.html","a37706b2c2873be357a71c9793980d6d"],["D:/My_Blog/public/tags/安全数据科学/index.html","52512e6946600b4c708cc3e3a1162961"],["D:/My_Blog/public/tags/密码学/index.html","f2833312443d24028e41f82667a8b62a"],["D:/My_Blog/public/tags/异常检测/index.html","f0fed59f1ead25fa6d35fd0bb87a8563"],["D:/My_Blog/public/tags/态势感知/index.html","341c3bfba1967eefa5a3be929e19185f"],["D:/My_Blog/public/tags/机器学习/index.html","8027d1c844e5fa035c75f13b16aee16d"],["D:/My_Blog/public/tags/杂谈/index.html","7e4e9f3b53120461eacf669a8571e914"],["D:/My_Blog/public/tags/爬虫/index.html","d91ac1db3b3f14b1546c17957866d0f0"],["D:/My_Blog/public/tags/神经网络/index.html","ad395d58f564d92ead5298433cc6a372"],["D:/My_Blog/public/tags/科研/index.html","a81b53c33bc4676a38fc26a687abd67e"],["D:/My_Blog/public/tags/网络基础/index.html","fd530d42c599896e4840182df27c10b4"],["D:/My_Blog/public/tags/读书/index.html","288ede2ec5af39191458be3dbec38c43"],["D:/My_Blog/public/tags/路由攻击/index.html","1df89132285c4e07cfbe33f5f2aef64f"]];
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







