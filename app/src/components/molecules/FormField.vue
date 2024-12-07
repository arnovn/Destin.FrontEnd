<template>
  <div class="form-field">
    <label :for="id" class="block text-color-brown">{{ label }}</label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true },
    label: { type: String, required: true },
  },
};
</script>

<style scoped>
/* Add form field-specific styles here */
</style>
