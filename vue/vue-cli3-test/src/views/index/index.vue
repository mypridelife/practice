<!--
  功能: 功能描述
  作者: gyh
  版本: v0.1
-->
<template>
  <div class="p-page">
    <template v-for="item in 5">
      <div :key="item">template{{ item }}</div>
    </template>
    <div class="test1">
      最佳
      <input-text
        :input-value.sync="fatherInputValue"
        :origin-data="formData"
      />
    </div>
    <div>
      father:
      {{ fatherInputValue }}
    </div>
    <div>
      father2:
      {{ formData }}
    </div>
    <button @click="handleGetValue">get value</button>
  </div>
</template>

<script>
import InputText from './components/InputText.vue'
export default {
  components: {
    InputText
  },
  props: {},
  data() {
    return {
      fatherInputValue: '',
      formData: {
        inputValue: ''
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleGetValue() {
      console.log(this.fatherInputValue)
      console.log(this.formData)
    }
  }
}
</script>

<style type="text/css">
div {
  margin: 20px 0;
}
</style>
