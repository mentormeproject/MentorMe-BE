const db = require("../data/dbConfig.js");
const Users = require("./user-model.js");

describe("user model", () => {
  describe("add()", () => {

    afterEach(async () => {
      await db("users").truncate();
    })
    it("should add users into the db", async () => {
      await Users.add({
      "username": "Superman",
      "password": "test2" })

      const users = await db("users");

      expect(users).toHaveLength(1);
    })
  })
})
