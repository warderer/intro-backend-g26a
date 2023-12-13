// Dependiendo de la variable de entorno del sistema, va a usar una configuración u otra. Por ejemplo, si la variable de entorno NODE_ENV es development, va a usar la configuración de development. Si es production, va a usar la configuración de production. Si es staging, va a usar la configuración de staging.

const env = process.env.NODE_ENV || 'development'

const knexfile = require('./knexfile')
const knex = require('knex')

// Mandar a llamar la configuración de knexfile
module.exports = knex(knexfile[env])
