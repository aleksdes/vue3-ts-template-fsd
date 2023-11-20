import { useMediaQuery } from '@vueuse/core';

/**
 * Список устройств, где значение элемента это максимальная ширина устройства.
 */
export enum DeviceType {
  mobile = 320,
  tablet = 768,
  desktop = 1440,
}

function query(property: 'width' | 'max-width' | 'min-width', value: number) {
  return useMediaQuery(`(${property}:${value}px)`);
}

/**
 * Сравнивает что ширина девайса больше либо равна переданому значению.
 * @param device Флаг типа устройства
 * @return ref<boolean> Ref<true> Реактивный boolean, результат сравнения.
 */
export function isGreater(device: DeviceType) {
  return query('min-width', device);
}

/**
 * Сравнивает что ширина девайса меньше либо равна переданому значению.
 * @param device Флаг типа устройства
 * @return ref<boolean> Ref<true> Реактивный boolean, результат сравнения.
 */
export function isSmaller(device: DeviceType) {
  return query('max-width', device);
}

/**
 * Сравнивает что ширина девайса точно равна переданому значению.
 * @param device Флаг типа устройства
 * @return ref<boolean> Ref<true> Реактивный boolean, результат сравнения.
 */
export function is(device: DeviceType) {
  return query('width', device);
}
