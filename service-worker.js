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

var precacheConfig = [["D:/My_Blog/public/1231489.png","649e11b9d2b015e1e36ca0204fb43eec"],["D:/My_Blog/public/2020/02/21/DVWA-CSRF/index.html","5a157b116b00565fe79c1562d9f3b519"],["D:/My_Blog/public/2020/02/21/DVWA-SQL注入/index.html","9e38f9285f0444f91809e396cbebcf98"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-DOM/index.html","96d469ad5e579782a90feacdea4ec2c4"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Reflected/index.html","4001e1e426a217ccc90b4aa81b307bf8"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Stored/index.html","d11a4c002a184fb16abe3deca776467f"],["D:/My_Blog/public/2020/02/21/DVWA下利用XSS获取Cookie/index.html","a82b124885fc03358f24691684c23918"],["D:/My_Blog/public/2020/02/21/LeetCode-14-最长公共前缀/index.html","b8701ddaa6faa451f60147e9cc1a9e6f"],["D:/My_Blog/public/2020/02/21/LeetCode-53-最大子序和-动态规划法/index.html","9ea11a260e1991a7d63c2c1dd63f7296"],["D:/My_Blog/public/2020/02/21/LeetCode-69-x的平方根-牛顿迭代法/index.html","770e275ed829fa9be402c4721fc53391"],["D:/My_Blog/public/2020/02/21/LeetCode-70-爬楼梯/index.html","bfd79dff69f18b662022f1143e1bbe2d"],["D:/My_Blog/public/2020/02/21/MISC中图片隐藏文件分离/index.html","c9a0b1aae23e960154cae715d528de5e"],["D:/My_Blog/public/2020/02/21/PaperNote-HOLMES：基于可疑信息流的实时APT检测/index.html","3576a2c504358f1832e7121ef20e683d"],["D:/My_Blog/public/2020/02/21/PaperNote-SLEUTH：基于COTS审计数据的实时攻击场景重构/index.html","9948e29fca46c777caa009b0896ddfb9"],["D:/My_Blog/public/2020/02/21/PaperNote-分析大量网络流量以进行APT检测/index.html","fe3b052dbbb95c294503c90a1abea89c"],["D:/My_Blog/public/2020/02/21/PaperNote-基于高效数据流标记和跟踪的可精炼跨主机攻击调查/index.html","320d71b12e2bc581c4e485fcfe75441f"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-requests/index.html","9cda8090ea87d27164cc6dd235267437"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-urllib/index.html","5f7145641bb6a319f6a1bf03a55bae1b"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-正则表达式/index.html","0e9a2c9421ef30242d0d341e8794da19"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库BeautifulSoup/index.html","866ed971b533146a85370e8cfc86500a"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库XPath/index.html","0d2722f1c5843ebf019785b9fe736228"],["D:/My_Blog/public/2020/02/21/Python网络编程-TCP/index.html","f5806dfe36230d19d1670b3c55b66673"],["D:/My_Blog/public/2020/02/21/Python网络编程-UDP/index.html","393b7da8319a5ca124065e79c26c26a7"],["D:/My_Blog/public/2020/02/21/SUCTF-Checkin/index.html","8354626c2b1b4102f7cee4d3eda756d0"],["D:/My_Blog/public/2020/02/21/Web安全之文件上传漏洞/index.html","573b8d1ba112cd24faac4a16a8966344"],["D:/My_Blog/public/2020/02/21/Web安全之文件包含漏洞/index.html","1a5b335810c46a8615efd23513cad294"],["D:/My_Blog/public/2020/02/21/X-Forwarded-For和Referer/index.html","aeae6ec395b89e44681c3d1363fcde79"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level1-10/index.html","71c34256ff87404776e07c56f59c274d"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level11-20/index.html","42759c9061c505f3f219df8e159b7d1c"],["D:/My_Blog/public/2020/02/21/zip格式和zip伪加密/index.html","70ca8314ae64ede31f3174a13345ff07"],["D:/My_Blog/public/2020/02/21/《机器学习与安全》读书笔记/index.html","5be391bfce6e0436ba8f30afaa98bb8f"],["D:/My_Blog/public/2020/02/21/十分钟入门Pandas/index.html","bc87fd9395d2befcc1f6d4e9587154be"],["D:/My_Blog/public/2020/02/21/栅栏密码/index.html","ed2b1ba1963914b3df332fb447743199"],["D:/My_Blog/public/2020/02/21/神经网络的数据表示-张量Tensor/index.html","514aa9806f5446dfef1a8b47bab23551"],["D:/My_Blog/public/2020/02/21/记深信服2018秋季校园招聘-技术服务工程师/index.html","1a57e87a22e5d0c323c0e0082ca0aad8"],["D:/My_Blog/public/2020/02/21/读书-《叫魂-1768年中国妖术大恐慌》/index.html","4c113da238f77e441a5098f5f575aa16"],["D:/My_Blog/public/2020/02/21/读书-《许三观卖血记》/index.html","fbd204cbdd6a2a5fb51d4a123b903755"],["D:/My_Blog/public/2020/02/26/PaperNote-一种情报驱动的安全感知APT防御机制/index.html","0eeeec9e8d9a0f7b94c1723db40f0a33"],["D:/My_Blog/public/2020/03/05/PaperNote-基于时空特征融合的入侵检测系统模型/index.html","f121aa8eb930f1b3fc0761a72e4f9050"],["D:/My_Blog/public/2020/03/14/PaperNote-UNICORN：基于Provenance的实时APT检测器/index.html","bc8729fdd527ac5e4a06b9356504b950"],["D:/My_Blog/public/2020/03/19/《网络安全态势感知》读书笔记/index.html","d0b10e3fcdd365c1ec91eda1986f8ad2"],["D:/My_Blog/public/2020/03/25/PaperNote-Poirot：对比攻击行为与内核审计记录以进行网络威胁猎杀/index.html","d0a341f92a349dd60546cb6028861b72"],["D:/My_Blog/public/2020/07/10/OSPF双LSA路由攻击的介绍与实现/index.html","cfcc1ea8daaee21fe3031ab282b645e9"],["D:/My_Blog/public/2020/08/09/PaperNote-Log2vec/index.html","6dda2bb6b016ee328b89fb2f080d94c5"],["D:/My_Blog/public/2021/01/05/Deep-Graph-Library-Overview/index.html","a907ee673dc6dfdaf7e460c7be1f3c32"],["D:/My_Blog/public/2021/02/10/漏洞靶场安装ngx-lua-waf/index.html","3146b9ee7dc6d780f48eae9cc49864f4"],["D:/My_Blog/public/2021/03/07/DGL源码解析-GAT/index.html","f3a0b1465ff2310dfc397edfc9998127"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210306101853084.png","1f88eec15610e53eb4ebda7da093bbf4"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210306102622681.png","f126f726b919d5e116657f93bdab1064"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210310211557467.png","3964f3539b4f9c8d887d76303981c70b"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210312154228666.png","8c41042fd087ea28f382c75977a53022"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210312160437581.png","7dfd84c6e78a8e3fd408b86117f6f22d"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210312160529128.png","42341b679ec265b46862882df54dc07c"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210312231044909.png","463e395574a3ca56bab73f2ee3e84cc2"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210313144517562.png","dba38892c49b04543844e829bc2338c9"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210313144810442.png","3cb4e4f9f220c5ffb9f650a6380f2da5"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210313145905999.png","aedafb3befcb037c57c840e79cc1b868"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/index.html","285a523e2ac23bf4bedaa7b4488786af"],["D:/My_Blog/public/2021/03/14/DGL源码解析-GCN/index.html","7c69d23adfb3736f2a3682b63d0f77b5"],["D:/My_Blog/public/about/index.html","15e2bb903f2e2798cd009245f57e871d"],["D:/My_Blog/public/archives/2020/02/index.html","d87484aa558d7a62c1cec1cfe208d6a8"],["D:/My_Blog/public/archives/2020/02/page/2/index.html","2342299be54eacb267ba915fc9a6ec49"],["D:/My_Blog/public/archives/2020/02/page/3/index.html","6ae0fce1623a96041c7171435a832fad"],["D:/My_Blog/public/archives/2020/02/page/4/index.html","f14b96511ceb8d891f4b3c6111379e2f"],["D:/My_Blog/public/archives/2020/03/index.html","a9ed682e33e45eb21a685ca768723fcf"],["D:/My_Blog/public/archives/2020/07/index.html","325c3d188d46673436d8374acd52ada3"],["D:/My_Blog/public/archives/2020/08/index.html","36f67b3fcdc689389fa718e5e4bf80c3"],["D:/My_Blog/public/archives/2020/index.html","054dd51688c3aff16ff6a8864e6e1cc1"],["D:/My_Blog/public/archives/2020/page/2/index.html","88c42a12a7500b4710c0b79fdb8de740"],["D:/My_Blog/public/archives/2020/page/3/index.html","69f8241a798eb2b2558525ef3282ad7b"],["D:/My_Blog/public/archives/2020/page/4/index.html","21594f9c50855fed9437b64898d4505f"],["D:/My_Blog/public/archives/2020/page/5/index.html","6f7e562c120eb496dfedfa84cb9fcba0"],["D:/My_Blog/public/archives/2021/01/index.html","f811a92899a60bbe2fa2f27d10845680"],["D:/My_Blog/public/archives/2021/02/index.html","de34fb928d1dbcf506beac17365773c4"],["D:/My_Blog/public/archives/2021/03/index.html","76849e18c1924690aa4cb5d2b2588339"],["D:/My_Blog/public/archives/2021/index.html","daac1bc05b101305dae152408e016ad4"],["D:/My_Blog/public/archives/index.html","2b8530fac83c7e146be968ffe660dded"],["D:/My_Blog/public/archives/page/2/index.html","b8177e2f83a8cf9c1c3328bb332b1e43"],["D:/My_Blog/public/archives/page/3/index.html","4f324f576f98321f284eb8e6229e9c22"],["D:/My_Blog/public/archives/page/4/index.html","7341dcb61654416119f9aee94aabbf8a"],["D:/My_Blog/public/archives/page/5/index.html","c305a02ee699aed4c79f7829db46b264"],["D:/My_Blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/My_Blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/My_Blog/public/categories/LeetCode/index.html","2e5d26a4c1c082a05284d495e4833b05"],["D:/My_Blog/public/categories/MISC/index.html","fe3d430dc5738d5a481182ad30623b08"],["D:/My_Blog/public/categories/Python/index.html","48e4c4da01109f1291f605a591581e14"],["D:/My_Blog/public/categories/Web安全/index.html","02b558595f28e064945fb140472fb589"],["D:/My_Blog/public/categories/Web安全/page/2/index.html","667c637819946708fd4b42e17893db96"],["D:/My_Blog/public/categories/index.html","14db565884bdee2802c5450c8b2b1983"],["D:/My_Blog/public/categories/安全防护/index.html","fabc89ef5a739cf4689b9b21d63dea1d"],["D:/My_Blog/public/categories/密码学/index.html","112badc8c40127e3e711b747950dd9f0"],["D:/My_Blog/public/categories/异常检测/index.html","07cef98305d45bfe3ba4a91cc943d4fb"],["D:/My_Blog/public/categories/机器学习/index.html","6b62302c85c27c4423f85e2c50b97ea1"],["D:/My_Blog/public/categories/杂谈/index.html","435f3c8f27a06c5d643736f045be276d"],["D:/My_Blog/public/categories/漏洞复现/index.html","e25ac3d04e10c4d67986aa0ce233167e"],["D:/My_Blog/public/categories/科研/index.html","4b2c8227e5bbc1738ac9390961f95934"],["D:/My_Blog/public/categories/网络基础/index.html","dec4ef2a4c0bc1ada1b21102610af4f9"],["D:/My_Blog/public/categories/读书/index.html","8b397a5dd4cd4a36dbc1bc502adba90a"],["D:/My_Blog/public/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["D:/My_Blog/public/css/index.css","1a8770d4815f16850f60f9989c73e11e"],["D:/My_Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/My_Blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/My_Blog/public/index.html","8493dcf5494bd45d3660bbe650c8b30f"],["D:/My_Blog/public/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["D:/My_Blog/public/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["D:/My_Blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/My_Blog/public/js/head.js","347edd99f8e3921b45fa617e839d8182"],["D:/My_Blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["D:/My_Blog/public/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["D:/My_Blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/My_Blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/My_Blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/My_Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/My_Blog/public/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["D:/My_Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/My_Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/My_Blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/My_Blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/My_Blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/My_Blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/My_Blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/My_Blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/My_Blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/My_Blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/My_Blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/My_Blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/My_Blog/public/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["D:/My_Blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/My_Blog/public/page/2/index.html","05decfd997a7ff08ca38d12337305b71"],["D:/My_Blog/public/page/3/index.html","bc925b9dbab625b50bc701d3b94b758e"],["D:/My_Blog/public/page/4/index.html","4bcc6edaaabb86f092fc68d17905932a"],["D:/My_Blog/public/page/5/index.html","d4308ee0e216998bb7b3cd7662c223a8"],["D:/My_Blog/public/tags/APT/index.html","06a27ddbd2be22d6cdd54c36a0d7d357"],["D:/My_Blog/public/tags/Anomaly-Detection/index.html","96e0f7617c04721bf92ebee4481ffb3f"],["D:/My_Blog/public/tags/DGL/index.html","1a1dcd79aea3ee5c41bfdf0b6e93de7b"],["D:/My_Blog/public/tags/GAT/index.html","5fd10158a2c0d2be4bccf5a4d036ce25"],["D:/My_Blog/public/tags/GCN/index.html","166fd9eb2899e4272aadd4999dcd58e6"],["D:/My_Blog/public/tags/GNN/index.html","6044926d82f7c13e3eb922761fe8eb49"],["D:/My_Blog/public/tags/Graph-Neural-Network/index.html","fb637f61477496c3eeef9f87a18ff3fa"],["D:/My_Blog/public/tags/LeetCode/index.html","61704bfcd4190f8ea84e5aa3cedbc5a3"],["D:/My_Blog/public/tags/MISC/index.html","49fa24be9fb603b25abbd71c0b0c6994"],["D:/My_Blog/public/tags/Outlier-Analysis/index.html","c322c805db383fc8239f1c17b0910bd1"],["D:/My_Blog/public/tags/Python/index.html","5da0b9e2aee1d1d7a89cbfc52cc6c5fe"],["D:/My_Blog/public/tags/WAF/index.html","ffea68d86a6fa6ba9e929c492af1ddfb"],["D:/My_Blog/public/tags/Web安全/index.html","9281f6b77df0b1e68cf4315a39c76e3f"],["D:/My_Blog/public/tags/Web安全/page/2/index.html","de1429ed15af03c33b69fbaadd0323ed"],["D:/My_Blog/public/tags/index.html","e1b5d048cae0739b595437a4b60cfe82"],["D:/My_Blog/public/tags/入侵检测/index.html","e55c7e2c3d751d7f36eb1aa7072abf30"],["D:/My_Blog/public/tags/威胁猎杀/index.html","7edca96be9b44e95aa0a58b85cbf705e"],["D:/My_Blog/public/tags/安全数据科学/index.html","df2a2e5a76a17e9f2a9d85bcb5d98fc9"],["D:/My_Blog/public/tags/密码学/index.html","126e5f43a4bd2bb451bf5e5cf234bf9a"],["D:/My_Blog/public/tags/异常检测/index.html","838c2ece0bbf90595546157a917f9d66"],["D:/My_Blog/public/tags/态势感知/index.html","8ab4b05b2b54bb996618438cdab99c35"],["D:/My_Blog/public/tags/机器学习/index.html","cd6741065262bba73d84124d6c00d911"],["D:/My_Blog/public/tags/杂谈/index.html","100291f0c3f2551f90d5fa2c4af540a5"],["D:/My_Blog/public/tags/爬虫/index.html","0313b21147ccfa5c86e2f0773f6ab424"],["D:/My_Blog/public/tags/神经网络/index.html","6623716bfac9356f0521c41d4c4494b7"],["D:/My_Blog/public/tags/科研/index.html","182507b620566c1d3c7b41ddbf07803d"],["D:/My_Blog/public/tags/网络基础/index.html","aa5c680c1dec828cef508469fa419ca2"],["D:/My_Blog/public/tags/读书/index.html","ef58ca1247648db95a473cbb9754232f"],["D:/My_Blog/public/tags/路由攻击/index.html","8d7f8c649a05c221d07cb8ec61658dae"]];
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







