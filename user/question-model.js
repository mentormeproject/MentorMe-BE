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
    .update(changes, "*"); // adds astrix to show a change was made
}
