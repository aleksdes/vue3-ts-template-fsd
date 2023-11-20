import type { Preview } from "@storybook/vue3";
import { setup } from '@storybook/vue3';
import './styles.scss';
import { setupApp } from '../src/app/app'


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

setup((app) => {
  setupApp(app)
});

export default preview;
