const appointmentQuery = require('./AppointmentQuery');
const appointmentMutation = require('./AppointmentMutation');
const serviceQuery = require('./ServiceQuery');
const serviceMutation = require('./ServiceMutation');
const customerQuery = require('./CustomerQuery');
const customerMutation = require('./CustomerMutation');
const { mergeResolvers } = require('@graphql-tools/merge');

const resolvers = mergeResolvers([
    appointmentQuery,
    appointmentMutation,
    serviceQuery,
    serviceMutation,
    customerQuery,
    customerMutation
]);

module.exports = resolvers;