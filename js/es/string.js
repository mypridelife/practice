// String
// https://www.runoob.com/jsref/jsref-obj-string.html

var arr = [1, 2, 3, 4, 5, 5, 6, 7, 1];
console.log(arr.indexOf(5)); //4 下标为4的位置
console.log(arr.lastIndexOf(5)); //5
//常用
/**
 * concat() 方法用于连接两个或多个字符串。
 * 该方法没有改变原有字符串，但是会返回连接两个或多个字符串新字符串。
 */
var str1 = "Hello ";
var str2 = "world!";
var n = str1.concat(str2);

/**
 * indexOf() 方法indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
 * 如果没有找到匹配的字符串则返回 -1。indexOf() 方法区分大小写。
 */
var str = "Hello world, welcome to the universe.";
var n = str.indexOf("welcome");
/**
 * lastIndexOf() 方法
 * lastIndexOf() 方法可返回一个指定的字符串值最后出现的位置，如果指定第二个参数 start，则在一个字符串中的指定位置从后向前搜索。
 * 注意： 该方法将从后向前检索字符串，但返回是从起始位置 (0) 开始计算子字符串最后出现的位置。 看它是否含有字符串
 */
// string.lastIndexOf(searchvalue, start)
var str = "I am from runoob，welcome to runoob site.";
var n = str.lastIndexOf("runoob");
/**
 * includes() 方法
 * includes() 方法用于判断字符串是否包含指定的子字符串。如果找到匹配的字符串则返回 true，否则返回 false。
 */
// string.includes(searchvalue, start)
var str = "Hello world, welcome to the Runoob。";
var n = str.includes("world");
/**
 * match() 方法
 */
var str = "The rain in SPAIN stays mainly in the plain";
var n = str.match(/ain/g);
/**
 * replace() 方法
 * 该方法不会改变原始字符串。
 */
// string.replace(searchvalue, newvalue)
/**
 * search() 方法
 * 如果没有找到任何匹配的子串，则返回 -1。
 */
// string.search(searchvalue)
/**
 * search() 方法
 * slice(start, end) 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。
 */
// string.slice(start,end)
/**
 * split() 方法
 * split() 方法用于把一个字符串分割成字符串数组
 */
// string.split(separator,limit)
/**
 * slice() 方法
 * substring() 方法
 * substr() 方法
 */
// string.slice(start,end)
// string.substr(start, length)
// string.substring(from, to)
/**
 * trim() 方法
 * 去除字符串的头尾空格:
 */
// trim() 方法不会改变原始字符串。
var str = "       Runoob        ";
// alert(str.trim());

//es6新增

/**
 * 字符串查询
 * 上面代码表示，使用第二个参数n时，endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。
 */
let s = "Hello world!";

s.startsWith("world", 6); // true
s.endsWith("Hello", 5); // true
s.includes("Hello", 6); // false

// 字符串补全长度的功能 常见用途是为数值补全指定位数
"x".padStart(5, "ab"); // 'ababx'
"x".padStart(4, "ab"); // 'abax'

"x".padEnd(5, "ab"); // 'xabab'
"x".padEnd(4, "ab"); // 'xaba'

// 返回的都是新字符串，不会修改原始字符串。
const s2 = "  abc  ";

s2.trim(); // "abc"
s2.trimStart(); // "abc  "
s2.trimEnd(); // "  abc"
