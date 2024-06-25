const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const Schema = mongoose.Schema;


const appointmentSchema = new Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    time: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'completed', 'cancelled'],
        required: true
    },
    notes: {
        type: String
    },
    serviceId: {
        type: String,
        required: true
    },
    employeeId: {
        type: String,
        required: true
    },
    customerId: {
        type: String,
        required: true
    },
    locationId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Appointment', appointmentSchema);