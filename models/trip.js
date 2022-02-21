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
    }
    //  departurecity: {
    //     type: String,
    //     required: true
    // },
    // departdate: {
    //     type: Date,
    //     required: true
    
    // }
})

module.exports = mongoose.model('trip', tripSchema)