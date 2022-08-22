<template>
  <div class="card mt-5">
    <router-link :to="`/album/${props.album.id}`">
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            v-if="!state.cover"
            src="@/assets/img/no-photo-available.png"
            alt="Placeholder image"
          />
          <img v-else :src="state.cover" alt="" />
        </figure>
      </div>
      <div class="card-content">{{ props.album.title }}</div>
    </router-link>
    <footer class="card-footer">
      <a class="card-footer-item">
        <Button text="Apagar" type="is-danger" @click-btn="deleteAlbum" />
      </a>
    </footer>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, reactive } from "vue";
import { get } from "@/services/axios-client";
import { useStore } from "vuex";
import Button from "@/components/Button.vue";
const store = useStore();
const state = reactive({
  cover: null,
});
const props = defineProps({
  album: {
    type: Object,
  },
});

function deleteAlbum() {
  store.dispatch("album/deleteAlbum", props.album.id);
}

onMounted(async () => {
  if (props.album.cover) {
    const { data: res } = await get(`/image/${props.album.cover}`);
    state.cover = res.data.link;
  }
});
</script>

<style lang="scss" scoped>
.card {
  width: 300px;
}
</style>
