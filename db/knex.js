require('dotenv').config()
const knexConfig = require('../knexfile')
const knex = require('knex')
const db = knex(knexConfig[process.env.DB_ENV || 'development'])

module.exports = db