function foo(a, b = 7) {
  this.a = a
  console.log(b)
}
foo()
console.log(foo.a, foo.b)

let c = new Date()
console.log(c)
let d = Date.now()
console.log(d)
//
