<template>
  <div>
    <FileInput
      :value="imagesToUpload"
      @input:value="(newVal) => (imagesToUpload = newVal)"
    />
    <Button @click-btn="saveImages" text="Salvar" />
  </div>
  <div class="images-container">
    <div v-for="(image, index) in album?.images" :key="`alb-img-${index}`">
      <img :src="image.link" alt="" class="album-image" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import FileInput from "@/components/FileInput.vue";
import Button from "@/components/Button.vue";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();
const album = computed(() => store.getters["album/album"]);
const imagesToUpload = ref();
function saveImages() {
  store.dispatch("image/upload", imagesToUpload.value);
}
onMounted(() => {
  store.dispatch("album/fetchById", route.params.id);
});
</script>
<style lang="scss" scoped>
.images-container {
  display: flex;
  .album-image {
    width: 200px;
  }
}
</style>
