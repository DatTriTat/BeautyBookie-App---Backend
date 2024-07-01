const Customer = require("../models/Customer");

const customerMutation = {
    Mutation: {
        addCustomer: async (_, {
            phoneNumber, customerName, birthday, serviceTimes
        }) => {
            const existingCustomer = Customer.findOne({ phoneNumber });
            console.log(existingCustomer);
            if (existingCustomer) {
                const newCustomer = new Customer({
                    phoneNumber,
                    customerName,
                    birthday,
                    serviceTimes
                });
                await newCustomer.save();
                return newCustomer;
            }
            return null;
        },

        updateCustomer: async (_, {
            _id, phoneNumber, customerName, birthday, serviceTimes
        }) => {
            const existingCustomer = Customer.findOne({ phoneNumber });
            if (existingCustomer) {
                if (phoneNumber !== undefined) existingCustomer.phoneNumber = phoneNumber;
                if (customerName !== undefined) existingCustomer.customerName = customerName;
                if (birthday !== undefined) existingCustomer.birthday = birthday;
                if (serviceTimes !== undefined) existingCustomer.serviceTimes = serviceTimes;
                await existingCustomer.save();
                return existingCustomer;
            }
            throw new Error('Customer not found');
        },

        deleteCustomer: async (_, {_id}) => {
            const customer = await Customer.findOne({_id});
            if (customer) {
                await customer.deleteOne({_id});
                return 'Customer deleted';
            }
            throw new Error('Customer not found');
        }
    }
};

module.exports = customerMutation;