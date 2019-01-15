require('dotenv').config({ path: './.env' });

export default {
  env: process.env.NODE_ENV || 'development',
  server: {
    port: process.env.APP_PORT || 8080,
  },
  api: {
    prefix: process.env.API_PREFIX || 'http://localhost:9999',
  },
};
