<template>
  <div class="container">
    <div class="content-wrapper">
      <RouterView />
    </div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>Projeto desenvolvido por Josué Nicholson</p>
      </div>
    </footer>
  </div>
</template>
<script lang="ts" setup>
import { RouterView } from "vue-router";
</script>
<style lang="scss" scoped>
.container {
  min-height: 100vh;
  .content-wrapper {
    margin: 15px 15px 0px;
    padding-bottom: 192px;
  }
  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 192px;
  }
}
</style>
