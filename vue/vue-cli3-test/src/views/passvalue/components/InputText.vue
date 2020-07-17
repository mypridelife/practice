<!--
  功能: 功能描述
  作者: gyh
  版本: v0.1
-->
<template>
  <div class="p-page">
    <div>
      <input
        :value="inputValue"
        @input="$emit('update:input-value', $event.target.value)"
      />
      child:{{ inputValue }}
    </div>
    <div>
      <input :value="value" @input="$emit('input', $event.target.value)" />
      child2:{{ value }}
    </div>
    <div>
      <input type="text" v-model="originData.inputValue" />
      child3:{{ originData }}
    </div>
    <button @click="getFatherValue">get father value</button>
  </div>
</template>

<script>
export default {
  name: 'InputText',
  components: {},
  props: {
    inputValue: {
      type: String,
      default: ''
    },
    value: {
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
    }
  },
  data() {
    return {}
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    getFatherValue() {
      console.log(this.inputIndex.fatherInputValue)
    }
  },
  inject: ['inputIndex']
}
</script>

<style scoped type="text/css"></style>
