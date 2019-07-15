exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
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
        },
        {
          id: 4,
          username: "JWigdor",
          password: "admin1"
        },
        {
          id: 3,
          username: "CPerry",
          password: "admin12"
        }
      ]);
    });
};
