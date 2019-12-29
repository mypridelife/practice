//array
// https://www.runoob.com/jsref/jsref-obj-array.html

/**
 * concat() 方法
 * 该方法不会改变现有的数组
 * array1.concat(array2,array3,...,arrayX)
 */
var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var kai = ["Robin"];
var children = hege.concat(stale, kai);
/**
 * entries() 方法
 * entries() 方法返回一个数组的迭代对象
 * 迭代对象中数组的索引值作为 key， 数组元素作为 value。
 */
var fruits = ["Banana", "Orange", "Apple", "Mango"];
for (const [key, value] of fruits.entries()) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}
////////////////////////////////////////////////////////////////////////
// iterate through key-value gracefully
const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}
// Or, using array extras
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});
////////////////////////////////////////////////////////////////////////
/**
 * every() 方法
 * every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。
 * 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
 * 如果所有元素都满足条件，则返回 true。
 * some() 方法
 * some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。
 * 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
 * 如果没有满足条件的元素，则返回false。
 */
var ages = [32, 33, 16, 40];
function checkAdult(age) {
  return age >= 18;
}
function myFunction() {
  document.getElementById("demo").innerHTML = ages.every(checkAdult);
}
/**
 * fill() 方法
 * fill() 方法用于将一个固定值替换数组的元素。
 * array.fill(value, start, end)
 */
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Runoob", 2, 4);
/**
 * filter() 方法
 * filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
 */
var ages = [32, 33, 16, 40];
function checkAdult(age) {
  return age >= 18;
}
function myFunction() {
  document.getElementById("demo").innerHTML = ages.filter(checkAdult);
}
/**
 * find() 方法
 * findIndex()
 * array.findIndex(function(currentValue, index, arr), thisValue)
 * array.find(function(currentValue, index, arr),thisValue)
 */

/**
 * from() 方法
 * Array.from(object, mapFunction, thisValue)
 */
// 通过字符串创建一个数组：
var myArr = Array.from("RUNOOB");
var setObj = new Set(["a", "b", "c"]);
var objArr = Array.from(setObj);
objArr[1] == "b"; // true
var arr = Array.from([1, 2, 3], x => x * 10);
/**
 * includes() 方法
 * includes() 方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false。
 */
[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
[1, 2, 3].includes(3, 3); // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true

/**
 * indexOf() 方法
 * lastIndexOf()
 */
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
/**
 * Array.isArray(obj)
 */
/**
 * join() 方法
 * 把数组中的所有元素转换为一个字符串
 * array.join(separator)
 */
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var energy = fruits.join();
/**
 * pop() 方法
 * pop() 方法用于删除数组的最后一个元素并返回删除的元素。
 * push() 方法
 * push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
 * shift() 方法
 * shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
 * unshift() 方法
 * unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
 * slice() 方法
 * slice() 方法可从已有的数组中返回选定的元素。
 * array.slice(start, end)
 * splice() 方法
 * splice() 方法用于添加或删除数组中的元素。
 * 注意：这种方法会改变原始数组。
 * array.splice(index,howmany,item1,.....,itemX)
 */
/// toString() 方法 将数组转换为字符串
/**
 * reverse() 方法
 */
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
/**
 * sort() 方法
 * sort() 方法用于对数组的元素进行排序。
 * 排序顺序可以是字母或数字，并按升序或降序。
 * 默认排序顺序为按字母升序。
 * 这种方法会改变原始数组！
 */
