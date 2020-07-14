<template>
  <div class="p-page">
    <input v-model.lazy="msg">
    {{ msg }}
    <input v-model.trim="trim">
    {{ trim }}
    <base-layout>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>

      <template v-slot:default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>

      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </base-layout>
    <hhh>111</hhh>
  </div>
</template>

<script>
import BaseLayout from './components/BaseLayout.vue'
export default {
  components: {
    BaseLayout
  },
  props: {},
  data() {
    return {
      msg: '11',
      trim: ''
    }
  },
  computed: {},
  watch: {},
  created() {
    console.log(this)
  },
  mounted() {},
  methods: {}
}
</script>

<style scoped lang="scss" type="text/css">
</style>
