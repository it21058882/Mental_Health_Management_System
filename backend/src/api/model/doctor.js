const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    firstName: {
        type: String,
        required: true
     },
    lastName: {
        type: String,
        required: true
     },
    type :{
         type : String,
         required : true
     },
    gender:{
        type : String,
        required :true
    },
    email: {
         type: String,
         required: true
    },
    specialization :{
        type: String,
         required: true
    },
    image: {
        type: String,
        
    }
            
                    
       
})

module.exports = mongoose.model("doctor",doctorSchema);