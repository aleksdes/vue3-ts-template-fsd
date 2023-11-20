# Валидация форм и полей ввода

## Как использовать в формах

Создаём стандартную форму HTML5, для отправки используем событие **onSubmit**. Событие не будет инициировано если у полей в форме есть ошибки.

```vue

<template>
  <form @submit.prevent="onSubmit">

    <UIInput :rules="rules" ... />

    <button type="submit">Отправить</button>

  </form>
</template>
<script>
import {required, email} from '@/shared/lib/validation'

const rules = [ required("Это обязательное поле"), email("Не похоже на email") ]

const onSubmit = () => { 
  // ...
  }
</script>
```

## rules.ts

Правила валидации, принимают значение. Если проходит валидацию возвращают `true`, иначе сообщение ошибки.

## defineValidation

Определение методов и параметров для настройки валидации в компонентах полей, использовать только в UI.
