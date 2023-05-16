const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleShema = new Schema({
    title : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required: true
    },
    article : {
        type : String,
        required: true
    },
    authorName : {
        type : String,
        required: true
    },
    postDate : {
        type : String,
        required: true,
    }
})


module.exports = mongoose.model("Articles", ArticleShema);
