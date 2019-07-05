<template>
  <div class="chartBody">
    <canvas :id="eleId" />
  </div>
</template>
<script>
import F2 from '@antv/f2'

export default {
  name: 'Bingtu',
  date() {
    return {
      chart: {}
    }
  },
  props: {
    dataSource: {
      type: Array,
      default: () => {
        return [
        ]
      }
    },

    width: {
      type: String,
      default: '300'
    },
    height: {
      type: String,
      default: '260'
    }

  },
  computed: {
    eleId() {
      return `Zhe${this._uid}`
    }
  },
  watch: {
  },
  mounted() {
    this.$nextTick(() => {
      this.chart = new F2.Chart({
        id: this.eleId,
        pixelRatio: this.$devicePixelRatio // 指定分辨率

      })
      // Step 2: 载入数据源
      this.chart.source(this.dataSource, {
        percent: {
          formatter: function formatter(val) {
            return val * 100 + '%'
          }
        }
      })
      this.chart.coord('polar', {
        transposed: true,
        radius: 0.85,
        innerRadius: 0.618
      })
      this.chart.axis(false)
      this.chart.legend(false)
      this.chart.tooltip(false)
      this.chart.guide().html({
        position: ['50%', '50%'],
        html: '<div style="text-align: center;width:150px;height: 50px;">\n      <p style="font-size: 12px;color: #999;margin: 0" id="title"></p>\n      <p style="font-size: 18px;color: #343434;margin: 0;font-weight: bold;" id="money"></p>\n      </div>'
      })
      this.chart.interval().position('const*money').adjust('stack').color('type', ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14'])
      this.chart.pieLabel({
        sidePadding: 30,
        activeShape: true,
        label1: function label1(data) {
          return {
            text: '￥' + data.money,
            fill: '#343434',
            fontWeight: 'bold'
          }
        },
        label2: function label2(data) {
          return {
            text: data.type,
            fill: '#999'
          }
        },
        onClick: function onClick(ev) {
          var data = ev.data
          if (data) {
            $('#title').text(data.type)
            $('#money').text(data.money)
          }
        }
      })
    })
  }

}
</script>
<style lang="less">
.chartBody {
  background-color: rgb(255, 255, 255);
}
</style>
