const Service = require('../models/Service');

const serviceQuery = {
    Query: {
        getService: async (_, {id}) => {
            return Service.findOne({id});
        },
        getServices: async () => {
            return Service.find();
        }
    }

};

module.exports = serviceQuery;