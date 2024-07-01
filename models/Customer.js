const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const Schema = mongoose.Schema;


const customerSchema = new Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    phoneNumber: {
        type: String,
        unique: true,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    birthday: {
        type: Date
    },
    serviceTimes: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Customer', customerSchema);