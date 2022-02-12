const mongoose = require('mongoose')

const airportSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 3
    }
})

module.exports = mongoose.model('airport', airportSchema)