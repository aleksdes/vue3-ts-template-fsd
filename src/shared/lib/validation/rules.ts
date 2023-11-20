import { isEqual } from 'lodash-es';

/**
 * Функция проверки значения и формирование сообщения ошибки.
 */
export type Rule = (value: unknown) => (true | string);

/**
 * Проверка наличия значений
 * @param message - текст ошибки
 */
export const required = (
  message = 'Обязательное поле',
): Rule => (value) => !!value || message;

/**
 * Проверка email
 * @param message - текст ошибки
 */
export const email = (
  message = 'Не похоже на email',
):Rule => (value) => !value || (typeof value === 'string' && /[A-Za-z0-9!#$%&'*+-/=?^_`{|}~]+@[A-Za-z0-9-]+(.[A-Za-z0-9-]+)*/.test(value))
|| message;

/**
 * Совпадение значений
 */
export const equal = (
  /**
   * Сравниваемое значение
   */
  other: unknown,
) => (
  message = 'Значения не соответствуют',
) => (value: unknown) => (isEqual(other, value) || message);

/**
 * Минимальная длина
 */

export const minLength = (
  /**
   * Минимальное кол-во символов
   */
  length: number,
) => (
  message = `Длина должна быть не меньше ${length} символов`,
):Rule => (value) => !value
  || String(value).length >= length || message;

/**
 * Максимальная длина
 */
export const maxLength = (
  /**
   * Максимальное кол-во символов
   */
  length: number,
) => (
  message = `Длина должна быть не больше ${length} символов`,
):Rule => (value) => !value
  || String(value).length <= length || message;

/**
 * Разрешённые символы для пароля
 */
export const passwordCharacters = (
  message = 'Есть недопустимые символы',
): Rule => (value) => !value || (typeof value === 'string' && !/[^a-zA-Z0-9!"№;%:?*()]/.test(value)) || message;
