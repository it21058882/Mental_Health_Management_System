const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const channelSchema = new Schema({
    channelId: {
        type: String,
        required: true
    },
    name:{
        type:String,
        required: true
    },
    date:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    phoneNo: {
        type: Number,
        required: true
    },
    other:{
        type:String,
        
    },
    price: {
        type:Number
    }
            
                    
       
})
module.exports = mongoose.model("channel",channelSchema);