const mongoose = require('mongoose')
const Schema = mongoose.Schema

const enquirySchema = new Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    mobile: {
        type: String,
        required:true
    },
    subject: {
        type: String,
        required:true
    },
    enquiry: {
        type: String,
        required:true
    }
    
})

const Enquiry = mongoose.model('Enquiry',enquirySchema)
module.exports = Enquiry
