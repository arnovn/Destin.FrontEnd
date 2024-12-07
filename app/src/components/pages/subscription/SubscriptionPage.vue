<template>
  <div>
    <NavBar />
    <main class="flex flex-col items-center mt-large">
      <h1 class="text-5xl text-color-brown">Choose your plan</h1>
      <p class="text-lg text-color-brown mb-medium">
        And start to create your next dream itinerary.
      </p>
      <div class="flex gap-8">
        <SubscriptionTier
          title="Free tier"
          price="$ 0"
          :features="['Generate 1 itinerary', 'View-only access']"
          :isFree="true"
        />
        <SubscriptionTier
          title="Premium tier"
          price="$ 5/month"
          :features="[
            'Generate multiple itineraries',
            'Access to customization features',
            'Collaborate with up to 5 people',
            'Offline access to itineraries',
          ]"
        />
        <SubscriptionTier
          title="Premium tier"
          price="$ 50/year"
          :features="[
            'Generate multiple itineraries',
            'Access to customization features',
            'Collaborate with up to 5 people',
            'Offline access to itineraries',
          ]"
        />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '@/components/organisms/NavBar.vue';
import SubscriptionTier from '@/components/molecules/SubscriptionTier.vue';

export default defineComponent({
  name: 'SubscriptionPage',
  components: { NavBar, SubscriptionTier },
});
</script>

<style scoped>
/* Add styles here for subscription-container, subscription-title, etc. */
</style>
