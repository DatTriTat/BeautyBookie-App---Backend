const { mergeTypeDefs } = require('@graphql-tools/merge');
const appointmentTypeDef = require('./AppointmentSchema');
const serviceTypeDef = require('./ServiceSchema');
const customerTypeDef = require('./CustomerSchema');

const typeDefs = mergeTypeDefs([appointmentTypeDef, serviceTypeDef, customerTypeDef]);

module.exports = typeDefs;