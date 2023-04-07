const express = require ("express");
const router = express.Router();

const {AddArticles} = require("../controllers/articlescontroller");

router.post("/addArticle", AddArticles);

module.exports = router;