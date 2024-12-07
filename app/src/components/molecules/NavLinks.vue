<template>
  <div class="sticky top-0 z-50 header">
    <a class="header-logo" href="/home">Destin.</a>
    <div class="header-nav">
      <a
        v-for="link in links"
        :key="link.label"
        :href="link.href"
        class="header-link"
      >
        {{ link.label }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: () => [
        { label: 'Login', href: 'login' },
        { label: 'Subscription', href: 'subscription' },
        { label: 'Contact', href: 'contact' },
      ],
    },
  },
};
</script>

<style></style>
