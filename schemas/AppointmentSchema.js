const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type Appointment {
        appointmentId: Int!
        time: String!
        status: String!
        notes: String
        serviceId: String!
        employeeId: String!
        customerId: String!
        locationId: String!
    }

    type Query {
        getAppointment(appointmentId: Int!): Appointment
        getAppointments: [Appointment]
    }

    type Mutation {
        addAppointment(appointmentId: Int!, time: String!, status: String!, 
                       notes: String, serviceId: String, employeeId: String!, 
                       customerId: String!, locationId: String!): Appointment
        updateAppointment(appointmentId: Int!, time: String!, status: String!,
                          notes: String, serviceId: String, employeeId: String!, 
                          customerId: String!, locationId: String!): Appointment
        deleteAppointment(appointmentId: Int!): Appointment
    }            
`;

module.exports = typeDefs;