<!--
  功能：期数编辑
  作者：gyh
  邮箱：mypridelife@163.com
  时间：2019年10月14日 11:01:28
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
    <div class="p-page">
        <div class="m-tab-container">
            <div class="m-tab m-tab1" :class="selected==='1'?'tab-selected':''" @click="handleSelectTab('1')">
                期数编辑
            </div>
            <div class="m-tab m-tab2" :class="selected==='2'?'tab-selected':''" @click="handleSelectTab('2')">
                设置班主任
            </div>
            <div class="m-tab m-tab3" :class="selected==='3'?'tab-selected':''" @click="handleSelectTab('3')">
                权限邀请
            </div>
            <div class="tab-line" :style="tabLineStyle">
            </div>
        </div>
        <div v-if="selected==='1'" class="tab-content">
            1
        </div>
        <div v-if="selected==='2'" class="tab-content">
            2
        </div>
        <div v-if="selected==='3'" class="tab-content">
            3
        </div>
    </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      selected: '1'
    }
  },
  computed: {
    tabLineStyle() {
      let x
      if (this.selected === '1') {
        x = 1 / 6
      }
      if (this.selected === '2') {
        x = 1 / 2
      }
      if (this.selected === '3') {
        x = 5 / 6
      }
      const pianyi = x * window.screen.width
      //   const w = 1 / 6 * window.screen.width
      const w = 40
      return `width: ${w}px; transform: translateX(${pianyi}px) translateX(-50%); transition-duration: 0.3s;`
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleSelectTab(val) {
      this.selected = val
    }
  }
}
</script>

<style scoped lang="less" type="text/css">
.p-page {
  position: relative;
  .m-tab-container {
    position: fixed;
    top: 0px;
    left: 0px;

    width: 100%;
    height: 40px;
    display: flex;

    background-color: #ffffff;
    z-index: 99;
    .m-tab1 {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .m-tab2 {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .m-tab3 {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .m-tab {
      color: #7d7e80;
      font-size: 14px;
    }
    .tab-selected {
      color: #323233;
      font-weight: 500;
    }
    .tab-line {
      position: absolute;
      bottom: 0px;
      left: 0;
      z-index: 1;
      height: 3px;
      background-color: #ee0a24;
      border-radius: 3px;
    }
  }

  .tab-content {
    position: relative;
    margin-top: 40px;
  }
}
</style>
