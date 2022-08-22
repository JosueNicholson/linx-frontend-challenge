<template>
  <Input
    class="mt-5"
    label="Título"
    type="text"
    placeholder="Ex: Meu Álbum"
    :value="form.title"
    @input:value="(newValue) => (form.title = newValue)"
  />
  <Input
    label="Descrição"
    type="text"
    placeholder="Ex: Álbum das férias de verão"
    :value="form.description"
  />
  <Button text="Enviar" class="mt-5 mb-5" @click-btn="handleSend" />
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
import { useStore } from "vuex";

const store = useStore();

const form = reactive({
  title: "",
  description: "",
});

function handleSend() {
  store.dispatch("album/create", form);
}
</script>
