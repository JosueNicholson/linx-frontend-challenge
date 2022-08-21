<template>
  <div>Seja bem-vindo</div>
  <Button @click-btn="state.showCreateAlbumForm = true" text="Criar Álbum" />
  <div v-if="state.showCreateAlbumForm">
    <AlbumForm />
  </div>
  <div>
    <AlbumList />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import Button from "@/components/Button.vue";
import { useStore } from "vuex";
import AlbumList from "./AlbumList.vue";
import AlbumForm from "./AlbumForm.vue";

const { hash } = useRoute();
const store = useStore();
const state = reactive({
  showCreateAlbumForm: false,
});

onMounted(() => {
  hash
    .replace("#", "")
    .split("&")
    .forEach((queryString) => {
      const splittedQueryString = queryString.split("=");
      const key = splittedQueryString[0];
      const value = splittedQueryString[1];
      window.localStorage.setItem(key, value);
    });
  store.dispatch("album/fetchAll");
});
</script>

<style lang="scss" scoped>
.input {
  display: flex;
  flex-direction: column;
  width: 300px;
}
</style>
