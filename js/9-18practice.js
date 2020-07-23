const Person = {
  name: "张三",

  //等同于birth: birth
  birth: "2019-1-2",

  // 等同于hello: function ()...
  hello() {
    console.log("我的名字是", this.name);
  },
};

function Person2(name, job, born) {
  this.name = name;
  this.job = job;
  this.born = born;
}

class People {
  constructor(s, a) {
    this.sex = s;
    this.age = a;
  }
}
// let bill = new Person()
// console.log(bill)
// Person.prototype.salary = null
// bill.salary = 19
// console.log(bill)
console.log(typeof Person);
console.log(typeof Person2);
console.log(typeof People);
const p1 = new People("nan", 18);
console.log("People", p1);
