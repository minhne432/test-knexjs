// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  client: 'mysql',
  connection: {
    database: 'webapps',
    user: 'root',
    password: ''
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: './mirations'
  },
  seeds: {
    directory: '.seeds'
  }

};
