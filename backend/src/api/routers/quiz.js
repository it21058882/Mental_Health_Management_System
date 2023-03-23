const express = require ("express");
const router = express.Router();

const {addQuizTitle,addQuestions,titleViewAdmin,ViewQuestionsAdmin,deleteQuestionAdmin,questionUpdateView} = require("../controllers/quiz-controller");


router.post("/quizTile", addQuizTitle);
router.post("/addquestion", addQuestions);
router.get("/titles", titleViewAdmin);
router.get("/titles/ViewQuestionsAdmin/:titleID", ViewQuestionsAdmin);
router.delete("/titles/ViewQuestionsAdmin/:titleID/deletequestion/:questionID", deleteQuestionAdmin);
router.patch("/titles/ViewQuestionsAdmin/:titleID/updatequestion/:questionID", questionUpdateView);

module.exports = router;