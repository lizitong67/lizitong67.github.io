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

var precacheConfig = [["D:/My_Blog/public/1231489.png","649e11b9d2b015e1e36ca0204fb43eec"],["D:/My_Blog/public/2020/02/21/DVWA-CSRF/index.html","d20864ab5837bab4b8a8bc8d2308d700"],["D:/My_Blog/public/2020/02/21/DVWA-SQL注入/index.html","3510879ba4f1833c6f3b238898a50b44"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-DOM/index.html","d080661d0f314de62bd16f36e8ceb305"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Reflected/index.html","0bb1decd3e35c216f7cbfca7ce3f7742"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Stored/index.html","389ecda788418005305b4a9de1720aeb"],["D:/My_Blog/public/2020/02/21/DVWA下利用XSS获取Cookie/index.html","db51cd4faedbce27d598300ed04a77c0"],["D:/My_Blog/public/2020/02/21/LeetCode-14-最长公共前缀/index.html","a396ebe248b7527ec767a923cb367f4a"],["D:/My_Blog/public/2020/02/21/LeetCode-53-最大子序和-动态规划法/index.html","97f736f86251682bf952c9cd3ab398e2"],["D:/My_Blog/public/2020/02/21/LeetCode-69-x的平方根-牛顿迭代法/index.html","f6d7a1964a10a254a1882df659d4d391"],["D:/My_Blog/public/2020/02/21/LeetCode-70-爬楼梯/index.html","53c93bbc883e31d7d82dba5868bae2a4"],["D:/My_Blog/public/2020/02/21/MISC中图片隐藏文件分离/index.html","9d9dabfb03108a054f97b5b0b8decf5c"],["D:/My_Blog/public/2020/02/21/PaperNote-HOLMES：基于可疑信息流的实时APT检测/index.html","f3694d2172ff21f02e7e1633f34065a6"],["D:/My_Blog/public/2020/02/21/PaperNote-SLEUTH：基于COTS审计数据的实时攻击场景重构/index.html","b99c78857f20ad7c7ae5629bc0902d2a"],["D:/My_Blog/public/2020/02/21/PaperNote-分析大量网络流量以进行APT检测/index.html","75bc3481d738565ab16b356e1da4572d"],["D:/My_Blog/public/2020/02/21/PaperNote-基于高效数据流标记和跟踪的可精炼跨主机攻击调查/index.html","90056807350d7a9d72367dbb0315aa10"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-requests/index.html","8bd9bc750eca82052b38bf794fb34297"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-urllib/index.html","85ee67c8d561a61b68ce012150af69f3"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-正则表达式/index.html","58b988edea466a4ef42c1e20b8c3770e"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库BeautifulSoup/index.html","e9381850850d716ec1806937ac1d6131"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库XPath/index.html","281241fbbacad90a20a33af0ed778460"],["D:/My_Blog/public/2020/02/21/Python网络编程-TCP/index.html","3458850e6cc7d1b4573764afa0d2e640"],["D:/My_Blog/public/2020/02/21/Python网络编程-UDP/index.html","2ab24740f25fff1bc4b4c75ad2c456e5"],["D:/My_Blog/public/2020/02/21/SUCTF-Checkin/index.html","c81ffd2151064ddc5f8f3b07529ed57a"],["D:/My_Blog/public/2020/02/21/Web安全之文件上传漏洞/index.html","28436754bdf18d942c9f94739b9398e8"],["D:/My_Blog/public/2020/02/21/Web安全之文件包含漏洞/index.html","02600a405c233d5f17d43ca815c825df"],["D:/My_Blog/public/2020/02/21/X-Forwarded-For和Referer/index.html","a2bef4aa8b3e38b3094b9dcc73ed4095"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level1-10/index.html","0c327acb9f25c81bcdf27c97708c90a4"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level11-20/index.html","d16d7768bc924633f6936305ee329e04"],["D:/My_Blog/public/2020/02/21/zip格式和zip伪加密/index.html","1e68332b51060145ae49c7bd3227f030"],["D:/My_Blog/public/2020/02/21/《机器学习与安全》读书笔记/index.html","cb3fb7437b6bcddc26663d3deb684521"],["D:/My_Blog/public/2020/02/21/十分钟入门Pandas/index.html","7de3934dfaf3fb6f35cb151a044957fb"],["D:/My_Blog/public/2020/02/21/栅栏密码/index.html","994874306a5f6826cf596cd0ceca225f"],["D:/My_Blog/public/2020/02/21/神经网络的数据表示-张量Tensor/index.html","64ef01dca0c96c95f6921da82a279615"],["D:/My_Blog/public/2020/02/21/记深信服2018秋季校园招聘-技术服务工程师/index.html","6dc2acb13db70eaeab39056cd42de0db"],["D:/My_Blog/public/2020/02/21/读书-《叫魂-1768年中国妖术大恐慌》/index.html","f45587b9f0198864b52141903b1b1a4e"],["D:/My_Blog/public/2020/02/21/读书-《许三观卖血记》/index.html","dabc00ce36259ce412d368dad3803127"],["D:/My_Blog/public/2020/02/26/PaperNote-一种情报驱动的安全感知APT防御机制/index.html","c7586df0a6d3c2d5efff83e55e68c360"],["D:/My_Blog/public/2020/03/05/PaperNote-基于时空特征融合的入侵检测系统模型/index.html","9d7d5850b4d8345733290e0e40dbf329"],["D:/My_Blog/public/2020/03/14/PaperNote-UNICORN：基于Provenance的实时APT检测器/index.html","b0200427e99f849795fff6d1526391a4"],["D:/My_Blog/public/2020/03/19/《网络安全态势感知》读书笔记/index.html","c5e467fbfc0712242cddc14990061350"],["D:/My_Blog/public/2020/03/25/PaperNote-Poirot：对比攻击行为与内核审计记录以进行网络威胁猎杀/index.html","707af8ce4ef92c662f3aa887b423b075"],["D:/My_Blog/public/2020/07/10/OSPF双LSA路由攻击的介绍与实现/index.html","8c332633bc421de5f33c7f80b563bf4e"],["D:/My_Blog/public/2020/08/09/PaperNote-Log2vec/index.html","05427a1a9581629581020648638ff504"],["D:/My_Blog/public/2021/02/10/漏洞靶场安装ngx-lua-waf/index.html","0117346235a08d6914577035e0e8fe91"],["D:/My_Blog/public/2021/03/07/DGL源码解析-GAT/index.html","a42650b49a5ab5d182a92b1e8f944f13"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210306101853084.png","1f88eec15610e53eb4ebda7da093bbf4"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210306102622681.png","f126f726b919d5e116657f93bdab1064"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210310211557467.png","3964f3539b4f9c8d887d76303981c70b"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210312154228666.png","8c41042fd087ea28f382c75977a53022"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210312160437581.png","7dfd84c6e78a8e3fd408b86117f6f22d"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210312160529128.png","42341b679ec265b46862882df54dc07c"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210312231044909.png","463e395574a3ca56bab73f2ee3e84cc2"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210313144517562.png","dba38892c49b04543844e829bc2338c9"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210313144810442.png","3cb4e4f9f220c5ffb9f650a6380f2da5"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210313145905999.png","aedafb3befcb037c57c840e79cc1b868"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/index.html","f9811b2566c7fd87f3ac1262ba84dc02"],["D:/My_Blog/public/2021/03/14/DGL源码解析-GCN/index.html","2d914a71f6b77958b8c981c4341f4b64"],["D:/My_Blog/public/2021/03/15/DGL源码解析-GraphSAGE/index.html","41afcde4e4e328ba25e301f75d6beb46"],["D:/My_Blog/public/2021/03/17/Deep-Graph-Library/guide_6_0_0.png","3287be0193d9228763d11679c466c3b7"],["D:/My_Blog/public/2021/03/17/Deep-Graph-Library/index.html","994521bd550b8a85245c894284fbfe75"],["D:/My_Blog/public/2021/03/24/《Outlier-Analysis》Chapter2/image-20210324101453910.png","0093c1d77028be812534dcc918cbca1f"],["D:/My_Blog/public/2021/03/24/《Outlier-Analysis》Chapter2/image-20210324102843500.png","a8d35f23ef1f167bf43b6ded91a574e3"],["D:/My_Blog/public/2021/03/24/《Outlier-Analysis》Chapter2/image-20210324105805662.png","ed13bf79e4be9207e8a1f2a4c42e6a9f"],["D:/My_Blog/public/2021/03/24/《Outlier-Analysis》Chapter2/image-20210324105817669.png","d3afc7a121f7edc9da2506108dc7db7a"],["D:/My_Blog/public/2021/03/24/《Outlier-Analysis》Chapter2/image-20210324110020390.png","4c8bddcd91cca7a1e2faf259c5d4b080"],["D:/My_Blog/public/2021/03/24/《Outlier-Analysis》Chapter2/image-20210324110057498.png","fe9921013b8bd3345067050910a2bd92"],["D:/My_Blog/public/2021/03/24/《Outlier-Analysis》Chapter2/image-20210324110658613.png","71e73672dae8e1e88d3e3fc3ead86857"],["D:/My_Blog/public/2021/03/24/《Outlier-Analysis》Chapter2/index.html","a19ab443676151bc1aeca7455fc8aff2"],["D:/My_Blog/public/2021/05/17/TextCNN-TorchText实现恶意程序分类/index.html","349f7536924862f343716bc2aabecbca"],["D:/My_Blog/public/2021/05/17/网络威胁情报之STIX2-1/index.html","61c4928a24c55f5d24b3be60e4300318"],["D:/My_Blog/public/2021/05/17/网络威胁情报之STIX2-1/v2-1fce8757eb2d740d5c53c1d774210b90_b.png","7a9ab3cd4f4e3997307cf131f8ca831f"],["D:/My_Blog/public/2021/05/17/网络威胁情报之STIX2-1/v2-4957a3517ab38f5b85de7c8a3bdc6176_b.png","d3dad525612d9df6df314f70ee60c9ac"],["D:/My_Blog/public/2021/05/17/网络威胁情报之STIX2-1/v2-76e9f09cd166e18fc61e507bc2c8e739_b.png","34c6d88412f3e06d0a554eef525c6b07"],["D:/My_Blog/public/2021/05/17/网络威胁情报之STIX2-1/v2-be6a66d36edd9f00b54d0b9a231590f3_b.png","3ab7bfea757033ff9873326f72e1ecf1"],["D:/My_Blog/public/2021/05/17/网络威胁情报之STIX2-1/v2-d0194fd41138956df615a66b00c600b9_b.png","786c3221775105d4350b15793c8da561"],["D:/My_Blog/public/2021/05/17/网络威胁情报之STIX2-1/v2-d74c321639e669114b4a7b1543269ae2_b.png","4d8f62979cab356ac87cd51dd9fb77d6"],["D:/My_Blog/public/2021/05/17/网络威胁情报之STIX2-1/v2-e4b2efdc0bb71cd83273593d7b956ea4_b.png","e4b2efdc0bb71cd83273593d7b956ea4"],["D:/My_Blog/public/2021/05/17/网络威胁情报之STIX2-1/v2-f18a588997b925205535a38db5050c22_b.png","84ee062950a0262e7c4f2980ec5e4250"],["D:/My_Blog/public/about/index.html","d9ca001acc75b648467f727d3f9fd3da"],["D:/My_Blog/public/archives/2020/02/index.html","c4982bb0a9a173f1bb8db56e2d2d83bb"],["D:/My_Blog/public/archives/2020/02/page/2/index.html","51c1bdbbd84a742c8dd4275db2566106"],["D:/My_Blog/public/archives/2020/02/page/3/index.html","a8af9c8585bc5edb987ce90070b6cad6"],["D:/My_Blog/public/archives/2020/02/page/4/index.html","983fb77562a6a96d2795bf6d62f3bf32"],["D:/My_Blog/public/archives/2020/03/index.html","252f8251a845dd200d91060543e351b6"],["D:/My_Blog/public/archives/2020/07/index.html","d4ee5246e85f5a3edac36c88171ab91f"],["D:/My_Blog/public/archives/2020/08/index.html","03ea79fcead5e56ce46a78943092268e"],["D:/My_Blog/public/archives/2020/index.html","c7622f38f772b13b940aa463ddc8f416"],["D:/My_Blog/public/archives/2020/page/2/index.html","4397ffe84635c9d4e55596ed8cab0b00"],["D:/My_Blog/public/archives/2020/page/3/index.html","ec06c3b271974c89c456fda3c6534bd4"],["D:/My_Blog/public/archives/2020/page/4/index.html","7a23c7786bbd0791613c4368e5f4eb86"],["D:/My_Blog/public/archives/2020/page/5/index.html","df5a526500ac7e76eb2053832a7e93e0"],["D:/My_Blog/public/archives/2021/02/index.html","1f9150ff62d92475541a006e2b6c1fc5"],["D:/My_Blog/public/archives/2021/03/index.html","82a72fcde0a211585997419d484eea56"],["D:/My_Blog/public/archives/2021/05/index.html","9a545ea2f05c0e3f6d78b08e052090b1"],["D:/My_Blog/public/archives/2021/index.html","33c903b5d2c94c13c50a8bcec0196b20"],["D:/My_Blog/public/archives/index.html","a270ae51a2e15129c926700eb2960748"],["D:/My_Blog/public/archives/page/2/index.html","6fd8a55ed813d4736a1da91f2044eb7e"],["D:/My_Blog/public/archives/page/3/index.html","a9dd00f84f8cfe31eb466b454dd23418"],["D:/My_Blog/public/archives/page/4/index.html","356f606c2831813ed57e988e414801db"],["D:/My_Blog/public/archives/page/5/index.html","86ba188018645a9b78a120da701db58f"],["D:/My_Blog/public/archives/page/6/index.html","2595f332d6a867a36c39fc527241a810"],["D:/My_Blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/My_Blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/My_Blog/public/categories/LeetCode/index.html","ae06e43acd7e22940757db527ceac04a"],["D:/My_Blog/public/categories/MISC/index.html","436eecc234b6225f86de7610cc331974"],["D:/My_Blog/public/categories/Python/index.html","dee202908beaf6bcdc137a97d81624c0"],["D:/My_Blog/public/categories/Web安全/index.html","3945510e3f460283ee91ee170bd8d816"],["D:/My_Blog/public/categories/Web安全/page/2/index.html","883d5dc0e17bfebf4ea04b830ed25496"],["D:/My_Blog/public/categories/index.html","b2edeabf07c78c065af0c97484069f9c"],["D:/My_Blog/public/categories/安全/index.html","00ec33f6081daea80d3c5cf6034060d2"],["D:/My_Blog/public/categories/安全/机器学习/index.html","9ab2444bf470ba10544c69cd285a857a"],["D:/My_Blog/public/categories/密码学/index.html","872d9c2e7c8a636424d8312a17d97299"],["D:/My_Blog/public/categories/异常检测/index.html","c2ed9f5446e687f9e935d72350632d05"],["D:/My_Blog/public/categories/机器学习/index.html","f5eb994fae6908c5b74a62d03ffce58c"],["D:/My_Blog/public/categories/杂谈/index.html","1f4189700283ca2140b93c372a836b7c"],["D:/My_Blog/public/categories/漏洞复现/index.html","d6eceb2d69dde539555f8ea98b555c6b"],["D:/My_Blog/public/categories/科研/index.html","a0689a03e421018a39f605e8603faa87"],["D:/My_Blog/public/categories/网络基础/index.html","6cbc51104f6b89716633d75175052ee9"],["D:/My_Blog/public/categories/读书/index.html","3623905bf4cf0f7c93d5966ff89c94f5"],["D:/My_Blog/public/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["D:/My_Blog/public/css/index.css","1a8770d4815f16850f60f9989c73e11e"],["D:/My_Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/My_Blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/My_Blog/public/index.html","df72a256f06e7eaca7216505e659b3cc"],["D:/My_Blog/public/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["D:/My_Blog/public/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["D:/My_Blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/My_Blog/public/js/head.js","347edd99f8e3921b45fa617e839d8182"],["D:/My_Blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["D:/My_Blog/public/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["D:/My_Blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/My_Blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/My_Blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/My_Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/My_Blog/public/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["D:/My_Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/My_Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/My_Blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/My_Blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/My_Blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/My_Blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/My_Blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/My_Blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/My_Blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/My_Blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/My_Blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/My_Blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/My_Blog/public/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["D:/My_Blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/My_Blog/public/page/2/index.html","38385369ce1848d60eb92f18c35f82ac"],["D:/My_Blog/public/page/3/index.html","c5edfe52c5a3daf57f91dc87c0e1610d"],["D:/My_Blog/public/page/4/index.html","e812deb1861b09fdaa68f98f5c184c01"],["D:/My_Blog/public/page/5/index.html","c4678669ac8aa8d469ea9a3267752b02"],["D:/My_Blog/public/page/6/index.html","ffc9d03a0fecb9eaca6bd4d29a82bec2"],["D:/My_Blog/public/tags/APT/index.html","b2ef8614529dd3c7c5ca6c36b55e89ee"],["D:/My_Blog/public/tags/Anomaly-Detection/index.html","71439af18f7390a1fd5020ff434570bf"],["D:/My_Blog/public/tags/DGL/index.html","f0378b0fd587bc386631730132533d3b"],["D:/My_Blog/public/tags/GAT/index.html","81f448319719ec81e77f33c734a3a0f7"],["D:/My_Blog/public/tags/GCN/index.html","fcea09e0c9107836bcbd4aa8611ba091"],["D:/My_Blog/public/tags/GNN/index.html","21ac5a58a1b3d977f187133206ee0625"],["D:/My_Blog/public/tags/GraphSAGE/index.html","8b8300e59e4d2660505626742d199fb2"],["D:/My_Blog/public/tags/LeetCode/index.html","d6c59a6f6fe9629e15228623e7ce0c9b"],["D:/My_Blog/public/tags/MISC/index.html","40b5412f13eb8105e63914f245362e37"],["D:/My_Blog/public/tags/Outlier-Analysis/index.html","4fa120fe93bb0e22d4d4f6d2b8c6707d"],["D:/My_Blog/public/tags/Python/index.html","5625816f3276bd1cab7469b672aaadc7"],["D:/My_Blog/public/tags/WAF/index.html","5a07cb0d3573d1262e750d1d5b7613a6"],["D:/My_Blog/public/tags/Web安全/index.html","8c620d8fc1dd50c32d1a025ccf7e90d2"],["D:/My_Blog/public/tags/Web安全/page/2/index.html","0f81e40a417e29b69de93578dfc31e82"],["D:/My_Blog/public/tags/index.html","8174582928a0e672c3a351c376a34245"],["D:/My_Blog/public/tags/入侵检测/index.html","61fd5a11bd748729a6f77e0372ca5630"],["D:/My_Blog/public/tags/威胁情报/index.html","c53377eb029b16f31589b7f66b718690"],["D:/My_Blog/public/tags/威胁猎杀/index.html","4a9034c4a5350837ba8feac61a6a139d"],["D:/My_Blog/public/tags/安全数据科学/index.html","bce12521cfbdab39a0f50c55c925e57e"],["D:/My_Blog/public/tags/密码学/index.html","2dfac2575e38785c1574430a3dac01f4"],["D:/My_Blog/public/tags/异常检测/index.html","1bceac41e0aed95c51104416298f41ee"],["D:/My_Blog/public/tags/态势感知/index.html","462db95c4da48309bbd756ef1d7927ef"],["D:/My_Blog/public/tags/恶意程序分析/index.html","10788a5482e725760165b33624c38d2e"],["D:/My_Blog/public/tags/机器学习/index.html","ee6595f36e6cdf72759f9801f5a2de9f"],["D:/My_Blog/public/tags/杂谈/index.html","0b6a61cdff0836f05f1d36c35233bc3b"],["D:/My_Blog/public/tags/爬虫/index.html","7dc140cf0fd75dfcbf116d6f7171413f"],["D:/My_Blog/public/tags/神经网络/index.html","3877c1593437eb8eb523c7d08e8c79a7"],["D:/My_Blog/public/tags/科研/index.html","bf29be401ac380dc1b7edca2a9b0bdb0"],["D:/My_Blog/public/tags/网络基础/index.html","0037f179df6cbb22ea8c138ed8cac3b7"],["D:/My_Blog/public/tags/读书/index.html","b95e9e5712037d5744c8ac308b66b9a3"],["D:/My_Blog/public/tags/路由攻击/index.html","4cc3c67f2e9e46a4160c172ab121ee5f"]];
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







