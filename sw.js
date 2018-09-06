// workbox init setting
importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

workbox.core.setCacheNameDetails({ prefix: "js-primer-v1" });
workbox.googleAnalytics.initialize();
workbox.skipWaiting();
workbox.clientsClaim();

workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute([
  {
    "url": "basic/array/index.html",
    "revision": "ec6e66608ef682b70db93396b368de30"
  },
  {
    "url": "basic/array/src/const-empty-array-invalid.js",
    "revision": "aff1a649713238a1396f9a0eb723f471"
  },
  {
    "url": "basic/async/demo/Task-error.js",
    "revision": "0aebcda60c6f4d3ddf6f17bb9288f53d"
  },
  {
    "url": "basic/async/demo/try-catch-error-generator.js",
    "revision": "606fa73e2c9372ccdfe647b9a429d501"
  },
  {
    "url": "basic/async/demo/try-catch-error-in-sync-callback.js",
    "revision": "2d7f0add32cd04fd0bbd5ebb8ec8cfdd"
  },
  {
    "url": "basic/async/demo/try-catch-Function-callback.js",
    "revision": "f3283758d8ae4b5dbd9a951bcb79793d"
  },
  {
    "url": "basic/async/demo/try-catch-new-promise-re-throw.js",
    "revision": "d7d81d64605340508a0c8767b56f1835"
  },
  {
    "url": "basic/async/demo/try-catch-new-promise.js",
    "revision": "d7d81d64605340508a0c8767b56f1835"
  },
  {
    "url": "basic/async/demo/try-catch-setTimeout-callback.js",
    "revision": "8bc6d47274e772759ab7cfa0a9a0751f"
  },
  {
    "url": "basic/async/demo/try-catch-sync-callback.js",
    "revision": "6842c04bf61c0db12c06756550d0e267"
  },
  {
    "url": "basic/async/example/async-await.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "basic/async/example/callback-chain.js",
    "revision": "8e7478c8214b2c23d21bd55e73a5959c"
  },
  {
    "url": "basic/async/example/dummyFetch.js",
    "revision": "1f6862be3d2a40289ad8e06a1fcc912c"
  },
  {
    "url": "basic/async/example/promise-catch.js",
    "revision": "845f96d547dc72e5af4788100714a9c4"
  },
  {
    "url": "basic/async/example/try-catch.js",
    "revision": "bc84e6303ed4ef6bd6932e109596ba17"
  },
  {
    "url": "basic/async/img/promise-chain.png",
    "revision": "e26f9e8ec157282aeb60810f23a52a6b"
  },
  {
    "url": "basic/async/img/then-rejected-promise.png",
    "revision": "c45405c987bb1a739850f71be6d010f0"
  },
  {
    "url": "basic/async/index.html",
    "revision": "75e353deaf6c795c09910299239889bd"
  },
  {
    "url": "basic/bad-parts/index.html",
    "revision": "0ca393c9dbea6998062b5607068c43a4"
  },
  {
    "url": "basic/class/example/ArrayLike.js",
    "revision": "34455b42504c9db34cbd70f48094a49c"
  },
  {
    "url": "basic/class/example/Car.js",
    "revision": "ee711e2fb4aa7c0992b63713a14ca181"
  },
  {
    "url": "basic/class/example/ConflictClass.js",
    "revision": "9b2bf72b4b8101764bb6e7396c3eea2f"
  },
  {
    "url": "basic/class/example/Counter.js",
    "revision": "3fcdec901175fcfe5da71726754ddd21"
  },
  {
    "url": "basic/class/example/EventEmitter.js",
    "revision": "c2a03a457601c257b4f200a8747a99ff"
  },
  {
    "url": "basic/class/example/MyArray.js",
    "revision": "8d2cbd53a701acf9fa312ac86dc44807"
  },
  {
    "url": "basic/class/example/MyClass.js",
    "revision": "c01ada174df6b87b6a1beacd8db9c86a"
  },
  {
    "url": "basic/class/example/ObservableValue.js",
    "revision": "510ef518ce104f1bffd31becf91e8fb3"
  },
  {
    "url": "basic/class/example/Point.js",
    "revision": "3b08a7b4b87c964b193c79a4c7c28281"
  },
  {
    "url": "basic/class/example/prototype-call.js",
    "revision": "2d928331efe5d013a0e394a8c75fdd9d"
  },
  {
    "url": "basic/class/example/Prototype.js",
    "revision": "9ee41a71d89aa19fa22631bf090b8ed8"
  },
  {
    "url": "basic/class/example/Square.js",
    "revision": "f5301d0c071c9cfacacbede413c84460"
  },
  {
    "url": "basic/class/index.html",
    "revision": "4b5c10d30fa4b8369a6f6aabdf184314"
  },
  {
    "url": "basic/comments/index.html",
    "revision": "71556b745ba306322f12b1fd9feefd3f"
  },
  {
    "url": "basic/comments/src/html-like-comments-example.js",
    "revision": "62ab7cbb31e6171809e7fb48c916267a"
  },
  {
    "url": "basic/condition/index.html",
    "revision": "88eeb312b8ea8fe419da31744c8316a6"
  },
  {
    "url": "basic/condition/src/if/else-example.js",
    "revision": "b763061c4f22db5c3077198c1406fc55"
  },
  {
    "url": "basic/condition/src/if/else-if-example.js",
    "revision": "3b3be1be8cd1e4d3593a61769687ff6b"
  },
  {
    "url": "basic/condition/src/if/if-example.js",
    "revision": "3e71a7ba2c2f7f3239e018517006da48"
  },
  {
    "url": "basic/condition/src/if/leap-year-flat-example.js",
    "revision": "978897983367219bc338d92dc3052e94"
  },
  {
    "url": "basic/condition/src/if/leap-year-nest-example.js",
    "revision": "a3c4d7cc769627e6acc3f7415495e908"
  },
  {
    "url": "basic/condition/src/switch/miss-case-example.js",
    "revision": "57ab8ac3ed2da5dbc133def670136ced"
  },
  {
    "url": "basic/condition/src/switch/switch-example.js",
    "revision": "8498dad9e92b11354b7ba36e7bf938fa"
  },
  {
    "url": "basic/condition/src/switch/switch-return-example.js",
    "revision": "6370dcf32144a77ab2e7624bb9533495"
  },
  {
    "url": "basic/condition/test/if/leap-year-flat-example-test.js",
    "revision": "11b81d08b43c1626436491eb6c4ba20a"
  },
  {
    "url": "basic/condition/test/if/leap-year-nest-example-test.js",
    "revision": "8b8f87e2635968fd66cc6fd730897da7"
  },
  {
    "url": "basic/condition/test/swtich/miss-case-example-test.js",
    "revision": "017b303459ef31a7d252ed8e59b02609"
  },
  {
    "url": "basic/condition/test/swtich/switch-example-test.js",
    "revision": "c408345d2c0a64bc3417102a31192526"
  },
  {
    "url": "basic/data-type/index.html",
    "revision": "58e9f583760310d5e125f11a1d14ba77"
  },
  {
    "url": "basic/data-type/src/binary-example.js",
    "revision": "f8b81988986ef864f671658dcda94546"
  },
  {
    "url": "basic/data-type/src/hex-example.js",
    "revision": "4b904579d1917d23c2ad97b419038c1d"
  },
  {
    "url": "basic/data-type/src/multiple-line-string-invalid.js",
    "revision": "dba660c7da3c4f448d1def5c6a1192e1"
  },
  {
    "url": "basic/data-type/src/octal-example.js",
    "revision": "3e880393cb00055c8a7023604cf7077f"
  },
  {
    "url": "basic/data-type/src/typeof-example.js",
    "revision": "b54ae78f629aded25d17fc17394aa8ed"
  },
  {
    "url": "basic/data-type/src/var-null-invalid.js",
    "revision": "98d493f471c723c1d2125a00c4f58637"
  },
  {
    "url": "basic/date/index.html",
    "revision": "24766a7178ceb6c917edc72b0704a750"
  },
  {
    "url": "basic/ecmascript/index.html",
    "revision": "246749d0026ee19fcad224ac0315d678"
  },
  {
    "url": "basic/error-try-catch/images/error.png",
    "revision": "dff0e4322cb06d42d699119b6f89428f"
  },
  {
    "url": "basic/error-try-catch/index.html",
    "revision": "f2ffacdcd1fa15184a5e848af70ea945"
  },
  {
    "url": "basic/error-try-catch/src/error.html",
    "revision": "359cbe7900932fac79eb321c76e104b4"
  },
  {
    "url": "basic/error-try-catch/src/error.js",
    "revision": "81f6a1f310f3901f600711e8f34e3652"
  },
  {
    "url": "basic/function-declaration/index.html",
    "revision": "2ed1671348e4be7a7ae53020a0e34638"
  },
  {
    "url": "basic/function-scope/index.html",
    "revision": "d948712800edbcd2724336ab26b7de45"
  },
  {
    "url": "basic/function-scope/src/identifier-duplicated-invalid.js",
    "revision": "bd1349e7af7d2955bc15994641a5b7b9"
  },
  {
    "url": "basic/function-this/index.html",
    "revision": "8fb91c4bf6b3936cada9e0c6cf354b13"
  },
  {
    "url": "basic/function-this/src/this-is-readonly-invalid.js",
    "revision": "518b5886a952276f1a674410a045421c"
  },
  {
    "url": "basic/function-this/this.js",
    "revision": "227b7acdaed802ad4425ca27c3782298"
  },
  {
    "url": "basic/implicit-coercion/img/JavaScript-Equality-Table.png",
    "revision": "249e75cfe1f22458bfa9fe71480a6c0d"
  },
  {
    "url": "basic/implicit-coercion/index.html",
    "revision": "b4733a733bed2b41ff10663fa86f11dc"
  },
  {
    "url": "basic/implicit-coercion/test/readme-test.js",
    "revision": "4217652a66285489afa66d83c6f4736d"
  },
  {
    "url": "basic/index.html",
    "revision": "1aeb337d7e951bec1257913402fd3b09"
  },
  {
    "url": "basic/introduction/index.html",
    "revision": "b3a0f6dd7dc0e36d46eafc5b0c301c61"
  },
  {
    "url": "basic/json/index.html",
    "revision": "14b3817e001dbbc4d3c4a14d841d55d7"
  },
  {
    "url": "basic/json/src/circular-reference.js",
    "revision": "0246882f29febf2c387273a5da793efd"
  },
  {
    "url": "basic/loop/index.html",
    "revision": "c96b624f77356cc6395aa297f074b60b"
  },
  {
    "url": "basic/loop/src/break/break-find-example.js",
    "revision": "a3526722dbb4371082e82cc55e4122bc"
  },
  {
    "url": "basic/loop/src/break/find-even-break-example.js",
    "revision": "a3b9bce3d2873480d4e0d09855805a19"
  },
  {
    "url": "basic/loop/src/break/find-even-return-example.js",
    "revision": "15b6f37ecb9dc2fa2007d43154bd9fb3"
  },
  {
    "url": "basic/loop/src/break/some-even-example.js",
    "revision": "4b2bece08473a2902024c69f0d614679"
  },
  {
    "url": "basic/loop/src/continue/continue-filter-even-example.js",
    "revision": "30eae789d3cdc5513bbc63be96d6a86c"
  },
  {
    "url": "basic/loop/src/continue/filter-even-example.js",
    "revision": "498b7292e36a24a1bfb22383bb572f20"
  },
  {
    "url": "basic/loop/src/do-while/do-while-example.js",
    "revision": "a1b8fad605d8d0637c640e8e7d62959a"
  },
  {
    "url": "basic/loop/src/for-in/for-in-array-bug-example.js",
    "revision": "32dde2918743c65ad0e478a4483949b9"
  },
  {
    "url": "basic/loop/src/for-in/for-in-object-example.js",
    "revision": "4b1326113b451ab89877056f35f6b133"
  },
  {
    "url": "basic/loop/src/for-in/object-keys-for-each-example.js",
    "revision": "a20d0d2945580402bf3802bf7e164e72"
  },
  {
    "url": "basic/loop/src/for-of/for-of-array-example.js",
    "revision": "efe65350e47c7816fc23129731b60650"
  },
  {
    "url": "basic/loop/src/for-of/for-of-string-example.js",
    "revision": "930093e2ca5c0368d5a1b5259c7dedf2"
  },
  {
    "url": "basic/loop/src/for/sum-for-each-example.js",
    "revision": "0c091f71e240e9c25b0bad78027aef7f"
  },
  {
    "url": "basic/loop/src/for/sum-for-example.js",
    "revision": "b4468f6fa55696d984978dc3e119c0a9"
  },
  {
    "url": "basic/loop/src/for/sum-reduce-example.js",
    "revision": "64e3e15ad098e3351a907f4040e15d94"
  },
  {
    "url": "basic/loop/src/while/while-add-example.js",
    "revision": "de174cba721b584da00d069f29999b86"
  },
  {
    "url": "basic/loop/test/do-while/do-while-example-test.js",
    "revision": "1f8967ca60878b475ffa0020f1327f51"
  },
  {
    "url": "basic/loop/test/for-in/for-in-array-bug-example-test.js",
    "revision": "665c946d8395901bedc372f7ffc2e2ba"
  },
  {
    "url": "basic/loop/test/for-in/for-in-object-example-test.js",
    "revision": "17723e56a04954999d1dd3eaca60f9b2"
  },
  {
    "url": "basic/loop/test/for-in/object-keys-for-each-example-test.js",
    "revision": "b099545d5b87ad0132122dcefce24190"
  },
  {
    "url": "basic/loop/test/for-of/for-of-array-example-test.js",
    "revision": "02fbe999adb2adf76e984d4062beb9e8"
  },
  {
    "url": "basic/loop/test/for-of/for-of-string-example-test.js",
    "revision": "cd88d4961566f977678cc153457606c8"
  },
  {
    "url": "basic/loop/test/while/while-add-example-test.js",
    "revision": "44e2f720e8c07ad635ce73d76b9ba026"
  },
  {
    "url": "basic/map-and-set/index.html",
    "revision": "fcf48e46b79b56ba36275d0b113ce934"
  },
  {
    "url": "basic/math/index.html",
    "revision": "3c3e37564cd2dfee5b20ced74fe8309c"
  },
  {
    "url": "basic/object/img/object-prototype.png",
    "revision": "6bbe9c151a73ec89ed45606a0b42975f"
  },
  {
    "url": "basic/object/index.html",
    "revision": "f461f5e46cff1a7b5dfeef2b100c24ca"
  },
  {
    "url": "basic/object/src/freeze-property-invalid.js",
    "revision": "32f6d4807273c7b63919510b15cbc798"
  },
  {
    "url": "basic/object/src/prop-dot-invalid.js",
    "revision": "9ca03d6f29bef7c0bd2125782143944a"
  },
  {
    "url": "basic/operator/index.html",
    "revision": "be1e7ac39b9aab04b01ea55e4024c787"
  },
  {
    "url": "basic/read-eval-print/index.html",
    "revision": "790fd943c73dbd292c7e03188184b86c"
  },
  {
    "url": "basic/read-eval-print/src/console-example.js",
    "revision": "e3075a9c16dfb75b7387f1d069396c17"
  },
  {
    "url": "basic/read-eval-print/src/console-expression-example.js",
    "revision": "1dc377d0471a9c654824541dbdb06fbe"
  },
  {
    "url": "basic/read-eval-print/src/console-variable-example.js",
    "revision": "c9241607500187e2148f81a59ed8ee69"
  },
  {
    "url": "basic/statement-expression/index.html",
    "revision": "672ad3db313d454a6ca5aa693dcec024"
  },
  {
    "url": "basic/statement-expression/src/statement-not-expression-invalid.js",
    "revision": "c152dc75a2c19bd49ac1c358b033fd9a"
  },
  {
    "url": "basic/string/index.html",
    "revision": "64dd7d2d19efbe0a82fb3d3fcbe1e2c0"
  },
  {
    "url": "basic/variables/index.html",
    "revision": "60c731d6a788536758c313b47d15daba"
  },
  {
    "url": "basic/variables/src/const-do-not-assign-invalid.js",
    "revision": "1038f6d58e4977028b62697955ddfe31"
  },
  {
    "url": "basic/variables/src/const-without-assign-invalid.js",
    "revision": "05d3394de604b54989259bfe1a0f5fe0"
  },
  {
    "url": "basic/variables/src/let-duplicated-define-invalid.js",
    "revision": "d8db59b74ec0561e9bfeb7b38b4d480d"
  },
  {
    "url": "basic/wrapper-object/index.html",
    "revision": "ba020c49f6fb4215cea82fd2d2b5c514"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.eot",
    "revision": "25a32416abee198dd821b0b17a198a8f"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.svg",
    "revision": "d7c639084f684d66a1bc66855d193ed8"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.ttf",
    "revision": "1dc35d25e61d819a9c357074014867ab"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.woff",
    "revision": "c8ddf1e5e5bf3682bc7bebf30f394148"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.woff2",
    "revision": "e6cf7c6ec7c2d6f670ae9d762604cb0b"
  },
  {
    "url": "gitbook/fonts/fontawesome/FontAwesome.otf",
    "revision": "5dc41d8fe329a22fa1ee9225571c843e"
  },
  {
    "url": "gitbook/gitbook-plugin-anchors/plugin.css",
    "revision": "45deda85e7ceaacadb6a51c17248ad1c"
  },
  {
    "url": "gitbook/gitbook-plugin-fontsettings/fontsettings.js",
    "revision": "fab8f6412ce18bb367635b1bcae503ca"
  },
  {
    "url": "gitbook/gitbook-plugin-fontsettings/website.css",
    "revision": "056a6db3eef3553a78f3b7e02356b2e7"
  },
  {
    "url": "gitbook/gitbook-plugin-ga/plugin.js",
    "revision": "8b0d0bfffa07cfd2675fffb1b7b6e6f4"
  },
  {
    "url": "gitbook/gitbook-plugin-github-issue-feedback/plugin.js",
    "revision": "096a3a5838459d91e482dff2e1230c84"
  },
  {
    "url": "gitbook/gitbook-plugin-highlight/ebook.css",
    "revision": "fa203ae16ad9f01f4d20061fb9e7a6cc"
  },
  {
    "url": "gitbook/gitbook-plugin-highlight/website.css",
    "revision": "acce01e3e11cbd4b3882e7732d81f954"
  },
  {
    "url": "gitbook/gitbook-plugin-js-console/console-ui.js",
    "revision": "2b51d20f0a8bce777a81573701c83ad7"
  },
  {
    "url": "gitbook/gitbook-plugin-page-toc-button/plugin.css",
    "revision": "4e7efddf5df2ea927a186116ba2aee2b"
  },
  {
    "url": "gitbook/gitbook-plugin-page-toc-button/plugin.js",
    "revision": "834dad580dcb5926f3b090502550f60d"
  },
  {
    "url": "gitbook/gitbook-plugin-sharing/buttons.js",
    "revision": "e7c1c051d685b9e7530c1a6675e6b119"
  },
  {
    "url": "gitbook/gitbook.js",
    "revision": "e53bf9037b1d1c9810486ef4c5493624"
  },
  {
    "url": "gitbook/icons/favicon.ico",
    "revision": "4724b6e29e34167169d6d9e14b8c853f"
  },
  {
    "url": "gitbook/icons/icon-128x128.png",
    "revision": "b91df37069569bafccc6936d1b2e1352"
  },
  {
    "url": "gitbook/icons/icon-144x144.png",
    "revision": "e744cdec12fa24a28b40fde9b52d7695"
  },
  {
    "url": "gitbook/icons/icon-152x152.png",
    "revision": "77dac1368e193743d56106145e1c04a9"
  },
  {
    "url": "gitbook/icons/icon-192x192.png",
    "revision": "e3682439a02773056ce1bd46e6085555"
  },
  {
    "url": "gitbook/icons/icon-384x384.png",
    "revision": "2814afaf288c99d08c584b39234d3e39"
  },
  {
    "url": "gitbook/icons/icon-512x512.png",
    "revision": "fd7a37b059ccac4d7256226883672bce"
  },
  {
    "url": "gitbook/icons/icon-72x72.png",
    "revision": "406eb5ae0057f1f40b2abf9b17cd12a4"
  },
  {
    "url": "gitbook/icons/icon-96x96.png",
    "revision": "7529c23361ebe1eaba84a6cd042a9565"
  },
  {
    "url": "gitbook/images/apple-touch-icon-precomposed-152.png",
    "revision": "77dac1368e193743d56106145e1c04a9"
  },
  {
    "url": "gitbook/images/favicon.ico",
    "revision": "4724b6e29e34167169d6d9e14b8c853f"
  },
  {
    "url": "gitbook/style.css",
    "revision": "88a3a50e3559bc577c1be0de4fcc6c6d"
  },
  {
    "url": "gitbook/theme.js",
    "revision": "176e71ac3bf185b7f08e0f6cb919f1e8"
  },
  {
    "url": "index.html",
    "revision": "c0dbd23320147ef9400526869cc84dd5"
  },
  {
    "url": "intro/feedback/index.html",
    "revision": "bb010492cfff6821b85e49bc95259dea"
  },
  {
    "url": "intro/goal/index.html",
    "revision": "fdfdd5e94ccde471ffde6654362ba33d"
  },
  {
    "url": "landing/css/style.css",
    "revision": "026290c57783f482c4226e004e2279e5"
  },
  {
    "url": "landing/img/cover.png",
    "revision": "fec746cff0a8b4a9fb4193d4af3d534f"
  },
  {
    "url": "landing/img/js-primer.png",
    "revision": "19d98be248101b2685bb2a74d510890f"
  },
  {
    "url": "landing/img/repo-actions-watch.png",
    "revision": "4b4cd63c1bad3861502d3127c2a2d0a2"
  },
  {
    "url": "landing/index.html",
    "revision": "e7692b55664612c4a3e4a37201e4deb3"
  },
  {
    "url": "use-case/ajaxapp/display/img/fig-1.png",
    "revision": "15072f06aa7fd4d5fbce148bc2db975f"
  },
  {
    "url": "use-case/ajaxapp/display/index.html",
    "revision": "b602a86362d86c2ef329985e4f09e1a7"
  },
  {
    "url": "use-case/ajaxapp/display/src/index.html",
    "revision": "b934e3a64177225a5432836cd3c473f0"
  },
  {
    "url": "use-case/ajaxapp/display/src/index.js",
    "revision": "f66736a90c875e2d8ffb2ca1579bdcb5"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/img/fig-1.png",
    "revision": "529c6091a9875e4151bbd301a9eeaeee"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/index.html",
    "revision": "5766e2bd64a2fd0b09207f2db122dd2c"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/src/index.html",
    "revision": "ba6df62ebf933d52ab562d79eb567954"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/src/index.js",
    "revision": "c6d786c935701d3962c2f0193a476697"
  },
  {
    "url": "use-case/ajaxapp/index.html",
    "revision": "618949adca5d0185d0f3b18e0624c1e4"
  },
  {
    "url": "use-case/ajaxapp/promise/img/fig-1.png",
    "revision": "97b1897743ee44e2fd8a9315a7af15eb"
  },
  {
    "url": "use-case/ajaxapp/promise/index.html",
    "revision": "fafbed626d00778dc80622f9a637805b"
  },
  {
    "url": "use-case/ajaxapp/promise/src/index.html",
    "revision": "f3d9e468db8df819fbbc2e0b3fd09f07"
  },
  {
    "url": "use-case/ajaxapp/promise/src/index.js",
    "revision": "f5f3c3bfce592e7539b76a5b5f73d616"
  },
  {
    "url": "use-case/ajaxapp/src/index.html",
    "revision": "f3d9e468db8df819fbbc2e0b3fd09f07"
  },
  {
    "url": "use-case/ajaxapp/src/index.js",
    "revision": "f5f3c3bfce592e7539b76a5b5f73d616"
  },
  {
    "url": "use-case/ajaxapp/test/index-test.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "use-case/ajaxapp/xhr/img/fig-1.png",
    "revision": "30ae672fc36c3cf614eea13ea84dca42"
  },
  {
    "url": "use-case/ajaxapp/xhr/img/fig-2.png",
    "revision": "37814c55beb033fe5d7d40c0b45afe91"
  },
  {
    "url": "use-case/ajaxapp/xhr/index.html",
    "revision": "aa1c4aabf0b55d067aeb4f15b0f00542"
  },
  {
    "url": "use-case/ajaxapp/xhr/src/index.html",
    "revision": "e7bb620a3979681628cc07864a5156b4"
  },
  {
    "url": "use-case/ajaxapp/xhr/src/index.js",
    "revision": "83fdc3ca1279993dd39975f16c57d833"
  },
  {
    "url": "use-case/index.html",
    "revision": "f82c7042960d08774b3a9bcbaf8a5feb"
  },
  {
    "url": "use-case/module/index.html",
    "revision": "9d774c41214bd7e3e57a8c4e4066b72c"
  },
  {
    "url": "use-case/module/src/cjs-export.js",
    "revision": "ec41ca42d091b30dea90a0a285ab5ce9"
  },
  {
    "url": "use-case/module/src/cjs-import.js",
    "revision": "679f467c396e74f49560dad4b4b75959"
  },
  {
    "url": "use-case/module/src/export-1.js",
    "revision": "14d83b2f0642cb3febb31292b5641199"
  },
  {
    "url": "use-case/module/src/export-2.js",
    "revision": "432fc819811574412a8542c33a4066bf"
  },
  {
    "url": "use-case/module/src/export-3.js",
    "revision": "6abca8105712553880ab1f41b8970032"
  },
  {
    "url": "use-case/module/src/export-default-1.js",
    "revision": "4a4970b318c0c26041f8b52f5e951c8d"
  },
  {
    "url": "use-case/module/src/export-default-2-invalid.js",
    "revision": "ec4a9e1707c908f868d76cc8bb1edef3"
  },
  {
    "url": "use-case/module/src/export-default-as-default.js",
    "revision": "f517df3c1b8cc0296986c5a652a4aded"
  },
  {
    "url": "use-case/module/src/export-default-variables-invalid.js",
    "revision": "2dc2c8b959d4e113521d834304f7c595"
  },
  {
    "url": "use-case/module/src/import-1.js",
    "revision": "2e12062097db5c17a50b30e845ccc71c"
  },
  {
    "url": "use-case/module/src/import-2.js",
    "revision": "f09f7c7c1acc051b545e34be9ff0e0ac"
  },
  {
    "url": "use-case/module/src/import-3.js",
    "revision": "a9ce98c398e23ee9b9580ea43d7c1f7e"
  },
  {
    "url": "use-case/module/src/import-default-1.js",
    "revision": "033bbfdff761dcd34800b891c5df9031"
  },
  {
    "url": "use-case/module/src/import-default-2.js",
    "revision": "66c502ce08257ee846a103e5f029998b"
  },
  {
    "url": "use-case/module/src/import-default-3.js",
    "revision": "3fee7c3cbf3d020956afc80bb25a53d9"
  },
  {
    "url": "use-case/module/src/import-side-effects.js",
    "revision": "fbe51911a7c23cc96456fb9508f866e8"
  },
  {
    "url": "use-case/module/src/myModule.js",
    "revision": "92dcf07cd2b5fedc71943d01e99dce10"
  },
  {
    "url": "use-case/module/src/re-export-invalid.js",
    "revision": "9e70183622efb6253ca7c1a4ed0aed1b"
  },
  {
    "url": "use-case/module/src/sideEffects.js",
    "revision": "186affbbe1d8f8eaa999365a0d2b1d97"
  },
  {
    "url": "use-case/module/test/export-1.js",
    "revision": "7ddd36e9284dc64f0b83ccdee526ecd3"
  },
  {
    "url": "use-case/module/test/export-2.js",
    "revision": "ee7e3c8d998edc17d864a9552a5f604f"
  },
  {
    "url": "use-case/module/test/export-3.js",
    "revision": "c362ae2a78ea9ff282b5b400af81fe6e"
  },
  {
    "url": "use-case/module/test/export-4.js",
    "revision": "a89969f5c85fe54ac69174711ec84228"
  },
  {
    "url": "use-case/module/test/export-5.js",
    "revision": "15643eece6e077af3806d9fb7a35b3fd"
  },
  {
    "url": "use-case/nodecli/argument-parse/index.html",
    "revision": "697fb22ba32c3c1c627a45d44344cadc"
  },
  {
    "url": "use-case/nodecli/argument-parse/src/commander-flag.js",
    "revision": "7332c1b2c3c8ba2d943bc47b0c33587f"
  },
  {
    "url": "use-case/nodecli/argument-parse/src/commander-param.js",
    "revision": "b3774416c3be17bf519706f9833aea42"
  },
  {
    "url": "use-case/nodecli/argument-parse/src/process-argv.js",
    "revision": "28795502ac3538cd5bef0140ae96c683"
  },
  {
    "url": "use-case/nodecli/helloworld/index.html",
    "revision": "d22f7e50e40284197b16742f9c89de21"
  },
  {
    "url": "use-case/nodecli/helloworld/src/main.js",
    "revision": "fa7e4d18855b0aa99c40d3d0d023223b"
  },
  {
    "url": "use-case/nodecli/index.html",
    "revision": "7e47191e11004426b300c53f528d3ebe"
  },
  {
    "url": "use-case/nodecli/md-to-html/index.html",
    "revision": "0838f86d2b8038e46f63f245a3c495c6"
  },
  {
    "url": "use-case/nodecli/md-to-html/src/main-0.js",
    "revision": "6d32d193adf65d0581bd89f042702cd1"
  },
  {
    "url": "use-case/nodecli/md-to-html/src/main-1.js",
    "revision": "1e4d2bdda2f79e3ad4618997b0753133"
  },
  {
    "url": "use-case/nodecli/md-to-html/src/main-2.js",
    "revision": "2ed8b628b78186304fd662eed45e179d"
  },
  {
    "url": "use-case/nodecli/md-to-html/src/main-3.js",
    "revision": "fdc5e8ccb34ee98d45f9801c0885a88c"
  },
  {
    "url": "use-case/nodecli/md-to-html/src/main-4.js",
    "revision": "d411b520de774206fadcf230b8801a07"
  },
  {
    "url": "use-case/nodecli/md-to-html/src/main.js",
    "revision": "02d07f6114af11ff8f33ebdd5710fe25"
  },
  {
    "url": "use-case/nodecli/read-file/index.html",
    "revision": "bd69ca98d5ee0085be6d966ba1a39b81"
  },
  {
    "url": "use-case/nodecli/read-file/src/main.js",
    "revision": "c9bc39978674abb47c0a692a4a6f09e2"
  },
  {
    "url": "use-case/nodecli/read-file/src/read-file-1a.js",
    "revision": "78ad71d233d8fe35839e8227f6f4bacc"
  },
  {
    "url": "use-case/nodecli/read-file/src/read-file-1b.js",
    "revision": "abb84160d0757f1b73d7faafc3a62e24"
  },
  {
    "url": "use-case/nodecli/read-file/src/read-file-2.js",
    "revision": "0e5fe85f657b33704a7f9efc00f2c27b"
  },
  {
    "url": "use-case/nodecli/read-file/src/read-file-3.js",
    "revision": "c9bc39978674abb47c0a692a4a6f09e2"
  },
  {
    "url": "use-case/nodecli/read-file/src/receive-path.js",
    "revision": "d2546ac16011e964b59746520693e9a1"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/index.html",
    "revision": "fdd147f8729b96798fc85db2c31e0efa"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/src/example/functions-index.js",
    "revision": "03a53e5acd8dc9cb38e49ee3c4b89cb6"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/src/example/functions.js",
    "revision": "1ec454390cddc6209b67467efff46fe3"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/src/example/greet-index.js",
    "revision": "d54d8428c11f8425e856e1efec041555"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/src/example/greet.js",
    "revision": "23682cf886a761e6e298a5fbd73a92e1"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/src/main-last.js",
    "revision": "d411b520de774206fadcf230b8801a07"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/src/main.js",
    "revision": "e1e3ac6906f8e3935a3ed63328c660f2"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/src/md2html.js",
    "revision": "1c09216a5e32720179c2b2585583a71c"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/src/test/fixtures/expected.html",
    "revision": "a14ad3dcb3cc2b41ec119b8b938979a9"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/src/test/md2html-test.js",
    "revision": "73420b592327ed161ef5bb8fbfb46051"
  },
  {
    "url": "use-case/todoapp/app-structure/img/todo-html.png",
    "revision": "2ff1c70fe934bef3d24ff96b72af6987"
  },
  {
    "url": "use-case/todoapp/app-structure/index.html",
    "revision": "d9d43ec86891cd7380e3304e30e7186e"
  },
  {
    "url": "use-case/todoapp/app-structure/todo-html/index.html",
    "revision": "c1331877c8971341287a1bcdd8e69a16"
  },
  {
    "url": "use-case/todoapp/app-structure/todo-html/index.js",
    "revision": "d1efec7d55119ccfe54034e87bfee161"
  },
  {
    "url": "use-case/todoapp/app-structure/todo-html/src/App.js",
    "revision": "ac2868f292922cca9fa36e9a13e96d9e"
  },
  {
    "url": "use-case/todoapp/cypress/helper/todo-helper.js",
    "revision": "1412c97a06033fe786459c64c7e48138"
  },
  {
    "url": "use-case/todoapp/cypress/helper/visit-with-console.js",
    "revision": "11fd08058d656d1005b0056cea77b1a0"
  },
  {
    "url": "use-case/todoapp/cypress/integration/app-structure/todo-html/todo-html-spec.js",
    "revision": "05432cb013a30e9cc345fb7539aba0de"
  },
  {
    "url": "use-case/todoapp/cypress/integration/entrypoint/first-entry/first-entry-spec.js",
    "revision": "b9050afb403deef730bdff4e56c900f8"
  },
  {
    "url": "use-case/todoapp/cypress/integration/entrypoint/module-entry/module-entry-spec.js",
    "revision": "8ab8559470d5e9601292dd13bd9edf41"
  },
  {
    "url": "use-case/todoapp/cypress/integration/event-model/event-emitter/event-emitter-spec.js",
    "revision": "f717e1eef72da553df0c21edd6cc85f2"
  },
  {
    "url": "use-case/todoapp/cypress/integration/final/final/final-spec.js",
    "revision": "f80728e1c82f3653a4d806b9c88e70ec"
  },
  {
    "url": "use-case/todoapp/cypress/integration/form-event/add-todo-item/add-todo-item-spec.js",
    "revision": "016291e63b8199816b56de6f68d6930b"
  },
  {
    "url": "use-case/todoapp/cypress/integration/form-event/prevent-event/prevent-event-spec.js",
    "revision": "2eb2ff79210cbbceb1eda3a806ed02a6"
  },
  {
    "url": "use-case/todoapp/cypress/integration/update-delete/add-checkbox/add-checkbox.js",
    "revision": "0e84ce9862e8a1c1bedb05afe91d998f"
  },
  {
    "url": "use-case/todoapp/cypress/integration/update-delete/delete-feature/delete-feature.js",
    "revision": "81c349e57f8cdca171cd49d367ab8fb2"
  },
  {
    "url": "use-case/todoapp/cypress/integration/update-delete/update-feature/update-feature.js",
    "revision": "4a998f710a6b923d1b811ae3fa1edaea"
  },
  {
    "url": "use-case/todoapp/cypress/plugins/index.js",
    "revision": "33265aa941b774ff67d7342648cba436"
  },
  {
    "url": "use-case/todoapp/cypress/support/commands.js",
    "revision": "a928b1c0b23b12ab1e27375474123721"
  },
  {
    "url": "use-case/todoapp/cypress/support/index.js",
    "revision": "e0de4104a88ae5c8a845857c00778e10"
  },
  {
    "url": "use-case/todoapp/entrypoint/first-entry/index.html",
    "revision": "0bc3c58b424be3a4d0d13e902547c1bb"
  },
  {
    "url": "use-case/todoapp/entrypoint/first-entry/index.js",
    "revision": "c50385f658c1c7a12dd6aadae90e5e8a"
  },
  {
    "url": "use-case/todoapp/entrypoint/img/first-entry.png",
    "revision": "d3d61ffa5bef6fbdc7ba616f01ec6520"
  },
  {
    "url": "use-case/todoapp/entrypoint/index.html",
    "revision": "e5e3fd84d1fd8f9d78838028058d2c75"
  },
  {
    "url": "use-case/todoapp/entrypoint/module-entry/index.html",
    "revision": "0bc3c58b424be3a4d0d13e902547c1bb"
  },
  {
    "url": "use-case/todoapp/entrypoint/module-entry/index.js",
    "revision": "d1efec7d55119ccfe54034e87bfee161"
  },
  {
    "url": "use-case/todoapp/entrypoint/module-entry/src/App.js",
    "revision": "ac2868f292922cca9fa36e9a13e96d9e"
  },
  {
    "url": "use-case/todoapp/entrypoint/module-scope/index.html",
    "revision": "01d173e0422baddd75b00de0b4b35462"
  },
  {
    "url": "use-case/todoapp/event-model/event-emitter/index.html",
    "revision": "dd0699dfdccb4c142e4b7a3771965125"
  },
  {
    "url": "use-case/todoapp/event-model/event-emitter/index.js",
    "revision": "fcf5b0399a3547719fd5254fbdfca3e9"
  },
  {
    "url": "use-case/todoapp/event-model/event-emitter/src/App.js",
    "revision": "9875db4064a5c26db3d50ad532152f10"
  },
  {
    "url": "use-case/todoapp/event-model/event-emitter/src/EventEmitter.js",
    "revision": "ce292472829287536c2523399a1b07cd"
  },
  {
    "url": "use-case/todoapp/event-model/event-emitter/src/model/TodoItemModel.example.js",
    "revision": "8a3445308453eff1d27ba112ffc90ba6"
  },
  {
    "url": "use-case/todoapp/event-model/event-emitter/src/model/TodoItemModel.js",
    "revision": "33a29c80e736089aee6a468448358e8c"
  },
  {
    "url": "use-case/todoapp/event-model/event-emitter/src/model/TodoListModel.example.js",
    "revision": "1fca7d25fef0b4e5a011dfd564ffd727"
  },
  {
    "url": "use-case/todoapp/event-model/event-emitter/src/model/TodoListModel.js",
    "revision": "e9342514f563552d611165a5c1dc92ee"
  },
  {
    "url": "use-case/todoapp/event-model/event-emitter/src/view/html-util.js",
    "revision": "edbd9b42b027977003b2ae9a434c1a94"
  },
  {
    "url": "use-case/todoapp/event-model/index.html",
    "revision": "608b290a12fea0f2b3827019975beb21"
  },
  {
    "url": "use-case/todoapp/final/create-view/index.html",
    "revision": "dd0699dfdccb4c142e4b7a3771965125"
  },
  {
    "url": "use-case/todoapp/final/create-view/index.js",
    "revision": "fcf5b0399a3547719fd5254fbdfca3e9"
  },
  {
    "url": "use-case/todoapp/final/create-view/src/App.js",
    "revision": "ff86935f222f2b32ebea019923596028"
  },
  {
    "url": "use-case/todoapp/final/create-view/src/EventEmitter.js",
    "revision": "ce292472829287536c2523399a1b07cd"
  },
  {
    "url": "use-case/todoapp/final/create-view/src/model/TodoItemModel.example.js",
    "revision": "8a3445308453eff1d27ba112ffc90ba6"
  },
  {
    "url": "use-case/todoapp/final/create-view/src/model/TodoItemModel.js",
    "revision": "33a29c80e736089aee6a468448358e8c"
  },
  {
    "url": "use-case/todoapp/final/create-view/src/model/TodoListModel.example.js",
    "revision": "f04f92538eef1c27644538e1f333041a"
  },
  {
    "url": "use-case/todoapp/final/create-view/src/model/TodoListModel.js",
    "revision": "8dc25a2ec44297acacf9dcba9af4bc3f"
  },
  {
    "url": "use-case/todoapp/final/create-view/src/view/html-util.js",
    "revision": "edbd9b42b027977003b2ae9a434c1a94"
  },
  {
    "url": "use-case/todoapp/final/create-view/src/view/TodoItemView.example.js",
    "revision": "2d18cb2e67f102e417b47b0adaabd6a7"
  },
  {
    "url": "use-case/todoapp/final/create-view/src/view/TodoItemView.js",
    "revision": "ff3d13142bd00f0568d6624daffb5001"
  },
  {
    "url": "use-case/todoapp/final/create-view/src/view/TodoListView.js",
    "revision": "11dbf28f1c6017a627c951cad52ef94d"
  },
  {
    "url": "use-case/todoapp/final/final/index.css",
    "revision": "7a9855a1107d495a00b1424285bf0ffb"
  },
  {
    "url": "use-case/todoapp/final/final/index.html",
    "revision": "ba6a0b0adc538d98ce70957419538249"
  },
  {
    "url": "use-case/todoapp/final/final/index.js",
    "revision": "fcf5b0399a3547719fd5254fbdfca3e9"
  },
  {
    "url": "use-case/todoapp/final/final/src/App.js",
    "revision": "4701380ad76b0f5e6b7111709b152d2a"
  },
  {
    "url": "use-case/todoapp/final/final/src/EventEmitter.js",
    "revision": "ce292472829287536c2523399a1b07cd"
  },
  {
    "url": "use-case/todoapp/final/final/src/model/TodoItemModel.example.js",
    "revision": "8a3445308453eff1d27ba112ffc90ba6"
  },
  {
    "url": "use-case/todoapp/final/final/src/model/TodoItemModel.js",
    "revision": "33a29c80e736089aee6a468448358e8c"
  },
  {
    "url": "use-case/todoapp/final/final/src/model/TodoListModel.example.js",
    "revision": "f04f92538eef1c27644538e1f333041a"
  },
  {
    "url": "use-case/todoapp/final/final/src/model/TodoListModel.js",
    "revision": "8dc25a2ec44297acacf9dcba9af4bc3f"
  },
  {
    "url": "use-case/todoapp/final/final/src/view/html-util.js",
    "revision": "edbd9b42b027977003b2ae9a434c1a94"
  },
  {
    "url": "use-case/todoapp/final/final/src/view/TodoItemView.example.js",
    "revision": "2d18cb2e67f102e417b47b0adaabd6a7"
  },
  {
    "url": "use-case/todoapp/final/final/src/view/TodoItemView.js",
    "revision": "ff3d13142bd00f0568d6624daffb5001"
  },
  {
    "url": "use-case/todoapp/final/final/src/view/TodoListView.js",
    "revision": "a5ba30ef4571ae800872026d62f29877"
  },
  {
    "url": "use-case/todoapp/final/final/test/EventEmitter-test.js",
    "revision": "8d381ccf20f43b200b3ccb95fe5026ea"
  },
  {
    "url": "use-case/todoapp/final/final/test/TodoList-test.js",
    "revision": "3313e05ff5d48d0f9c35067679ba7cc9"
  },
  {
    "url": "use-case/todoapp/final/index.html",
    "revision": "6e0017fdb53e428e6f5f2f5f67cfd967"
  },
  {
    "url": "use-case/todoapp/form-event/add-todo-item/index.html",
    "revision": "dd0699dfdccb4c142e4b7a3771965125"
  },
  {
    "url": "use-case/todoapp/form-event/add-todo-item/index.js",
    "revision": "fcf5b0399a3547719fd5254fbdfca3e9"
  },
  {
    "url": "use-case/todoapp/form-event/add-todo-item/src/App.js",
    "revision": "244f62aee48be73d1b1c10c1838d96b2"
  },
  {
    "url": "use-case/todoapp/form-event/add-todo-item/src/view/html-util.js",
    "revision": "edbd9b42b027977003b2ae9a434c1a94"
  },
  {
    "url": "use-case/todoapp/form-event/img/add-todo-item.png",
    "revision": "044faab6418bb0d5c4a50d43be55a0ac"
  },
  {
    "url": "use-case/todoapp/form-event/img/form-event.png",
    "revision": "a193d8abc60dcc1f78c117af7a23a946"
  },
  {
    "url": "use-case/todoapp/form-event/index.html",
    "revision": "cbffece2c3bb3675f0854c6b4b9ebd34"
  },
  {
    "url": "use-case/todoapp/form-event/prevent-event/index.html",
    "revision": "4693f11129cfd6bfbcb7e40b955ce5fa"
  },
  {
    "url": "use-case/todoapp/form-event/prevent-event/index.js",
    "revision": "fcf5b0399a3547719fd5254fbdfca3e9"
  },
  {
    "url": "use-case/todoapp/form-event/prevent-event/src/App.js",
    "revision": "78a713410be291c222b7289846cd7259"
  },
  {
    "url": "use-case/todoapp/index.html",
    "revision": "f47aaba00dfed003d72b6b5f16095445"
  },
  {
    "url": "use-case/todoapp/update-delete/add-checkbox/index.html",
    "revision": "dd0699dfdccb4c142e4b7a3771965125"
  },
  {
    "url": "use-case/todoapp/update-delete/add-checkbox/index.js",
    "revision": "fcf5b0399a3547719fd5254fbdfca3e9"
  },
  {
    "url": "use-case/todoapp/update-delete/add-checkbox/src/App.js",
    "revision": "11b2fe9e277689c865ca9b83fce19f3e"
  },
  {
    "url": "use-case/todoapp/update-delete/add-checkbox/src/EventEmitter.js",
    "revision": "ce292472829287536c2523399a1b07cd"
  },
  {
    "url": "use-case/todoapp/update-delete/add-checkbox/src/model/TodoItemModel.example.js",
    "revision": "8a3445308453eff1d27ba112ffc90ba6"
  },
  {
    "url": "use-case/todoapp/update-delete/add-checkbox/src/model/TodoItemModel.js",
    "revision": "33a29c80e736089aee6a468448358e8c"
  },
  {
    "url": "use-case/todoapp/update-delete/add-checkbox/src/model/TodoListModel.example.js",
    "revision": "1fca7d25fef0b4e5a011dfd564ffd727"
  },
  {
    "url": "use-case/todoapp/update-delete/add-checkbox/src/model/TodoListModel.js",
    "revision": "e9342514f563552d611165a5c1dc92ee"
  },
  {
    "url": "use-case/todoapp/update-delete/add-checkbox/src/view/html-util.js",
    "revision": "edbd9b42b027977003b2ae9a434c1a94"
  },
  {
    "url": "use-case/todoapp/update-delete/delete-feature/index.html",
    "revision": "dd0699dfdccb4c142e4b7a3771965125"
  },
  {
    "url": "use-case/todoapp/update-delete/delete-feature/index.js",
    "revision": "fcf5b0399a3547719fd5254fbdfca3e9"
  },
  {
    "url": "use-case/todoapp/update-delete/delete-feature/src/App.js",
    "revision": "393494897fe6d8b99bebb58ecbb96b99"
  },
  {
    "url": "use-case/todoapp/update-delete/delete-feature/src/EventEmitter.js",
    "revision": "ce292472829287536c2523399a1b07cd"
  },
  {
    "url": "use-case/todoapp/update-delete/delete-feature/src/model/TodoItemModel.example.js",
    "revision": "8a3445308453eff1d27ba112ffc90ba6"
  },
  {
    "url": "use-case/todoapp/update-delete/delete-feature/src/model/TodoItemModel.js",
    "revision": "33a29c80e736089aee6a468448358e8c"
  },
  {
    "url": "use-case/todoapp/update-delete/delete-feature/src/model/TodoListModel.example.js",
    "revision": "f04f92538eef1c27644538e1f333041a"
  },
  {
    "url": "use-case/todoapp/update-delete/delete-feature/src/model/TodoListModel.js",
    "revision": "b6c60ce187de4d8d7e6066f08ec39093"
  },
  {
    "url": "use-case/todoapp/update-delete/delete-feature/src/view/html-util.js",
    "revision": "edbd9b42b027977003b2ae9a434c1a94"
  },
  {
    "url": "use-case/todoapp/update-delete/img/input-checkbox.png",
    "revision": "44920eba3f5737a49e9cc4c0893c44dd"
  },
  {
    "url": "use-case/todoapp/update-delete/index.html",
    "revision": "0890dafe005a4dacc023fefbe28ff768"
  },
  {
    "url": "use-case/todoapp/update-delete/input-checkbox/index.html",
    "revision": "4e0c48364414ee7fd10481aae13d2028"
  },
  {
    "url": "use-case/todoapp/update-delete/update-feature/index.html",
    "revision": "dd0699dfdccb4c142e4b7a3771965125"
  },
  {
    "url": "use-case/todoapp/update-delete/update-feature/index.js",
    "revision": "fcf5b0399a3547719fd5254fbdfca3e9"
  },
  {
    "url": "use-case/todoapp/update-delete/update-feature/src/App.js",
    "revision": "a13e017c5b9e823738324749cc616cbf"
  },
  {
    "url": "use-case/todoapp/update-delete/update-feature/src/EventEmitter.js",
    "revision": "ce292472829287536c2523399a1b07cd"
  },
  {
    "url": "use-case/todoapp/update-delete/update-feature/src/model/TodoItemModel.example.js",
    "revision": "8a3445308453eff1d27ba112ffc90ba6"
  },
  {
    "url": "use-case/todoapp/update-delete/update-feature/src/model/TodoItemModel.js",
    "revision": "33a29c80e736089aee6a468448358e8c"
  },
  {
    "url": "use-case/todoapp/update-delete/update-feature/src/model/TodoListModel.example.js",
    "revision": "0f16561275bf11a8ce50b36c52283edc"
  },
  {
    "url": "use-case/todoapp/update-delete/update-feature/src/model/TodoListModel.js",
    "revision": "2487546d374c47a31169a378bb4f3c11"
  },
  {
    "url": "use-case/todoapp/update-delete/update-feature/src/view/html-util.js",
    "revision": "edbd9b42b027977003b2ae9a434c1a94"
  }
]);

workbox.routing.registerRoute(
    /\.(js|html|css)/,
    workbox.strategies.networkFirst()
);
