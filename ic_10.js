var z = '\u200B';

var airplane = "http://s3.amazonaws.com/chinesepod.com/0473/0af231f9613d5ea1d5964745c38dac8d181797e3/mp3/64/rec-1214613476140-19.mp3";
var transportation = "http://s3.amazonaws.com/chinesepod.com/0362/5b805c08bdbf24040b6095e6a0095fdd1dfd18de/mp3/64/rec-1218739242687-4.mp3";
var ranhou = "http://s3.amazonaws.com/chinesepod.com/0558/6de4e397bc59e4af54d98059ba45eb648e3db4e5/mp3/64/rec-1182491750500-22.mp3";
var last = "http://s3.amazonaws.com/chinesepod.com/2697/a1517b71c94b328e72dfffa3ac67d1fbd4193ad3/mp3/64/chinesepod_7292_dialogue_68059_prototype_35948_24520.mp3";
var green = "http://s3.amazonaws.com/chinesepod.com/0882/786954772cec7c70363eb6fdbb66b06c2022d202/mp3/64/rec-1210955240140-14.mp3";
var blue = "http://s3.amazonaws.com/chinesepod.com/1476/c46e813bc8b336704f968b1f0c4d3608051e3ba0/mp3/64/chinesepod_5165_dialogue_43777_prototype_54923_16941.mp3";
var mafan = "http://s3.amazonaws.com/chinesepod.com/0124/2fcedcf593c56233a8622c473bbfb7425d1caf53/mp3/64/rec-1218477141937-3.mp3";
var taxi = "http://s3.amazonaws.com/chinesepod.com/0057/74ae1355eedf3887306d06c1140d231cb8bd2daa/mp3/64/rec-1216846499312-3.mp3";
var car = "http://s3.amazonaws.com/chinesepod.com/extra/QW0326/86f5614beb16c7f33eeea7f59847a7da44f6c611/mp3/64/chinesepod_6791_dialogue_62427_prototype_97244_57418.mp3";
var highway = "http://s3.amazonaws.com/chinesepod.com/0062/12222daa6ed148a93aba4380889043fb3f21aa59/mp3/64/rec-1216851726421-0.mp3";
var city = "http://s3.amazonaws.com/chinesepod.com/0679/80eb29a9143a076e6f655cdf99e628f2f780f1ac/mp3/64/rec-1192758202796-2.mp3";
var subway = "http://s3.amazonaws.com/chinesepod.com/0814/03181a41813725d0ebd80a41ce6365cda180fe2a/mp3/64/rec-1204613247906-13.mp3";
var airport = "http://s3.amazonaws.com/chinesepod.com/1070/c6011e9bb0ddc81e417862551c9b7c656aa17d32/mp3/64/rec-1230764563781-8.mp3";

var ic_10 = [
[airplane, "她坐飛機去北京了。", "她坐飞机去北京了。", "Tā zuò fēijī qù běijīngle.", "She went to Beijing by plane."],
[transportation, 
"嗯，其實我一直"+z+"覺得公共交通"+z+"系統很不錯。"+z+"軌道和地面交通"+z+"四通八達。公共汽車"+z+"還有專門的車道，"+z+"開得比汽車還快。"+z+"而且收費也非常低。", 
"嗯，其实我一直"+z+"觉得公共交通"+z+"系统很不错。"+z+"轨道和地面交通"+z+"四通八达。公共汽车"+z+"还有专门的车道，"+z+"开得比汽车还快。"+z+"而且收费也非常低。", 
"Ń, qíshí wǒ yīzhí juédé gōnggòng jiāotōng xìtǒng hěn bùcuò. Guǐdào hé dìmiàn jiāotōng sìtōngbādá. Gōnggòng qìchē hái yǒu zhuānmén de jū dào, kāi dé bǐ qìchē hái kuài. Érqiě shōufèi yě fēicháng dī.", "Uh-huh. Actually, I’ve always felt that the public transportation system is pretty good. The light-rail and surface transportation goes everywhere. The buses also have special lanes, so they go faster than the cars can. In addition, the fares are very low."],
[ranhou, "昨天你們去了超市，"+z+"然後去了哪裡？", "昨天你们去了超市，"+z+"然后去了哪里？", "Zuótiān nǐmen qùle chāoshì, ránhòu qùle nǎlǐ?", "You went to the supermarket yesterday. Then where did you go?"],
[last, "最後兩片在這裡。", "最后两片在这里。", "Zuìhòu liǎng piàn zài zhèlǐ.", "Here are the last two pieces."],
[green, "绿茶真好喝。", "绿茶真好喝。", "Lǜchá zhēn hǎo hē.", "Green tea is really delicious."],
[blue, "那我穿藍色"+z+"的西裝吧。", "那我穿蓝色"+z+"的西装吧。", "Nà wǒ chuān lán sè de xīzhuāng ba.", "Then I'll wear a blue suit."],
[mafan, "一點也不麻煩。"+z+"我們走吧。", "一点也不麻烦。"+z+"我们走吧。", "Yīdiǎn yě bù máfan. Wǒmen zǒu ba.", "It's not troublesome at all. Let's go."],
[taxi, "很少。雖然坐"+z+"出租車很方便，"+z+"但是很貴。", "很少。虽然坐"+z+"出租车很方便，"+z+"但是很贵。", "Hěn shǎo. Suīrán zuò chūzū chē hěn fāngbiàn, dànshì hěn guì.", "Very seldom. Although taking a taxi is convenient, it’s expensive."],
[car, "每一輛汽車都"+z+"有發動機。", "每一辆汽车都"+z+"有发动机。", "Měi yī liàng qìchē dōu yǒu fādòngjī.", "Every car has an engine."],
[highway, "先生，我們走"+z+"高速公路好嗎？", "先生，我们走"+z+"高速公路好吗？", "Xiānshēng, wǒmen zǒu gāosù gōnglù hǎo ma?", "Sir, shall we take the highway?"],
[city, "很多人說，紐約是"+z+"世界上最棒的城市。", "很多人说，纽约是"+z+"世界上最棒的城市。", "Hěnduō rén shuō, niǔyuē shì shìjiè shàng zuì bàng de chéngshì.", "Many people say that New York is the greatest city in the world."],
[subway, "坐地鐵很方便，"+z+"不過很擠。", "坐地铁很方便，"+z+"不过很挤。", "Zuò dìtiě hěn fāngbiàn, bùguò hěn jǐ.", "Taking the subway is convenient, but it's very crowded."],
[airport, "我送你去機場。", "我送你去机场。", "Wǒ sòng nǐ qù jīchǎng.", "I'll take you to the airport."]

];