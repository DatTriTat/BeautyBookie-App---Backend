const appointmentQuery = require('./AppointmentQuery');
const appointmentMutation = require('./AppointmentMutation');
const serviceQuery = require('./ServiceQuery');
const serviceMutation = require('./ServiceMutation');
const { mergeResolvers } = require('@graphql-tools/merge');

const resolvers = mergeResolvers([appointmentQuery, appointmentMutation, serviceQuery
, serviceMutation]);

module.exports = resolvers;