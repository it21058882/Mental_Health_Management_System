const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizResultsSchema = new Schema({
          userId:{
                    type : String,
                    required : true
          },
          userName:{
                    type : String,
                    required : true
          },
          email: {
                    type : String,
                    required : true
          },
          contactNo:{
                    type : Number,
                    required : true
          },
          results: {
                    type : Number,
                    required : true
          },
          nameOfClosest:{
                    type : String,
                    required : true
          },
          closestContactNo: {
                    type : Number,
                    required : true
          },
          closestEmail:{
                    type : String,
                    required : true
          },
          quizId:{
                    type : String,
                    required : true
          },
          quizName:{
                    type : String,
                    required : true
          }
})

module.exports = mongoose.model("result",quizResultsSchema);