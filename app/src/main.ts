import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import FloatingVue from 'floating-vue';
import './styles/globals.css';
import 'floating-vue/dist/style.css';
import { createPinia } from 'pinia';
import { useAuthStore } from '@/store/auth';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(FloatingVue);

// Check auth
const authStore = useAuthStore();
authStore.fetchUser().then(() => {
  console.log('User session initialized:', authStore.user);
});

app.mount('#app');
