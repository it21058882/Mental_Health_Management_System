const express = require ("express");
const router = express.Router();

const {AddArticles, ViewArticle, DeleteArticle, UpdateArticle} = require("../controllers/articlescontroller");

router.post("/addArticle", AddArticles);
router.get("/viewArticle", ViewArticle);
router.delete("/delete/:id" , DeleteArticle);
router.put("/updateArticle/:id" , UpdateArticle);

module.exports = router;