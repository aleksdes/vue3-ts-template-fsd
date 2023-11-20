<script lang="ts">
import {
  PropType,
  SlotsType, defineComponent, reactive,
} from 'vue';

type OnChangeShow = (open:boolean)=>void;

type Vertical = 'top' | 'bottom';
type Horizontal = 'left' | 'right';

type Placement = Vertical | `${Vertical}-${Horizontal}` | Horizontal;

export default defineComponent({
  slots: Object as SlotsType<{
    action: {
      onChangeShow: OnChangeShow,
      open: boolean,
    },
    default: { open:boolean }
  }>,
  props: {
    placement: {
      type: String as PropType<Placement>,
      default: undefined,
    },
  },

  setup: () => {
    const state = reactive<{ open:boolean | undefined }>({ open: undefined });

    const onChangeShow:OnChangeShow = (open) => {
      state.open = open;
    };
    return {
      onChangeShow,
      state,
    };
  },
});
</script>

<template>
  <div class="ui-tooltip-informer" :class="`ui-tooltip-informer_${placement}`">
    <slot name="action" :on-change-show="onChangeShow" :open="state.open" />

    <p v-if="state.open" class="ui-tooltip-informer__content">
      <slot />
    </p>
  </div>
</template>

<style lang="scss" scoped>
@use "../typography";

.ui-tooltip-informer {
  position: relative;
  width: fit-content;
  --margin: 20px;

  &__content {
    position: absolute;
    display: inline-flex;
    padding: 24px;
    margin: var(--margin);
    border-radius: 8px;
    z-index: 1;
    width: max-content;

    @extend %p3;

    color: var(--base-gray-300, #8c93a8);
    background: var(--base-gray-0, #fcfcfc);

    box-shadow: var(--default-shadow);
  }

  &_left,
  &_top,
  &_bottom,
  &_right {
    .ui-tooltip-informer__content::before {
      content: "";
      display: block;
      position: absolute;
      border: 8px solid var(--base-gray-0, #fcfcfc);
      border-top-color: transparent;
      border-left-color: transparent;
    }
  }

  &_top-left {
    .ui-tooltip-informer__content {
      right: 100%;
      bottom: 100%;
    }
  }

  &_left {
    .ui-tooltip-informer__content {
      right: 100%;
      top: 50%;
      transform: translateY(calc(-50% - var(--margin)));
    }

    .ui-tooltip-informer__content::before {
      transform: translateY(-50%) rotate(-45deg);
      top: 50%;
      right: -7px;
    }
  }

  &_top {
    .ui-tooltip-informer__content {
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
    }

    .ui-tooltip-informer__content::before {
      transform: translateX(-150%) rotate(45deg);
      bottom: -7px;
      left: 50%;
    }
  }

  &_top-right {
    .ui-tooltip-informer__content {
      left: 100%;
      bottom: 100%;
    }
  }

  &_bottom-left {
    .ui-tooltip-informer__content {
      right: 100%;
      top: 100%;
    }
  }

  &_bottom {
    .ui-tooltip-informer__content {
      left: 50%;
      top: 100%;
      transform: translateX(-50%);
    }

    .ui-tooltip-informer__content::before {
      transform: translateX(-150%) rotate(225deg);
      top: -7px;
      left: 50%;
    }
  }

  &_bottom-right {
    .ui-tooltip-informer__content {
      left: 100%;
      top: 100%;
    }
  }

  &_right {
    .ui-tooltip-informer__content {
      left: 100%;
      top: 50%;
      transform: translateY(calc(-50% - var(--margin)));
    }

    .ui-tooltip-informer__content::before {
      transform: translateY(-50%) rotate(135deg);
      top: 50%;
      left: -7px;
    }
  }
}

</style>
