import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/AppHome.vue'),
  },
  {
    path: '/user/:id',
    name: 'UserForm',
    component: () => import('../views/UserForm.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;