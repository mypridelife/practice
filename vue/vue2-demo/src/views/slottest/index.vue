<!--
  功能: 插槽以及attrs和listener使用
  作者: gyh
  版本: v0.1
-->
<template>
  <div class="p-page">
    <custom-dialog
      :visible.sync="visibleDialog"
      @confirm="$_handleConfirm"
      @cancel="$_handleCancel"
      @open="_opened"
    >
      这是一段内容
    </custom-dialog>
    <button @click="_handleOpen">open</button>
  </div>
</template>

<script>
import CustomDialog from './components/CustomDialog'
export default {
  name: 'slottest',
  components: {
    CustomDialog
  },
  props: {},
  data() {
    return {
      visibleDialog: false
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    $_handleConfirm() {
      console.log('confirm')
    },
    $_handleCancel() {
      console.log('cancel')
    },
    _opened() {
      console.log('open')
    },
    _handleOpen() {
      this.visibleDialog = true
    }
  }
}
</script>

<style scoped lang="scss" type="text/css"></style>
