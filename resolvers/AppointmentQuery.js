const Appointment = require('../models/Appointment');

const appointmentQuery = {
    Query: {
        getAppointment: async (_, {appointmentId}) => {
            return Appointment.findOne({appointmentId});
        },
        getAppointments: async () => {
            return Appointment.find();
        }
    }

};

module.exports = appointmentQuery;