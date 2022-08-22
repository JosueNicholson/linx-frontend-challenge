<template>
  <p>Álbuns</p>

  <div v-for="(album, index) in albums" :key="`album-${index}`">
    <router-link :to="`/album/${album.id}`">
      <div class="card mt-5">
        <div class="card-image">
          <figure class="image is-4by3">
            <img
              v-if="!album.cover"
              src="@/assets/img/no-photo-available.png"
              alt="Placeholder image"
            />
            <img v-else src="" alt="" />
          </figure>
        </div>
        <div class="card-content">{{ album.title }}</div>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const albums = computed(() => store.getters["album/albums"]);
</script>

<style lang="scss" scoped></style>
