import HomePage from '@/components/pages/home/HomePage.vue';
import NotFound from '@/components/pages/not-found/NotFound.vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import SubscriptionPage from '@/components/pages/subscription/SubscriptionPage.vue';
import ContactPage from '@/components/pages/contact/ContactPage.vue';
import SignInPage from '@/components/pages/authentication/SignInPage.vue';
import { AuthClient } from '@supabase/auth-js';
import PlanVacationPage from "@/components/pages/plan-vacation/PlanVacationPage.vue";

// Extend route meta to include authentication flags
interface CustomRouteMeta {
  requiresAuth?: boolean;
  requiresUnAuth?: boolean;
}

// Define routes with meta type
const routes: Array<RouteRecordRaw & { meta?: CustomRouteMeta }> = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomePage, meta: { requiresAuth: false } },
  {
    path: '/subscription',
    component: SubscriptionPage,
    meta: { requiresAuth: false },
  },
  { path: '/contact', component: ContactPage, meta: { requiresAuth: false } },
  { path: '/login', component: SignInPage, meta: { requiresAuth: false } },
  { path: '/auth/confirm', component: AuthClient },
  { path: '/plan-vacation', component: PlanVacationPage },
  { path: '/:notFound(.*)', component: NotFound }, // Catch-all route
];

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard to handle authentication
// router.beforeEach((to, from, next) => {
//     if (to.meta?.requiresAuth && !store.getters.isAuthenticated) {
//         next('/auth'); // Redirect to login page if not authenticated
//     } else if (to.meta?.requiresUnAuth && store.getters.isAuthenticated) {
//         next('/home'); // Redirect to home if already authenticated
//     } else {
//         next(); // Proceed to the route
//     }
// });

export default router;
