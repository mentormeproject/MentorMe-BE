exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("table_name").insert([
        {
          id: 1,
          username: "Batman",
          password: "test"
        },
        {
          id: 2,
          username: "Rick",
          password: "test"
        },
        {
          id: 3,
          username: "Tony Stark",
          password: "test"
        }
      ]);
    });
};
