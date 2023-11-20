import { Api, ApiConfig, HttpClient } from './generatedClient';

const apiConfig: ApiConfig = {

  baseUrl: import.meta.env.VITE_API_URL,

  /**
   * Метод определения токена авторизации, запускается при каждом обращении к api
   */
  securityWorker: async () => ({
    headers: {
      Authorization: 'example-token',
    },
  }),
};

const httpClient = new HttpClient(apiConfig);

/**
 * API клиент
 */
export const apiClient = new Api(httpClient);
