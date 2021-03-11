class GVue {
  constructor(options) {
    this.$options = options
    this.$data = options.data

    // 响应化
    this.observe(this.$data)
  }

  observe(obj) {
    if (!obj || typeof obj !== 'object') {
      console.log('data must be a object！', obj)
      return
    }

    Object.keys(obj).forEach((key) => {
      this.defineReactive(obj, key, obj[key])
      this.proxyData(key)
    })
  }
  // 在vue根上定义属性代理data中的数据
  proxyData(key) {
    Object.defineProperty(this, key, {
      get() {
        return this.$data[key]
      },
      set(newVal) {
        this.$data[key] = newVal
      },
    })
  }
  defineReactive(obj, key, val) {
    //递归
    this.observe(val)

    Object.defineProperty(obj, key, {
      get() {
        return val
      },
      set(newVal) {
        val = newVal
        console.log(key, '的值更新了', val)
      },
    })
  }
}
