exports.up = function(knex, promise) {
  return knex.schema.createTable("questions_responses", tbl => {
    tbl.increments();
    tbl
      .integer("question_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("questions")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
    tbl
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("user_id")
      .inTable("questions")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
    tbl
      .integer("responses_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("responses")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("questions_responses");
};
