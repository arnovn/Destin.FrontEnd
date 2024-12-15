<template>
  <input
    :id="id"
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="onInput"
    class="p-2 text-lg rounded-md w-full shadow-md"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    id: { type: String, required: true },
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },
    modelValue: { type: [String, Number], required: true },
  },
  emits: ['update:modelValue'],
  methods: {
    onInput(event: Event) {
      const target = event.target as HTMLInputElement | null; // Type assertion
      if (target) {
        this.$emit('update:modelValue', target.value);
      }
    },
  },
});
</script>

<style scoped>
/* Add input-specific styles here */
</style>
