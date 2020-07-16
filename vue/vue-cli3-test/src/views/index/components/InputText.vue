<!--
  功能: 功能描述
  作者: gyh
  版本: v0.1
-->
<template>
  <div class="p-page">
    <div>
      <input
        type="text"
        :value="inputValue"
        @input="$emit('update:input-value', $event.target.value)"
      />
      child:{{ inputValue }}
    </div>
    <div>
      <input type="text" v-model="originData.inputValue" />
      child2:{{ originData }}
    </div>

    <!-- <label for="input1"> <input type="checkbox" v-model="currentValue" value="paobu" />跑步 </label>
    <label for="input2"> <input type="checkbox" v-model="currentValue" value="daqiu" />打球 </label>

    <label for="input3">
      <input type="checkbox" v-model="currentValue" value="dengshan" />登山
    </label>

    <label for="input4">
      <input type="checkbox" v-model="currentValue" value="youyong" />游泳
    </label> -->

    <!-- <div v-for="(item, index) in options" :key="index">
      <label :for="'input' + index">
        <input :id="'input' + index" type="checkbox" v-model="currentValue" :value="item.value" />
        {{ item.label }}
      </label>
    </div>
    {{ currentValue }} -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components: {},
  props: {
    inputValue: {
      type: String,
      default: ''
    },
    originData: {
      type: Object,
      default: () => {
        return {
          inputValue: ''
        }
      }
    },
    currentValue: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      options: [
        {
          value: 'paobu',
          label: '跑步'
        },
        {
          value: 'daqiu',
          label: '打球'
        },
        {
          value: 'dengshan',
          label: '登山'
        },
        {
          value: 'youyong',
          label: '游泳'
        }
      ]
    }
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style scoped type="text/css"></style>
