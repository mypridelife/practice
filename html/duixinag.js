let ms = {
	sex: 1,
	getItem(key) {
		return key in this ? this[key] : null;
	},

	setItem(key, value) {
		this[key] = value;
	}
};

// function getItem (key) {
//   return key in ms ? ms[key] : null;
// }

// function setItem (key, value) {
//   ms[key] = value;
// }

// function clear() {
// 	ms = {};
// }

// console.log(getItem("name"))

ms.setItem("name", "gyh")

// console.log(getItem("name"))

// console.log(ms["name"])

// console.log(ms["sex"])

console.log(ms)