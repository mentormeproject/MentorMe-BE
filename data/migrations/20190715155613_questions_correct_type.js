exports.up = function(knex, promise) {
  return knex.schema.table("questions", tbl => {
    tbl.renameColumn("business type", "business_type");
  });
};

exports.down = function(knex, promise) {
  return knex.schema.dropColumn("business_type");
};
