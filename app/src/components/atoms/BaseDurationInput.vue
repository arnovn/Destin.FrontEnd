<template>
  <div class="flex flex-col items-center space-y-4">
    <label class="text-lg text-color-brown font-bold">
      How <strong>long</strong> are you staying?
    </label>

    <div class="flex space-x-4">
      <div>
        <label for="start-date" class="block text-gray-700 text-sm mb-1"
          >From</label
        >
        <input
          id="start-date"
          type="date"
          v-model="startDate"
          class="px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-[#C97B72]"
        />
      </div>

      <!-- End Date Input -->
      <div>
        <label for="end-date" class="block text-gray-700 text-sm mb-1"
          >To</label
        >
        <input
          id="end-date"
          type="date"
          v-model="endDate"
          class="px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-[#C97B72]"
        />
      </div>
    </div>

    <!-- Submit Button -->
    <button
      @click="handleContinue"
      :disabled="!startDate || !endDate || startDate > endDate"
      class="px-6 py-2 bg-color-pink text-white rounded hover:bg-color-pink-hover disabled:bg-gray-400 disabled:cursor-not-allowed transition"
    >
      Continue
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'BaseDurationInput',
  emits: ['submit'],
  setup(_, { emit }) {
    const startDate = ref<string | null>(null);
    const endDate = ref<string | null>(null);

    const handleContinue = () => {
      emit('submit', { startDate: startDate.value, endDate: endDate.value });
    };

    return {
      startDate,
      endDate,
      handleContinue,
    };
  },
});
</script>

<style scoped>
label {
  font-weight: 600;
  color: #6b7280;
}
</style>
