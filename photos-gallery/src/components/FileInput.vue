<template>
  <input @change="test" type="file" accept="image/png, image/jpeg" />
</template>
<script lang="ts" setup>
const emit = defineEmits<{
  (e: "input:value", value: File): void;
}>();
defineProps({
  value: File,
});
function test(payload: Event) {
  const target = payload.target as HTMLInputElement;
  console.log(target.files?.[0]);
  if (target.files) emit("input:value", target.files?.[0]);
}
</script>
<style lang="scss" scoped></style>
