const Appointment = require('../models/Appointment');

const appointmentMutation = {
    createAppointment: async ({
                                  appointmentId, time, status, notes, serviceId,
                                  employeeId, customerId, locationId
                              }) => {
        const appointment = new Appointment({
            appointmentId, time, status, notes, serviceId,
            employeeId, customerId, locationId
        });
        await appointment.save();
        return appointment;
    },

    updateAppointment: async ({
                                  appointmentId, time, status, notes, serviceId,
                                  employeeId, customerId, locationId
                              }) => {
        const appointment = await Appointment.findOne({appointmentId});
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

    deleteAppointment: async ({appointmentId}) => {
        const appointment = await Appointment.findOne({appointmentId});
        if (appointment) {
            await Appointment.deleteOne({appointmentId});
            return 'Appointment deleted';
        }
        throw new Error('Appointment not found')
    }
};

module.exports = appointmentMutation;