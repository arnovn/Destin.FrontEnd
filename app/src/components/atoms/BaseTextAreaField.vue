<template>
  <textarea
    :id="id"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="p-2 text-lg rounded-md w-full h-32 resize-none shadow-md mb-4"
  ></textarea>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true },
    placeholder: { type: String, default: '' },
    modelValue: { type: String, required: true },
  },
  emits: ['update:modelValue'],
};
</script>

<style scoped>
/* Add textarea-specific styles here */
</style>
