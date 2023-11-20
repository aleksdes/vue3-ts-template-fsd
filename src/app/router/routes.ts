import { RouteRecordRaw } from 'vue-router';
import AuthPage from '@/pages/AuthPage.vue';
import ErrorPage from '@/pages/ErrorPage.vue';
import Home from '@/pages/HomePage.vue';
import DefaultLayout from '@/pages/layouts/DefaultLayout.vue';
import { RouteNames } from '@/shared/config/routeNames.ts';

const developmentRoutes = [
  {
    path: '/_sandbox',
    component: () => import('../../pages/_sandbox.vue'),
  },
];

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        name: RouteNames.home,
        path: '',
        component: Home,
      },
    ],
  },
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        name: RouteNames.auth,
        path: 'auth',
        components: {
          default: AuthPage,
        },
      },
      ...(import.meta.env.DEV ? developmentRoutes : []),
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: RouteNames.error,
    component: ErrorPage,
  },

];
