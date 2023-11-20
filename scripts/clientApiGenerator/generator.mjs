import { writeFile } from 'node:fs/promises';
import { fileURLToPath, URL } from 'node:url';
import { config } from 'dotenv-flow';
import { generateApi } from 'swagger-typescript-api';
import autoGuard from 'ts-auto-guard';

config();

const URL_API_DOCK = process.env.API_DOCK;
const { API_DOCK_USER } = process.env;
const { API_DOCK_PASSWORD } = process.env;

if (!URL_API_DOCK) {
  throw new Error('Не указан API_DOCK в ".env*"');
}

async function generatedServicesApi() {
  const Authorization = API_DOCK_USER ? `Basic ${btoa(`${API_DOCK_USER}:${API_DOCK_PASSWORD}`)}` : undefined;

  const responseDocs = await fetch(URL_API_DOCK, {
    method: 'get',
    headers: {
      Authorization,
    },
  });

  const docsFilePath = fileURLToPath(new URL('./api-docs', import.meta.url));

  await writeFile(docsFilePath, await responseDocs.text());

  const params = {
    name: 'generatedClient.ts',
    output: fileURLToPath(new URL('../../src/shared/api', import.meta.url)),
    // url: URL_API_DOCK,
    input: docsFilePath,
    httpClientType: 'fetch',
    templates: fileURLToPath(new URL('./template/', import.meta.url)),
    defaultResponseAsSuccess: false,
    generateClient: true,
    generateRouteTypes: true,
    generateResponses: true,
    toJS: false,
    extractRequestParams: true,
    extractRequestBody: true,
    extractEnums: true,
    unwrapResponseData: false,
    defaultResponseType: 'void',
    singleHttpClient: true,
    cleanOutput: false,
    enumNamesAsValues: true,
    moduleNameFirstTag: true,
    generateUnionEnums: true,
    extractResponseBody: true,
    typePrefix: '',
    typeSuffix: '',
    enumKeyPrefix: '',
    enumKeySuffix: '',
    addReadonly: false,
    sortTypes: false,
    sortRouters: false,
    extractingOptions: {
      requestBodySuffix: ['Payload', 'Body', 'Input'],
      requestParamsSuffix: ['Params'],
      responseBodySuffix: ['Data', 'Result', 'Output'],
      responseErrorSuffix: ['Error', 'Fail', 'Fails', 'ErrorData', 'HttpError', 'BadResponse'],
    },
    /** allow to generate extra files based with this extra templates, see more below */
    extraTemplates: [],
    anotherArrayType: true,
    fixInvalidTypeNamePrefix: 'Type',
    fixInvalidEnumKeyPrefix: 'Value',
    // codeGenConstructs: (constructs) => ({
    //     ...constructs,
    //     RecordType: (key, value) => `MyRecord<key, value>`
    // }),
    // primitiveTypeConstructs: (constructs) => ({
    //     ...constructs,
    //     string: {
    //         'date-time': 'Date'
    //     }
    // }),
    // hooks: {
    //     onCreateComponent: (component) => {},
    //     onCreateRequestParams: (rawType) => {},
    //     onCreateRoute: (routeData) => {},
    //     onCreateRouteName: (routeNameInfo, rawRouteInfo) => {},
    //     onFormatRouteName: (routeInfo, templateRouteName) => {},
    //     onFormatTypeName: (typeName, rawTypeName, schemaType) => {},
    //     onInit: (configuration) => {},
    //     onPreParseSchema: (originalSchema, typeName, schemaType) => {},
    //     onParseSchema: (originalSchema, parsedSchema) => {},
    //     onPrepareConfig: (currentConfiguration) => {},
    // }
  };

  await generateApi(params);

  const project = new URL('../../tsconfig.json', import.meta.url).pathname;

  const guardParams = {
    paths: [`${params.output}/${params.name}`],
    processOptions: {
      debug: true,
      exportAll: false,
      guardFileName: 'guard',
      importGuards: 'guard',
    },
    project,
  };

  await autoGuard.generate(guardParams);

  // Eta.configure({
  //     // This tells Eta to look for templates
  //     // In the /views directory
  //     views: path.join(__dirname, 'apiGenerator'),
  // });

  // const indexContent = await Eta.renderFile('./indexTemplate.ejs', {
  //     services: services.map((service) => ({
  //         serviceName: service,
  //         path: `./generated-CT-API-${service}`,
  //         className: pascalCase(service),
  //     })),
  // });

  // fs.writeFileSync(
  //     path.resolve(process.cwd(), './src/api/generated', './index.ts'),
  //     indexContent,
  // );
  return 0;
}

generatedServicesApi();
