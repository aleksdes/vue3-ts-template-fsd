import type { Meta, StoryObj } from '@storybook/vue3';

import { AppLayout } from '.';

const meta: Meta<typeof AppLayout> = {
  component: AppLayout,
};

export default meta;
type Story = StoryObj<typeof AppLayout>;

export const Default: Story = {
  render: (args) => ({
    components: {
      AppLayout,
    },
    setup() {
      return { args };
    },
    template: `
      <AppLayout v-bind="args">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci distinctio doloremque dolorum ea esse
          incidunt laboriosam possimus quae sapiente suscipit. Ab blanditiis dolorem fuga illo,
          illum quibusdam repellat temporibus vel.
        </p>
      </AppLayout>
    `,
  }),
  args: {
    rail: false,
  },
};
