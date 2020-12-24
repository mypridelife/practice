// 函数的柯里化
function add(a, b, c) {
  return a + b + c
}
// 简单实现，参数只能从右到左传递
function createCurry(func, args) {
  var arity = func.length
  var args = args || []

  return function () {
    var _args = [].slice.call(arguments)
    ;[].push.apply(_args, args)

    // 如果参数个数小于最初的func.length，则递归调用，继续收集参数
    if (_args.length < arity) {
      return createCurry.call(this, func, _args)
    }

    // 参数收集完毕，则执行func
    return func.apply(this, _args)
  }
}
const _add = createCurry(add)
console.log(_add(1, 2, 3))
console.log(_add(1)(2)(3))
