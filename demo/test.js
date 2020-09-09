function setName(obj) {
  obj.name = "Nicholas"
  obj = {
    name: "Grey",
  }
  //   obj.name = "Greg"
}
var person = new Object()
setName(person)
console.log(person.name) //"Nicholas"
