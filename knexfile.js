// Update with your config settings.
const path = require("path");

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "developing-virtex",
      user: "postgres",
      password: "docker",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: path.resolve(__dirname, "src", "database", "migrations"),
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
