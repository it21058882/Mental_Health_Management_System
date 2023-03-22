const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 const quizTitleSchema = new Schema ({
          title: {
                    type : String,
                    required : true  
          }
 });

 module.exports = mongoose.model("quizTitle",quizTitleSchema);