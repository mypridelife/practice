# postcss-write-svg
<template>
  <div class="p-page">
    1px svg
    <div class="example" />
    1px border-top
    <div class="example6" />
  </div>
</template>
<style scoped lang="scss">
@svg 1px-border {
  width: 4px;
  height: 4px;
  @rect {
    fill: transparent; // content为透明
    width: 100%; // 宽度为4px * 100%
    height: 100%; // 高度为4px * 100%
    stroke-width: 25%; // 边框宽度 4px * 25%(即1px)
    stroke: var(--color, black); // 颜色
  }
}
.example {
  margin-top: 30px;

  border: 1px solid;
  border-image: svg(1px-border param(--color #00b1ff)) 1 stretch;
}
.example6 {
  margin-top: 30px;

  border: 0;    // 将其余三遍的border宽度设置成0
  border-top: 1px solid;   // 这里将单边覆盖上面border的宽度设置
  border-image: svg(1px-border param(--color #00b1ff)) 1 stretch;

}
</style>
