<template>
  <div
    :class="[
      'p-6 border rounded-md shadow-md text-left w-80 flex flex-col',
      isFree ? 'bg-custom-blue' : '',
    ]"
  >
    <h2 class="text-xl font-bold mb-2">{{ title }}</h2>
    <p class="text-lg mb-4">{{ price }}</p>
    <ul class="list-disc list-inside mb-4">
      <li v-for="(feature, index) in features" :key="index">{{ feature }}</li>
    </ul>
    <div v-if="!isFree" class="mt-auto">
      <button class="mt-4 p-2 bg-color-pink text-white rounded-md self-start">
        Get started
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'SubscriptionTier',
  props: {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    features: {
      type: Array as PropType<string[]>,
      required: true,
    },
    isFree: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped>
/* Add styles here for tier-card, tier-button, etc. */
</style>
