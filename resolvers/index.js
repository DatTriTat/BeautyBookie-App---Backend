const appointmentQuery = require('./AppointmentQuery');
const appointmentMutation = require('./AppointmentMutation');

module.exports = {
    ...appointmentQuery,
    ...appointmentMutation
};