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
