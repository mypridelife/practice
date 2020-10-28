//展开符
const x = [1, 2, 3, 4, 5, 5, 4];
console.log(...x);
//reduce,求和
const sumReduce = x.reduce((total, num) => total + num, 0);
console.log(sumReduce);
//map，过滤
const mapString = x.map(number => `A String containing the ${number}`);
console.log(mapString);
const mapString2 = x.map(String);
console.log(mapString2);

//split
const name = "gyh";
console.log(name.split(""));
//join
console.log(name.split("").join(""));
//reverse
console.log(name.split("").reverse());
console.log(
  name
    .split("")
    .reverse()
    .join("")
);

// Set 去除数组的重复成员
const array2 = [...new Set(x)];
console.log("Set 去除数组的重复成员", array2, "x", x);

//Set 去除字符串里面的重复字符
console.log([...new Set("ababbc")].join(""));
// "abc"

//Array.from方法可以将 Set 结构转为数组。
const items = new Set([1, 2, 3, 4, 5]);
const array = Array.from(items);
//这就提供了去除数组重复成员的另一种方法。

function dedupe(array) {
  return Array.from(new Set(array));
}

console.log(dedupe([1, 1, 2, 3]));
// [1, 2, 3]
