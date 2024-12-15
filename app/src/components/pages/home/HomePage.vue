<template>
  <div>
    <NavBar />
    <LandingSection class="mt-large" />
  </div>
</template>

<script lang="ts">
import NavBar from '@/components/organisms/NavBar.vue';
import LandingSection from '@/components/organisms/LandingSection.vue';

export default {
  components: { LandingSection, NavBar },
};
</script>

<style></style>
