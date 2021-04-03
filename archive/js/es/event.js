// function handle(event) {
//   console.log(event.currentTarget)
//   console.log(event.target)
// }
// document.body.onclick = handle

function test(e) {
  console.log('scroll', e)
}

function debonuce(func, wait) {
  let timer = null
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}

function throttle(func, wait) {
  let lastTime = 0
  return (...args) => {
    let now = +new Date()
    if (now - lastTime > wait) {
      lastTime = now
      func.apply(this, args)
    }
  }
}

// 防抖
window.onresize = debonuce(test, 300)

// 节流
window.onresize = throttle(test, 300)
