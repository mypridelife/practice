function handleLogName(name, func) {
  this.name = name
  func()
}

handleLogName('zs', function () {
  //   console.log(this)
})
// console.log(name)
