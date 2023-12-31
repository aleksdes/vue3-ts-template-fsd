# UIToastBar

Это небольшие всплывающие уведомления поверх интерфейса. Они не должны нести какой либо нагруженный функционал и являются только уведомлением, не путать с модальными окнами для вопросов пользователю.

## Компонент UIToastBar

Определяет внешний отдельного уведомления.

## Компонент UIToastContainer

Является контейнером, в котором будут рендерится уведомления.
Определяет расположение уведомлений и их анимации. Монтируется один раз в приложении.

## Вызов уведомления

```ts
import { useToast } from '@/shared/ui/UIToastBar'

const toast = useToast()

toast.open({
  title: 'Заголовок уведомления',
  description: 'Необязательное описание',
  state: 'error', // вариант внешнего вида
  timeout: 3e3, // время отображения в мс
})

```
