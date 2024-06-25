const {gql} = require('apollo-server-express');

const serviceTypeDef = gql`
    type Service {
        _id: String!
        name: String!
        serviceType: String!
        price: Float!
        duration: Int!
        date: String!
    }
    
    type Query {
        getService(_id: String!): Service
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
            _id: String!
            name: String!
            serviceType: String!
            price: Float!
            duration: Int!
            date: String!
        ): Service
        deleteService(
            _id: String!
        ): String
    }
`;

module.exports = serviceTypeDef;