const db = require("../data/dbConfig.js");
const Questions = require("./question-model.js");

describe("question model", () => {
  describe("addQuestion()", () => {

    afterEach(async () => {
      await db("questions").truncate();
    })
    it("should add questions into the db", async () => {
      await Questions.addQuestion({
        "title": "Why Me",
        "question": "Why did I lose everything to get this power?",
        "business type": "Crime Fighting",
        "user_id": "4"
       })

      const questions = await db("questions");

      expect(questions[0].title).toBe("Why Me");
    })
  })
})
