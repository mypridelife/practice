<!--
  功能: hook生命周期钩子函数
  作者: gyh
  版本: v0.1
-->
<template>
  <div class="p-page">
    hook beforeDestroy
    <button @click="jumpSlottest">jumpSlottest</button>
  </div>
</template>

<script>
export default {
  name: 'hookstest',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    // 监听窗口发生变化，resize组件
    window.addEventListener('resize', this._handleResizeChart)
    // 通过hook监听组件销毁钩子函数，并取消监听事件
    this.$once('hook:beforeDestroy', () => {
      window.removeEventListener('resize', this._handleResizeChart)
    })
  },
  methods: {
    _handleResizeChart() {
      console.log('resize')
    },
    jumpSlottest() {
      this.$router.push({
        name: 'slottest'
      })
    }
  }
}
</script>

<style scoped lang="scss" type="text/css"></style>
