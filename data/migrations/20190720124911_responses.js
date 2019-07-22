exports.up = function(knex, Promise) {
  return knex.schema.createTable("responses", tbl => {
    tbl.increments();
    tbl.string("response", 255).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("responses");
};
