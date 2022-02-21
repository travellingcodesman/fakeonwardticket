const express = require('express')
const router = express.Router()
const { query } = require('express')
const trip = require('../models/trip')

// Passenger Form
router.get('/', (req, res) => {
    res.render('passenger/index', { query: req.query, trip: new trip() })
})

router.post('/', async (req, res) => {
    const trip = new trip({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        gender: req.body.gender,
        email: req.body.email,
        departurecode: query.departurecode,
        arrivalcode: query.arrivalcode,
    
    })
    try {
        const newTrip = await trip.save()
        res.render('payment/index')
    } catch {
        res.render('/', {
            errorMessage: 'Unsuccessful'
        })
    }
})


module.exports = router