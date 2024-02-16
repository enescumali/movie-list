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
      path: '/movies/:id',
      name: 'movie-detail',
      component: () => import('../views/MovieDetail.vue')
    },
    {
      path: '/search',
      name: 'Search',
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
