const {gql} = require('apollo-server-express');

const appointmentTypeDef = gql`
    type Appointment {
        _id: String!
        time: String!
        status: String!
        notes: String
        serviceId: String!
        employeeId: String!
        customerId: String!
        locationId: String!
    }

    type Query {
        getAppointment(_id: String!): Appointment
        getAppointments: [Appointment]
    }

    type Mutation {
        addAppointment(
                time: String! 
                status: String! 
                notes: String
                serviceId: String
                employeeId: String!
                phoneNumber: String!
                customerName: String!
                birthday: String
                locationId: String!
        ): Appointment
        updateAppointment(
                _id: String!
                time: String!
                status: String!
                notes: String
                serviceId: String
                employeeId: String!
                customerId: String!
                locationId: String!
        ): Appointment
        deleteAppointment(
                _id: String!
        ): String
    }            
`;

module.exports = appointmentTypeDef;