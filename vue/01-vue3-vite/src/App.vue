<template>
  <!-- <ul>
    <FragmentDemo :data="[5, 3, 1, 6, 9, 4, 2, 8]" />
    <ListRef />
    <TestRefs />
  </ul> -->
  <div ref="myChart" class="myChart"></div>
</template>

<script>
import FragmentDemo from './components/FragmentDemo.vue'
import ListRef from './components/ListRef.vue'
import TestRefs from './components/TestRefs.vue'

import * as echarts from 'echarts'
export default {
  name: 'App',
  components: {
    FragmentDemo,
    ListRef,
    TestRefs,
  },
  mounted() {
    const myChart = echarts.init(this.$refs.myChart)
    myChart.setOption({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
        },
      ],
    })
  },
}
</script>
