module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || 'MY_SECRET',

  SENTRY_DSN: process.env.SENTRY_DSN || 'MyDSN',
  PORT: process.env.PORT || 5000,

  PROTOCOL: process.env.PROTOCOL || 'http://',
  DOMEN: process.env.DOMEN || 'localhost:5000',

  DB_LOGIN: process.env.DB_LOGIN || 'root',
  DB_PASSWORD: process.env.DB_PASSWORD || 'root',

  DB_DIALECT: process.env.DB_DIALECT || 'mysql',
  DB_HOST: process.env.DB_HOST || '127.0.0.1',
  DB_SCHEMA: process.env.DB_SCHEMA || 'clinics',
};
