exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("table_name").insert([
        {
          id: 1,
          title: "title1",
          question:
            "How do I build an App to always keep an eye for the Bat Signal?",
          business_type: "Crime Fighting",
          user_id: "1"
        },
        {
          id: 2,
          title: "title2",
          question: "At what age should i be giving spiderman a better suit?",
          business_type: "Superhero",
          user_id: "3"
        },
        {
          id: 3,
          title: "title3",
          question: "How short should an adventure really be?",
          business_type: "Adventure",
          user_id: "2"
        },
        {
          id: 4,
          title: "title4",
          question:
            "Is there a maximum limit for a utility belt before it hinders agility?",
          business_type: "Crime Fighting",
          user_id: "1"
        },
        {
          id: 5,
          title: "title5",
          question:
            "Should I be listening to the Fire or Police CB radio station for the best crimes?",
          business_type: "Crime Fighting",
          user_id: "1"
        },
        {
          id: 6,
          title: "title6",
          question:
            "What's the best kind of condiment sauce to bring on an adventure?",
          business_type: "Adventure",
          user_id: "2"
        },
        {
          id: 7,
          title: "title7",
          question: "Do portals have an cause damage to hardwood floors?",
          business_type: "Adventure",
          user_id: "2"
        },
        {
          id: 8,
          title: "title8",
          question: "Is Ironman a great superhero or the greatest superhero?",
          business_type: "Superhero",
          user_id: "3"
        }
      ]);
    });
};
