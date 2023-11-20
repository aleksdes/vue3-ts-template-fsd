/// <reference types="vite/client" />

interface ImportMetaEnv {

  /**
   * Адрес API
   */
  readonly VITE_API_URL: string

  /**
   * Проверять типы в ответах API
   */
  readonly VITE_API_TYPE_CHECKING: string

}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
