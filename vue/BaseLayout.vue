<template>
  <div class="container">
    <header>
      <slot name="header" />
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss" type="text/css"></style>
