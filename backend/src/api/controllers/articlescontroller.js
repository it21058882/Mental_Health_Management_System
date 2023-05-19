const Articles = require('../model/articles-model');
const User = require("../model/user");
const router = require("express").Router();
const multer = require('multer');
const path = require("path");


//Create storage for file uploads
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'C:/Users/Thisara/Desktop/SLIIT/Y3S1/ITPM/Project/Mental_Health_Management_System/backend/src/api/Uploads/DOC');
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    },

});


// Create upload instances
const uploadFile = multer({ storage: fileStorage });

//Add article
router.post("/add", uploadFile.single('article'), (req, res) => {

    const newarticle = new Articles({
        title: req.body.title,
        type: req.body.type,
        category: req.body.category,
        description: req.body.description,
        article: req.file.originalname,
        authorName: req.body.authorName,
        postDate: req.body.postDate
    });

    newarticle.save().then(() => {
        res.json("Added")
    }).catch((err) => {
        console.log(err);
    })
})


//Get article
router.route("/viewArticle").get((req, res) => {
    Articles.find().then((Articles) => {
        res.json(Articles)
    }).catch((err) => {
        console.log(err)
    })
});


//Get article by ID
router.route("/view/:id").get((req, res) => {
    let articleID = req.params.id;
    Articles.findById(articleID)
        .then((article) => {
            if (article) {
                res.status(200).json(article);
            } else {
                res.status(404).send({ status: "Article not found" });
            }
        })
        .catch((err) => {
            res.status(500).send({ status: "Error with data retrieval", error: err.message });
        });
});



//Delete article
router.delete("/delete/:id", uploadFile.single("article"), (req, res) => {

    let articleID = req.params.id;

    Articles.findByIdAndDelete(articleID).then(() => {
        res.status(200).send({ status: "Article deleted !!" });
    }).catch((err) => {

        res.status(500).send({ status: "Error with delete article !!" });
    })

});



//update article
router.put("/updateArticle/:id", uploadFile.single("article"), (req, res) => {

    Articles.findById(req.params.id)
        .then((post) => {

            post.article = req.file.originalname;
            post.title = req.body.title;
            post.type = req.body.type;
            post.category = req.body.category;
            post.description = req.body.description;
            post.authorName = req.body.authorName;
            post.postDate = req.body.postDate;

            post.save()
                .then(() => res.json('Post Updated'))
                .catch((err) => res.status(400).json(`Error:${err}`));
        }).catch((err) => res.status(400).json(`Error:${err}`));
});


router.post('/user/bucket/add', (req, res) => {
    const userId = req.user.id;
    const articleId = req.body.id;
  
 
    User.findByIdAndUpdate(userId, { $addToSet: { bucket: articleId } }, (err, user) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to add article to bucket.' });
      }
      return res.json({ message: 'Article added to bucket successfully.' });
    });
  });


// // Set up multer upload instance for handling multiple file uploads
// const upload = multer({
//     storage: multer.diskStorage({
//         destination: (req, file, cb) => {
//             if (file.fieldname === 'article') {
//                 cb(null, 'C:/Users/Thisara/Desktop/SLIIT/Y3S1/ITPM/Project/Mental_Health_Management_System/backend/src/api/Uploads/DOC'); // Destination folder for PDF files
//             } else if (file.fieldname === 'articleIMG') {
//                 cb(null, 'C:/Users/Thisara/Desktop/SLIIT/Y3S1/ITPM/Project/Mental_Health_Management_System/backend/src/api/Uploads/IMG'); // Destination folder for image files
//             }
//         },
//         filename: (req, file, callback) => {
//             callback(null, file.originalname);
//         },
//     })
// });

// // Route for uploading PDF and image
// router.post('/upload', upload.fields([
//     { name: 'article', maxCount: 1 },
//     { name: 'articleIMG', maxCount: 1 }



// ]), (req, res) => {
//     const article = req.files['article'][0];
//     const articleIMG = req.files['articleIMG'][0];

//     const { title, category, description, authorName, postDate } = req.body;

//     const newFile = new Articles({
//         title: title,
//         category: category,
//         description: description,
//         article: article.path,
//         articleIMG: articleIMG.path,
//         authorName: authorName,
//         postDate: postDate
//     });

//     // Save the new file record to the database


//     newFile.save().then(() => {
//         res.json("Added")
//     }).catch((err) => {
//         console.log(err);
//     })
// });





module.exports = router;
