import {
  Ref, computed, ref, watch,
} from 'vue';
import { Rule } from './rules';

/**
 * Определение свойств для настройки валидации компонента.
 * @param value - проверяемое реактивное значение.
 * @param rules - массив функций проверки.
 * @param invalid - управляемый флаг для отметки ошибки поля.
 */
export const defineValidation = (
  value: Ref<any>,
  rules: Ref<Rule[] | undefined>,
  invalid?: Ref<boolean>,
) => {
  /**
   * Сообщение об ошибке.
   */
  const validationMessage = computed((): string | undefined => {
    let message: string | undefined;
    rules.value?.find(
      (rule) => {
        const resultRule = rule(value.value);
        if (typeof resultRule === 'string') {
          message = resultRule;
          return true;
        }
        return false;
      },
    );
    return message;
  });

  /**
   * Отметка валидности
   */
  const isInvalid = computed(() => typeof validationMessage.value === 'string' || !!invalid?.value);

  /**
   * Ссылка на поле ввода
   */
  const refInput = ref<HTMLInputElement | null>(null);

  /**
   * Устанавливает состояние валидности и текст ошибки в поле ввода
   */
  const changeInvalid = (el: HTMLInputElement, v: boolean) => {
    const error = v ? validationMessage.value || 'Invalid field.' : '';
    el.setCustomValidity(error);
  };

  watch(
    [isInvalid, refInput, validationMessage],
    ([v, el]) => {
      if (el) { changeInvalid(el, v); }
    },
    { immediate: true },
  );

  return {
    validationMessage,
    refInput,
    isInvalid,
  };
};
