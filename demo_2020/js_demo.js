var str = 'abcde'
var obj = new String(str)
function newToString() {
  return 'hello, world!'
}
function func(val) {
  val.toString = newToString
}

func(obj)
console.log('obj', obj.toString())

func(str)
console.log('str', str.toString())

let arr = [1, 2, 3, 4]
delete arr[2]
console.log('arr', arr)
