// 函数有prototype属性
// 对象有__proto__属性
function doSomething() {}
doSomething.prototype.foo = 'bar'; // add a property onto the prototype
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = 'some value'; // add a property onto the object
console.log(doSomeInstancing);
