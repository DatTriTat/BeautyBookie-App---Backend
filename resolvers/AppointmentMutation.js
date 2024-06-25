const Appointment = require('../models/Appointment');

const appointmentMutation = {
    Mutation: {
        addAppointment: async (_, {
            time, status, notes, serviceId,
            employeeId, customerId, locationId
        }) => {
            const newAppointmentDate = new Date(time);

            // Find all appointments for the same customer on the same date
            const startOfDay = new Date(newAppointmentDate);
            startOfDay.setHours(0,0,0,0);

            const endOfDay = new Date(newAppointmentDate);
            endOfDay.setHours(23,59,59,999);

            const existingAppointments = await Appointment.find({
                customerId: customerId,
                time: { $gte: startOfDay, $lte: endOfDay }
            });

            // Check of there is any existing appointment that should be canceled
            for ( const existingAppointment of existingAppointments ) {
                if (newAppointmentDate > new Date(existingAppointment.time)) {
                    existingAppointment.status = "cancelled";
                    await existingAppointment.save();
                }
            }

            const appointment = new Appointment({
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

        updateAppointment: async (_, { _id,
            time, status, notes, serviceId,
            employeeId, customerId, locationId
        }) => {
            const appointment = await Appointment.findOne({_id});
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

        deleteAppointment: async (_, {_id}) => {
            const appointment = await Appointment.findOne({_id});
            if (appointment) {
                await Appointment.deleteOne({_id});
                return 'Appointment deleted';
            }
            throw new Error('Appointment not found')
        }
    }

};

module.exports = appointmentMutation;