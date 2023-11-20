import type { Meta, StoryObj } from '@storybook/vue3';

import VueComponent from './UIToastContainer.vue';

const meta: Meta<typeof VueComponent> = {
  component: VueComponent,
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof VueComponent>;

export const Default: Story = {
  render: (args) => ({
    components: { VueComponent },
    setup() {
      return { args };
    },
    template: '<VueComponent v-bind="args"></VueComponent>',
  }),
};
