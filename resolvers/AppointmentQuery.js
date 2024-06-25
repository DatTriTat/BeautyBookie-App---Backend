const Appointment = require('../models/Appointment');

const appointmentQuery = {
    Query: {
        getAppointment: async (_, {_id}) => {
            return Appointment.findOne({_id});
        },
        getAppointments: async () => {
            return Appointment.find();
        }
    }

};

module.exports = appointmentQuery;