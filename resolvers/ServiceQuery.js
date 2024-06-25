const Service = require('../models/Service');

const serviceQuery = {
    Query: {
        getService: async (_, {_id}) => {
            return Service.findOne({_id});
        },
        getServices: async () => {
            return Service.find();
        }
    }

};

module.exports = serviceQuery;