<template>
  <div class="chartBody">
    <canvas :class="zheClass" :id="eleId" />
  </div>
</template>
<script>
import F2 from '@antv/f2'
export default {
  name: 'Zhe',
  date() {
    return {
      chart: {}
    }
  },
  props: {
    dataSource: {
      type: Array,
      default: () => {
        return []
      }
    },
    width: {
      type: String,
      default: '300'
    },
    height: {
      type: String,
      default: '260'
    },
    className: {
      type: String,
      default: ''
    },
    padding: {
      type: String,
      default: '60'
    }
  },
  computed: {
    eleId() {
      return `Zhe${this._uid}`
    },
    zheClass() {
      return [
        'Zhe',
        this.className
      ]
    }
  },
  watch: {
  },
  mounted() {
    this.$nextTick(() => {
      this.chart = new F2.Chart({
        id: this.eleId,
        pixelRatio: this.$devicePixelRatio, // 指定分辨率
        width: this.width,
        height: this.height,
        padding: ['auto', 'auto', this.padding, 'auto']

      })
      // Step 2: 载入数据源
      this.chart.source(this.dataSource)
      //   this.chart.axis('data', {
      //     label: {
      //       rotate: -Math.PI / 2,
      //       textAlign: 'end',
      //       textBaseline: 'middle'
      //     }
      //   })
      this.chart.axis('data', {
        label: function label(text) {
          return {
            // fontSize: 20,
            text: ''
          }
        }
      })
      this.chart.tooltip({
        showItemMarker: false,
        onShow: function onShow(ev) {
          var items = ev.items
          items[0].name = null
          items[0].name = items[0].title
          items[0].value = ' ' + items[0].value
        }
      })
      // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
      this.chart.line().position('data*value') // 使用默认的颜色
      // Step 4: 渲染图表
      this.chart.render()
    })
  }

}
</script>
<style lang="less">
.chartBody {
  background-color: rgb(255, 255, 255);
}
</style>
