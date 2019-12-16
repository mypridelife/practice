// var a = { m: 10, n: 20 };
// function fn(a) {
//   a = {};
//   a.m = 20;
//   return a;
// }

// fn(a);
// console.log(a); // { m: 20, n: 20 }

// var person = {
//   name: "Nicholas",
//   age: 20
// };

// function setName(obj) {
//   // 传入一个引用
//   obj = {}; // 将传入的引用指向另外的值
//   obj.name = "Greg"; // 修改引用的name属性
//   return obj;
// }

// setName(person);
// console.log(person); // Nicholas 未被改变

setTimeout(function() {
  console.log("timeout1");
});

new Promise(function(resolve) {
  console.log("promise1");

  setTimeout(function() {
    console.log("timeout2");
  });
  for (var i = 0; i < 1000; i++) {
    i == 99 && resolve();
  }
  console.log("promise2");
}).then(function() {
  console.log("then1");
});

console.log("global1");
