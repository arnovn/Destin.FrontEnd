import HomePage from "@/components/pages/home/HomePage.vue";
import NotFound from "@/components/pages/not-found/NotFound.vue";
import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

// Extend route meta to include authentication flags
interface CustomRouteMeta {
    requiresAuth?: boolean;
    requiresUnAuth?: boolean;
}

// Define routes with meta type
const routes: Array<RouteRecordRaw & { meta?: CustomRouteMeta }> = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomePage , meta: { requiresAuth: false }},
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
