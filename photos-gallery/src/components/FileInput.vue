<template>
  <div class="file has-name">
    <label class="file-label">
      <input
        @change="changeFile"
        class="file-input"
        type="file"
        name="resume"
        accept="image/png, image/jpeg"
      />
      <span class="file-cta">
        <span class="file-label"> Escolha uma foto </span>
      </span>
      <span class="file-name">
        {{ props.value?.name || "nome_da_sua_foto.jpeg" }}
      </span>
    </label>
  </div>
</template>
<script lang="ts" setup>
const emit = defineEmits<{
  (e: "input:value", value: File): void;
}>();
const props = defineProps({
  value: File,
});
function changeFile(payload: Event) {
  const target = payload.target as HTMLInputElement;
  console.log(target.files[0]);

  if (target.files) emit("input:value", target.files?.[0]);
}
</script>
<style lang="scss" scoped></style>
