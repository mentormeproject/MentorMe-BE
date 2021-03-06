exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();
    tbl
      .string("username", 128)
      .notNullable()
      .unique();
    tbl.string("password", 128).notNullable();
    tbl
      .string("phone_number", 128)
      .notNullable()
      .unique();
    tbl.string("age", 128).notNullable();
    tbl.string("location", 128).notNullable();
    tbl.string("business_type", 128);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
