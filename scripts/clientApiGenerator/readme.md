# Сценарий генерации клиента API

Простой генератор клиента API из документации OpenAPI.

- Получает схему по адресу и переменной `API_DOCK`
- Генерирует типы и клиента в `src/shared/api/generatedClient.ts`
- Генерирует функции проверки типов в `src/shared/api/generatedClient.guard.ts`

Сгенерированный клиент проверяет типы полученных файлов. Эта проверка управляется переменной `VITE_API_TYPE_CHECKING`.

Папка `template` содержит шаблоны для генерации. Шаблон взят стандартный, с минимальными изменениями для добавления проверки типов.
