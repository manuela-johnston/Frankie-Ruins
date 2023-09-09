// Update with your config settings.

const development = {
  client: 'sqlite3',
  connection: {
    filename: './dev.sqlite3',
  },
  useNullAsDefault: true, // Set useNullAsDefault flag to true
}

const staging = {
  client: 'postgresql',
  connection: {
    database: 'my_db',
    user: 'username',
    password: 'password',
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
  },
}

const production = {
  client: 'postgresql',
  connection: {
    database: 'my_db',
    user: 'username',
    password: 'password',
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
  },
}

export { development, staging, production }
