var FL = {};

FL.container = document.getElementById("container");

FL.callbackQueue = [];

FL.sentences = [];

FL.callback = function(method) {
  FL.callbackQueue.push(method);
  FL.runCallbackQueue();
};

FL.runCallbackQueue = function() {
  if (FL.callbackQueue.length === 0) {
    return;
  }

  setTimeout(() => {
    window.location.href = "FL-callback://";
  }, 0);
};

FL.getCommandQueue = function() {
  var commands = JSON.stringify(FL.callbackQueue);
  FL.callbackQueue = [];
  return commands;
};

FL.insertSentence = function(content) {
  FL.sentences = content || [
    {
      cn: "砰的一声巨响，跟着是一声惨叫从台子后面传过来",
      begin: 0,
      end: 3.3799999999999999,
      en: "There was a loud bang and a yell from behind the dais. "
    },
    {
      end: 11.228333333333333,
      begin: 3.3799999999999999,
      en:
        "Harry saw Kingsley hit the ground yelling in pain: Bellatrix Lestrange turned tail and ran as Dumbledore whipped around. ",
      cn:
        "哈利看见金斯莱重重地摔在了地上，疼得直叫：邓布利多正用魔杖向四周狂扫，贝拉特里克斯。莱斯特兰奇吓得慌忙夹起尾巴抱头鼠窜"
    },
    {
      begin: 11.228333333333333,
      end: 15.710000000000001,
      cn:
        "哈利趁机对准她给了她一道咒语，可是被她躲过去了；她已经跑到台阶的中间—",
      en:
        "He aimed a spell at her but she deflected it; she was halfway up the steps now - '"
    },
    {
      begin: 15.710000000000001,
      end: 22.128333333333334,
      en:
        "'Harry - no!' cried Lupin, but Harry had already ripped his arm from Lupin's slackened grip.“",
      cn: "哈利——　不要！”卢平大喊，但哈利早已挣脱卢平已经变松的手"
    },
    {
      en:
        "'SHE KILLED SIRIUS!' bellowed Harry. 'SHE KILLED HIM - 'I'LL KILL HER!'“",
      begin: 22.128333333333334,
      cn: "她杀死了小天狼星！”哈利怒吼着，“她杀了他——　我就要杀了她！",
      end: 27.609999999999999
    },
    {
      cn: "他冲了出去，迅速爬上台阶，不顾后面人的高声阻拦",
      en:
        "And he was off, scrambling up the stone benches; people were shouting behind him but he did not care.  ",
      end: 33.770000000000003,
      begin: 27.609999999999999
    },
    {
      en:
        "The hem of Bellatrix's robes whipped out of sight ahead and they were back in the room where the brains were swimming . . .",
      cn:
        "贝拉特里克斯袍子边在前面一晃不见了，他们又回到了大脑屋里，那些大脑还在不停地游动",
      begin: 33.770000000000003,
      end: 39.638333333333335
    },
    {
      begin: 39.638333333333335,
      en: "She aimed a curse over her shoulder. ",
      cn: "她没有回头，而是直接从肩头向身后发出了一个咒语",
      end: 42.258333333333333
    },
    {
      en:
        "The tank rose into the air and tipped. Harry was deluged in the foul-smelling potion within:",
      begin: 42.258333333333333,
      cn:
        "装大脑的箱子升到了空中翻了，哈利被里面倾泻下来的发着恶臭的液体淋了一身",
      end: 48.289999999999999
    },
    {
      begin: 48.289999999999999,
      en:
        "the brains slipped and slid over him and began spinning their long coloured tentacles, ",
      cn: "那些大脑滑滑溜溜地从他身上往下滑，用它们彩色的触角缠绕着他的身体",
      end: 53.5
    },
    {
      cn:
        "哈利大喊一声：“羽加迪姆勒维奥萨！”它们顿时离开了他的身体，飞到了空中",
      end: 58.618333333333332,
      begin: 53.5,
      en: "but he shouted,  and they flew off him up into the air. "
    },
    {
      begin: 58.618333333333332,
      cn: "他滑滑溜溜地径直向门口跑去",
      en: "Slipping and sliding, he ran on towards the door; ",
      end: 61.609999999999999
    },
    {
      end: 71.680000000000007,
      en:
        "he leapt over Luna, who was groaning on the floor, past Ginny, who said, 'Harry - what - ?', past Ron, who giggled feebly, and Hermione, who was still unconscious. ",
      begin: 61.609999999999999,
      cn:
        "跳过在地面上呻吟着的卢娜，掠过呼喊他的金妮：“哈利——　怎么了——　？”跑过虚弱地傻笑着的罗恩，还有不省人事的赫敏"
    },
    {
      end: 78.900000000000006,
      cn:
        "用力拉开通向黑色圆形大厅的门，看到贝拉特里克斯在对面的门口一闪不见了",
      en:
        "He wrenched open the door into the circular black hall and saw Bellatrix disappearing through a door on the other side of the room; ",
      begin: 71.680000000000007
    },
    {
      end: 82.189999999999998,
      begin: 78.900000000000006,
      cn: "而她前面正是通往升降梯的走廊",
      en: "beyond her was the corridor leading back to the lifts."
    },
    {
      end: 87.5,
      begin: 82.189999999999998,
      en:
        "He ran, but she had slammed the door behind her and the walls were already rotating. ",
      cn: "他拼命地奔跑，但是她已经砰的一声把身后的门关上了，墙壁已经旋转起来"
    },
    {
      en:
        "Once more, he was surrounded by streaks of blue light from the whirling candelabra.",
      cn: "哈利又一次被旋转的蜡烛所产生的蓝色光束包围了",
      end: 92.00833333333334,
      begin: 87.5
    },
    {
      en:
        "'Where's the exit?' he shouted desperately, as the wall rumbled to a halt again. 'Where's the way out?'“",
      end: 99.109999999999999,
      begin: 92.00833333333334,
      cn:
        "哪一个是出口？”墙壁隆隆地再一次停了下来，他茫然不知所措地大喊，“从哪儿才能出去？"
    },
    {
      cn: "这间屋子好像正等着他来发问似的",
      en: "The room seemed to have been waiting for him to ask.  ",
      begin: 99.109999999999999,
      end: 102.47
    }
  ];
  var innerHTML = "";
  FL.sentences.forEach((sentence, index) => {
    var en = document.createElement("p");
    var cn = document.createElement("p");
    en.innerHTML = sentence.en || "";
    cn.innerHTML = sentence.cn || "";
    en.id = `sentence_en_${index}`;
    cn.id = `sentence_cn_${index}`;
    en.classList.add("en");
    cn.classList.add("cn");

    en.setAttribute(
      "onclick",
      `javascript:FL.callback('sentenceSelected:${index}')`
    );
    cn.setAttribute(
      "onclick",
      `javascript:FL.callback('sentenceSelected:${index}')`
    );

    innerHTML = innerHTML + en.outerHTML;
    innerHTML = innerHTML + cn.outerHTML;
  });

  FL.container.innerHTML = innerHTML;
  FL.callback("insertSentence");
};
FL.insertSentence();

FL.insertHTML = function(html) {
  document.execCommand("insertHTML", false, html);
};

FL.scrollAtIndex = function(index) {
  const elementEn = document.getElementById(`sentence_en_${index}`);
  const elementCn = document.getElementById(`sentence_cn_${index}`);
  let rectEn = elementEn.getBoundingClientRect();
  let rectCn = elementCn.getBoundingClientRect();
  if (
    rectEn.top > window.innerHeight ||
    rectEn.bottom < 0 ||
    rectCn.bottom > window.innerHeight ||
    rectCn.top < 0
  ) {
    // elementEn.scrollIntoView({
    //   behavior: "smooth"
    // });
    $("html, body").animate({ scrollTop: $([elementEn]).position().top }, 1000);
  }
};

FL.highlightIndex = function(index) {
  const highlights = document.getElementsByClassName("highlight");
  console.log("highlights", highlights.length);

  //   if (highlights.length > 0) {
  //     [].forEach.call(highlights, el => {
  //       console.log("el", el);
  //       el.classList.remove("highlight");
  //     });
  //   }
  while (highlights.length > 0) {
    highlights[0].classList.remove("highlight");
  }

  const elementEn = document.getElementById(`sentence_en_${index}`);
  const elementCn = document.getElementById(`sentence_cn_${index}`);
  elementEn.classList.add("highlight");
  elementCn.classList.add("highlight");
};

FL.setSubTitleType = function(subTitleType) {
  const cns = document.getElementsByClassName("cn");
  const ens = document.getElementsByClassName("en");
  if (cns.length > 0 && ens.length > 0) {
    if (subTitleType === 0) {
      [].forEach.call(ens, el => {
        el.classList.add("hidden");
      });
      [].forEach.call(cns, el => {
        el.classList.add("hidden");
      });
    } else if (subTitleType === 1) {
      [].forEach.call(ens, el => {
        el.classList.remove("hidden");
      });
      [].forEach.call(cns, el => {
        el.classList.remove("hidden");
      });
    } else if (subTitleType === 2) {
      [].forEach.call(ens, el => {
        el.classList.remove("hidden");
      });
      [].forEach.call(cns, el => {
        el.classList.add("hidden");
      });
    } else if (subTitleType === 3) {
      [].forEach.call(ens, el => {
        el.classList.add("hidden");
      });
      [].forEach.call(cns, el => {
        el.classList.remove("hidden");
      });
    }
  }
};

FL.emptySentence = function() {
  if (window.getSelection) {
    if (window.getSelection().empty) {
      // Chrome
      window.getSelection().empty();
    } else if (window.getSelection().removeAllRanges) {
      // Firefox
      window.getSelection().removeAllRanges();
    }
  }
};

FL.emptySelection = function() {
  var selection = window.getSelection
    ? window.getSelection()
    : document.selection
    ? document.selection
    : null;
  if (!!selection)
    selection.empty ? selection.empty() : selection.removeAllRanges();
};

FL.setFontSize = function(type) {
  const container = document.getElementById("container");
  if (type === 0) {
    container.classList.remove("font-normal");
    container.classList.remove("font-large");
    container.classList.add("font-small");
  } else if (type === 1) {
    container.classList.add("font-normal");
    container.classList.remove("font-large");
    container.classList.remove("font-small");
  } else if (type === 2) {
    container.classList.remove("font-normal");
    container.classList.add("font-large");
    container.classList.remove("font-small");
  }
};

document.addEventListener("selectionchange", e => {
  FL.callback(`contentSelected:${window.getSelection()}`);
});

let indexS = 0;
FL.highlightIndex(indexS);
document.getElementById("nextS").addEventListener("click", function() {
  indexS++;
  FL.highlightIndex(indexS);
  FL.scrollAtIndex(indexS);
});
