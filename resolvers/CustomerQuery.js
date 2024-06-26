const Customer = require('../models/Customer');

const CustomerQuery = {
    Query: {
        getCustomers: async () => {
            return Customer.find();
        },
        getCustomer: async (_, { _id }) => {
            return Customer.findOne({_id});
        }
    }
};

module.exports = CustomerQuery;