<template>
  <div class="text-center">
    <!-- Heading -->
    <h1 class="text-5xl text-color-brown mb-4">
      The Simplest Solution to Plan <br />
      Your Next Vacation.
    </h1>

    <!-- Subheading -->
    <p class="text-[#79553D] text-center mb-8 max-w-lg mx-auto">
      Effortlessly create, customize, and collaborate on your dream itinerary
      with personalized recommendations and seamless planning features.
    </p>
    <div class="flex justify-center">
      <SelectAndSubmit :options="['aa']"></SelectAndSubmit>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import SelectAndSubmit from '@/components/molecules/LocationSearch.vue';

export default defineComponent({
  components: { SelectAndSubmit },
});
</script>
