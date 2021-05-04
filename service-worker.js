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

var precacheConfig = [["D:/My_Blog/public/1231489.png","649e11b9d2b015e1e36ca0204fb43eec"],["D:/My_Blog/public/2020/02/21/DVWA-CSRF/index.html","d72f4a47195f3e55139a699f519b8ad3"],["D:/My_Blog/public/2020/02/21/DVWA-SQL注入/index.html","77bbd6d3bdbc4b9d6862aa249d991cc1"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-DOM/index.html","56e920b06811605d09bde8c008d2718e"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Reflected/index.html","350003a553ce364899fcf56411d32b68"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Stored/index.html","26345543770a72e5a80d4bfe553bf4f0"],["D:/My_Blog/public/2020/02/21/DVWA下利用XSS获取Cookie/index.html","9a811ee14fca0871ce3ba75480ca40ca"],["D:/My_Blog/public/2020/02/21/LeetCode-14-最长公共前缀/index.html","cb627d501a0d7763946cf14624ad2ea5"],["D:/My_Blog/public/2020/02/21/LeetCode-53-最大子序和-动态规划法/index.html","52ea2c2818579c1bc82b68af0ab98a6a"],["D:/My_Blog/public/2020/02/21/LeetCode-69-x的平方根-牛顿迭代法/index.html","87e354e508ea526156bc72b3b9f8f688"],["D:/My_Blog/public/2020/02/21/LeetCode-70-爬楼梯/index.html","9f5cea1786e6c97d9f2b29bf2fa2b032"],["D:/My_Blog/public/2020/02/21/MISC中图片隐藏文件分离/index.html","1b69bbc0356f169fa6e7dadc7bf8af75"],["D:/My_Blog/public/2020/02/21/PaperNote-HOLMES：基于可疑信息流的实时APT检测/index.html","40894a1d0db6538ec53995595c8f232d"],["D:/My_Blog/public/2020/02/21/PaperNote-SLEUTH：基于COTS审计数据的实时攻击场景重构/index.html","d58399e0f5cf4bb08354d9a940ba7718"],["D:/My_Blog/public/2020/02/21/PaperNote-分析大量网络流量以进行APT检测/index.html","bd0897dd4dd858fcc1dce7630c18b2b8"],["D:/My_Blog/public/2020/02/21/PaperNote-基于高效数据流标记和跟踪的可精炼跨主机攻击调查/index.html","c3984c141532df4f7aa20ef6b3e817f8"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-requests/index.html","893c53859d4fa7f633c6074c069701f1"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-urllib/index.html","dcea7354eba1883415cf7baf475ab9f8"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-正则表达式/index.html","67319193c0fe2753bbda7e248d7632a6"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库BeautifulSoup/index.html","c06a53c48137530bff60044c16228f53"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库XPath/index.html","8590ec9a424875bbb86c9fffb60ecfad"],["D:/My_Blog/public/2020/02/21/Python网络编程-TCP/index.html","1772c374317d8266b2b37852911806d2"],["D:/My_Blog/public/2020/02/21/Python网络编程-UDP/index.html","f0ed284a2eee2690d602debcaa5a10c4"],["D:/My_Blog/public/2020/02/21/SUCTF-Checkin/index.html","8dd52a0e43d48f606cd8b6e3fa5b5942"],["D:/My_Blog/public/2020/02/21/Web安全之文件上传漏洞/index.html","6b33af1d0dc10a7dc443883fd479eee4"],["D:/My_Blog/public/2020/02/21/Web安全之文件包含漏洞/index.html","925c36db7ed74f5b73a70c59fe4f9703"],["D:/My_Blog/public/2020/02/21/X-Forwarded-For和Referer/index.html","0acfc8a231f5f41e3e6c26fdf44625a5"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level1-10/index.html","1fa44e6c90fe5d75ca9a4fef63a18e06"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level11-20/index.html","5fc1a5635918547d21a48439b2904433"],["D:/My_Blog/public/2020/02/21/zip格式和zip伪加密/index.html","09bb35196d82911818dc1c0b98ba0f4b"],["D:/My_Blog/public/2020/02/21/《机器学习与安全》读书笔记/index.html","5f06e445a613f0694c07ca9b15741afe"],["D:/My_Blog/public/2020/02/21/十分钟入门Pandas/index.html","161ba8daa01db74d55465e1fae5d6246"],["D:/My_Blog/public/2020/02/21/栅栏密码/index.html","4e494fd240a0fdb30cbc98f67f121b64"],["D:/My_Blog/public/2020/02/21/神经网络的数据表示-张量Tensor/index.html","e1693d34d2a86b348ff0382ae3b88497"],["D:/My_Blog/public/2020/02/21/记深信服2018秋季校园招聘-技术服务工程师/index.html","a477e8e6f9268d4c0021798a6c7699af"],["D:/My_Blog/public/2020/02/21/读书-《叫魂-1768年中国妖术大恐慌》/index.html","551bf707cf48043b73b298be42a0bf04"],["D:/My_Blog/public/2020/02/21/读书-《许三观卖血记》/index.html","0c90c148bfe34237279651354c49c31f"],["D:/My_Blog/public/2020/02/26/PaperNote-一种情报驱动的安全感知APT防御机制/index.html","40397c505d9ac0bc20428b77c95fce25"],["D:/My_Blog/public/2020/03/05/PaperNote-基于时空特征融合的入侵检测系统模型/index.html","b8d98879dc32c646a45188af85d96283"],["D:/My_Blog/public/2020/03/14/PaperNote-UNICORN：基于Provenance的实时APT检测器/index.html","cdc287122bfa1bf628daca88f650a67d"],["D:/My_Blog/public/2020/03/19/《网络安全态势感知》读书笔记/index.html","30f03b864b389a0a60952c822d8f3603"],["D:/My_Blog/public/2020/03/25/PaperNote-Poirot：对比攻击行为与内核审计记录以进行网络威胁猎杀/index.html","59ea62810dfaf9c7db94e22cab391b11"],["D:/My_Blog/public/2020/07/10/OSPF双LSA路由攻击的介绍与实现/index.html","150b4e5a1bd62ebd57266b12c2e18cdd"],["D:/My_Blog/public/2020/08/09/PaperNote-Log2vec/index.html","0d1d999b1b9d1a29012a0e6db38c505b"],["D:/My_Blog/public/2021/02/10/漏洞靶场安装ngx-lua-waf/index.html","bdb56baf68c31ee92672f44f50820bfa"],["D:/My_Blog/public/2021/03/07/DGL源码解析-GAT/index.html","ba8b5b2a7197d30ac7e393a57ecb0307"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210306101853084.png","1f88eec15610e53eb4ebda7da093bbf4"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210306102622681.png","f126f726b919d5e116657f93bdab1064"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210310211557467.png","3964f3539b4f9c8d887d76303981c70b"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210312154228666.png","8c41042fd087ea28f382c75977a53022"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210312160437581.png","7dfd84c6e78a8e3fd408b86117f6f22d"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210312160529128.png","42341b679ec265b46862882df54dc07c"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210312231044909.png","463e395574a3ca56bab73f2ee3e84cc2"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210313144517562.png","dba38892c49b04543844e829bc2338c9"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210313144810442.png","3cb4e4f9f220c5ffb9f650a6380f2da5"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210313145905999.png","aedafb3befcb037c57c840e79cc1b868"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/index.html","2924b90c35cf58836d92b96de9420f84"],["D:/My_Blog/public/2021/03/14/DGL源码解析-GCN/index.html","700094ae07811d192e890f99a41eaa70"],["D:/My_Blog/public/2021/03/15/DGL源码解析-GraphSAGE/index.html","9dc9c29037372b789394a6f8ff420149"],["D:/My_Blog/public/2021/03/17/Deep-Graph-Library/guide_6_0_0.png","3287be0193d9228763d11679c466c3b7"],["D:/My_Blog/public/2021/03/17/Deep-Graph-Library/index.html","e30dc51f1a5de5565b63c286f7a29582"],["D:/My_Blog/public/2021/03/24/《Outlier-Analysis》Chapter2/image-20210324101453910.png","0093c1d77028be812534dcc918cbca1f"],["D:/My_Blog/public/2021/03/24/《Outlier-Analysis》Chapter2/image-20210324102843500.png","a8d35f23ef1f167bf43b6ded91a574e3"],["D:/My_Blog/public/2021/03/24/《Outlier-Analysis》Chapter2/image-20210324105805662.png","ed13bf79e4be9207e8a1f2a4c42e6a9f"],["D:/My_Blog/public/2021/03/24/《Outlier-Analysis》Chapter2/image-20210324105817669.png","d3afc7a121f7edc9da2506108dc7db7a"],["D:/My_Blog/public/2021/03/24/《Outlier-Analysis》Chapter2/image-20210324110020390.png","4c8bddcd91cca7a1e2faf259c5d4b080"],["D:/My_Blog/public/2021/03/24/《Outlier-Analysis》Chapter2/image-20210324110057498.png","fe9921013b8bd3345067050910a2bd92"],["D:/My_Blog/public/2021/03/24/《Outlier-Analysis》Chapter2/image-20210324110658613.png","71e73672dae8e1e88d3e3fc3ead86857"],["D:/My_Blog/public/2021/03/24/《Outlier-Analysis》Chapter2/index.html","13f75e3f18cea1a3e7f548406f7b823a"],["D:/My_Blog/public/about/index.html","32534c916e24ea6cf0c96477614dcbc1"],["D:/My_Blog/public/archives/2020/02/index.html","64175b932be9c9a8407b25349b708502"],["D:/My_Blog/public/archives/2020/02/page/2/index.html","2a8612beba8a7428858b080318a211bc"],["D:/My_Blog/public/archives/2020/02/page/3/index.html","9cf73714ac3b6ab9f72a85a8680e1b97"],["D:/My_Blog/public/archives/2020/02/page/4/index.html","f2df7de9c8197189c8eecdbff1899aaf"],["D:/My_Blog/public/archives/2020/03/index.html","d193c20b610e993e9377c7b86f2b5ebf"],["D:/My_Blog/public/archives/2020/07/index.html","42e979c77036e27aefc8e255f2118c54"],["D:/My_Blog/public/archives/2020/08/index.html","b788b0b5b6d122d48cd0806357250734"],["D:/My_Blog/public/archives/2020/index.html","54b6133de313407d1886f3ed58c8c671"],["D:/My_Blog/public/archives/2020/page/2/index.html","6d0762126f739dbaccf13e1b9b7faf0c"],["D:/My_Blog/public/archives/2020/page/3/index.html","c2fae01a517de621f6a7307bfb7578aa"],["D:/My_Blog/public/archives/2020/page/4/index.html","78170450c7d3be8e823afab28e20c88d"],["D:/My_Blog/public/archives/2020/page/5/index.html","fb9d70475c51564b69f2e34dd5920ff2"],["D:/My_Blog/public/archives/2021/02/index.html","7549d1b83f1b4b99f7f1636811a06593"],["D:/My_Blog/public/archives/2021/03/index.html","33f897093a6e9a3eabf5ba5aef8e8da4"],["D:/My_Blog/public/archives/2021/index.html","470d227ad21b914dbde157a7cbb6b931"],["D:/My_Blog/public/archives/index.html","c7d7b3960f1873d4867936df03c5dea0"],["D:/My_Blog/public/archives/page/2/index.html","6bf4987334adfd3966df7c241eeb35b4"],["D:/My_Blog/public/archives/page/3/index.html","8692d484e1276d096daa0ec00b1b7da5"],["D:/My_Blog/public/archives/page/4/index.html","b72a64f45b8590a5dd276c575d714360"],["D:/My_Blog/public/archives/page/5/index.html","d6aab8498eb9cf766556095f0297bb6e"],["D:/My_Blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/My_Blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/My_Blog/public/categories/LeetCode/index.html","103609231a8352f9defa747fb29f168e"],["D:/My_Blog/public/categories/MISC/index.html","b9cc54cc09c4184174c8db43f5a69805"],["D:/My_Blog/public/categories/Python/index.html","5fde0fd5a6f81682c42a11a33e53c203"],["D:/My_Blog/public/categories/Web安全/index.html","c15cd49ddc3d73d9ebd932acaa9f6a80"],["D:/My_Blog/public/categories/Web安全/page/2/index.html","9494a69876a7854686f9f31eb69725c6"],["D:/My_Blog/public/categories/index.html","83108d9c18ffaa39974e9ab9e947d567"],["D:/My_Blog/public/categories/安全防护/index.html","2a55384490b137b2a933f5d208e2188e"],["D:/My_Blog/public/categories/密码学/index.html","a8041a519664bec063127c237a58896f"],["D:/My_Blog/public/categories/异常检测/index.html","6927d102aa4ed47785f35c460350fea5"],["D:/My_Blog/public/categories/机器学习/index.html","331c1a3f87298e833460159c5e677e03"],["D:/My_Blog/public/categories/杂谈/index.html","d8f0e26a858aa7a33d8d20383b3c0193"],["D:/My_Blog/public/categories/漏洞复现/index.html","4677a162b71c3973cf32780bc8852038"],["D:/My_Blog/public/categories/科研/index.html","ccc0cd6a2199927549852cf93d1c9a4a"],["D:/My_Blog/public/categories/网络基础/index.html","a45e5a1dbe046f4a2e10ef1d8d84f018"],["D:/My_Blog/public/categories/读书/index.html","cd584b4d5bce9283526f1ac6bbba72e7"],["D:/My_Blog/public/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["D:/My_Blog/public/css/index.css","1a8770d4815f16850f60f9989c73e11e"],["D:/My_Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/My_Blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/My_Blog/public/index.html","cc47d32b2f73c023bd8e6a33fcc568b3"],["D:/My_Blog/public/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["D:/My_Blog/public/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["D:/My_Blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/My_Blog/public/js/head.js","347edd99f8e3921b45fa617e839d8182"],["D:/My_Blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["D:/My_Blog/public/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["D:/My_Blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/My_Blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/My_Blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/My_Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/My_Blog/public/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["D:/My_Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/My_Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/My_Blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/My_Blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/My_Blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/My_Blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/My_Blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/My_Blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/My_Blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/My_Blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/My_Blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/My_Blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/My_Blog/public/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["D:/My_Blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/My_Blog/public/page/2/index.html","adf95266d9851467a76a3bf0ea74d8ad"],["D:/My_Blog/public/page/3/index.html","4df3425180de520173381eb5259d4625"],["D:/My_Blog/public/page/4/index.html","2717baf06156cf7b0469727c6e8f42c0"],["D:/My_Blog/public/page/5/index.html","be6ea8b6ffbd32a810e96488865543cd"],["D:/My_Blog/public/tags/APT/index.html","088b4f91d97f2120c6a0264235097447"],["D:/My_Blog/public/tags/Anomaly-Detection/index.html","c24e5109da6f06dc7caf0c7b8417b62d"],["D:/My_Blog/public/tags/DGL/index.html","d97713b645aff2f89a2f35c55b86e625"],["D:/My_Blog/public/tags/GAT/index.html","02d0080d761322507a4ec99fabd5319f"],["D:/My_Blog/public/tags/GCN/index.html","0255373096649ffc45376144cf95d5f1"],["D:/My_Blog/public/tags/GNN/index.html","ce8c84d1145e50f443700fdd82196c67"],["D:/My_Blog/public/tags/GraphSAGE/index.html","8dbed56c996dc23771ef4de65da368f6"],["D:/My_Blog/public/tags/LeetCode/index.html","3f0928f7c76b1bc6e6ae0e13b1d24ca8"],["D:/My_Blog/public/tags/MISC/index.html","14a1e570cf294df75dca13762fff5751"],["D:/My_Blog/public/tags/Outlier-Analysis/index.html","7f935f526f6509ba0132e67a922bc5bc"],["D:/My_Blog/public/tags/Python/index.html","c5830b174e8817a65410e9fd10663f5c"],["D:/My_Blog/public/tags/WAF/index.html","5393a3cad762f06120e05cabbaa08c19"],["D:/My_Blog/public/tags/Web安全/index.html","2c6895788f22ccf0ac84fc5697bed365"],["D:/My_Blog/public/tags/Web安全/page/2/index.html","fdca26e116f72bd8a33d133fc63d74d1"],["D:/My_Blog/public/tags/index.html","9f87568043b84996e03b396ec5965ec1"],["D:/My_Blog/public/tags/入侵检测/index.html","e55c47b3df99af103e11dcc691baf4dd"],["D:/My_Blog/public/tags/威胁猎杀/index.html","a11a332040d8d6bd2380a88e1bd6ff65"],["D:/My_Blog/public/tags/安全数据科学/index.html","11993574809923ba0a3f7cd9223afc19"],["D:/My_Blog/public/tags/密码学/index.html","5bd24f90cd242d1f1f175f869e168391"],["D:/My_Blog/public/tags/异常检测/index.html","4b99110148e00e467892ea4d00dcc702"],["D:/My_Blog/public/tags/态势感知/index.html","3942ef1d1ebfc4d2556122ffc4b158d7"],["D:/My_Blog/public/tags/机器学习/index.html","ae5dff660c5369548e5a33452650abdd"],["D:/My_Blog/public/tags/杂谈/index.html","c20d523e30acea69088d7ba372239cdf"],["D:/My_Blog/public/tags/爬虫/index.html","e5ceb5dc288a1cf21457d7741d6d442d"],["D:/My_Blog/public/tags/神经网络/index.html","c8d917cfa8348f2a80bfc7c7e8e70a9e"],["D:/My_Blog/public/tags/科研/index.html","90bf7075390b403b32280484c4910f03"],["D:/My_Blog/public/tags/网络基础/index.html","eb31a8fcb9faaeaa4b30e01025d8cfd7"],["D:/My_Blog/public/tags/读书/index.html","567a6f870c2752401d249873c977b2fb"],["D:/My_Blog/public/tags/路由攻击/index.html","fe38c51d0ae645331b330318a20f02d1"]];
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







