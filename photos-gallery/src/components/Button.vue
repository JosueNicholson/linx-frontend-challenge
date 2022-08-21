<template>
  <button
    class="button"
    :class="dynamicClasses"
    :style="{
      width: `${props.width}px`,
    }"
    @click="$emit('click-btn')"
  >
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
  //TODO: removeria estas props caso nao fôssemos usa-las
  border: {
    type: String,
    default: "none",
  },
  width: {
    type: String,
    default: "200",
  },
  type: {
    type: String,
    default: "primary",
  },
});
const dynamicClasses = computed(() => {
  const classArr: string[] = [];
  classArr.push(props.type);
  classArr.push(`border-${props.border}`);
  return classArr;
});
</script>
<style lang="scss" scoped>
.border-none {
  border: none;
}

.primary {
  background-color: rgb(67, 131, 248);
  color: white;
}

.button {
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 4px;
}
</style>
