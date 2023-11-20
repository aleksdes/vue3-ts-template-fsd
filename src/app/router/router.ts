import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes.ts';

export const setupRouter = () => {
  const history = createWebHistory();

  return createRouter({
    history,
    routes,
  });
};
