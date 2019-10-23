<template>
  <div ref="eleid" class="chartBody">
    <canvas :id="eleId"/>
    <div style="text-align: center;width: 100px;height: 72px;vertical-align: middle;">
      <!-- <p id="number" ref="number" style="font-size: 28px;margin: 10px 10px 5px;font-weight: bold;"/>
      <p id="name" ref="name" style="font-size: 12px;margin: 0;"/> -->
    </div>
  </div>
</template>
<script>
const F2 = require('@antv/f2/lib/index') // 引入 F2
require('@antv/f2/lib/interaction/pie-select') // 引入饼图选中交互

export default {
  name: 'Bingtu',
  date() {
    return {
      chart: {}
    }
  },
  props: {
    data: {
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
        pixelRatio: window.devicePixelRatio,
        width: this.width,
        height: this.height
      })
      this.chart.source(this.data, {
        percent: {
          formatter: function formatter(val) {
            return val * 100 + '%'
          }
        }
      })
      this.chart.legend({
        position: 'right',
        marker: 'square'
      })
      this.chart.tooltip(false)
      this.chart.coord('polar', {
        transposed: true,
        radius: 0.9,
        innerRadius: 0.6
      })
      this.chart.axis(false)
      this.chart.interval().position('a*percent').color('name', ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0']).adjust('stack').style({
        lineWidth: 1,
        stroke: '#fff',
        lineJoin: 'round',
        lineCap: 'round'
      })

      this.chart.guide().html({
        position: ['50%', '50%'],
        html: '<div style="text-align: center;width: 100px;height: 72px;vertical-align: middle;">' +
          '<p id="number"  style="font-size: 28px;margin: 10px 10px 5px;font-weight: bold;"></p>' +
          '<p id="name"  style="font-size: 12px;margin: 0;"></p>' + '</div>'
      })
      this.chart.render()

      this.chart.interaction('pie-select', {
        animate: {
          duration: 300,
          easing: 'backOut'
        },
        defaultSelected: {
          name: '机器之血',
          percent: 0.18,
          a: '1'
        },
        onEnd: function onEnd(ev) {
          const { data, shapeInfo, shape, selected } = ev

          if (shape) {
            if (selected) {
            //   $('#number').css('color', shapeInfo.color)
            //   $('#number').text(data.percent * 100 + '%')
            //   $('#name').text(data.name)

              document.getElementById('number').style.color = shapeInfo.color
              document.getElementById('number').innerHTML = data.percent * 100 + '%'
              document.getElementById('name').innerHTML = data.name
            //   this.$refs.number.css('color', shapeInfo.color)
            //   this.$refs.number.text(data.percent * 100 + '%')
            //   this.$refs.name.text(data.name)
            } else {
            //   this.$refs.number.text('')
            //   this.$refs.name.text('')
              document.getElementById('number').innerHTML('')
              document.getElementById('name').innerHTML('')
            }
          }
        }
      })
    })
  },
  methods: {
  }
}
</script>
<style lang="less">
.chartBody {
  background-color: rgb(255, 255, 255);
}
</style>
