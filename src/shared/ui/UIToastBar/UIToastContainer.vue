<script lang="ts">
import { computed, defineComponent } from 'vue';
import { ToastOptions, useToastModule } from './setupToast';
import UIToastBar from './UIToastBar.vue';

/**
 * Контейнер отображающий уведомления
 */
export default defineComponent({
  components: { UIToastBar },
  setup: () => {
    const toastModule = useToastModule();

    const list = computed(() => toastModule.list);

    const onClose = (item: ToastOptions) => toastModule.close(item);

    return {
      list,
      onClose,
    };
  },
});
</script>

<template>
  <div class="ui-toast-container">
    <TransitionGroup name="ui-toast-animate">
      <UIToastBar
        v-for="([item, timeout]) in list"
        :key="timeout"
        class="ui-toast-container__item"
        :description="item.description"
        :state="item.state"
        :title="item.title"
        @close="onClose(item)"
      />
    </TransitionGroup>
  </div>
</template>
<style lang="scss" scoped>
.ui-toast-container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  pointer-events: none;

  &__item {
    margin-bottom: 16px;
    pointer-events: all;
  }

  .ui-toast-animate {
    &-move,
    &-enter-active,
    &-leave-active {
      transition: all 0.5s ease;
      z-index: -1;
      pointer-events: none;
    }

    &-enter-from,
    &-leave-to {
      opacity: 0;
      transform: translateY(100%);
    }

    &-leave-active {
      position: absolute;
    }
  }
}
</style>
