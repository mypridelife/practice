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
