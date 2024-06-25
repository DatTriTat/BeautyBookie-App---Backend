const Service = require('../models/Service');

const serviceMutation = {
    Mutation: {
        addService: async (_, {
            name, serviceType, price, duration, date
        }) => {
            const service = new Service({
                name,
                serviceType,
                price,
                duration,
                date
            })
            await service.save();
            return service;
        },

        updateService: async (_, {
            _id, name, serviceType, price, duration, date
        }) => {
            const service = await Service.findOne({_id});
            if (service) {
                if (name !== undefined) service.name = name;
                if (serviceType !== undefined) service.serviceType = serviceType;
                if (price !== undefined) service.price = price;
                if (duration !== undefined) service.duration = duration;
                if (date !== undefined) service.date = date;

                await service.save();
                return service;
            }
            throw new Error('Service not found');
        },
        deleteService: async (_, {_id}) => {
            const service = Service.findOne({_id});
            if (service) {
                await Service.deleteOne({_id});
                return 'Service deleted';
            }
            throw new Error('Service not found');
        }
    }

};

module.exports = serviceMutation;