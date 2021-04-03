import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// const context = require.context('./views', true, /index\.vue$/)
// // context.keys()返回所有匹配到的文件的路径
// context.keys().forEach(key => {
//   // 通过 context(key) 可以获取到对应的文件
//   const item = context(key).default
//   console.log(item)
// })

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/passvalue'
    },
    {
      path: '/passvalue',
      name: 'passvalue',
      component: () => import('@/views/passvalue/index')
    },
    {
      path: '/slottest',
      name: 'slottest',
      component: () => import('@/views/slottest/index')
    },
    {
      path: '/hookstest',
      name: 'hookstest',
      component: () => import('@/views/hookstest/index')
    },
    {
      path: '/storetest',
      name: 'storetest',
      component: () => import('@/views/storetest/index')
    },
    {
      path: '/functional',
      name: 'functional',
      component: () => import('@/views/functional/index')
    },
    {
      path: '/sui/button',
      name: 'suibutton',
      component: () => import('@/views/suibutton/index')
    }
  ]
})

export default router
