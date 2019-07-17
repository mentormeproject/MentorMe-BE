const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findById,
  add,
  remove,
  update
};

function find() {
  return db("questions").select("question", "business_type");
}

function findById(id) {
  return db("questions")
    .where({ id })
    .first();
}

async function add(inquiry) {
  const [id] = await db("questions").insert(inquiry);

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
