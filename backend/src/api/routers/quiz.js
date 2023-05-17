const express = require ("express");
const router = express.Router();
const auth =require("../middleware/auth.js");

const {addQuizTitle,addQuestions,titleViewAdmin,ViewQuestionsAdmin,deleteQuestionAdmin,questionUpdateView,deleteQuize,storeResults} = require("../controllers/quiz-controller");


router.post("/quizTile", addQuizTitle);
router.post("/addquestion", addQuestions);
router.get("/titles", titleViewAdmin);
router.get("/titles/ViewQuestionsAdmin/:titleID", ViewQuestionsAdmin);
router.delete("/titles/ViewQuestionsAdmin/:titleID/deletequestion/:questionID", deleteQuestionAdmin);
router.patch("/titles/ViewQuestionsAdmin/:titleID/updatequestion/:questionID", questionUpdateView);
router.delete("/titles/DeleteQizeAdmin/:titleID", deleteQuize);

router.post("/quizresults",storeResults);

module.exports = router;