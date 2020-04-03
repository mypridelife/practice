let timer = setTimeout(() => {
  timer = null
  console.log('timer1', timer)
}, 1000)
let timer2 = setTimeout(() => {
  clearTimeout(timer2)
  console.log('timer2', timer2)
}, 1000)
// clearTimeout(timer2)
console.log('timer2 外', timer2)
