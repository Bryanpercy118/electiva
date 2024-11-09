import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Alcance from '../views/Alcance.vue';
import Propuesta from '../views/Propuesta.vue';
import Taller from '../views/Taller.vue';
import Tecnologia from '../views/Tecnologia.vue';
import Curricular from '../views/Curricular.vue';
const routes = [
  { path: '/',name: 'Home',component: Home},
  { path: '/alcance', name: 'Alcance', component: Alcance },
  { path: '/propuesta', name: 'Propuesta', component: Propuesta },
  { path: '/taller', name: 'Taller', component: Taller },
  { path: '/tecnologia', name: 'Tecnologia', component: Tecnologia },
  { path: '/curricular', name: 'Curricular', component: Curricular },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
