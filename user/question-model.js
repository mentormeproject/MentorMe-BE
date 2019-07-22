const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findById,
  addQuestion,
  remove,
  update
};

function find() {
  return db("questions").select("id", "question", "business_type", "user_id");
}

function findById(id) {
  return db("questions")
    .where({ id })
    .first();
}

async function addQuestion(question) {
  const [id] = await db("questions").insert(question);
  db("users as u")
    .join("questions as q", "q.user_id", "u.id")
    .where("u.business_type", "q.business_type")

    .then(newQuestion => {
      console.log("Notifcation: ", newQuestion);
      if (newQuestion.length > 0) {
        newQuestion.forEach(notification => {
          sendMessage(notification);
        });
      }
    })


  return findById(id);
}

function remove(id) {
  return db("questions")
    .where({ id })
    .del();
}

function update(id, changes) {
  return db("questions")
    .where({ id })
    .update(changes, "*"); // adds an astrix to show a change was made
}
