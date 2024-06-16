const Appointment = require('../models/Appointment');

const appointmentQuery = {
    getAppointment: async ({appointmentId}) => {
        return Appointment.findOne({appointmentId});
    },
    getAppointments: async () => {
        return Appointment.find();
    }
};

module.exports = appointmentQuery;