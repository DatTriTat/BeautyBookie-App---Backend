const {gql} = require('apollo-server-express');

const serviceTypeDef = gql`
    type Service {
        id: Int!
        name: String!
        serviceType: String!
        price: Float!
        duration: Int!
        date: String!
    }
    
    type Query {
        getService(id: Int!): Service
        getServices: [Service]
    }
    
    type Mutation {
        addService(
            name: String!
            serviceType: String!
            price: Float!
            duration: Int!
            date: String!
        ): Service
        updateService(
            id: Int!
            name: String!
            serviceType: String!
            price: Float!
            duration: Int!
            date: String!
        ): Service
        deleteService(
            id: Int!
        ): Service
    }
`;

module.exports = serviceTypeDef;