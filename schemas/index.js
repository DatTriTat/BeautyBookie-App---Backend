const { mergeTypeDefs } = require('@graphql-tools/merge');
const appointmentTypeDef = require('./AppointmentSchema');
const serviceTypeDef = require('./ServiceSchema');

const typeDefs = mergeTypeDefs([appointmentTypeDef, serviceTypeDef]);

module.exports = typeDefs;