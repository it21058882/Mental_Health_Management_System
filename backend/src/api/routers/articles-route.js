const express = require ("express");
const router = express.Router();

const {} = require("../controllers/articlescontroller");

router.post("/quizTile", addQuizTitle);

module.exports = router;