# Набор API для media запросов
API основано на модуле useMediaQuery библиотеки VueUse (https://vueuse.org/core/useMediaQuery/#usemediaquery).

### Набор методов
#### Enum DeviceType 
```ts
interface DeviceType extends Record<string, number> {}
```
Enum перечисление, где каждое значение элемента соответствует минимальной ширине экрана 
для устройства
Доступные элементы:
- `mobile` = 320
- `tablet` = 768
- `desktop` = 1440

> Все методы проводят сравнения в пикселях (px)

#### Метод is()
Сопоставляет размер экрана девайса в точности, то есть по принципу 
`deviceWidth === value`, или выполняет запрос вида:
```scss
@media (width: $value) {}
```

Возвращает реактивную ссылку на значение `Ref<boolean>`.
```ts
  /**
 * @param `device` - Таргет устройства
 * @return Ref<boolean> `true` если размер экрана девайса точно соответствует
 */
interface is {
  (device: DeviceType): Ref<boolean>
}
```

#### Метод isGreater()
Проверяет, что ширина экрана больше либо равна переданному значению,
выполняет запрос вида:
```scss
@media (min-width: $value) {}
```

Возвращает реактивную ссылку на значение `Ref<boolean>`.
```ts
  /**
 * @param `device` - Таргет устройства
 * @return Ref<boolean> `true` если размер экрана девайса соответствует
 */
interface isGreater {
  (device: DeviceType): Ref<boolean>
}
```

#### Метод isSmaller()
Проверяет, что ширина экрана меньше либо равна переданному значению,
выполняет запрос вида:
```scss
@media (max-width: $value) {}
```

Возвращает реактивную ссылку на значение `Ref<boolean>`.
```ts
  /**
 * @param `device` - Таргет устройства
 * @return Ref<boolean> `true` если размер экрана девайса соответствует
 */
interface isSmaller {
  (device: DeviceType): Ref<boolean>
}
```

