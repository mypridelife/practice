<template>
  <div ref="objRef">obj:{{ obj.foo }}</div>
  <div>obj2:{{ obj2.foo }} {{ obj2.zzz }}</div>
  <div>arr:{{ arr[0].value }}</div>
  <div>msg:{{ msg }}</div>
  <button @click="objTo">点击</button>
  <button @click="handleClick">点击2</button>
</template>

<script>
import { reactive, ref, onBeforeUpdate, onMounted, toRefs, watchEffect } from "vue"
import { effect } from "@vue/reactivity"

export default {
  setup() {
    const obj = reactive({ foo: "我是foo", zzz: 2 })
    // const obj2 = { foo: toRef(obj, 'foo') }
    const obj2 = reactive({ ...toRefs(obj) }) // 让 obj2 也是 reactive

    const arr = reactive([ref(0), ref(2), 3, 4])

    // effect(() => {
    //   console.log(obj2) // 即使 obj2.foo 是 ref，我们也不需要 .value 来取值
    //   console.log("arr", arr)
    // })

    let msg = ref("提示信息")

    const objTo = () => {
      obj.foo = obj.foo + "click"
      msg.value = msg.value + " click"
    }

    watchEffect(() => {
      console.log("obj.foo", obj.foo)
      console.log("msg", msg.value)
    })

    return { obj, obj2, objTo, arr, msg }
  },
  data() {
    return {
      test: "测试",
    }
  },
  methods: {
    handleClick() {
      console.log("this", this.$refs.objRef)
    },
  },
}
</script>
