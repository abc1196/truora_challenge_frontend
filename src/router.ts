import Vue from 'vue';
import Router from 'vue-router';
import List from '@/views/List.vue';
import Search from '@/views/Search.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'search',
      component: Search,
    },
    {
      path: '/domains',
      name: 'list',
      component: List,
    },
  ],
});
