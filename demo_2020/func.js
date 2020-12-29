var matches = /(hello \S+)/.exec('This is a hello world!')
console.log(matches)

function add(a, b) {
  return a + b
}
var i = 1,
  j = 2
var c = add(i, j)

console.log(c, i, j)
