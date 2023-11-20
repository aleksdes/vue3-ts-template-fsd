# Шаблон-сборка для проектов Vue3 ts

Первоначальная сборка для проектов на vue3 ts

## Рекомендации настройки IDE

<details>
<summary>
Для WebStorm
</summary>

### Настройка подсветки линтеров

#### File | Settings | Languages & Frameworks | Node.js

Выберите путь к Node.js

#### File | Settings | Languages & Frameworks | JavaScript | Code Quality Tools | ESLint

Выбираем автоматическую конфигурацию и добавляем **vue** в **Run of files**, если отсутствует.
Отключаем **fix on save**, за него отвечает vite.

#### File | Settings | Languages & Frameworks | Style Sheets | Stylelint

Включаем галочкой **Enable**.
Добавляем **vue** в **Run of files**, если отсутствует.

</details>

<details>
<summary>
Для VSCode
</summary>
- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
</details>

## Сборка

### Необходимые зависимости

- **[Node.js](https://nodejs.org/en)** версии не меньше **18.17**
- **[PNPm](https://pnpm.io/)** версии не меньше **8.7**

Описание **переменных окружения** в `.env.defaults`, для переопределения создайте локальный `.env.local`.

### Основные команды

- `pnpm install` установка зависимостей
- `pnpm run dev` сборка приложения в режиме разработчика
- `pnpm run build` сборка приложения в режиме производства
- `pnpm run generate-api` [генерация клиента API](scripts/clientApiGenerator/readme.md) из документации OpenAPI
- `pnpm run storybook` сборка storybook в режиме разработчика с отслеживанием изменений
- `pnpm run storybook-build` сборка storybook
- `pnpm run test` запуск тестов
- `pnpm run test:dev` запуск тестов в режиме разработки с отслеживанием

## Манифест для разработчиков

- Нормально делай - нормально будет
- Соблюдаем архитектуру [Feature-Sliced Design](./src/readme.md)
- Каждая сущность должна сопровождаться минимальным описанием того что она из себя представляет.
Например, в **readme.md** если это каталог или **комментарием** в начале файла.
- Добавляйте комментарий к методам и переменным, у которых название не может описать всю суть.
- Обязательно должен быть **\*.stories.ts** файл у каждого компонента.
- Не откладываем написание тестов. Тест пишем либо до добавления метода/параметра/события, либо сразу после добавления, не откладываем на завершение реализации функционала.
- Не тестируем сторонние библиотеки и поведение браузера. Мокаем всё что импортируем из _node_modules_.
- Сценарии тестирования в **\*.test.ts** создаём рядом с тестируемыми файлами.
