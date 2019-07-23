const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("../../user/user-model.js");
const Questions = require("../../user/question-model.js");
const restricted = require("../../data/restricted.js");

// TODO: research query string for possible endpoint
// TODO: add twilio notification to the POST endpoint below. connect with all users matching business type

// GET "/api/questions" - gets a list of all questions
router.get("/questions", restricted, async (req, res) => {
  try {
    const questions = await Questions.find(req.query);
    res.status(200).json(questions);
  } catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: "Error retrieving the questions"
    });
  }
});

// POST "/api/questions" - adds a question to the Database
// TODO: all posts use user_id of 1. correct this so it changes to the logged in user
router.post("/questions", restricted, async (req, res) => {
  try {
    const question = await Questions.addQuestion(req.body);
    res.status(201).json(question);
  } catch (error) {
    console.log({ error: error });
    res.status(500).json({
      message: "Error adding the question"
    });
  }
});

// PUT "/api/questions/:id" - edits a question from the Database. - make sure the user can only edit their own questions.
router.put("/questions/:id", restricted, async (req, res) => {
  try {
    const question = await Questions.update(req.params.id, req.body);
    if (question) {
      res.status(200).json({ status: "Question has been updated" });
    } else {
      res.status(404).json({ message: "The question could not be found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error updating the question"
    });
  }
});

// DELETE "/api/question/:id" - deletes a question from the Database. - make sure the user can only delete their own questions.
router.delete("/questions/:id", restricted, async (req, res) => {
  try {
    const question = await Questions.remove(req.params.id);
    if (question > 0) {
      res.status(200).json({ Message: "The question has been deleted" });
    } else {
      res.status(404).json({ message: "the question could not be found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error removing the Question"
    });
  }
});

module.exports = router;
