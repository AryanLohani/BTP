const mongoose = require('mongoose');

const motorSchema = new mongoose.Schema({
    motorName: {
        type: String,
        required: true,
    },
    motorId: {
        type: String,
        required: true,
    },
    geoLocation: {
        type: String,
        required: true,
    },
    power: {
        type: String,
        required: true,
    },
    voltage: {
        type: String,
        required: true,
    },
    current: {
        type: String,
        required: true,
    },
    installmentDate: {
        type: String,
        required: true,
    },
    emergencyContact: {
        type: String,
        required: true,
    }
})
module.exports = mongoose.model('Motor', motorSchema);
