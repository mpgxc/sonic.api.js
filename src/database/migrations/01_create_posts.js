exports.up = (knex) => {
  return knex.schema.createTable("posts", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("content").notNullable();
    table.integer("user_id").unsigned().notNullable();
    table.foreign("user_id").references("id").inTable("users");
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("posts");
};
