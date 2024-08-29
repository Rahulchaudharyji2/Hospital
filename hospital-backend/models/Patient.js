const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    medicalHistory: [
        {
            condition: String,
            status: String,
        },
    ],
    appointments: [
        {
            date: Date,
            doctor: String,
            reason: String,
        },
    ],
});

module.exports = mongoose.model('Patient', PatientSchema);
