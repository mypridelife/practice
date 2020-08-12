<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input placeholder="我是红色的！" />
  </div>
</template>

<style scoped lang="scss" type="text/css">
h1 {
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
input::placeholder {
  color: red;
  font-size: 1.2em;
  font-style: italic;
}
</style>
