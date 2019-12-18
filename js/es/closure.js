// var fn = null;
// function foo() {
//   var a = 2;
//   function innnerFoo() {
//     console.log(a);
//   }
//   fn = innnerFoo; // 将 innnerFoo的引用，赋值给全局变量中的fn
// }

// function bar() {
//   fn(); // 此处的保留的innerFoo的引用
// }

// foo();
// bar(); // 2

// var fn = null;
// function foo() {
//   var a = 2;
//   function innnerFoo() {
//     console.log(c); // 在这里，试图访问函数bar中的c变量，会抛出错误
//     console.log(a);
//   }
//   fn = innnerFoo; // 将 innnerFoo的引用，赋值给全局变量中的fn
// }

// function bar() {
//   var c = 100;
//   fn(); // 此处的保留的innerFoo的引用
// }

// foo();
// bar();

// for (var i = 1; i <= 5; i++) {
//   setTimeout(timer(), i * 1000);
// }

// function timer() {
//   var num = i;
//   return function() {
//     console.log("内层", num);
//   };
// }

for (var i = 0; i < 5; i++) {
  (function(i) {
    setTimeout(function() {
      console.log(i);
    }, i * 1000);
  })(i);
}
// var Counter = (function() {
//     var privateCounter = 0;
//     function changeBy(val) {
//       privateCounter += val;
//     }
//     return {
//       increment: function() {
//         changeBy(1);
//       },
//       decrement: function() {
//         changeBy(-1);
//       },
//       value: function() {
//         return privateCounter;
//       }
//     }
//   })();

//   console.log(Counter.value()); /* logs 0 */
//   Counter.increment();
//   Counter.increment();
//   console.log(Counter.value()); /* logs 2 */
//   Counter.decrement();
//   console.log(Counter.value()); /* logs 1 */
