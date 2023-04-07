const express = require ("express");
const router = express.Router();

const {addArticle} = require("../controllers/articlescontroller");

router.post("/addArticle", addArticle);

module.exports = router;