import Vue from 'vue'
import App from './App.vue'
import router from './router'
import krouter from '@/components/krouter'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  krouter,
  render: h => h(App)
}).$mount('#app')
