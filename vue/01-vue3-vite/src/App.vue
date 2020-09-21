<template>
  <ul>
    <FragmentDemo :data="[5, 3, 1, 6, 9, 4, 2, 8]" />
    <ListRef />
    <TestRefs />
  </ul>
</template>

<script>
import FragmentDemo from "./components/FragmentDemo.vue"
import ListRef from "./components/ListRef.vue"
import TestRefs from "./components/TestRefs.vue"

export default {
  name: "App",
  components: {
    FragmentDemo,
    ListRef,
    TestRefs,
  },
}
</script>
