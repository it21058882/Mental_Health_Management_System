const Articles = require('../model/articles-model');
//const multer = require('multer');

//Article Image
// const store = multer.diskStorage({
//     destination: (req, file, callback) => {
//         callback(null,"./Uploads");
//     },
//     filename:(req,file,callback) => {
//         callback(null,file.originalname);
//     }
// })
// const upload = multer({storage: store});

//Add article
const AddArticles = async(req, res, next) => {
    
    const {title, article, authorName, postDate} = req.body;
   // const {articalImg} = req.file.originalname;

    const newarticle = new Articles({
        title,
        article,
       // articalImg,
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


//view article
const ViewArticle = async (req, res, next) => {

    Articles.find().then((Articles) => {
        res.json(Articles)
    }).catch((err) => {
        console.log(err)
    })

}


//Delete article
const DeleteArticle = async (req, res, next) => {

    let articleID = req.params.id;

    await Articles.findByIdAndDelete(articleID).then(() => {
        res.status(200).send({ status: "Article deleted !!" });
    }).catch((err) => {
        
        res.status(500).send({ status: "Error with delete article !!" });
    })

}


//update article
const UpdateArticle = async (req, res, next) => {

    let articleId = req.params.id;

    const { title, article, authorName, postDate } = req.body;

    const updatearticle = {
        title,
        article,
        authorName,
        postDate
    };

    try {
        const update = await Articles.findByIdAndUpdate(articleId, updatearticle);
        res.status(200).json({ message: "Update Successful !!", update })
    } catch (err) {
        res.status(500).send({ status: "Error with updating details !!" });
    }

}



exports.AddArticles = AddArticles;
exports.ViewArticle = ViewArticle;
exports.DeleteArticle = DeleteArticle;
exports.UpdateArticle = UpdateArticle;