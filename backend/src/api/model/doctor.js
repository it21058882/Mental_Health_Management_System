const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
          name:{
                    type : String,
                    required : true
          },
       
})

module.exports = mongoose.model("doctor",doctorSchema);