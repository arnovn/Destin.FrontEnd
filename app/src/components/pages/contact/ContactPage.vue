<template>
  <div>
    <NavBar />
    <main class="flex flex-col items-center mt-large mb-large">
      <h1 class="text-5xl text-color-brown mb-medium">Contact</h1>
      <ContactForm />
    </main>
  </div>
</template>

<script>
import ContactForm from '@/components/organisms/ContactForm.vue';
import NavBar from '@/components/organisms/NavBar.vue';

export default {
  name: 'ContactPage',
  components: {
    NavBar,
    ContactForm,
  },
};
</script>

<style scoped>
/* Add contact page-specific styles here */
</style>
