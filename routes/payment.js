const { query } = require('express')
const express = require('express')
const router = express.Router()
const trip = require('../models/trip')


//Payment page
router.get('/', (req, res) => {
    res.render('payment/index')
})

router.post('/', async (req, res) => {
    const trip = new trip({
            firstname: query.body.firstname,
            lastname: query.body.lastname,
            gender: query.body.gender,
            departdate: query.body.departdate,
            bookingdate: new Date(),
            email: query.body.email,
            departurecode: query.body.departurecode,
            arrivalcode: query.body.arrivalcode,
            departurecity: query.body.departurecity,
            arrivalcity: query.body.arrivalcity,
            departime: query.body.departtime,
            arrivetime: query.body.arrivetime,
            flightnumber: query.body.flightnumber
    
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