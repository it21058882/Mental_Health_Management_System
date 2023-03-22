const express = require ("express");
const router = express.Router();

const {addQuizTitle} = require("../controllers/quiz-controller");
router.post("/quizTile", addQuizTitle);

const {addQuestions} = require("../controllers/quiz-controller");
router.post("/addquestion", addQuestions);


module.exports = router;