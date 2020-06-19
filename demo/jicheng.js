function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.getName = function () {
  return this.name
}
Person.prototype.getAge = function () {
  return this.age
}

function Teacher(name, age, subject) {
  Person.call(this, name, age)
  this.subject = subject
}
// 继承方法的最终方案：
// ES6 之前抛弃默认的 Teacher.prototype
// Teacher.prototype = Object.create(Person.prototype)
//ES6 开始直接修改现有的 Teacher.prototype
Object.setPrototypeOf(Teacher.prototype, Person.prototype)
// Teacher.prototype.constructor = Teacher
console.log(Teacher.prototype.constructor)

let teac = new Teacher('zs', 18, 'gaoshu')
console.log(teac.getName())
// console.log(Object.getPrototypeOf(teac) === Teacher.prototype)
// console.log(Object.getPrototypeOf(teac) === teac.__proto__)
// console.log(teac.__proto__)
