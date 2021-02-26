<!--
  功能: 函数式组件与普通组件的区别
    1. 函数式组件需要在声明组件是指定functional
    2. 函数式组件不需要实例化，所以没有this,this通过render函数的第二个参数来代替
    3. 函数式组件没有生命周期钩子函数，不能使用计算属性，watch等等
    4. 函数式组件不能通过$emit对外暴露事件，调用事件只能通过context.listeners.click的方式调用外部传入的事件
    5. 因为函数式组件是没有实例化的，所以在外部通过ref去引用组件时，实际引用的是HTMLElement
    6. 函数式组件的props可以不用显示声明，所以没有在props里面声明的属性都会被自动隐式解析为prop,而普通组件所有未声明的属性都被解析到$attrs里面，并自动挂载到组件根元素上面(可以通过inheritAttrs属性禁止)
  作者: gyh
  版本: v0.1
-->
<template>
  <div class="app-container">
    <FinctionalTest :name="name"></FinctionalTest>
    <FuncionalJsx :name="name"></FuncionalJsx>

    <div>
      <span>用户名: {{ userInfo.name }}</span>
      <span>用户性别: {{ userInfo.sex }}</span>
      <span v-if="userInfo.officialAccount">
        公众号: {{ userInfo.officialAccount }}
      </span>
    </div>
    <button @click="handleAddOfficialAccount">添加公众号</button>
  </div>
</template>

<script>
import FinctionalTest from './components/FinctionalTest'
import FuncionalJsx from './components/FuncionalJsx'
export default {
  components: {
    FinctionalTest,
    FuncionalJsx
  },
  props: {},
  data() {
    return {
      name: 'functional',
      userInfo: {
        name: 'gyh',
        sex: 'unknown'
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    // 在这里添加用户的公众号
    handleAddOfficialAccount() {
      this.userInfo = {
        ...this.userInfo,
        officialAccount: '前端有的玩'
      }
    }
  }
}
</script>

<style scoped lang="scss" type="text/css"></style>
