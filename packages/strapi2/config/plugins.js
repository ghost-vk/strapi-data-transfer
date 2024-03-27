module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        // Когда задаем baseUrl в providerOptions, а не в
        // providerOptions.s3Options, то возникает такое предупреждение:
        //
        // Loading Strapi(node:97542) Warning: S3 configuration options passed
        // at root level of the plugin's providerOptions is deprecated and will
        // be removed in a future release. Please wrap them inside the
        // 's3Options:{}' property.
        //
        // Но если перенести baseUrl, rootUrl в s3Options, то после трансфера
        // файлы будут не доступны. Периодически надо проверять это поведение и
        // когда в Strapi исправят этот баг нужно перенести
        // providerOptions.baseUrl -> providerOptions.s3Options.baseUrl Адрес
        // доступный публично, формат: <s3-url>/<s3-bucket> Все файлы
        // складываются в один бакет (anonymous download)
        baseUrl: env('S3_BASE_URL', 'http://localhost:9000/strapi2'),
        s3Options: {
          // Тут можно подставить адрес относительно внутренней сети
          endpoint: env('S3_ENDPOINT', 'http://localhost:9000'),
          // Если true, то путь к бакету и объектам определяется как <s3-addr>/<bucket>/<path-to-obj>
          forcePathStyle: env.bool('S3_FORCE_PATH_STYLE', true),
          region: env('S3_REGION', 'central1'),
          params: {
            // Публичный бакет (anonymous download)
            Bucket: env('S3_BUCKET', 'strapi2')
          },
          credentials: {
            // Логин
            accessKeyId: env('S3_ACCESS_KEY_ID', 'admin'),
            // Пароль
            secretAccessKey: env('S3_ACCESS_SECRET', 'admin1admin1')
          }
        }
      }
    }
  }
});
