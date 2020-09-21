<template>
  <div
    v-for="(item, i) in list"
    :ref="
      (el) => {
        divs[i] = el
      }
    "
    :key="i"
  >
    {{ item }}
  </div>
  <div ref="root"></div>
</template>

<script>
import { ref, reactive, onBeforeUpdate, onMounted } from 'vue'

export default {
  setup() {
    const list = reactive([1, 2, 3])
    const divs = ref([])
    const root = ref(null)

    // 确保在每次变更之前重置引用
    onBeforeUpdate(() => {
      divs.value = []
    })

    onMounted(() => {
      // 在渲染完成后, 这个 div DOM 会被赋值给 root ref 对象
      console.log(root.value) // <div/>
    })

    return {
      list,
      divs,
      root,
    }
  },
}
</script>
