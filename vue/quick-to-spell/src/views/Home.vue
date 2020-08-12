<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="m-hello">hello world</div>
    <hello-world />
    <div class="element">hello world3</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: { HelloWorld }
}
</script>

<style scoped lang="scss" type="text/css">
.m-hello {
  font-size: 32px;
}
.element {
  width: 400px;
  height: 400px;
  /* rebasing path by new destination */
  background: url('../assets/logo.png');
}
</style>
