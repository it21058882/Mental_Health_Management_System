const Articles = require('../model/articles-model');
const router = require("express").Router();
const multer = require('multer');
const path = require("path");


// Create storage for file uploads
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'C:/Users/Thisara/Desktop/SLIIT/Y3S1/ITPM/Project/Mental_Health_Management_System/backend/src/api/Uploads/DOC');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`);
  },
});


// Create upload instances
const uploadFile = multer({ storage: fileStorage });

//Add article
router.post("/add", uploadFile.single('article') ,(req,res) => {
  
    const newarticle = new Articles({
        title : req.body.title,
        category : req.body.category,
        description : req.body.description,
        article : req.file.originalname,
        authorName : req.body.authorName,
        postDate : req.body.postDate
    });

    newarticle.save().then(()=>{
        res.json("Added")
    }).catch((err) => {
        console.log(err);
    })
})


//Get article
router.route("/viewArticle").get((req,res) => {
    Articles.find().then((Articles) => {
        res.json(Articles)
    }).catch((err) => {
        console.log(err)
    })
});


//Delete article
router.delete("/delete/:id", uploadFile.single("article"), (req,res) => {

    let articleID = req.params.id;

     Articles.findByIdAndDelete(articleID).then(() => {
        res.status(200).send({ status: "Article deleted !!" });
    }).catch((err) => {
        
        res.status(500).send({ status: "Error with delete article !!" });
    })

});



//update article
router.patch("/updateArticle/:id", uploadFile.single("article"), (req,res) => {

    Articles.findById(req.params.id)
    .then((post) => {
        post.title = req.body.title,
        post.category = req.body.category,
        post.description = req.body.description,
        post.article = req.file.originalname,
        post.authorName = req.body.authorName,
        post.postDate = req.body.postDate

        post.save()
        .then(()=> res.json('Post Updated'))
        .catch((err) => res.status(400).json(`Error:${err}`));
    }).catch((err) => res.status(400).json(`Error:${err}`));
});



module.exports = router;
