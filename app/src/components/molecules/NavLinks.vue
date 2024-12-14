<template>
  <div class="sticky top-0 z-50 header">
    <a class="header-logo" href="/home">Destin.</a>
    <div class="header-nav">
      <a
        v-for="link in dynamicLinks"
        :key="link.label"
        :href="link.href"
        @click="handleClick($event, link)"
        class="header-link"
      >
        {{ link.label }}
      </a>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '@/store/auth';

export default {
  computed: {
    isAuth() {
      const authStore = useAuthStore();
      return authStore.isAuthenticated;
    },
    dynamicLinks() {
      return this.isAuth
        ? [
            { label: 'Subscription', href: 'subscription' },
            { label: 'Contact', href: 'contact' },
            {
              label: 'Logout',
              href: 'logout',
              onClick: async () => await this.logout(),
            },
          ]
        : [
            { label: 'Subscription', href: 'subscription' },
            { label: 'Contact', href: 'contact' },
            { label: 'Login', href: 'login' },
          ];
    },
  },
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
  methods: {
    async logout() {
      console.log('try logout');
      const authStore = useAuthStore();
      await authStore.signOut();
      this.$router.push('/login');
    },
    handleClick(event, link) {
      if (link.onClick) {
        event.preventDefault(); // Prevent default navigation
        link.onClick(); // Execute custom logic
      }
    },
  },
};
</script>

<style></style>
