<template>
  <p>Álbuns</p>
  <ul>
    <li v-for="(album, index) in albums" :key="`album-${index}`">
      <router-link :to="`/album/${album.id}`">{{ album.title }}</router-link>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const albums = computed(() => store.getters["album/albums"]);
</script>

<style lang="scss" scoped></style>
