import Vue from 'vue'

class Krouter {}
Krouter.install = function(Vue) {
  Vue.mixin({
    beforeCreate() {
      console.log('this', this)

      if (this.$options) {
      }
    }
  })
}

Vue.use(Krouter)
