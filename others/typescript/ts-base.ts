/**
 * 原始数据类型
 * JavaScript 的类型分为两种：原始数据类型（Primitive data types）和对象类型（Object types）。
 * 原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol
 */
let isDone: boolean = false;
let decLiteral: number = 6;
let myName: string = "Tom";
function alertName(): void {
  alert("My name is Tom");
}
let u: undefined = undefined;
let n: null = null;

/**
 * 任意值
 */
let anyThing: any = "hello";

/**
 * 类型推论
 */
// let myFavoriteNumber = "seven";
// myFavoriteNumber = 7;
// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
// 事实上，它等价于：
// let myFavoriteNumber: string = "seven";
// myFavoriteNumber = 7;
// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.

// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：
let myFavoriteNumber;
myFavoriteNumber = "seven";
myFavoriteNumber = 7;

/**
 * 联合类型（Union Types）表示取值可以为多种类型中的一种。
 */
let myFavoriteNumber2: string | number;
myFavoriteNumber2 = "seven";
myFavoriteNumber2 = 7;
// 访问 string 和 number 的共有属性是没问题的：
function getString(something: string | number): string {
  return something.toString();
}

/**
 * 接口（Interfaces）来定义对象的类型。
 * ?可选属性
 * 任意属性[propName: string]: any;
 * 只读属性 readonly
 */
interface Person {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}
let tom: Person = {
  id: 89757,
  name: "Tom",
  age: 25
};

/**
 * 数组的类型
 */
let fibonacci: number[] = [1, 1, 2, 3, 5];

/**
 * 函数的类型
 */
// 有两种常见的定义函数的方式——函数声明（Function Declaration）和函数表达式（Function Expression）：
// 函数声明（Function Declaration）
function sum(x, y) {
  return x + y;
}
// 函数表达式（Function Expression）
let mySum = function(x, y) {
  return x + y;
};

function sum1(x: number, y: number): number {
  return x + y;
}

let mySum2: (x: number, y: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
};
// 重载
// 我们需要实现一个函数 reverse，输入数字 123 的时候，输出反转的数字 321，输入字符串 'hello' 的时候，输出反转的字符串 'olleh'
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  if (typeof x === "number") {
    return Number(
      x
        .toString()
        .split("")
        .reverse()
        .join("")
    );
  } else if (typeof x === "string") {
    return x
      .split("")
      .reverse()
      .join("");
  }
}

/**
 * 类型断言
 * 类型断言（Type Assertion）可以用来手动指定一个值的类型。
 * <类型>值
 * 值 as 类型
 */
function getLength(something: string | number): number {
  if ((<string>something).length) {
    return (<string>something).length;
  } else {
    return something.toString().length;
  }
}
/**
 * 用 TypeScript 写 Node.js
 * Node.js 不是内置对象的一部分，如果想用 TypeScript 写 Node.js，则需要引入第三方声明文件：
 * npm install @types/node --save-dev
 */
