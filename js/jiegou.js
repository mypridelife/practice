let {
	length: len
} = 'hello';
console.log(len)
const set = new Set([1, 2, 3, 4, 4]);
console.log([...set])
const arr = [1, 1, 2, 3, 3, 4]
console.log([...new Set(arr)])
const arr2 = new Set(arr)
console.log("arr2", arr2)
let  obj = {
	element: "1"
}
function setItem (key, value) {
  obj[key] = value;
}
setItem("element","ma")
// const element = "ma"
// obj[element]='ma'
console.log(obj["element"])