<template>
  <div class="input">
    <label>{{ label }}</label>
    <input
      @input="handleInput"
      :data="value"
      :type="type"
      :placeholder="placeholder"
    />
  </div>
</template>
<script lang="ts" setup>
const emit = defineEmits<{
  (e: "input:value", value: string): void;
}>();

defineProps({
  value: String,
  label: String,
  placeholder: String,
  type: String,
});
function handleInput(payload: Event) {
  const target = payload.target as HTMLInputElement;
  emit("input:value", target.value);
}
</script>
<style scoped lang="scss">
.input {
  display: flex;
  flex-direction: column;
  width: 300px;
}
</style>
