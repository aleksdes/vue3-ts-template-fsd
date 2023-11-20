import { defineStore } from 'pinia';
import { reactive, toRefs } from 'vue';
import type { Props } from './UIToastBar.vue';

export interface ToastOptions extends Props {
  timeout?: number;
}

export const useToastModule = defineStore('toast', () => {
  const state = reactive({
    list: new Map<ToastOptions, number>(),
  });

  const open = (opt: ToastOptions) => {
    const ms = (opt.timeout && opt.timeout > 0) ? opt.timeout : 5e3;

    const timeout = window.setTimeout(() => {
      state.list.delete(opt);
    }, ms);

    state.list.set(opt, timeout);
  };

  const close = (opt: ToastOptions) => {
    window.clearTimeout(state.list.get(opt));
    state.list.delete(opt);
  };

  return {
    open,
    close,
    ...toRefs(state),
  };
});

interface Toast {
  /**
   * Открыть уведомление
   */
  open:(opt: ToastOptions) => void
}

/**
 * Модуль коротких уведомлений поверх приложения.
 */
export const useToast = (): Toast => {
  const toastModule = useToastModule();

  return {
    open: toastModule.open,
  };
};
