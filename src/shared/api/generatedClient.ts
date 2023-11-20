import * as guard from "./generatedClient.guard";
/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
 * Запрос Login
 * Запрос на вход в систему
 * @see { isLoginDto } ts-auto-guard:type-guard
 */
export interface LoginDto {
  /**
   * email
   * Email пользователя для входа
   * @example "ivan.ivanov@example.test"
   */
  email: string;
  /**
   * password
   * Пароль пользователя
   * @example "Password77!"
   */
  password: string;
}

/**
 * Баннер
 * Баннер на приветственной странице
 * @see { isBannerDto } ts-auto-guard:type-guard
 */
export interface BannerDto {
  /**
   * name
   * Название баннера
   * @example ""
   */
  name: string;
  /**
   * content
   * Детальный текст баннера
   * @example ""
   */
  content: string;
  /**
   * date_start
   * дата начала показа баннера
   * @example "10.09.2023"
   */
  date_start?: string;
  /**
   * size
   * размер баннера, small или big
   * @example "small"
   */
  size?: string;
  /**
   * color
   * цвет баннера, black или white
   * @example "white"
   */
  color?: string;
  /**
   * active
   * активность баннера
   * @example "true"
   */
  active?: boolean;
  /**
   * sort
   * сортировка баннера
   * @example "100"
   */
  sort?: number;
  /**
   * date_end
   * дата окончания показа баннера
   * @example "10.09.2023"
   */
  date_end?: string;
}

/**
 * Ответ Login
 * Ответ при успешном входе в систему
 * @see { isLoginSuccessfulResource } ts-auto-guard:type-guard
 */
export interface LoginSuccessfulResource {
  /**
   * token_type
   * Тип токена для авторизации
   * @example "Bearer"
   */
  token_type?: string;
  /**
   * expires_in
   * Время жизни токена
   * @example 31536000
   */
  expires_in?: number;
  /**
   * access_token
   * Токен для авторизации
   * @example "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc0MDc1YzhlMzkzZDE5YTIwZDk5YTc5MjlkZGI5MjlkYjQzN2RjMDNhNjY4ZmM4ZTUyZmI3ZjRiMDY4ZTBjYmJkYzY4YWI3MDkyYWMyOTk4In0"
   */
  access_token?: string;
  /**
   * refresh_token
   * Токен для обновления
   * @example "def502009b8b24b62eacb618172846eee036b135eda5ba8516af270c40d8bf4dc25043277c4ed91636981c841a5558d821b34e4c6620d20b78b62859e66f7dfe478d7c603cb747527e6cfde6a3ae0eec8fb2459714ba695f787cdf485cca1212779b17f0aaa729e6e0897633dc45eeebdd065a3ee477be28c47334c5f0fa895ad7f85f1d2ebabcec1e9536afc0713073d1c650a57c06c1d3a6a54ff8702f9afd5d8ae6da12562184ffa7e6a27fb4f6b054c25f396b97e0588059f2d18ef1cf119ec1994b64fe4be42860fb8ae52b490752079e2edee22c73838c6dfa4645cb1f4ae736f363e5111c447c093939713595d24695b963b4da2d5c75c6259e30aaade7034fc718d8cf2d9eeb0fe11524b527b2b0ac7175c6e9a6a41150327fbdc6c472c01149a5bff2e66cf9bff0f5e80a4fac1927c70b191bea4b874000fb94ea3b2bea878d93a0ed40d40cfd078532862baeac0e84781a4e973b3c2a7afeadc504eb"
   */
  refresh_token?: string;
}

/**
 * Объект баннера
 * Баннеры на приветственной странице
 * @see { isBannerResource } ts-auto-guard:type-guard
 */
export interface BannerResource {
  /**
   * id
   * id баннера
   * @example "1"
   */
  id?: number;
  /**
   * name
   * Название баннера
   * @example "Баннер"
   */
  name?: string;
  /**
   * content
   * Детальный текст баннера
   * @example "Детальный текст"
   */
  content?: string;
  /**
   * size
   * размер баннера
   * @example "small"
   */
  size?: string;
  /**
   * color
   * Цвет баннера
   * @example "white"
   */
  color?: string;
}

/** @see { isLoginCreateData } ts-auto-guard:type-guard */
export interface LoginCreateData {
  /**
   * HTTP статус ответа
   * @example 200
   */
  status?: number;
  /**
   * Признак успешного окончания операции
   * @example true
   */
  success?: boolean;
  /** Массив данных ответа */
  data?: LoginSuccessfulResource;
}

/** @see { isLogoutListData } ts-auto-guard:type-guard */
export type LogoutListData = any;

/** @see { isBannersCreateData } ts-auto-guard:type-guard */
export interface BannersCreateData {
  /**
   * HTTP статус ответа
   * @example 200
   */
  status?: number;
  /**
   * Признак успешного окончания операции
   * @example true
   */
  success?: boolean;
  /** Массив данных созданного баннера */
  data?: BannerResource;
}

export namespace Auth {
  /**
 * No description
 * @name LoginCreate
 * @summary Вход в систему
 * @request POST:/auth/login
 * @response `200` `LoginCreateData` Успешный вход в систему
 * @response `400` `{
  \**
   * HTTP статус ответа
   * @example 400
   *\
    status?: number,
  \**
   * Признак успешного окончания операции
   * @example false
   *\
    success?: boolean,
  \** Описание ошибки *\
    error?: {
  \**
   * Код ошибки
   * @example "invalid_grant"
   *\
    code?: string,
  \**
   * Описание ошибки
   * @example "The user credentials were incorrect."
   *\
    message?: string,

},

}` Вход в систему невозможен
*/
  export namespace LoginCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LoginDto;
    export type RequestHeaders = {
      /**
       * Признак XHR-запроса
       * @default "XMLHttpRequest"
       */
      "X-Requested-With": string;
    };
    export type ResponseBody = LoginCreateData;
  }
  /**
   * No description
   * @name LogoutList
   * @summary Выход из системы
   * @request GET:/auth/logout
   * @response `204` `LogoutListData` Успешный выход из системы
   */
  export namespace LogoutList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /**
       * Признак XHR-запроса
       * @default "XMLHttpRequest"
       */
      "X-Requested-With": string;
      /**
       * Авторизационный токен
       * @example "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiN2ExMTI4ZDQ5NWQ4YmM3MWRlOGMwMjU3NzZkYmUyODNhMTgxZDhlOWU4MTQ2YzliYmQzZmE5ZjNhMzE0ZDgzYTYxMGY3NzQ3OTA1OGNlNTAiLCJpYXQiOjE2OTYzMjA0OTIuMTM3NjI4LCJuYmYiOjE2OTYzMjA0OTIuMTM3NjMsImV4cCI6MTcyNzk0Mjg5Mi4xMjgyNjQsInN1YiI6IjIiLCJzY29wZXMiOltdfQ.QS4_Aw-T6aFhbIdzwO4IPuFiV3m9OWAFqmg31b1bY4UPUyBGBhGpmqePEjpRxZOwr-ETlPDbeioehGoZAya_gRq1FFYA9oFRJxmbRowigJYCEX-7EKTNyvRxmKTptEx0sQ6dEbUdzYEui3ApqrmMtCARfv9rkaO8uN2oGmvkwsru2Wqrd-4QKpRnebzzqYDecPK7gxi5_fQtc4QgfFOi8HvVwRUV6FXjXBRrbSdUwpA51fRWM6u8QkR0q3-fsYIFER13hAEH9OHBOGc0wkFX3tsi7qezAiBKS6vO-zYgEzdg2uhZQzvlinchNeghyXn8n7jFQ_7gZfQvszAyVV8ipccLlYFabmj0gwLwaJoJ21_KEFeNfLUXPHUP-8rDs_lPg4sMvZagadHZ0p44g8aEuh73OiyO11Rn82e2BDj8Q6T0EOV4ITiKWvFK-uz8Wy14sZCBqINMo2txjCImAahCYPWlof2FDIGOy2-gX1ZsVCzSemYLKm8vWDrS8BFnGQekwYN62jI4AQ3bZbt4weWZPoJqj08ynqgLbbo0Px9O2q-32jIzOsAUfN3Qxc9d_GviuJHWoxp_VuXgvo6QnDUp01OF_2yuhsmHKLUu2cJb2eRg6bvMpDkrIj6vt4_tHFKVOe8bDCe8ZZNTadczKrPBmEeoxMWMlVoBIT79COVTM1E"
       */
      Authorization: string;
    };
    export type ResponseBody = LogoutListData;
  }
}

export namespace Баннеры {
  /**
 * No description
 * @tags Баннеры
 * @name BannersCreate
 * @summary Создать баннер
 * @request POST:/banners/
 * @response `200` `BannersCreateData` Успешное создание баннера
 * @response `422` `{
  \**
   * HTTP статус ответа
   * @example 422
   *\
    status?: number,
  \**
   * Признак успешного окончания операции
   * @example false
   *\
    success?: boolean,
  \** Описание ошибки *\
    error?: {
  \**
   * Код ошибки
   * @example "Invalid Arguments"
   *\
    code?: string,
  \**
   * Описание ошибки
   * @example "The name field is required."
   *\
    message?: string,

},

}` Переданы неверные параметры
*/
  export namespace BannersCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BannerDto;
    export type RequestHeaders = {
      /**
       * Признак XHR-запроса
       * @default "XMLHttpRequest"
       */
      "X-Requested-With": string;
    };
    export type ResponseBody = BannersCreateData;
  }
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;
export { guard };

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "http://absolut-lk-hr-backend.test/api/v1/";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title API Шаблона Vue3 TS
 * @version 1.0.0
 * @license proprietary
 * @baseUrl http://absolut-lk-hr-backend.test/api/v1/
 *
 * Описание эндпойнтов API Шаблона Vue3 TS
 */
export class Api<SecurityDataType extends unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  auth = {
    /**
 * No description
 *
 * @name LoginCreate
 * @summary Вход в систему
 * @request POST:/auth/login
 * @response `200` `LoginCreateData` Успешный вход в систему
 * @response `400` `{
  \**
   * HTTP статус ответа
   * @example 400
   *\
    status?: number,
  \**
   * Признак успешного окончания операции
   * @example false
   *\
    success?: boolean,
  \** Описание ошибки *\
    error?: {
  \**
   * Код ошибки
   * @example "invalid_grant"
   *\
    code?: string,
  \**
   * Описание ошибки
   * @example "The user credentials were incorrect."
   *\
    message?: string,

},

}` Вход в систему невозможен
 */
    loginCreate: (data: LoginDto, params: RequestParams = {}) =>
      this.http
        .request<
          LoginCreateData,
          {
            /**
             * HTTP статус ответа
             * @example 400
             */
            status?: number;
            /**
             * Признак успешного окончания операции
             * @example false
             */
            success?: boolean;
            /** Описание ошибки */
            error?: {
              /**
               * Код ошибки
               * @example "invalid_grant"
               */
              code?: string;
              /**
               * Описание ошибки
               * @example "The user credentials were incorrect."
               */
              message?: string;
            };
          }
        >({
          path: `/auth/login`,
          method: "POST",
          body: data,
          type: ContentType.Json,
          ...params,
        })
        .then((v) => {
          if (!!+import.meta.env.VITE_API_TYPE_CHECKING && !guard.isLoginCreateData(v.data)) {
            throw new Error('Invalid response data "LoginCreateData"');
          }
          return v;
        }),

    /**
     * No description
     *
     * @name LogoutList
     * @summary Выход из системы
     * @request GET:/auth/logout
     * @response `204` `LogoutListData` Успешный выход из системы
     */
    logoutList: (params: RequestParams = {}) =>
      this.http
        .request<LogoutListData, any>({
          path: `/auth/logout`,
          method: "GET",
          ...params,
        })
        .then((v) => {
          if (!!+import.meta.env.VITE_API_TYPE_CHECKING && !guard.isLogoutListData(v.data)) {
            throw new Error('Invalid response data "LogoutListData"');
          }
          return v;
        }),
  };
  баннеры = {
    /**
 * No description
 *
 * @tags Баннеры
 * @name BannersCreate
 * @summary Создать баннер
 * @request POST:/banners/
 * @response `200` `BannersCreateData` Успешное создание баннера
 * @response `422` `{
  \**
   * HTTP статус ответа
   * @example 422
   *\
    status?: number,
  \**
   * Признак успешного окончания операции
   * @example false
   *\
    success?: boolean,
  \** Описание ошибки *\
    error?: {
  \**
   * Код ошибки
   * @example "Invalid Arguments"
   *\
    code?: string,
  \**
   * Описание ошибки
   * @example "The name field is required."
   *\
    message?: string,

},

}` Переданы неверные параметры
 */
    bannersCreate: (data: BannerDto, params: RequestParams = {}) =>
      this.http
        .request<
          BannersCreateData,
          {
            /**
             * HTTP статус ответа
             * @example 422
             */
            status?: number;
            /**
             * Признак успешного окончания операции
             * @example false
             */
            success?: boolean;
            /** Описание ошибки */
            error?: {
              /**
               * Код ошибки
               * @example "Invalid Arguments"
               */
              code?: string;
              /**
               * Описание ошибки
               * @example "The name field is required."
               */
              message?: string;
            };
          }
        >({
          path: `/banners/`,
          method: "POST",
          body: data,
          type: ContentType.Json,
          ...params,
        })
        .then((v) => {
          if (!!+import.meta.env.VITE_API_TYPE_CHECKING && !guard.isBannersCreateData(v.data)) {
            throw new Error('Invalid response data "BannersCreateData"');
          }
          return v;
        }),
  };
}
