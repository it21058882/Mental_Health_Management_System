const Articles = require('../model/articles-model');
const router = require("express").Router();
const multer = require('multer');
const path = require("path");
const sharp = require('sharp'); 

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

// Create storage for image uploads
const imageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'C:/Users/Thisara/Desktop/SLIIT/Y3S1/ITPM/Project/Mental_Health_Management_System/backend/src/api/Uploads/IMG');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`);
  },
});

// Create upload instances
const uploadFile = multer({ storage: fileStorage }).any('article');
const uploadImage = multer({ storage: imageStorage }).array('articleImg');

router.post('/add', (req, res) => {
    
    uploadFile(req, res, async (err) => {
      if (err) {
        console.error(err);
        //return res.status(500).send('Server error happeneeeeeooooooooo');
      }
      console.log('Uploaded file:');
      
      uploadImage(req, res, async (err) => {
        if (err) {
          console.error(err);
          // handle the error here and respond to the client appropriately
          return res.status(500).send('Server error ENOOOOO');
        }
        console.log('Uploaded image:', req.file.path);
  
        try {
          // Create a new upload object
          const newArticle = new Articles({
            title: req.body.title,
            category: req.body.category,
            description: req.body.description,
            article: req.file.path,
            articleImg: req.file.path,
            authorName: req.body.authorName,
            postDate: req.body.postDate,
          });
  
          // Save the upload object to the database
          await newArticle.save();
  
          res.status(200).send('Upload successful');
        } catch (err) {
          console.error(err);
          res.status(500).send('Server error');
        }
      });
    });
  });
  

module.exports = router;
