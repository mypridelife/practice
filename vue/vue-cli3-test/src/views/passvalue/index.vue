<!--
  功能: 父子组件传值测试
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
        v-model="fatherInputValue2"
        :origin-data="formData"
      />
    </div>
    <div>
      father:
      {{ fatherInputValue }}
    </div>
    <div>
      father2:
      {{ fatherInputValue2 }}
    </div>
    <div>
      father3:
      {{ formData }}
    </div>
    <button @click="handleGetValue">get value</button>
  </div>
</template>

<script>
import InputText from './components/InputText.vue'
export default {
  name: 'passvalue',
  components: {
    InputText
  },
  props: {},
  data() {
    return {
      fatherInputValue: '',
      fatherInputValue2: '',
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
  },
  provide() {
    return {
      inputIndex: this
    }
  }
}
</script>

<style type="text/css">
div {
  margin: 20px 0;
}
</style>
