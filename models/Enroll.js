const mongoose = require('mongoose')
const Schema = mongoose.Schema

const enrollSchema = new Schema({
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
    course: {
        type: String,
        required:true
    },
})

const Enroll = mongoose.model('Enroll',enrollSchema)
module.exports = Enroll
