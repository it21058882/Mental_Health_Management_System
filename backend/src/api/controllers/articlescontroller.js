const Articles = require('../model/articles-model');
const multer = require('multer');

const AddArticles = async(req, res, next) => {
    
    const {title, article, authorName, postDate} = req.body;

    const newarticle = new Articles({
        title,
        article,
        authorName,
        postDate
    });

    try {
        //save document in database
        await newarticle.save();
    } catch (err) {
        console.log(err);
    }

    return res.status(201).json({message: "New Article added !!", newarticle})

}
// router.route("/add").post(upload.single("imag"),(req,res) => {
//     const newImaege = new Image({
//         imag: req.file.originalname,
//         name: req.body.name
//     })
//     newImaege.save().then(()=>{
//         res.json("Added")
//     }).catch((err) => {
//         console.log(err);
//     })
// })


exports.AddArticles = AddArticles;