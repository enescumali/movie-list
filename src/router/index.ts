import HomeDashboardVue from '@/views/HomeDashboard.vue';
import ShowSearchVue from '@/views/ShowSearch.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeDashboardVue
    },
    {
      path: '/shows/:id',
      name: 'show-detail',
      component: () => import('../views/ShowDetail.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: ShowSearchVue,
      props: (route) => ({ query: route.query.q })
    }
  ],
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
