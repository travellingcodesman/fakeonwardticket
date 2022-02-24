const mongoose = require('mongoose')

const tripSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    departdate: {
        type: Date,
        required: true    
    },
    bookingdate: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    departurecode: {
        type: String,
        minlength: 3,
        maxlength: 3,
        required: true
    },
    arrivalcode: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 3
    },
    departurecity: {
        type: String,
        required: true
    },
    arrivalcity: {
        type: String,
        required: true
    },
    departtime: {
        type: Date,
        required: true
    },
    arrivetime: {
        type: Date,
        required: true 
    },
    flightnumber: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('trip', tripSchema)