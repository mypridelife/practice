class Event {
  constructor() {
    this.callbacks = {}
  }
  $off(name) {
    this.callbacks[name] = null
  }
  $emit(name, args) {
    let cbs = this.callbacks[name]
    if (cbs) {
      cbs.forEach(c => {
        c.call(this, args)
      })
    }
  }
  $on(name, fn) {
    ;(this.callbacks[name] || (this.callbacks[name] = [])).push(fn)
  }
}
let eventDemo = new Event()
eventDemo.$on('event1', function (arg) {
  console.log('事件1', arg)
})
eventDemo.$on('event1', function (arg) {
  console.log('又一个时间1', arg)
})
eventDemo.$on('event2', function (arg) {
  console.log('事件2', arg)
})

eventDemo.$emit('event1', { name: '开课吧' })
eventDemo.$emit('event2', { name: '全栈' })

eventDemo.$off('event1')
eventDemo.$emit('event1', { name: '开课吧' })
