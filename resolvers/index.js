const appointmentQuery = require('./AppointmentQuery');
const appointmentMutation = require('./AppointmentMutation');

const resolvers = {
    Query: appointmentQuery,
    Mutation: appointmentMutation
};

module.exports = resolvers;