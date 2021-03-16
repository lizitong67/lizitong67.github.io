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

var precacheConfig = [["D:/My_Blog/public/1231489.png","649e11b9d2b015e1e36ca0204fb43eec"],["D:/My_Blog/public/2020/02/21/DVWA-CSRF/index.html","a798fd946d9e8c71af3e16bff926c234"],["D:/My_Blog/public/2020/02/21/DVWA-SQL注入/index.html","81e0ef9db1a6f6701c9195bed36842b7"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-DOM/index.html","09ba68aee99d141fe1ad690de2b75056"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Reflected/index.html","4806d386addaafb6dc93f3babd124128"],["D:/My_Blog/public/2020/02/21/DVWA-XSS-Stored/index.html","1a45db16c7a643aebb708b15784b17de"],["D:/My_Blog/public/2020/02/21/DVWA下利用XSS获取Cookie/index.html","6b158d989da40c58f4b4a4d798335c85"],["D:/My_Blog/public/2020/02/21/LeetCode-14-最长公共前缀/index.html","9fe0a215a08fc376baee77811b2e40d1"],["D:/My_Blog/public/2020/02/21/LeetCode-53-最大子序和-动态规划法/index.html","4a265ed208d0ae6829c429c0c41483de"],["D:/My_Blog/public/2020/02/21/LeetCode-69-x的平方根-牛顿迭代法/index.html","00573f59b6819ce1f72e0ff499e4d454"],["D:/My_Blog/public/2020/02/21/LeetCode-70-爬楼梯/index.html","0d6efcfff133988cfacf49c87b4603c3"],["D:/My_Blog/public/2020/02/21/MISC中图片隐藏文件分离/index.html","efef70fe0b72c58c090a04ee93f78b2c"],["D:/My_Blog/public/2020/02/21/PaperNote-HOLMES：基于可疑信息流的实时APT检测/index.html","1ca4747ebac83bd8a94d84bf40518a4e"],["D:/My_Blog/public/2020/02/21/PaperNote-SLEUTH：基于COTS审计数据的实时攻击场景重构/index.html","992d5fe48732ae038aef5ba40e96ca03"],["D:/My_Blog/public/2020/02/21/PaperNote-分析大量网络流量以进行APT检测/index.html","ff19030efb997aed3af4c3f4b8fa04af"],["D:/My_Blog/public/2020/02/21/PaperNote-基于高效数据流标记和跟踪的可精炼跨主机攻击调查/index.html","0edb959922281c0325acc4e85f8426fe"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-requests/index.html","69325c3e23fadafb4bacd51eddca0f4c"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-urllib/index.html","9e0a138905e772019d7b4d68e351a23c"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-正则表达式/index.html","ae55d200e1cdf550e3523538d719a7eb"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库BeautifulSoup/index.html","0aaf2268925fbf879b4744622bd77c2b"],["D:/My_Blog/public/2020/02/21/Python3爬虫笔记-解析库XPath/index.html","fb02589ecd9f430ad7ac64d40dfb18ec"],["D:/My_Blog/public/2020/02/21/Python网络编程-TCP/index.html","95d32d7ea38088b884238827491697b6"],["D:/My_Blog/public/2020/02/21/Python网络编程-UDP/index.html","75e153e09d9e659c1930eccbb9ad392c"],["D:/My_Blog/public/2020/02/21/SUCTF-Checkin/index.html","19aed777ffe794f65959ef2ccd206ac2"],["D:/My_Blog/public/2020/02/21/Web安全之文件上传漏洞/index.html","9f85ee35362f9ff850939889ac3cb639"],["D:/My_Blog/public/2020/02/21/Web安全之文件包含漏洞/index.html","bc85fa7dffc018674496af3ea170dc15"],["D:/My_Blog/public/2020/02/21/X-Forwarded-For和Referer/index.html","70af2febf7cb755894fb63ecabd066f0"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level1-10/index.html","3fa053a946c1aee867dbce0aae37053e"],["D:/My_Blog/public/2020/02/21/XSS-Labs挑战笔记Level11-20/index.html","6e110028e9e2504ff886cdc15083d9fa"],["D:/My_Blog/public/2020/02/21/zip格式和zip伪加密/index.html","dd1078b93ba239a76337ef7165b4366c"],["D:/My_Blog/public/2020/02/21/《机器学习与安全》读书笔记/index.html","1f5ce1d0ba01de7ff3fdcfb3b04a8430"],["D:/My_Blog/public/2020/02/21/十分钟入门Pandas/index.html","9678fadd0b954df229561f56905a95a0"],["D:/My_Blog/public/2020/02/21/栅栏密码/index.html","90936b678fed05f0a7f615ba8c361e2d"],["D:/My_Blog/public/2020/02/21/神经网络的数据表示-张量Tensor/index.html","b547295c48ddaa9cc9bfcf95774d5ff2"],["D:/My_Blog/public/2020/02/21/记深信服2018秋季校园招聘-技术服务工程师/index.html","bc42c5b456ff910c3024d91cad970382"],["D:/My_Blog/public/2020/02/21/读书-《叫魂-1768年中国妖术大恐慌》/index.html","98ab5ecfc6eeaf9e571fbd7cf0c64fe0"],["D:/My_Blog/public/2020/02/21/读书-《许三观卖血记》/index.html","b28f911ec651b4f69e90341cbd08c16d"],["D:/My_Blog/public/2020/02/26/PaperNote-一种情报驱动的安全感知APT防御机制/index.html","3329bfd3dff784532671d0e4d893e8d9"],["D:/My_Blog/public/2020/03/05/PaperNote-基于时空特征融合的入侵检测系统模型/index.html","b72f11c9a961f3a730344ba4f631ad68"],["D:/My_Blog/public/2020/03/14/PaperNote-UNICORN：基于Provenance的实时APT检测器/index.html","09c3dbe2dbd801591691218481456d2e"],["D:/My_Blog/public/2020/03/19/《网络安全态势感知》读书笔记/index.html","2030479ce31b231e6ebed51b757acc6e"],["D:/My_Blog/public/2020/03/25/PaperNote-Poirot：对比攻击行为与内核审计记录以进行网络威胁猎杀/index.html","e6f978d9510770f8b24e68f5ea4ad510"],["D:/My_Blog/public/2020/07/10/OSPF双LSA路由攻击的介绍与实现/index.html","8d185a1556477b3b6e70cac6edb704a2"],["D:/My_Blog/public/2020/08/09/PaperNote-Log2vec/index.html","247118f0c8a24f9c3e117700c144dc18"],["D:/My_Blog/public/2021/01/05/Deep-Graph-Library-Overview/index.html","b55d83707af028d5d66a2762230d78b4"],["D:/My_Blog/public/2021/02/10/漏洞靶场安装ngx-lua-waf/index.html","fa97bb8764ae77ebd278e0228b3d4b28"],["D:/My_Blog/public/2021/03/07/DGL源码解析-GAT/index.html","092f60ea6ccb4b311ed5f8a73005c14e"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210306101853084.png","1f88eec15610e53eb4ebda7da093bbf4"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210306102622681.png","f126f726b919d5e116657f93bdab1064"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210310211557467.png","3964f3539b4f9c8d887d76303981c70b"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210312154228666.png","8c41042fd087ea28f382c75977a53022"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210312160437581.png","7dfd84c6e78a8e3fd408b86117f6f22d"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210312160529128.png","42341b679ec265b46862882df54dc07c"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210312231044909.png","463e395574a3ca56bab73f2ee3e84cc2"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210313144517562.png","dba38892c49b04543844e829bc2338c9"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210313144810442.png","3cb4e4f9f220c5ffb9f650a6380f2da5"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/image-20210313145905999.png","aedafb3befcb037c57c840e79cc1b868"],["D:/My_Blog/public/2021/03/08/《Outlier-Analysis》Introduction/index.html","e915ef76105c6d20c2e149e6956e0e46"],["D:/My_Blog/public/2021/03/14/DGL源码解析-GCN/index.html","dbdf1b1bf06924ae3a9b07089bd7ce3f"],["D:/My_Blog/public/2021/03/15/DGL源码解析-GraphSAGE/index.html","3d0b5b292cf1e355099de0470052e3c7"],["D:/My_Blog/public/about/index.html","11bfd7fb0aa858f975b13265b6ff39ee"],["D:/My_Blog/public/archives/2020/02/index.html","9b095cae3417f545a90cdfe28b3bd5d8"],["D:/My_Blog/public/archives/2020/02/page/2/index.html","bff6aeaf8ecf3245a11f44c2dbbced5a"],["D:/My_Blog/public/archives/2020/02/page/3/index.html","e11c5b941bc0b03f3983cc5017f535e9"],["D:/My_Blog/public/archives/2020/02/page/4/index.html","66584ffc33dab90fd597877b43632203"],["D:/My_Blog/public/archives/2020/03/index.html","f0c7ab3eea1b3a581685074f06c56e30"],["D:/My_Blog/public/archives/2020/07/index.html","c6654dc2070ee67b886a070e74557cad"],["D:/My_Blog/public/archives/2020/08/index.html","52139d984c35f4b4914bb928bf7690bf"],["D:/My_Blog/public/archives/2020/index.html","f3c04b9d9c59a890eadc841712195aba"],["D:/My_Blog/public/archives/2020/page/2/index.html","b5e6bdede0de8a0c18b2a74d2ff7c3dd"],["D:/My_Blog/public/archives/2020/page/3/index.html","275d806788a20d30df30f8cf19719114"],["D:/My_Blog/public/archives/2020/page/4/index.html","2cd6729276d108509f5a6d7914cb49bb"],["D:/My_Blog/public/archives/2020/page/5/index.html","2fd59788a849e974a5bb6ba48a4a5265"],["D:/My_Blog/public/archives/2021/01/index.html","ffa48efae4f632f7f6edf921873d1341"],["D:/My_Blog/public/archives/2021/02/index.html","92cfdb68fbd5f79cc030b949a735a0a6"],["D:/My_Blog/public/archives/2021/03/index.html","6f6da3a1ed04b3b113ea9c7a682b366d"],["D:/My_Blog/public/archives/2021/index.html","21ff7b922e46282c20a54d6c94f0557c"],["D:/My_Blog/public/archives/index.html","948a15e8470fb88f629f28905f275ebc"],["D:/My_Blog/public/archives/page/2/index.html","516462df88fc1d272961a2a7b5597e73"],["D:/My_Blog/public/archives/page/3/index.html","a1789e31b5f328d0f523b3e48ad22e19"],["D:/My_Blog/public/archives/page/4/index.html","36ad4dbb0669fded08c0c6de41514c46"],["D:/My_Blog/public/archives/page/5/index.html","914a40c4a963ed1a2db337973b2bb0f6"],["D:/My_Blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/My_Blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/My_Blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/My_Blog/public/categories/LeetCode/index.html","9980d63028e8bac1ca7d27acbc1e42ac"],["D:/My_Blog/public/categories/MISC/index.html","89c1f5d312cb9491800cb67a2dae8f35"],["D:/My_Blog/public/categories/Python/index.html","c3857cb757dcbc6b2653c83f65175c7b"],["D:/My_Blog/public/categories/Web安全/index.html","ec1294e0a9cd7a691e72bdcf986e29c0"],["D:/My_Blog/public/categories/Web安全/page/2/index.html","6454c3d60972a0bdd819d4a9aa592419"],["D:/My_Blog/public/categories/index.html","bcfcfc5654def40bccaa686d9adb34e7"],["D:/My_Blog/public/categories/安全防护/index.html","6d690f3444acdc577c05b633ee0feb88"],["D:/My_Blog/public/categories/密码学/index.html","c70317e27043d130a2efe8cc523458fa"],["D:/My_Blog/public/categories/异常检测/index.html","3b19e514947e9753de8c7ed3b7976520"],["D:/My_Blog/public/categories/机器学习/index.html","3eee05566b2bc1adc466376e07d1b9ef"],["D:/My_Blog/public/categories/杂谈/index.html","dde141e829530c8b400f52826882664f"],["D:/My_Blog/public/categories/漏洞复现/index.html","4f82ccaf1440a2c14d2e53aeba0281c3"],["D:/My_Blog/public/categories/科研/index.html","edfdeb6b54d7197f9c50f89112710384"],["D:/My_Blog/public/categories/网络基础/index.html","890edfddc9c1fad0163170e5884d0c1a"],["D:/My_Blog/public/categories/读书/index.html","927fd094c6560f8988e5d11c763e8e42"],["D:/My_Blog/public/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["D:/My_Blog/public/css/index.css","1a8770d4815f16850f60f9989c73e11e"],["D:/My_Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/My_Blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/My_Blog/public/index.html","af62def0b1c0d62a1654d28d39a43637"],["D:/My_Blog/public/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["D:/My_Blog/public/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["D:/My_Blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/My_Blog/public/js/head.js","347edd99f8e3921b45fa617e839d8182"],["D:/My_Blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["D:/My_Blog/public/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["D:/My_Blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/My_Blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/My_Blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/My_Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/My_Blog/public/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["D:/My_Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/My_Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/My_Blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/My_Blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/My_Blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/My_Blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/My_Blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/My_Blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/My_Blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/My_Blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/My_Blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/My_Blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/My_Blog/public/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["D:/My_Blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/My_Blog/public/page/2/index.html","413ebfd78c00a2a02c307b4976ef1733"],["D:/My_Blog/public/page/3/index.html","3f95da58568915cce05b763cf769bbc2"],["D:/My_Blog/public/page/4/index.html","8ff23122a5180655040a89f409668690"],["D:/My_Blog/public/page/5/index.html","c0bde67e9c2c4beff672a47371438a09"],["D:/My_Blog/public/tags/APT/index.html","7d164befd0837234a15430fcb835b790"],["D:/My_Blog/public/tags/Anomaly-Detection/index.html","70d8511612e48f145e9b9418f3a0f9ed"],["D:/My_Blog/public/tags/DGL/index.html","5e49b3ac4664bc33af1f9a6f32e2fe02"],["D:/My_Blog/public/tags/GAT/index.html","ea303a171b34851d0812fea18585e667"],["D:/My_Blog/public/tags/GCN/index.html","9b44d9a02347df49743df0eac9ffa801"],["D:/My_Blog/public/tags/GNN/index.html","91ba83e570411eba395cad09a11ce2dc"],["D:/My_Blog/public/tags/Graph-Neural-Network/index.html","5bcc6ccbf6d1e6271e76559d1367b1fe"],["D:/My_Blog/public/tags/GraphSAGE/index.html","b172f6d0fbd63d3136a7fff1d0f0f4ec"],["D:/My_Blog/public/tags/LeetCode/index.html","7e087021e546cbdee8bbcb35729a8028"],["D:/My_Blog/public/tags/MISC/index.html","8be5536c57fdd141eb960c8fe54000d5"],["D:/My_Blog/public/tags/Outlier-Analysis/index.html","e9b87bfd3837b93f9dbfdf6f4da3369a"],["D:/My_Blog/public/tags/Python/index.html","88cb9ddef741837b171e16686a2b9906"],["D:/My_Blog/public/tags/WAF/index.html","917f2d900929ee8dc0cdac9f93117c42"],["D:/My_Blog/public/tags/Web安全/index.html","c5c1d8e3afec4c099c0c40028aa49f24"],["D:/My_Blog/public/tags/Web安全/page/2/index.html","e11bfd653d8e02054e2790e51a0b35cc"],["D:/My_Blog/public/tags/index.html","4a1fdb01e645d6230b9f39a7c4f69dae"],["D:/My_Blog/public/tags/入侵检测/index.html","a42c387a14d6e19f3dc380487cf43a96"],["D:/My_Blog/public/tags/威胁猎杀/index.html","dda3977457aee26386f03fad09dd10cf"],["D:/My_Blog/public/tags/安全数据科学/index.html","abff34a6df1fb4933f56a2a53fbfb92e"],["D:/My_Blog/public/tags/密码学/index.html","099c2b71d406f8818c4dbfba68e0b923"],["D:/My_Blog/public/tags/异常检测/index.html","ed31698880d36e2bd629f02dc083ab8a"],["D:/My_Blog/public/tags/态势感知/index.html","9fbc990383f5bbf33ecf0c55effa8947"],["D:/My_Blog/public/tags/机器学习/index.html","d96c22c46a760426eae6d14e55b44896"],["D:/My_Blog/public/tags/杂谈/index.html","1b72d6d90dfa49f661a5f62e340b6458"],["D:/My_Blog/public/tags/爬虫/index.html","f5c83455202b13e41509912641acbc3d"],["D:/My_Blog/public/tags/神经网络/index.html","177f6a5ba2b845d1f1508bc01e8e8ba5"],["D:/My_Blog/public/tags/科研/index.html","a70c0987dc494dd0521ebbd42ca80ff7"],["D:/My_Blog/public/tags/网络基础/index.html","0526263c71e7b8a58f989930bd24a291"],["D:/My_Blog/public/tags/读书/index.html","fa2954986dcfc82912c81d81a86c6318"],["D:/My_Blog/public/tags/路由攻击/index.html","2fbce9491fc17ba234a7f63615f3f5f8"]];
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







