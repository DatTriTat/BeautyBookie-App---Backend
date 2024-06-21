const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    serviceId: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    serviceType: {
        type: String,
        required: true,
    },
    price: {
        // Float
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    }
})

module.exports = mongoose.model('Service', serviceSchema);