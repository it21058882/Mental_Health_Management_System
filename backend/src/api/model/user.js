const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
          firstName:{
                    type : String,
                    required : true
          },
          lastname:{
                    type : String,
                    required : true
          },
          userName: {
                    type : String,
                    required : true
          },
          userType:{
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
          nameOfClosest: {
                    type : String,
                    required : true
          },
          closestEmail:{
                    type : String,
                    required : true
          },
          closestContactNo: {
                    type : Number,
                    required : true
          },
          password:{
                    type : String,
                    required : true
          }
})

module.exports = mongoose.model("user",userSchema);