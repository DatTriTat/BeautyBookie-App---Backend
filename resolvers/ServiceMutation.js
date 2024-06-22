const Service = require('../models/Service');

const serviceMutation = {
    Mutation: {
        addService: async (_, {
            name, serviceType, price, duration, date
        }) => {
            const maxService = await Service.findOne().sort('-serviceId').exec();
            const serviceId = maxService ? maxService.serviceId + 1 : 1;
            const service = new Service({
                serviceId,
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
            id, name, serviceType, price, duration, date
        }) => {
            const service = await Service.findOne({id});
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
        deleteService: async (_, {id}) => {
            const service = Service.findOne({id});
            if (service) {
                await Service.deleteOne({id});
                return 'Service deleted';
            }
            throw new Error('Service not found');
        }
    }

};

module.exports = serviceMutation;