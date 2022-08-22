<template>
  <div class="card mt-5">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="props.image.link" alt="placeholder" class="image" />
      </figure>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item">
        <Button text="Apagar" type="is-danger" @click-btn="deleteImage" />
      </a>
    </footer>
  </div>
</template>
<script lang="ts" setup>
import { useStore } from "vuex";
import Button from "./Button.vue";
const store = useStore();
const props = defineProps({
  image: {
    type: Object,
  },
});
function deleteImage() {
  store.dispatch("image/deleteImage", props.image.id);
}
</script>
<style lang="scss" scoped>
.card {
  width: 300px;
}
</style>
