const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleShema = new Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    article: {
        type: String
    },
    authorName: {
        type: String,
        required: true
    },
    postDate: {
        type: String,
        required: true,
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        },
    ],
    dislikes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        },
    ],
    isLiked: {
        type: Boolean,
        default: false,
    },
    isDisliked: {
        type: Boolean,
        default: false,
    },
})


module.exports = mongoose.model("Articles", ArticleShema);
