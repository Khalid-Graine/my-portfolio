// routes.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/home.vue';
import allProjects from './views/allProjects.vue';
const routes = [
  { path: '/', component: Home },
  { path: '/allprojects', component: allProjects}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
