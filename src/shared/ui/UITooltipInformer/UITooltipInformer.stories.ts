import type { Meta, StoryObj } from '@storybook/vue3';

import VueComponent from './UITooltipInformer.vue';

const meta: Meta<typeof VueComponent> = {
  component: VueComponent,
  argTypes: {
    placement: {
      options: [undefined, 'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'],
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
    template: `
      <VueComponent v-bind="args" style="margin:auto">
        <template #action="{ onChangeShow, open }">
          <button type="button" @click="onChangeShow(!open)" >нажми на меня</button>
        </template>
        Являясь всего лишь частью общей картины, представители современных социальных <br>
        резервов набирают популярность среди определенных слоев населения, а значит, <br>
        должны быть призваны к ответу.
      </VueComponent>
    `,
  }),
};
