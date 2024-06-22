const Appointment = require('../models/Appointment');

const appointmentMutation = {
    Mutation: {
        addAppointment: async (_, {
            time, status, notes, serviceId,
            employeeId, customerId, locationId
        }) => {
            const maxAppointment = await Appointment.findOne().sort('-id').exec();
            const id = maxAppointment ? maxAppointment.id + 1 : 1;
            const appointment = new Appointment({
                id,
                time,
                status,
                notes,
                serviceId,
                employeeId,
                customerId,
                locationId
            });
            await appointment.save();
            return appointment;
        },

        updateAppointment: async (_, {
            time, status, notes, serviceId,
            employeeId, customerId, locationId
        }) => {
            const appointment = await Appointment.findOne({id});
            if (appointment) {
                if (time !== undefined) appointment.time = time;
                if (status !== undefined) appointment.status = status;
                if (notes !== undefined) appointment.notes = notes;
                if (serviceId !== undefined) appointment.serviceId = serviceId;
                if (employeeId !== undefined) appointment.employeeId = employeeId;
                if (customerId !== undefined) appointment.customerId = customerId;
                if (locationId !== undefined) appointment.locationId = locationId;
                await appointment.save();
                return appointment;
            }
            throw new Error('Appointment not found');
        },

        deleteAppointment: async (_, {id}) => {
            const appointment = await Appointment.findOne({id});
            if (appointment) {
                await Appointment.deleteOne({id});
                return 'Appointment deleted';
            }
            throw new Error('Appointment not found')
        }
    }

};

module.exports = appointmentMutation;