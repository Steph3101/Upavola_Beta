'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"privacyPolicy.pdf": "96e3e17046565c8c5e3108112e08c58c",
"version.json": "b2189e2de4887cc87d881eaa30da32a3",
"index.html": "73415298488d4192d550cde1a08f2caa",
"/": "73415298488d4192d550cde1a08f2caa",
"main.dart.js": "5ef48e6d112ed0613ef798bd46373f7a",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "40417608e3c6ed13fa4f94d0d96962e3",
"icons/Icon-192.png": "29f4f541e7ec74efe39f3a10fe8a8cae",
"icons/Icon-maskable-192.png": "29f4f541e7ec74efe39f3a10fe8a8cae",
"manifest.json": "f4097b9cd8b8641b6b427e6fb7c5ba71",
".git/ORIG_HEAD": "403a8ed95c3cc9b82f45e733808c4273",
".git/config": "a97f96e90c1b92dcd18c158535e54017",
".git/objects/61/f12cecb5e13369766ec90aa683bb0c5d02b73e": "65515230837506c7615fbd4981807635",
".git/objects/0d/3633c12f8a78a46ec69f3c7c902ea60368fa9e": "90deeeef87bcd4ac2b226bf0b345ccd2",
".git/objects/0d/b97d0bc3e992c8c04e37fcfeb9c43f4eb58be7": "652f86fc9cf4531e14ec07d452ef043c",
".git/objects/59/8f4f09b043e092d6c44f80f2b9a87a46b7d992": "30a9582ddc30ec30b9fbbca37eb4e35e",
".git/objects/92/15dbe2152e037a2581b0d8f679e96958f0718f": "e67ba8e17db75ac1e05e4826a17ca5bf",
".git/objects/0c/36a6a01e6cdf9ec79dcff395ac382751c6563d": "ab16181647cc3f367a041baa1b1cf3de",
".git/objects/0c/c00c075216ab6b506554c6b4e3c795886fb800": "84960de7409dfc3d73e1327789e2134c",
".git/objects/50/a1c34637144562798e7f78df45a2e56eb21fda": "0bc5c2d8b7f2de3ef324c34017dfb912",
".git/objects/57/d89b87f145fc95ef985b6e8a05cff3cf045796": "5bf6caae26e5bab1d4e119838fa425e1",
".git/objects/57/f992a5420cff13b0d668924e87d6439d4c9da6": "9d45e4541299a0f8b2ba9592dc71bb14",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/9b/a7070da0db8e8ee871ebddd54d3b4a7adbc659": "6a316241e2a3ef9e85a9442f7bf11fe7",
".git/objects/9e/158815daa1d74a1cd046d58074a64ec3e06eb4": "1074fbdf30c3c8f7588a2b34405e9b91",
".git/objects/9e/90c72fe538766150f7480ad4e0640060d00224": "354789dbc54a514ee825c0b3c4ae4263",
".git/objects/04/7431a778e55f9bc3da28f70995fcb20cfc76d3": "c12f3a0fddc2116374f5d779bcf8de76",
".git/objects/04/8074c3a59152f9b47594ff40b80b060efadd0e": "75fa7f5feb08103d6e894b0b0c09a489",
".git/objects/6a/d169a5b7d765b16ef7ad77f2941ebd72ef6694": "4987474535977496a50a22780cbe2425",
".git/objects/3c/e7e2ab721c21385bd57fb4f8025140044a109f": "cd940dc26dc14bd6630c9bef855091cb",
".git/objects/56/cff1c871318887e03dfabf593a9c9c9188bfba": "61bbd11348248e49a826649c0d1be5d0",
".git/objects/51/a45c724af445d7433a52712f9e08e863a5c0ba": "a036b59e289f215f7d783daa186cc239",
".git/objects/51/06f83da5bee261a5980d31baa965aee054de59": "c0b439b8e74c4afce1db92c22c00d544",
".git/objects/51/6b626157b238c55ee4439c474b00f33a6beb3e": "f12bf303c3c239f36075c8844f593237",
".git/objects/58/bb7687effc983e078ca07f3d667ab75e18b47f": "284df111ba9dd75fb0b33fd2c3faeda5",
".git/objects/67/dd298d385b26ab18f53aa75cfa93daca8016d6": "cfe7a5f0ab3f29cc05750557f7c6916f",
".git/objects/0b/53cc7b36af1965c304f36c7ba8407290f85660": "545469fb4c7107f7fa1adb5083b2ff47",
".git/objects/0b/e71fb0dd5062404e82f28c243f8acf74944344": "7c2d6684024300b2da7e2b0dd19c4421",
".git/objects/93/96dd19fe43c48fb60c7fd136f4187481956276": "10f4a69bd0c7750305a43c06eb8c0760",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/60/f066deadf3044b7913149a3567ad7ada1b86d6": "a655ed3b02b2160cf34c81c9b1ceaa38",
".git/objects/60/e2ca350d94038e23ac7bc1f8b2648f91e18f53": "496751a5b9dc930cf9523ecce6f77bd5",
".git/objects/34/5110bf8e6799eb1895feb761b33d6b5b7f2449": "c08daca76a9ca2a77c4addfbb12d4218",
".git/objects/5f/af911f1710e0ec62cbb255a82ef9a9b3be62fb": "a4a01beb4ab8ec0f27c8884fca5a70a9",
".git/objects/a4/e14b64cb08cc9246c7eb11d296916f3f4f3af9": "9ec5ccf251a95147a91fa51e23a20bca",
".git/objects/a4/59b3dc1f38d46f309dd6cbc49e4ad54a28f98f": "0d85499f25009598c29b73f6076501fa",
".git/objects/a3/e22f52310ac872f74952c19368955c8174924c": "689b9e73a73568c862f65db2bace27c9",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/f5539f8439b2921d753365ee909c62118f8457": "dd1f0145077992478df3ace56688e929",
".git/objects/b5/8f6a0315c3f036a661f32dc6b95ac6c247265a": "1dbb964fe025c3cdfff805ddb2d43e15",
".git/objects/ac/df5df72abba52b0b58fce88165e016770b8ea1": "c5853dd292c0e4f2304b3b690991fa53",
".git/objects/bb/b2d6afdf86bdeea84374ec0de1ccbd4467b6ea": "c88793c0257dc21f2d8f3ef2326d7d2f",
".git/objects/bb/f4290c8198c08078999ce23f5272bdd2e548c0": "12ae38af384157d33b245394c01c334a",
".git/objects/d7/a3fbe72fc54d86dc284c1bf143b41c5b2a1ad6": "944f2f18cb25d838243d25523b0a29b0",
".git/objects/d0/60e1e06c8502e6b27970978c6d92bec333540c": "73e2bb66602259c54e0106fd31b531b1",
".git/objects/df/b7792cde3ac1a844ecf9e999e964dc34613ca4": "d5c5df67a19d1751175229d68418e999",
".git/objects/a2/d3094c5a6bfbfec9f6ec2cf00cd6e2567bbfac": "8160e1db8d4ddd2109acea660d141f5b",
".git/objects/a2/1f86cf0c85bcb9b6fb4f2e41a9f884ee83c3a5": "58c026af4442989c44adfd37f63dba95",
".git/objects/a5/3cb5e3f383eb707448bcbde76aeae755f60d4b": "8c8ac02522ffe175216c92d46cfc323b",
".git/objects/ae/81bcfc2b4c34623444ecbfe7d27b04a7d9beff": "f92a96f1aede94a1f1aa4aacc37d7a80",
".git/objects/f3/4464bdce80613560305c103acbf359e7897a04": "97450493687b42ffa6bff2bfc0b17374",
".git/objects/eb/c9b743e11969e531910a13a29b11142356bc60": "18cca36c3ae87ad40fb7ea28b22a20cf",
".git/objects/c7/3e4229599122558b8b8dc785562791ffc5d206": "e499ba53d54f05998b2791362dde4f55",
".git/objects/c0/e3d3b4d226560e863aece77afb83e7b4abb1df": "19da627a242e9a63c313fcfdbf34a04f",
".git/objects/c0/54161f9a4d81bf6c6d18614400779228fc097a": "35020ec1946215d5b5c906d80167af53",
".git/objects/c0/05702cfaf3a5a1f2c8a9f78a5faaa5463cd95c": "901bc31a5d98b41d359ddb8c322c39fc",
".git/objects/c9/4803fbdab3d09563f73b0b387d025b919521fb": "f23e6fe7a7e4ba717ae2886baa896a49",
".git/objects/fc/cdd05cce8e7ff14fc39262b1a096e7b5a66a5f": "bcb2fc75375458ecacd400f98cbde07b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/7afa7bb1e63cf50249ba00c82b7d159aeab821": "98bb118ca84833192727a6b20b58ca50",
".git/objects/fe/b4a1f6644900905cc4888ea2f5af70a6dd819e": "882e27f69a2f0b2b025ef5bdf56f3fcb",
".git/objects/c8/7c590608620cb33f7e88fc0c9473f611fd0245": "8f7406bdffbfe2cac57ab58c21b46e85",
".git/objects/c8/03241e5d4e7658a620c38a5f985925102bf87d": "f44f85d7f22bef1d9648dcd6b993d013",
".git/objects/c1/408d2b6b066b2ec5e26610ef8400473de07066": "3b313fffc5bfbbc50131f3f5754ade39",
".git/objects/4e/6a76feacfa38f13956b7250f1dd2674f799111": "573e1f5542d714ce5467fb02740c53ce",
".git/objects/18/b80e1f67ccbe2253fce360810975165ffe85d2": "43d6e375558a4a01f00f95d08884f37f",
".git/objects/18/abd8951eea00639ede185910db8bc047ee0b87": "dd4be5fadf820b0544d1de5600147e6c",
".git/objects/18/35b20790967bd89066b3ee43ea951f6f0019a4": "14898e2ec909e70605626fbca4035ffa",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/4b/068eddaef8cdbdd5df274bcfd5c8b253320d6a": "c20380ab2b8aab1a0a714fdc3fb7b383",
".git/objects/4b/d2b85af7c87b93f05dd2d03506f8ce62717953": "f55c738366e3152454f56bb874b66631",
".git/objects/pack/pack-1a11f532406812917e1d17dc7cd8071dd499314e.pack": "132d88ab46a6681f5e243d2910ad4e5e",
".git/objects/pack/pack-1a11f532406812917e1d17dc7cd8071dd499314e.idx": "61826f55ee2aef91cf404783c7b1be36",
".git/objects/11/a5fd5c5b3dd3e9f9de2557ea0c7c1cc656102a": "11a160dcd7bd0c56a9285e6134d360c7",
".git/objects/7c/1c57c757bf827cd72c35d2b28a29dd75241386": "2e5fae0ab3ff148e51ef5b4333975c3b",
".git/objects/7c/6084d5a0cc9506617d59ea90ebdc61ef2b17d8": "17069700376530670c13b0a51e676f2d",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/42/d0f57c3f9c3b8ab0b9740f79d74c79976ae461": "0fd1b41b16209d3233e2566d6b1ed330",
".git/objects/42/c8d457865888f1944bbce3db2b3387ceae4497": "a26f53a41342e9dedf56e4b35c19ce27",
".git/objects/87/be57c1ad4eb30ddaa504aba1fc6c1c95e894ca": "4d4945bc61ad0bec9a5caab39b2d18cf",
".git/objects/87/5be908ab2eab521aa471be73dadf9be1fa377b": "40522532d5eb5db7c0ac31c3061a98bf",
".git/objects/1a/9ea6a3661d3f32913ebd5e0f79d34eabbeda88": "39401f8e34afe5d7fa06bd4e1605b52c",
".git/objects/1a/01584d775f55406c7b6d0ff1ae93b45ec5eaa8": "aea22699a34c19adc03780e8719406fa",
".git/objects/28/d08a470d73b7daf92ea81f7b471e71cd0e2d0c": "b192bdaa42b253b4dd036e9779e134ff",
".git/objects/28/3869f7284a5b12ee168be2e9c8d0cdf9eef56a": "138bb1af9159c973bd52b2c22f5a6e94",
".git/objects/7b/5b611a2a06f33bac2791deca369040c799554c": "766ff0aafb8e088e14a3e0654f754653",
".git/objects/10/2175f15e4d406f5a28a46bfb1548cdc70e2ad9": "b0420095c11502620b2d342e804650c1",
".git/objects/19/8f49c4a3aa70d124fc1d0dafa2e6bf86c27c2e": "ec3242a314c0f7095bf481fa090294fb",
".git/objects/21/40391e9036b5feeb058cb22ade9f72d16d5047": "960177573415feb916812b5b739ae2f5",
".git/objects/4d/58eff29b3b86b1e99069e905d677accb3c598d": "6cd5ab9095d6046e3e4e0231e18dee87",
".git/objects/75/9d64465000a6f0212c8492bfbab1060fdda36f": "9bd3387ec6a2ac1359c4008814283851",
".git/objects/86/7166755a09b5fb758fd8299979935e370a68f4": "275834c2bcb4ef4def10a50649b3eb4b",
".git/objects/86/cd88007b4ae7055aaab96f0d372b16ca189c66": "47b0555dd2821c28e885f231d214ac2c",
".git/objects/72/1859b996abdd23ba0ef63b6f3cfd96f1245c00": "74ef361ecc31c4ebab7f47bdc7725a59",
".git/objects/72/0a50b5ae79fe3dbaa24edd51a75177a7a25e96": "97716ad4b4db094b440b6d4779b9edfe",
".git/objects/6b/d88f77457c9810ff3f787f51df6d2a0b612322": "9bcb09d3d2dcff038f07592fd8a7aabe",
".git/objects/6b/90319acffb265b415179361b904ac199f31719": "36841d0d4597ea72a9104c1efb21adde",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/00/f251aad5df76598412974b939d62b9b82c74cd": "3bae220654b5256be0c677cb62451a11",
".git/objects/00/33c300352a9c733400e34e3dab02405bc4ee8a": "925b56ef5ae55a19911c1d1d47251c85",
".git/objects/6e/3465f67f64b1ba4ac66fb54cc6475766b99850": "281ec959e6cc4aa8a8fd15be0130defa",
".git/objects/36/37584bbe50c1242672e9ce306f8396def7d6c5": "4c04f0cd2686ff5c0f6e7e9dad818ea6",
".git/objects/5c/2ea6bc96258f640848228e298e6a057293d9e4": "fa84cc62d2c97fcf3053bb845a20f848",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/5c/5a311931d2f83112d561f9485fa25690733cb5": "2d76c79bce6726efdb7631d059b81e0e",
".git/objects/09/49b52330c7ef55a8e7a2657e16e4db67b92616": "ca62d7ddc47d81ef75e0c1dcb40aba33",
".git/objects/5d/96d97720a5a30d13d32c1c7c521215989b58cc": "3fad2a54408ec63a71847e18529e455d",
".git/objects/31/2cb3bf8ba0289082deb48f2be79fdd411bb2a5": "e8c725033917c4bdb4e6232e1bfd104d",
".git/objects/62/e2ce2a36ee2a8a58d2cbd0ec917b1924f4b7f4": "2095ca52a02a9cf1d118f1313bbdd606",
".git/objects/96/e305b9179355ecf3e0dc9a60d7f9ad94e10e03": "3ffcc96a529650bfd29510e7c8ad20b9",
".git/objects/3a/b580d920caf63555748e3568a42a0a0d22bd3d": "6d5b7f66cc87b123a08fa7ef7083c5f5",
".git/objects/98/b2f672b05b46fbc5425f927e736a098f450c0a": "67fa04bccf84ba27843e666618efea7e",
".git/objects/98/44cf24a36e20285c67fbc6e0eed4228cd314a9": "1bb78045b3c99e4bc0b574395d87dd6e",
".git/objects/98/aed961e07188ff50768be00acb55a98d284d1c": "1ec0196d6ed76b392fa022b65720945a",
".git/objects/3f/1bbc99b0e95c6a0c5c30ac4edfa16a5c96028c": "49f649565cf7c8516eef64a5d38a1d52",
".git/objects/3f/7a1b251a3e47cecda43042fb6e73a67b29735e": "2d2b6cb7023a9311b9d770a473803a62",
".git/objects/5e/e3525d17c2b02286bde61a8395b5f155c3b1fc": "eecf459c572ecd126e5c42c7e592dcb4",
".git/objects/5b/8e56d54bd394505d7417400bc8005d270e2b6c": "362b30d50def5fa7b204c23c73f3ac5f",
".git/objects/5b/6d77e9d7b50f52fe5e43a774b233413685200d": "ac5fa4903f026d2b9873a22763b14469",
".git/objects/37/da43a2e147c084bbdea9ce4028cdb2fc2817d3": "04dc7efd340cffd70dd68bb78fed57be",
".git/objects/08/70ed47b487da0f67ce181aeba51a01b9bfa607": "faab16ba2b4d2d8a50fe42110a925262",
".git/objects/6d/2951b7d8ffbe1376fec14298cfdf6fb26f098f": "517bd0d40f0b2eb6f0a8f2cb6f6e1d39",
".git/objects/6d/04b0f9c6ca2905a68267e1029302479cb315a0": "581a8bf8867034b277957273495c8a2c",
".git/objects/6d/05a9f851a3fb09c7edcd905d9698b9eeaec466": "d3f9c3c0e1a8426f93477c221eef9615",
".git/objects/06/5072fa97bbb762c79c320de73c7f5032c59670": "6125bf98a0256acc952a56e123640eba",
".git/objects/06/97989d4fcd5c2cd63b5e678b7f68f142f7f42a": "5d205f3f58fbdc447b9c4b786d8fd25b",
".git/objects/06/a9bdc52d1fee0ff0a2e59d70ef5e74b811e438": "2e1f7f6be79a8c0ddfb257bb278d838e",
".git/objects/6c/aaa78870e94b6cc28915bb8fad13fca8543d71": "484c45c73403891c77b8bbcffabfef5e",
".git/objects/6c/7310fe7bcc112804d41f7159d1fe8e915b309b": "339eac167e0aaa0bed964012c55e7744",
".git/objects/6c/62d86f7f89e0425d385790b2c5d448377f4bd9": "22b43e618c69b0d8089f32b14df4f30f",
".git/objects/6c/c9b4645b89d4a50c1601bf3b4bbdb3a68b4b62": "e6989a67ced8c8a25d3ca3549e3d1f87",
".git/objects/99/a5474c3d95926811b58ead1b66e7e189146886": "b8b0d527d39cdb167e5135ab28658bfe",
".git/objects/52/7245ac4feb67df35e87abc3c22b2fd8575ca74": "1231c103fd2095b9873b399eb6d9db54",
".git/objects/97/37132f065bcc9cb06cc2c3d906883467de91cf": "fd42275687357dab2918a65f3eb1fc5f",
".git/objects/97/f15fe2b05b975a791c0ab0a6a49471e038d6a5": "8842f27a73adf6c958b95f5aa2588be1",
".git/objects/63/570ef05c8a1e3b8829f98c7f98e7b0f8f79b03": "9cd80126c9fc9c546ff77491fe8be33d",
".git/objects/63/adff27d3338c0f90e277fb849ac9b98af68ed1": "30b75aa0414f226cc396198416902833",
".git/objects/d3/4407901af399f159ebcb0c0470a0ae12e46c9d": "215c6bea3d2a9aa08e376023fbcedf53",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a0/5151831ca4ddd9fa0f5cf54193bef6b188f2b0": "49df3c7ad5d0523dca509cf3b2bd3034",
".git/objects/a0/9b261b18cf69577fb5af3fa0dde28afdaed057": "ae915f5d27b51c5c2d56d98847afea90",
".git/objects/a0/65845fec8f636e0eb053006c0e1e98bbfa188e": "2f919da455c1d2a7f6a468af474482b6",
".git/objects/a7/61fb6930fec0dd867069c01b286b718f040618": "57b798f029de40ab221251dbffebac48",
".git/objects/a7/3400c11776839e46ec6649c714c18e4ee98abb": "92255affda20d9a7eff0272af6f81f92",
".git/objects/a7/9107aba90252f781bada6f2a112e1c3511689a": "99b6e50ec5623e9d6d0eb43b4784f0b9",
".git/objects/b8/17149126d4e3a5de60171de5a7e8353997a773": "3b3d6deb998c2ed354f85f0c9dfb532e",
".git/objects/b8/58113bcac3c38e30c6982c011278b993f70065": "1ec2a4620b541f7a320133555c1be7dd",
".git/objects/dd/7dae9a4c2e10dcd7d54ab78a2c8d52764b6985": "032d3b92b17d93965a11867dd137f5e9",
".git/objects/dd/b4fae967490306e7eb6c3f8a8b78829e9a86d2": "ad8f6e5809766acfa7ef2e07dc6f76ee",
".git/objects/d5/8ba039f0c6fb40bc8d3799df9e0cd632213cfb": "16775e0e8db6f56f8370775bd7167da1",
".git/objects/d5/68e54dada482a0edca3ebf91a6bf7c188606b6": "05af1f89bf98bce9ff36b047ff524c59",
".git/objects/d2/daf3fa48e5b2351717d4f3e68b96c99ad001b8": "ebad6bfbe9b1b1bf580dc5aedcf038c3",
".git/objects/af/043f72e89b1270d52b4502f8b655755d447392": "dbdfdeb8584ef11fd8e58b068abd243e",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/af/2ad71ceb7e14efdfa98b5579a99bbcf3ff843f": "108ac3dd160bfb241ae6cc32c4aee08e",
".git/objects/b7/af25e96ce54aef850afa44fc6380fb91004c8c": "f60d521fee7ed97cd3b687a18a289022",
".git/objects/b7/d921f7cd62325b0c3cb01b30a718af6126ca66": "1f2cb7f5b570d466e9db51b72f66ef68",
".git/objects/de/630b8bf05673fc6584c3b57d3f0bde36642013": "1357806444073cb71221b372209a12da",
".git/objects/de/5b4ae8250c900bb8cb40b78ed87d0e2941e51c": "13ff7bccd7d916e55f3a2ce78bcd23ef",
".git/objects/de/c040aa297abe1c30e3622816f808981f87df81": "af340cb0cfff9fc42e7079589b13f766",
".git/objects/b0/fc308154a83db4bc3a113826c5129c1fe2381b": "e72c59f7c737a0d15326cc21c8af8c85",
".git/objects/a6/6a1fe415edf545c6868cc54f0b5dfc7bcb1643": "4e13ea8c485ba1351607fcf6aaac6ca6",
".git/objects/c4/af8f75a8e66b6f63c9f02aae0ef89ba3fc8d94": "651c7366cb27aa01a5b8bb57a51bf982",
".git/objects/ea/6602b5075b507800f74737bcd2066748edac3c": "b9c5148a1efa4c43a78642037d56f23f",
".git/objects/e1/b5beed35013e336a10b4a21b4f9ec65a269e0d": "39743d7a05956ef5bcd977755cf8a00c",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/cd/76cef14f31a480bedc8119a5deb90f0b663424": "1c60f1b86b5946ac498b88d5dee2b805",
".git/objects/cd/676fc1cf8cef86f292d55bc5a0ecea912446d9": "8845f564493d4a6be87e6f4d84deab3f",
".git/objects/e6/c96c36e5a9da86496092d145131cb45018c204": "e194f6b596205baeb02f59739f66c3f6",
".git/objects/f9/1c84a8b46f726716c941681e25a6b1d32fc467": "d05db578378c609f4c57cbf1c9558d91",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/e9/8e25477a4145c04f644411a73651f9a264ece0": "63c1c9e13acb71d5c0f01b4d5790d363",
".git/objects/f8/ff618bfcef868df2cbfb83a483fb07df6a4706": "5c560ad88c006fd403e560c67d69c0a0",
".git/objects/46/e35ce6777f5524a68aeec9ef92591ff1129ea0": "b95478c5bf67fdc7761fe67622744864",
".git/objects/46/7f1ed22aefc8b4d288e08ee424535a4fe7ed55": "ff9a2f38610aba9710e798f29af44a10",
".git/objects/79/1aa1dadbbcd39bc8a2c230ebdd29a81707c87a": "b1eba6e8835a0d9dace66ed5860d8223",
".git/objects/2d/c535bb201843396a03a1e75c15ed319d38c924": "ca9a2c10ccaf3f680636df0dca58bd4a",
".git/objects/2d/2214c8172594f2da222d367b7e173e1e318e0c": "32502a7493b8a8105324bca44e6dc235",
".git/objects/41/c5f741e84f9b34e55a60e3aa1a47d6968d3ce8": "3aea359700516e6e521035a46a6df207",
".git/objects/41/59ae5e849bcd42f3b213b4dfec5592eb87b4ed": "bb3a6dc4eb8f3bbb0e056e6b05121804",
".git/objects/83/a913592cc91a78b102f0d36b4b6dfb5fe056d2": "e4d0fa5e1932fb14b9bb1446d664dc01",
".git/objects/1b/5cf1d73ced19b3d6c89a3b57e8c50e781c7c03": "90d29d5d5a483a92040e32796bbcc15e",
".git/objects/48/79f22f07e2317443163b470c6d02cd52c20c3f": "5a9d7c5412abac777b9d7069b09c5b7b",
".git/objects/1e/e48894055720a198667399571de202ad841e4f": "b011b88d5059d15f727fb24575b47eea",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/8d/b36b90c19cfca23528550cd24b8660c5fef771": "030761954aa897682fa4bcc59980386a",
".git/objects/8d/724ac8caec92147dbaa22496473d1f85e14228": "8a40fc12780a6d79d6065d7019898427",
".git/objects/8c/22dd0e20b3b3c399ce233fd3e9d914b9c76294": "98b9a6d489ad583c3a29578fe07b62f1",
".git/objects/85/3e3947b6f21770e7600fdab9eb1bfbbdc8eb4b": "8c888f26432a2bd8a2da36fbe2d7abad",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/a53c62b18372aac8f9392f09d464a62f646dd7": "8f3ece95f98fb023afedb2d33c81752f",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/82/2dfefb22017a0a3ff6182c03469f34c88346c1": "bb7731923e97a75e297b4f95ef8b53d7",
".git/objects/49/75d3c83d8df4e1e52de3e59d1a264e23073df4": "3ff2d6c23fe12ff4a08021028f848df9",
".git/objects/2e/37d08ca6232bfdf3309a38131a631bcb7c739c": "6d481ad490e992ae44ee3ff3184e8d6c",
".git/objects/2b/feb5a4d074282adc93edf003544e6bb17d8e40": "bccf2246b7b7b2550ee2f51ad78b9fad",
".git/objects/13/3593187da033ee5d66873d6284d4fa344975c0": "03ca053422575ebb8e78cc64249bfe9d",
".git/objects/14/b7d2946123053320eaf896ceecdc21714c00fe": "a499078d5790339df648d90ba1094555",
".git/objects/8e/7906b7c1d125f89fc93ce993d9d655ffda8bcf": "e866b7ca9fa07b91ceb47eb11447aebd",
".git/objects/22/adfb0e322bdf1e4ce5146724a89005f53c8c41": "175e92cc94b44196e948258832849fdb",
".git/objects/22/f0947821584a2c5f7a3ccfafbb91972796aae5": "c6efbc69f14e0126588c3133a526ea27",
".git/objects/25/5ade5cf15e6f12baec49d45aa38a3d7dac5b95": "56358d3eb395b6d7c3bf7ee7e90dd6ae",
".git/objects/25/a89e89d83c8e73a25703748388ac69e1f08d29": "e50f13f7914b2d6e3630a2c47ef46130",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/fork-settings": "4347bc1bec1919a64f48cad7c8689746",
".git/logs/HEAD": "181fdb2b1335e0b44726b7a856d866e6",
".git/logs/refs/heads/main": "181fdb2b1335e0b44726b7a856d866e6",
".git/logs/refs/remotes/origin/HEAD": "b5270f38875bda4b89429a1cbaec0ca8",
".git/logs/refs/remotes/origin/main": "4724b4ea74b4e5b27554b705b0174f72",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "b43176b037732040d612bb8ef4cf0310",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "b43176b037732040d612bb8ef4cf0310",
".git/index": "ef9b07d7d1d0d9ca86a0db56fabbcfbc",
".git/packed-refs": "d1aaeb2931c37aac31cc5b0dfcc9689f",
".git/COMMIT_EDITMSG": "1bc1ced97a841178c1100374c6e89f80",
".git/FETCH_HEAD": "044b076cb5a0a4255466f7b69779ac5d",
"assets/AssetManifest.json": "c3b91bb638a77bb9e6dee0beb8e8d383",
"assets/NOTICES": "51931999a6c556abf892e35ac0e8addb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "e2ba762105af2a09fb25bdead31ee19d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "889dd0dd573ec37ae206c6cc242aa23e",
"assets/fonts/MaterialIcons-Regular.otf": "0808d3d256e9c96f9e762636d41c457e",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/2.0x/flutter_logo.png": "4efb9624185aff46ca4bf5ab96496736",
"assets/assets/images/3.0x/flutter_logo.png": "b8ead818b15b6518ac627b53376b42f2",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
