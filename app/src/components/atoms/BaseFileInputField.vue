<template>
  <input
    :id="id"
    type="file"
    @change="handleFileUpload"
    class="p-2 text-lg rounded-md w-full mb-medium"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    id: { type: String, required: true },
  },
  emits: ['fileChange'],
  methods: {
    handleFileUpload(event: Event) {
      const target = event.target as HTMLInputElement | null; // Ensure the event target is an HTMLInputElement
      if (target && target.files && target.files[0]) {
        this.$emit('fileChange', target.files[0]); // Emit the selected file
      }
    },
  },
});
</script>

<style scoped>
/* Add file input-specific styles here */
</style>
