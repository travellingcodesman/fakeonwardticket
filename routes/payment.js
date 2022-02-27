const express = require('express')
const router = express.Router()
const Trip = require('../models/trip')
const randbookrefer = require('../public/javascript/randbookrefer')


//Payment page
router.get('/', (req, res) => {
    res.render('payment/index')
})

router.post('/', async (req, res) => {
    randombooking = randbookrefer()
    const trip = new Trip({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            gender: req.body.gender,
            departdate: req.body.departdate,
            bookingdate: new Date(),
            email: req.body.email,
            departurecode: req.body.departurecode,
            arrivalcode: req.body.arrivalcode,
            departurecity: req.body.departurecity,
            arrivalcity: req.body.arrivalcity,
            departtime: req.body.departtime,
            arrivetime: req.body.arrivetime,
            flightnumber: req.body.flightnumber,
            price: req.body.price,
            bookingnumber: Math.floor(Math.random() * 100000000000),
            airlinereference: randombooking
        })

        try {
            const newTrip = await trip.save()
            res.render('payment/index')
                
        } catch {
            res.render('index', {
                    errorMessage: 'Unsuccessful'
                })
            }
})

module.exports = router