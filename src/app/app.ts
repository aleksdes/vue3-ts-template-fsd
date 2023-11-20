import { App, createApp } from 'vue';
import AppComponent from './App.vue';
import { piniaSetup } from './pinia';
import { setupRouter } from './router';
import './styles/styles.scss';

/**
 * Инициализация и настройка Vue приложения
 */
export const setupApp = (
  app: App = createApp(AppComponent),
) => {
  const router = setupRouter();
  const pinia = piniaSetup();

  app.use(router);
  app.use(pinia);

  return app;
};

export const app = setupApp();
