function name() {
  console.log('name')
}
const aname = name
name = function () {
  console.log('sex')
}
name()
aname()

let hello = {
  name: 'gyh',
}
const ahello = hello.name
hello.name = 'hhh'
console.log(ahello)
console.log(hello)
