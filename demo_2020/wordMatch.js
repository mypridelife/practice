const origin = `* raffle /'ræfal/ n. [С]Æ#
vi. 
vi. jh3
rampant /'ræmpant/ adj. EÉ
* raft /ra:ft/ n. [C]EF
* ranch /ra;ntf/ n. [C]Xx5
rag /reg/ n. [C][U]破布，碎布
random /'rændam/ adj. f:t.á
rage /re1dz/ n. [C][U]t8
at random Mt it
* ragged /regid/ adj. 1. 破烂的2.穿着破烂的
range /rend3/ n. [C]1.范围2.距离
raid /rerd/ n. [C]袭击，搜查
vi.排列
rail /rerl/ n. [C][U]1.栏杆,围栏2.铁路,轨道
* ranger /'rend3a/ n. [C]#M5
railroad /'retlraud/ n. [C]#AB
rank /raegk/n. 1.[C][U]军衔 2.[C][U]阶层
vi.由铁路运输
3.[C]챠
ut.把...排列
railway /'re1lwer/ n. [C]4#B&
vi. 3iI
rain /remn/ n. [U]ñí
the rank and file #ini, i
vi. FFj
* ransom /'rænsam n. [C].
rainbow /'re1nbau/ n. [C]%Ar
hold sb. to ransom Miit
* raincoat /'reinkaut n. [C]X
*rap /raep/ n. [C]1.敲击2.罪
raindrop /'renndzэp/ n. [C]id
ut.1.敲击2.谴责
rainfall /'reinfs:l/ n. [C][U]F4
* rape /rerp/ Dt. 3F
rainy /'reinl/ adj,多雨的
n. [C][U]强奸
rapid /'ræp1d/ adj. BIHJ
raise /rerz/o. 1. 举起2.提高，增加3.提出4.养
* rapidity /ra'prdat1/ n. [U]B.i
5.lit
rake /re1k/ n. [C]#BF
Arapidly /'ræp1dl1/ adv. ilitl
u.耙
rare /rea/ adj罕见的
vi. 1.搜寻
rarely /real/ adv.难得
rake in迅速取得
rake up重提旧事
rarity /'rearat1/ n. [C]BIt
rally /'rælt/ n. [C]#å
* rash /raef/ adj.匆忙的
vi. 1.集合2.重新振作
rat /ræt/ n. [с]n
ram /ram/ vi. 通过
rate /rent/ n. [C] tL#
vt. Hft
vt. i4l, iFfr
n. [C]羯羊
at any rate无论如何
ramble /'ræmbal/ vi. Щi
at this rate JHRLtLtff
n.8
rather /'ra:õa/ adv. 1. 2. TIS
* ramp /ræmp/ n. [C]f-l
had/would rather (than)T ·iF 18`
// const re = /r(\w+\n|\w+ |\w+\/)/g
const re = /[^ ]r\w+ /g

const matchArr = [...origin.matchAll(re)]

let xiuzhengArr = []

matchArr.forEach(item => {
  const result = item[0].replace('/', '').trim()

  xiuzhengArr.push(result)
})
console.log('xiuzhengArr', xiuzhengArr.length, xiuzhengArr)

const output = xiuzhengArr.join(',')

console.log(output)
