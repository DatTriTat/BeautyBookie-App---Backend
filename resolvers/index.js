const appointmentQuery = require('./AppointmentQuery');
const appointmentMutation = require('./AppointmentMutation');
const serviceQuery = require('./serviceQuery');
const serviceMutation = require('./ServiceMutation');

const resolvers = {
    Query: appointmentQuery, serviceQuery,
    Mutation: appointmentMutation, serviceMutation
};

module.exports = resolvers;