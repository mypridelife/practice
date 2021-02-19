/**
 * 原型继承与类继承
 */
function Person(name) {
  this.name = name
}
Person.prototype.sayName = function () {
  console.log('person say name', this.name)
}

let person = new Person('Person')
console.log('父类 person', person)
for (const key in person) {
  console.log('父类 person key', key)
}

/**
 * 设置和直接访问原型的现代方法有：
 * Object.create(proto, [descriptors]) —— 利用给定的 proto 作为 [[Prototype]]（可以是 null）和可选的属性描述来创建一个空对象。
 * Object.getPrototypeOf(obj) —— 返回对象 obj 的 [[Prototype]]（与 __proto__ 的 getter 相同）。
 * Object.setPrototypeOf(obj, proto) —— 将对象 obj 的 [[Prototype]] 设置为 proto（与 __proto__ 的 setter 相同）。
 */
function Teacher(name, age) {
  Person.call(this, name)
  this.age = age
}
// 废弃的写法
// Teacher.prototype.__proto__ = Person.prototype
Teacher.prototype = Object.create(Person.prototype)
//修正 constructor
Teacher.prototype.constructor = Teacher
Teacher.prototype.sayAge = function () {
  console.log('teacher say age ', this.age)
}

let teacher = new Teacher('Teacher', '18')
console.log('子类 teacher', teacher)
for (const key in teacher) {
  if (teacher.hasOwnProperty(key)) {
    console.log('子类 teacher key', key, teacher[key])
  }
}

const person1 = {
  name: 'person1',
  sayName: function () {
    console.log('person1 say name', this.name)
  },
}

const me = Object.create(person1)
// console.log("me", me.__proto__)
console.log('me', Object.getPrototypeOf(me))

/**
 * 区别：
 * 1、classConstructor
 * 2、new
 * 3、类方法不可枚举 (enumerable: false)
 * 4、类内部默认使用 use strict
 * 5、类字段重要的不同之处在于，它们会在每个独立对象中被设好，而不是设在 User.prototype
 */

// 类
class Animal {
  constructor(name) {
    this.name = name
  }
  sayName() {
    console.log('animal say name', this.name)
  }
}
let animal = new Animal('Animal')
console.log('父类 animal', animal)
for (const key in animal) {
  console.log('父类 animal key', key)
}

//继承
class Rabbit extends Animal {
  constructor(name, age) {
    super(name)
    this.age = age
  }

  sayAge() {
    super.sayName() // 调用父类的 stop
    console.log('teacher say age', this.age)
  }
}

let rabbit = new Rabbit('Rabbit', '18')
console.log('子类 rabbit', rabbit)
for (const key in rabbit) {
  console.log('子类 rabbit key', key)
}
// node 运行结果
// 父类 person Person { name: 'Person' }
// 父类 person key name
// 父类 person key sayName
// 子类 teacher Teacher { age: 'Teacher' }
// 子类 teacher key age
// 子类 teacher key constructor
// 子类 teacher key sayAge
// 子类 teacher key sayName
// 父类 animal Animal { name: 'Animal' }
// 父类 animal key name
// 子类 rabbit Rabbit { name: 'Rabbit', age: '18' }
// 子类 rabbit key name
// 子类 rabbit key age
// chrome 运行结果
// class.js:12 父类 person Person {name: "Person"}
// class.js:14 父类 person key name
// class.js:14 父类 person key sayName
// class.js:38 子类 teacher Teacher {age: "Teacher"}
// class.js:40 子类 teacher key age
// class.js:40 子类 teacher key constructor
// class.js:40 子类 teacher key sayAge
// class.js:40 子类 teacher key sayName
// class.js:62 父类 animal Animal {name: "Animal"}
// class.js:64 父类 animal key name
// class.js:81 子类 rabbit Rabbit {name: "Rabbit", age: "18"}
// class.js:83 子类 rabbit key name
// class.js:83 子类 rabbit key age
