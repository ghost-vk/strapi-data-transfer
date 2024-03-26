module.exports = ({ env }) => [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          // working MinIO previews
          'img-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', env('MINIO_ASSETS_HOST', 'localhost:9000')],
          'media-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', env('MINIO_ASSETS_HOST', 'localhost:9000')],
          // working GraphQL Playground
          'style-src': ["'self'", 'https:', "'unsafe-inline'", 'cdn.jsdelivr.net'],
          upgradeInsecureRequests: null
        }
      }
    }
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public'
];
