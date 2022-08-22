<template>
  <button class="button" :class="dynamicClasses" @click="$emit('click-btn')">
    {{ props.text }}
  </button>
</template>
<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "is-primary",
  },
});
const dynamicClasses = computed(() => {
  const classArr: string[] = [];
  classArr.push(props.type);
  return classArr;
});
</script>
