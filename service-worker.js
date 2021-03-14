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

var precacheConfig = [["D:/My_Blog/public/1231489.png","649e11b9d2b015e1e36ca0204fb43eec"],["D:/My_Blog/public/2020/02/21/DVWA-CSRF/index.html","afd8b548e4e669f495a120cc8ca89668"],["D:/My_Blog/public/2020/02/21/DVWA-SQL注入/index.html","1dd8702914c17a952641d65d4463ca75"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-DOM/index.html","9a9acf16d9f7b8bbaa30e03410127567"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Reflected/index.html","4489d2b3e93f0e88dfc1463b903f645e"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Stored/index.html","cf18f5f6b455d68975a6b16feb8afa28"],["D:/My_Blog/public/2020/02/21/DVWA下利用XSS获取Cookie/index.html","81aa6760dbe5f5dba6bbe58c101bba54"],["D:/My_Blog/public/2020/02/21/LeetCode-14-最长公共前缀/index.html","dc04a4f84b9c9f64ca14e12dd75a850f"],["D:/My_Blog/public/2020/02/21/LeetCode-53-最大子序和-动态规划法/index.html","c7178b065e64ab148cdc386626941bc1"],["D:/My_Blog/public/2020/02/21/LeetCode-69-x的平方根-牛顿迭代法/index.html","8fa26e30296a280c42e2e9966a3b5f7f"],["D:/My_Blog/public/2020/02/21/LeetCode-70-爬楼梯/index.html","c6c229652234e13b59f982cffeddba67"],["D:/My_Blog/public/2020/02/21/MISC中图片隐藏文件分离/index.html","67d48dd583f91b4b4ca0452b79532517"],["D:/My_Blog/public/2020/02/21/PaperNote-HOLMES：基于可疑信息流的实时APT检测/index.html","a4e1bf8a321ddc4812e459d498b94c8f"],["D:/My_Blog/public/2020/02/21/PaperNote-SLEUTH：基于COTS审计数据的实时攻击场景重构/index.html","5b7fe8f1cb1237c3c8a0745f1c98a56e"],["D:/My_Blog/public/2020/02/21/PaperNote-分析大量网络流量以进行APT检测/index.html","28ac791e4aabe2f1b8a6fcabb07a9030"],["D:/My_Blog/public/2020/02/21/PaperNote-基于高效数据流标记和跟踪的可精炼跨主机攻击调查/index.html","75239ab2ed9e536e2c0ed79262233086"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-requests/index.html","7a55d6a69b887d309bba908d9be9674e"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-urllib/index.html","5c95f8e5357e43f2a8bfeb99a6b1db30"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-正则表达式/index.html","6a10a3a06f608b03ccad15caa0e89344"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库BeautifulSoup/index.html","fca5527088da79c3bf3b35a98b3d90fc"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库XPath/index.html","a2227c2070cc8a61202a20df4e727c58"],["D:/My_Blog/public/2020/02/21/Python网络编程-TCP/index.html","c8f553216ba95b99e66ca69e330a751e"],["D:/My_Blog/public/2020/02/21/Python网络编程-UDP/index.html","20893db6662d647b8b4e804580ce2bc3"],["D:/My_Blog/public/2020/02/21/SUCTF-Checkin/index.html","8599d3e1918f74ba3959e8cfaff97e29"],["D:/My_Blog/public/2020/02/21/Web安全之文件上传漏洞/index.html","fa36155da9f27ffd22c4459256a39f8c"],["D:/My_Blog/public/2020/02/21/Web安全之文件包含漏洞/index.html","db1120b9633632b6c9e0e486ff0fc5d9"],["D:/My_Blog/public/2020/02/21/X-Forwarded-For和Referer/index.html","f466bc8cac11c13f6f76c642c4a84b77"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level1-10/index.html","598fae55e5e2fad173d186fdbf4a8e50"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level11-20/index.html","29a7d41f2c21c740cb247dadd97f0d63"],["D:/My_Blog/public/2020/02/21/zip格式和zip伪加密/index.html","2af3307419756a8f09f2759bba76e200"],["D:/My_Blog/public/2020/02/21/《机器学习与安全》读书笔记/index.html","1ec1e2b7bbceae74ac1c02c22e639ac9"],["D:/My_Blog/public/2020/02/21/十分钟入门Pandas/index.html","7913db733d23ab3ef12d7a826bad00cd"],["D:/My_Blog/public/2020/02/21/栅栏密码/index.html","735debf06903e77d197dece14fc4ecf4"],["D:/My_Blog/public/2020/02/21/神经网络的数据表示-张量Tensor/index.html","27621de630afa0a80365a87d97afdd65"],["D:/My_Blog/public/2020/02/21/记深信服2018秋季校园招聘-技术服务工程师/index.html","13c6fcc0697f3f1c70cb624be5fc0cb3"],["D:/My_Blog/public/2020/02/21/读书-《叫魂-1768年中国妖术大恐慌》/index.html","f88ee469b52b67fe440e76e24d4eeefb"],["D:/My_Blog/public/2020/02/21/读书-《许三观卖血记》/index.html","c6c0cd140dc0c7bb12d15a6fef66d4e7"],["D:/My_Blog/public/2020/02/26/PaperNote-一种情报驱动的安全感知APT防御机制/index.html","8ae7f2124576cad447cfeb242e679bd8"],["D:/My_Blog/public/2020/03/05/PaperNote-基于时空特征融合的入侵检测系统模型/index.html","88d1e9f3f55cad42db6ed32773401cf5"],["D:/My_Blog/public/2020/03/14/PaperNote-UNICORN：基于Provenance的实时APT检测器/index.html","cff205f78e77534be2630903876eecf0"],["D:/My_Blog/public/2020/03/19/《网络安全态势感知》读书笔记/index.html","a2d6a91f093dd4ab003193f3519a9fb4"],["D:/My_Blog/public/2020/03/25/PaperNote-Poirot：对比攻击行为与内核审计记录以进行网络威胁猎杀/index.html","85b52d8a75a0d08a322db0548c277a5a"],["D:/My_Blog/public/2020/07/10/OSPF双LSA路由攻击的介绍与实现/index.html","b218ccf6d85492acc95a3cabf17738d2"],["D:/My_Blog/public/2020/08/09/PaperNote-Log2vec/index.html","8fde8f52ed21826ac65a7ba99759b053"],["D:/My_Blog/public/2021/01/05/Deep-Graph-Library-Overview/index.html","86622afb108ff1c946638fac855b7a4c"],["D:/My_Blog/public/2021/02/10/漏洞靶场安装ngx-lua-waf/index.html","d0dd158b562d18c35081e1cb3e4b904d"],["D:/My_Blog/public/2021/03/07/DGL源码解析-GAT/index.html","e441a3657c70f0ebd9ccacf437e5e6b5"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210306101853084.png","1f88eec15610e53eb4ebda7da093bbf4"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210306102622681.png","f126f726b919d5e116657f93bdab1064"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210310211557467.png","3964f3539b4f9c8d887d76303981c70b"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210312154228666.png","8c41042fd087ea28f382c75977a53022"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210312160437581.png","7dfd84c6e78a8e3fd408b86117f6f22d"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210312160529128.png","42341b679ec265b46862882df54dc07c"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210312231044909.png","463e395574a3ca56bab73f2ee3e84cc2"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210313144517562.png","dba38892c49b04543844e829bc2338c9"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210313144810442.png","3cb4e4f9f220c5ffb9f650a6380f2da5"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210313145905999.png","aedafb3befcb037c57c840e79cc1b868"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/index.html","94b680a3d0bfd84e79eccfc40e9463d9"],["D:/My_Blog/public/about/index.html","de20ade365356f98876c9b5715dcf7e7"],["D:/My_Blog/public/archives/2020/02/index.html","93b2fe9eba143950c3e8f5f0beba49f3"],["D:/My_Blog/public/archives/2020/02/page/2/index.html","94d00602ece45afc1d160b95d82f5fed"],["D:/My_Blog/public/archives/2020/02/page/3/index.html","d2794c8de821c4a33918dea9c1341f43"],["D:/My_Blog/public/archives/2020/02/page/4/index.html","a86947009afe84cb37d9e58b0841d0dd"],["D:/My_Blog/public/archives/2020/03/index.html","85e73b6f42abd0e8656111d44400c846"],["D:/My_Blog/public/archives/2020/07/index.html","c2b601492146c1882af7dc569f73e996"],["D:/My_Blog/public/archives/2020/08/index.html","465df090326a0ba98d6cf395b795fdef"],["D:/My_Blog/public/archives/2020/index.html","99fec1b0c6bf0c932aaee366cb44e8f8"],["D:/My_Blog/public/archives/2020/page/2/index.html","11f4201361228289e887a3a43cf20764"],["D:/My_Blog/public/archives/2020/page/3/index.html","35c0aef97b89f2399f3897fffab37a83"],["D:/My_Blog/public/archives/2020/page/4/index.html","a151fea5abb4f86a989d57f5f58d8d30"],["D:/My_Blog/public/archives/2020/page/5/index.html","311bcd45e44946f7af33aa527ec9d59a"],["D:/My_Blog/public/archives/2021/01/index.html","d95fd8b3c7b03841b9ab6d641eeba398"],["D:/My_Blog/public/archives/2021/02/index.html","72ee2a4e27fcae349f13c07483cb6ebd"],["D:/My_Blog/public/archives/2021/03/index.html","ab237cc9e66903fd10cb2fd2873a0d7d"],["D:/My_Blog/public/archives/2021/index.html","cd062d57c95817587749e553b57b59b3"],["D:/My_Blog/public/archives/index.html","0886719e0d9badaff0913eb7e5fe573a"],["D:/My_Blog/public/archives/page/2/index.html","0029592555d3dcaef75bca8c8304b1fa"],["D:/My_Blog/public/archives/page/3/index.html","92fc5ef6d11383f4c0d2bd5a1295e242"],["D:/My_Blog/public/archives/page/4/index.html","510b8eaf6f8f0b99bcf6cc2a8af261ff"],["D:/My_Blog/public/archives/page/5/index.html","cd83f461af9e2f91b31d11f01eeb9ebd"],["D:/My_Blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/My_Blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/My_Blog/public/categories/LeetCode/index.html","ad04d2ce7ba1370ea128b4349ce4f460"],["D:/My_Blog/public/categories/MISC/index.html","b7f4c326a7571c0017be79e2187c1f19"],["D:/My_Blog/public/categories/Python/index.html","2bb5b028da82bb3e97d6727f39c78dbc"],["D:/My_Blog/public/categories/Web安全/index.html","a78273f5e704356cd464d47105f88f93"],["D:/My_Blog/public/categories/Web安全/page/2/index.html","c64db3c0ba4c7e89a6250d2239518ce3"],["D:/My_Blog/public/categories/index.html","88b846e2e7edadf8272e9a45e458e16e"],["D:/My_Blog/public/categories/安全防护/index.html","f1b5945ab19806f142141882734a3503"],["D:/My_Blog/public/categories/密码学/index.html","8edce4250f0feed4dd3fc35c601cfb31"],["D:/My_Blog/public/categories/异常检测/index.html","674df31acf9ea0a2bafe82a87604c74e"],["D:/My_Blog/public/categories/机器学习/index.html","6071338df8205c7a4692d09b0da5512b"],["D:/My_Blog/public/categories/杂谈/index.html","6ffaeb181e27868e909bfd048b10d237"],["D:/My_Blog/public/categories/漏洞复现/index.html","9ad1175fddcf749244d36e02f561f1a7"],["D:/My_Blog/public/categories/科研/index.html","640c07bd7752c304909b018645f992c9"],["D:/My_Blog/public/categories/网络基础/index.html","f46e6b6dc90307b4f09fa8f5855716d7"],["D:/My_Blog/public/categories/读书/index.html","dcbf05c427be7316ab64f427c7152cc9"],["D:/My_Blog/public/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["D:/My_Blog/public/css/index.css","1a8770d4815f16850f60f9989c73e11e"],["D:/My_Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/My_Blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/My_Blog/public/index.html","ab67f686cbfd8509bd44f4110f98a105"],["D:/My_Blog/public/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["D:/My_Blog/public/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["D:/My_Blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/My_Blog/public/js/head.js","347edd99f8e3921b45fa617e839d8182"],["D:/My_Blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["D:/My_Blog/public/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["D:/My_Blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/My_Blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/My_Blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/My_Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/My_Blog/public/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["D:/My_Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/My_Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/My_Blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/My_Blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/My_Blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/My_Blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/My_Blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/My_Blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/My_Blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/My_Blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/My_Blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/My_Blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/My_Blog/public/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["D:/My_Blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/My_Blog/public/page/2/index.html","11fb20802b6a2454d36f8652896f73aa"],["D:/My_Blog/public/page/3/index.html","6bb9600a8939069bcd25f22be105a32f"],["D:/My_Blog/public/page/4/index.html","671eacc0580d581350a3b7168b9e562a"],["D:/My_Blog/public/page/5/index.html","3a714f14997ecba70a31b7b8e5cb1a7c"],["D:/My_Blog/public/tags/APT/index.html","f3453256e5f9f6257c0efccb85275b4b"],["D:/My_Blog/public/tags/Anomaly-Detection/index.html","0735dd28d6fe0b73cc7a8d219f68118d"],["D:/My_Blog/public/tags/DGL/index.html","1f23cb09959aac9155a506fa2ef7ae1a"],["D:/My_Blog/public/tags/GAT/index.html","6d1a560e6051dda36c0f360604f09084"],["D:/My_Blog/public/tags/GNN/index.html","888a422144743b05136f8cbaaa8c4725"],["D:/My_Blog/public/tags/Graph-Neural-Network/index.html","130ea759ae18ecd6f0a540b36cf590a4"],["D:/My_Blog/public/tags/LeetCode/index.html","cc5251af19c13c25694c352cf1c71e7c"],["D:/My_Blog/public/tags/MISC/index.html","e0504f226a46e1dc5f73bb48c7a81ed6"],["D:/My_Blog/public/tags/Outlier-Analysis/index.html","f713f90648b7a18469535f2fd5d9fb54"],["D:/My_Blog/public/tags/Python/index.html","326db494daa6473147ac40bcda3a3f5d"],["D:/My_Blog/public/tags/WAF/index.html","35162547c1c26f96b6041930bb167641"],["D:/My_Blog/public/tags/Web安全/index.html","1783a3371128779f8b1074dacc027697"],["D:/My_Blog/public/tags/Web安全/page/2/index.html","dcf53b802a8b78a9569c4f53ddf6d74d"],["D:/My_Blog/public/tags/index.html","a8acabe274efbab28621f95283924afd"],["D:/My_Blog/public/tags/入侵检测/index.html","df3e98e347b7d6d14e93af9fdb437555"],["D:/My_Blog/public/tags/威胁猎杀/index.html","a630943c6509fefce3ad74844d66d3e5"],["D:/My_Blog/public/tags/安全数据科学/index.html","d19d073b9b39e3e9708c9569ee9e5994"],["D:/My_Blog/public/tags/密码学/index.html","d0d433d350675390e1fdacb6af1a1a7d"],["D:/My_Blog/public/tags/异常检测/index.html","94b9840fc772999418cd4f7579b99d18"],["D:/My_Blog/public/tags/态势感知/index.html","088210d16f99f44508c721de0392cc31"],["D:/My_Blog/public/tags/机器学习/index.html","10a36455c7c5af94190e729e52c26e61"],["D:/My_Blog/public/tags/杂谈/index.html","8d47dbb0b0833b54a42b1bff78c69c16"],["D:/My_Blog/public/tags/爬虫/index.html","c2ad5ffa9274d2415f881af692f3730f"],["D:/My_Blog/public/tags/神经网络/index.html","291a0a1779fbd7d4b0fd72fd6fa1827c"],["D:/My_Blog/public/tags/科研/index.html","24bb7989d6f426db654f000465e07e66"],["D:/My_Blog/public/tags/网络基础/index.html","6e5ad8039a80d15079fca13e1e4d0500"],["D:/My_Blog/public/tags/读书/index.html","55909e37139ad590ed11c255e6d34b48"],["D:/My_Blog/public/tags/路由攻击/index.html","807b583244efc6b73793d59fa03ca392"]];
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







