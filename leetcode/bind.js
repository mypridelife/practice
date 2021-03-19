// 面试-手写bind

// Function.prototype.myBind = function (ctx, ...args) {
//   return (...innerArgs) => this.call(ctx, ...args, ...innerArgs)
// }

// // test
// const a = {
//   name: 'name of a',
// }
// function test(...msg) {
//   console.log(this.name)
//   console.log(...msg)
// }
// const t = test.myBind(a, 'hello')
// t('world')

Function.prototype.bind = function (ctx, ...args) {
  return (...innerArgs) => this.call(ctx, ...args, ...innerArgs)
}

function bar(...msg) {
  console.log(this.name)
  console.log(...msg)
}

const foo = {
  name: 'bind test',
}

const barBind = bar.bind(foo, 'hello')

barBind('world')
