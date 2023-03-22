const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionsSchema = new Schema({
          question:{
                    type : String,
                    required : true
          },
          answer1:{
                    type : String,
                    required : true
          },
          answer1Mark: {
                    type : Number,
                    required : true
          },
          answer2:{
                    type : String,
                    required : true
          },
          answer2Mark: {
                    type : Number,
                    required : true
          },
          answer3:{
                    type : String,
                    required : true
          },
          answer3Mark: {
                    type : Number,
                    required : true
          },
          answer4:{
                    type : String,
                    required : true
          },
          answer4Mark: {
                    type : Number,
                    required : true
          },
          quizTitleId:{
                    type : String,
                    required : true
          }
})

module.exports = mongoose.model("question",questionsSchema);