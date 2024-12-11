import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import FloatingVue from 'floating-vue';
import './styles/globals.css';
import 'floating-vue/dist/style.css';
import {createPinia} from "pinia";

const app = createApp(App);
const pinia = createPinia();
// Use Pinia in your app
app.use(pinia);
app.use(router);
app.use(FloatingVue);
app.mount('#app');
