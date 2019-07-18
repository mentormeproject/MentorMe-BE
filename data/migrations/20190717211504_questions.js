exports.up = function(knex, Promise) {
  return knex.schema.createTable("questions", tbl => {
    tbl.increments();
    tbl.string("title", 128).notNullable();
    tbl.string("question", 128).notNullable();
    tbl.string("business_type", 128).notNullable();
    tbl
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("questions");
};
