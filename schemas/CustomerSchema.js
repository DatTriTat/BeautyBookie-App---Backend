const {gql} = require('apollo-server-express');

const customerTypeDef = gql`
    type Customer {
        _id: String!
        phoneNumber: String!
        customerName: String!
        birthday: String
        serviceTimes: Int!
    }
    
    type Query {
        getCustomers: [Customer]
        getCustomer(_id: String!): Customer
    }
    
    type Mutation {
        addCustomer(
            phoneNumber: String!
            customerName: String!
            birthday: String
            serviceTimes: Int!
        ): Customer
        updateCustomer(
            _id: String!
            phoneNumber: String!
            customerName: String!
            birthday: String
            serviceTimes: Int!
        ): Customer
        deleteCustomer(_id: String!): Customer
    }
`;

module.exports = customerTypeDef;