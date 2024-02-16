import HomeDashboardVue from '@/views/HomeDashboard.vue';
import SearchShowVue from '@/views/SearchShow.vue';
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
      component: SearchShowVue,
      props: (route) => ({ query: route.query.q })
    }
    // {
    //   path: '/search/:query',
    //   name: 'search',
    //   component: () => import('../views/SearchShow.vue')
    // }
  ]
});

export default router;
