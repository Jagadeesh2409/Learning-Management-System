// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

require('dotenv').config()
module.exports = {
  development: {
    client: 'mysql2',
    connection: {
    host: process.env.DB_HOST ,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    database: process.env.DB_NAME ,
    password: process.env.DB_PASS ,
  },
  migrations:{
    directory:'./db/migrations'
  },
  seeds:{
    directory:'./db/seeds'
  }
  },

  staging: {
     client: 'mysql2',
    connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME,
  },
  migrations:{
    directory:'./db/migrations'
  },
  seeds:{
    directory:'./db/seeds'
  }
  },

  production: {
     client: 'mysql2',
    connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
  migrations:{
    directory:'./db/migrations'
  },
  seeds:{
    directory:'./db/seeds'
  }
  }

};
