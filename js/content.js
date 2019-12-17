var name = "window";

var p = {
  name: "Perter",
  getName: function() {
    // 利用变量保存的方式保证其访问的是p对象
    var self = this;
    return function() {
      return self.name;
    };
  }
};

var getName = p.getName();
var _name = getName();
console.log(_name);

function test() {
  function foo() {
    return 2;
  }
  var a;
  console.log(a);
  console.log(foo());
  a = 1;
}

test();

// demo01
function foo() {
  var a = 20;
  var b = 30;

  function bar() {
    return a + b;
  }

  return bar;
}

console.log(foo()());
