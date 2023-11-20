import type { Meta, StoryObj } from '@storybook/vue3';

import VueComponent from './UIToastBar.vue';

const meta: Meta<typeof VueComponent> = {
  component: VueComponent,
  argTypes: {
    state: {
      options: ['default', 'error'],
      control: { type: 'radio' },
    },
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
  args: {
    state: 'default',
    title: 'Сотрудник добавлен в таблицу',
    description: 'У вас новая заявка на проверку № 2658',
  },
};
