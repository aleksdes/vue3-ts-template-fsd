<script lang="ts">
import { ExtractPublicPropTypes, PropType, defineComponent } from 'vue';
import { CancelIcon, SeenCheckmarkIcon, ErrorTriangleIcon } from '../icons';

const props = {
  /**
   * Отображаемый вид уведомления
   */
  state: {
    type: String as PropType<'default' | 'error'>,
    default: 'default',
  },
  title: {
    type: String,
    default: undefined,
  },
  description: {
    type: String,
    default: undefined,
  },
};

export type Props = ExtractPublicPropTypes<typeof props>;

export default defineComponent({
  components: { CancelIcon, SeenCheckmarkIcon, ErrorTriangleIcon },
  props,
  emits: {
    close: () => true,
  },
});
</script>

<template>
  <div
    class="ui-toast-bar"
    :class="{
      'ui-toast-bar_error': state === 'error',
    }"
  >
    <div class="ui-toast-bar__icon">
      <SeenCheckmarkIcon v-if="state === 'default'" />
      <ErrorTriangleIcon v-else-if="state === 'error'" />
    </div>
    <div class="ui-toast-bar__content">
      <div v-if="title" class="ui-toast-bar__title">
        {{ title }}
      </div>
      <div v-if="description" class="ui-toast-bar__description">
        {{ description }}
      </div>
    </div>
    <button type="button" class="ui-toast-bar__cancel" @click="$emit('close')">
      <CancelIcon />
    </button>
  </div>
</template>

<style lang="scss" scoped>
@use "../typography";

.ui-toast-bar {
  display: flex;
  column-gap: 9px;

  padding: 10px;
  align-items: center;
  border-radius: 100px;

  color: var(--base-gray-white, #ffffff);
  background: var(--base-blue-400, #0d0d22);

  /* Default */
  box-shadow: var(--default-shadow);

  &__content {
    display: flex;
    flex-direction: column;
    justify-items: center;
    flex-grow: 1;
    flex-shrink: 0;
  }

  &__title {
    @extend %p5;

    grid-area: title;

    flex-grow: 1;
  }

  &__description {
    @extend %p3;
    grid-area: description;
  }

  &__cancel,
  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    min-width: 40px;
    height: 40px;
    border-radius: 20px;
    flex-shrink: 1;
  }

  &__icon {
    background-color: var(--base-blue-350, #233048);

    grid-area: icon;
  }

  &__cancel {
    grid-area: cancel;

    &:hover {
      background-color: var(--base-blue-350, #233048);
    }
  }

  &_error {
    background-color: var(--additional-error-2, #f42e42);

    .ui-toast-bar__icon {
      background-color: #ff5566;
    }

    .ui-toast-bar__cancel {
      &:hover {
        background-color: #ff5566;
      }
    }
  }
}
</style>
