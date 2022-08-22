<template>
  <div>
    Adicione fotos para seu album!
    <FileInput
      class="mt-5"
      :value="imagesToUpload"
      @input:value="(newVal) => (imagesToUpload = newVal)"
    />
    <Button
      class="mt-5"
      @click-btn="saveImages"
      text="Salvar"
      :disabled="!imagesToUpload"
    />
  </div>
  <div class="images-container mt-6">
    <p>Suas fotos:</p>
    <div
      v-if="album?.images.length"
      class="is-flex is-flex-direction-row is-flex-wrap-wrap mb-5"
    >
      <div
        v-for="(image, index) in album?.images"
        :key="`alb-img-${index}`"
        class="mx-3"
      >
        <ImageCard :image="image" />
      </div>
    </div>
    <p v-else>Este album ainda não possui fotos</p>
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import FileInput from "@/components/FileInput.vue";
import Button from "@/components/Button.vue";
import { useRoute } from "vue-router";
import ImageCard from "@/components/ImageCard.vue";

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
<style lang="scss" scoped></style>
