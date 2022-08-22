<template>
  <div v-if="albums?.length">
    <div v-for="(album, index) in albums" :key="`album-${index}`" class="mx-3">
      <div>
        <AlbumCard :album="album" />
      </div>
    </div>
  </div>
  <p v-else>Não há albuns cadastrados</p>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "vuex";
import AlbumCard from "@/components/AlbumCard.vue";
const store = useStore();
const albums = computed(() => store.getters["album/albums"]);
</script>

<style lang="scss" scoped></style>
